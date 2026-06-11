"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import UploadZone from "./UploadZone";
import { useRouter } from "next/navigation";

interface VideoRecord {
  id: string;
  title: string;
  genre: string;
  rating: string;
  year: string;
  status: string;
}

interface UserProfile {
  username?: string;
  bio?: string;
}

interface CurrentUser {
  id?: string;
  email?: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [apiData, setApiData] = useState<Record<string, unknown> | null>(null);
  const [videos, setVideos] = useState<VideoRecord[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
        return;
      }

      const currentUser: CurrentUser = {
        id: data.user.id,
        email: data.user.email || undefined,
      };
      setUser(currentUser);

      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", data.user.id)
        .single();

      setProfile(profileData as UserProfile | null);

      const { data: videoData } = await supabase
        .from("videos")
        .select("id, title, genre, rating, year, status")
        .eq("user_id", data.user.id)
        .order("created_at", { ascending: false });

      setVideos((videoData ?? []) as VideoRecord[]);
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
        <div style={{ marginTop: 16 }}>
          <h4>Upload</h4>
          <UploadZone />
        </div>
      </div>

      <div style={cardStyle}>
        <h3>My Videos</h3>
        {videos.length === 0 ? (
          <p>No videos uploaded yet. Use the upload form above to publish or save a draft.</p>
        ) : (
          <div style={{ display: 'grid', gap: 12 }}>
            {videos.map((video) => (
              <div key={video.id} style={{ padding: 14, borderRadius: 12, background: 'var(--bg3)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{video.title}</div>
                    <div style={{ color: 'var(--text2)', fontSize: 13 }}>{video.genre} · {video.rating} · {video.year}</div>
                  </div>
                  <span style={{ padding: '4px 10px', borderRadius: 999, background: 'rgba(255,255,255,.06)', color: 'var(--text2)', fontSize: 12 }}>
                    {video.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
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