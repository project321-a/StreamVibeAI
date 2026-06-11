"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Page() {
  const [session, setSession] = useState<{ user?: { email?: string } } | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!supabase) return;
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;
      setSession(data.session || null);
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 36, marginBottom: 16 }}>StreamVibe — Watch, upload, and manage your video platform.</h1>
      <p style={{ fontSize: 16, color: "var(--text2)", marginBottom: 24 }}>
        Use your Supabase account to sign in, upload assets, and manage your channel from the dashboard.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {!session?.user && (
          <>
            <Link href="/signup" className="btn-primary">Create account</Link>
            <Link href="/login" className="btn-ghost">Log in</Link>
          </>
        )}
        <Link href="/dashboard" className="btn-primary">Go to dashboard</Link>
      </div>
      {session?.user && (
        <div style={{ marginTop: 24, padding: 18, background: "var(--bg3)", borderRadius: 16 }}>
          <strong>Signed in as:</strong> {session.user.email}
        </div>
      )}
    </div>
  );
}
