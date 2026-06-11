"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

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

      setProfile(profileData);

      setUsername(profileData?.username || "");
      setBio(profileData?.bio || "");

      setLoading(false);
    };

    load();
  }, [router]);

  const saveProfile = async () => {
    const { error } = await supabase
      .from("profiles")
      .update({
        username,
        bio,
      })
      .eq("id", user.id);

    if (error) {
      alert(error.message);
    } else {
      alert("Profile updated!");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Profile Settings</h1>

      <p>Email: {user.email}</p>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />

      <br /><br />

      <button onClick={saveProfile}>
        Save Profile
      </button>

      <br /><br />

      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}