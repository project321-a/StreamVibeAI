"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<{ email?: string; id?: string } | null>(null);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
        return;
      }

      setUser(data.user);

      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", data.user.id)
        .single();

      setUsername(profileData?.username || "");
      setBio(profileData?.bio || "");
      setLoading(false);
    };

    load();
  }, [router]);

  const saveProfile = async () => {
    const { error } = await supabase
      .from("profiles")
      .update({ username, bio })
      .eq("id", user?.id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Profile updated!");
  };

  if (loading) {
    return <p style={{ padding: 24 }}>Loading...</p>;
  }

  return (
    <main className="page active" style={{ minHeight: "calc(100vh - 54px)", padding: "48px 24px" }}>
      <div className="plan" style={{ maxWidth: 720, margin: "0 auto" }}>
        <h1 className="plan-name">Profile settings</h1>
        <p className="plan-desc">Update your creator profile and channel details.</p>

        <div className="profile-content">
          <div className="form-group full">
            <label className="form-label">Email</label>
            <input className="form-input" value={user?.email || ""} readOnly />
          </div>

          <div className="form-group full">
            <label className="form-label">Username</label>
            <input
              className="form-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group full">
            <label className="form-label">Bio</label>
            <textarea
              className="form-input"
              placeholder="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <div className="upload-actions">
            <button className="plan-btn primary" onClick={saveProfile}>Save profile</button>
          </div>
        </div>
      </div>
    </main>
  );
}
