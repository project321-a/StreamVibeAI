"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import UserMenu from "./UserMenu";

export default function AuthArea() {
  const [user, setUser] = useState<{ id?: string; email?: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      if (!supabase) {
        setLoading(false);
        return;
      }
      const { data } = await supabase.auth.getUser();
      if (!mounted) return;
      setUser(data.user || null);
      setLoading(false);
      supabase.auth.onAuthStateChange(() => {
        window.location.reload();
      });
    };
    load();
    return () => { mounted = false; };
  }, []);

  if (loading) return <div style={{ color: 'var(--text2)' }}>...</div>;
  if (!user) return null;

  return <UserMenu user={user} />;
}
