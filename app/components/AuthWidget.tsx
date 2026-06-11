"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function AuthWidget() {
  const [session, setSession] = useState<{ user?: { email?: string } } | null>(null);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    let subscription: { unsubscribe: () => void } | null = null;

    (async () => {
      const { data } = await supabase.auth.getSession();
      if (mounted) setSession(data.session || null);
      const { data: authData } = supabase.auth.onAuthStateChange((_, session) => {
        if (mounted) setSession(session || null);
      });
      subscription = authData.subscription;
    })();

    return () => {
      mounted = false;
      subscription?.unsubscribe();
    };
  }, []);

  const handleAuth = async () => {
    setLoading(true);
    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert("Check your email to confirm your account.");
      }
      setOpen(false);
      setEmail("");
      setPassword("");
    } catch (err: unknown) {
      const e = err as { message?: string };
      alert(e.message || String(err));
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {session?.user ? (
        <>
          <Link href="/dashboard" className="badge-btn fill">Dashboard</Link>
          <button className="badge-btn outline" onClick={handleSignOut}>Sign out</button>
        </>
      ) : (
        <>
          <button className="badge-btn outline" onClick={() => { setMode("login"); setOpen(true); }}>
            Log in
          </button>
          <button className="badge-btn fill" onClick={() => { setMode("signup"); setOpen(true); }}>
            Sign up
          </button>
        </>
      )}

      <div className={open ? "modal-bg open" : "modal-bg"} style={{ zIndex: 400 }}>
        <div className="modal">
          <button className="modal-close" onClick={() => setOpen(false)}>×</button>
          <h2>{mode === "login" ? "Log in" : "Create account"}</h2>
          <div className="modal-tabs">
            <button className={mode === "login" ? "ptab active" : "ptab"} onClick={() => setMode("login")}>Log in</button>
            <button className={mode === "signup" ? "ptab active" : "ptab"} onClick={() => setMode("signup")}>Sign up</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <input
              className="form-input"
              placeholder="you@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
