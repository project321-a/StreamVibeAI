"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <main className="page active" style={{ minHeight: "calc(100vh - 54px)", padding: "48px 24px" }}>
      <div className="plan" style={{ maxWidth: 440, margin: "0 auto" }}>
        <h1 className="plan-name">Welcome back</h1>
        <p className="plan-desc">Log in and manage your uploads, analytics, and channel from one dashboard.</p>

        <div className="form-group full">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group full">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="plan-btn primary" onClick={handleLogin} disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
        <p style={{ marginTop: 18, color: "var(--text2)", fontSize: 13 }}>
          New here? <Link href="/signup" className="sec-link">Create account</Link>
        </p>
      </div>
    </main>
  );
}
