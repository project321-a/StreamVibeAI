"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AuthWidget() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    setLoading(true);
    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        window.location.reload();
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert("Check your email to confirm the account");
        setOpen(false);
      }
    } catch (err: unknown) {
      const e = err as { message?: string };
      alert(e.message || String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <button className="badge-btn outline" onClick={() => { setMode("login"); setOpen(true); }}>
        Log in
      </button>
      <button className="badge-btn fill" onClick={() => { setMode("signup"); setOpen(true); }}>
        Sign up
      </button>

      <div className={open ? "modal-bg open" : "modal-bg"} style={{ zIndex: 400 }}>
        <div className="modal">
          <button className="modal-close" onClick={() => setOpen(false)}>×</button>
          <h2>{mode === "login" ? "Log in" : "Create account"}</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <input
              className="form-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <input
              className="form-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <button className="modal-submit" onClick={handleAuth} disabled={loading}>
              {loading ? "..." : mode === "login" ? "Log in →" : "Create account →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
