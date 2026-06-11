"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Signup successful! Check your email to confirm your account.");
    router.push("/login");
  };

  return (
    <main className="page active" style={{ minHeight: "calc(100vh - 54px)", padding: "48px 24px" }}>
      <div className="plan" style={{ maxWidth: 440, margin: "0 auto" }}>
        <div className="plan-pop">Get started</div>
        <h1 className="plan-name">Create your account</h1>
        <p className="plan-desc">Sign up to upload videos, manage your channel, and use StreamVibe creator tools.</p>

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

        <button className="plan-btn primary" onClick={handleSignup} disabled={loading}>
          {loading ? "Creating account..." : "Sign up"}
        </button>
        <p style={{ marginTop: 18, color: "var(--text2)", fontSize: 13 }}>
          Already have an account? <Link href="/login" className="sec-link">Log in</Link>
        </p>
      </div>
    </main>
  );
}
