"use client";

import { supabase } from "@/lib/supabase";

export default function UserMenu({ user }: { user: { id?: string; email?: string } | null }) {
  const handleSignOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ color: "var(--text2)" }}>{user?.email}</div>
      <button className="badge-btn outline" onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
