"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [profile, setProfile] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [apiData, setApiData] = useState<any>(null);

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
    };

    load();
  }, [router]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      <h1>Dashboard</h1>

      {/* USER CARD */}
      <div style={cardStyle}>
        <h3>👤 Account</h3>
        <p><b>Email:</b> {user?.email}</p>
        <p><b>User ID:</b> {user?.id}</p>
      </div>

      {/* PROFILE CARD */}
      <div style={cardStyle}>
        <h3>📄 Profile</h3>
        <p><b>Username:</b> {profile?.username || "Not set"}</p>
        <p><b>Bio:</b> {profile?.bio || "No bio yet"}</p>

        <button
          onClick={() => router.push("/profile")}
          style={buttonStyle}
        >
          Edit Profile
        </button>

        <div style={{ marginTop: 10 }}>
          <button
            onClick={async () => {
              const { data: sessionData } = await supabase.auth.getSession();
              const token = sessionData.session?.access_token;
              if (!token) {
                alert("Not authenticated");
                return;
              }

              const res = await fetch('/api/profile', {
                headers: { Authorization: `Bearer ${token}` },
              });

              const json = await res.json();
              setApiData(json);
            }}
            style={{ ...buttonStyle, marginLeft: 10 }}
          >
            Fetch Via Backend API
          </button>

          {apiData && (
            <pre style={{ marginTop: 10, whiteSpace: 'pre-wrap' }}>{JSON.stringify(apiData, null, 2)}</pre>
          )}
        </div>
      </div>

    </div>
  );
}

const cardStyle = {
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "10px 15px",
  cursor: "pointer",
};