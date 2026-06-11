"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import UploadZone from "./UploadZone";

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

      setUser({ id: data.user.id, email: data.user.email || undefined });

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

  const fetchBackendProfile = async () => {
    const { data: sessionData } = await supabase.auth.getSession();
    const token = sessionData.session?.access_token;

    if (!token) {
      alert("Not authenticated");
      return;
    }

    const res = await fetch("/api/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const json = await res.json();
    setApiData(json);
  };

  return (
    <div className="dev-layout">
      <aside className="dev-sidebar">
        <div className="dev-sidebar-section">Console</div>
        <button className="dev-nav-item active">Overview</button>
        <button className="dev-nav-item">Uploads</button>
        <button className="dev-nav-item">Profile</button>
        <button className="dev-nav-item">API</button>
      </aside>

      <div className="dev-main">
        <div className="dash-header">
          <div className="dash-title">Creator Studio</div>
          <div className="dash-sub">Your creator dashboard for AI episodes, movies, and shorts.</div>
        </div>

        <div className="metrics">
          <div className="metric">
            <div className="metric-lbl">Signed in as</div>
            <div className="metric-val">{user?.email ?? "—"}</div>
          </div>
          <div className="metric">
            <div className="metric-lbl">Estimated earnings</div>
            <div className="metric-val">${(videos.length * 85).toLocaleString()}</div>
            <div className="metric-delta delta-up">+{videos.length > 0 ? 8 + videos.length : 0}%</div>
          </div>
          <div className="metric">
            <div className="metric-lbl">Content uploaded</div>
            <div className="metric-val">{videos.length}</div>
          </div>
        </div>

        <div className="api-hero" style={{ marginBottom: 24 }}>
          <h2>Creator-only dashboard</h2>
          <p>Only creators can see earnings, format performance, and upload revenue breakdowns on this page.</p>
        </div>

        <div className="chart-wrap">
          <div className="chart-title">Creator dashboard</div>
          <div className="upload-actions" style={{ justifyContent: "flex-start" }}>
            <button className="plan-btn primary" onClick={() => router.push("/profile")}>Edit profile</button>
            <button className="plan-btn secondary" onClick={fetchBackendProfile}>Fetch backend</button>
          </div>
        </div>

        <div className="api-hero">
          <h2>Upload studio</h2>
          <p>Upload AI-powered videos as episodes, movies, or shorts, and track how every format contributes to your revenue.</p>
        </div>

        <UploadZone />

        <div className="chart-wrap">
          <div className="chart-title">Profile info</div>
          <div className="plan-desc">Username: {profile?.username || "Not set"} · Bio: {profile?.bio || "No bio yet"}</div>
        </div>

        <div className="chart-wrap">
          <div className="chart-title">Payout settings</div>
          <p className="plan-desc">Connect a payment method to receive subscriber and ad revenue payouts directly.</p>
          <div className="grid" style={{ gap: 14, marginTop: 14 }}>
            <article className="card">
              <div className="card-poster">💳</div>
              <div className="card-info">
                <div className="card-title">Stripe</div>
                <div className="card-meta">Connect Stripe to accept subscriptions and payout earnings.</div>
              </div>
            </article>
            <article className="card">
              <div className="card-poster">🅿️</div>
              <div className="card-info">
                <div className="card-title">PayPal</div>
                <div className="card-meta">Receive creator revenue via popular wallet payments.</div>
              </div>
            </article>
          </div>
        </div>

        <div className="chart-wrap">
          <div className="chart-title">API console</div>
          {apiData ? (
            <pre className="code-block">{JSON.stringify(apiData, null, 2)}</pre>
          ) : (
            <p className="plan-desc">Click the button to load server-side profile data from the API.</p>
          )}
        </div>

        <div className="chart-wrap">
          <div className="chart-title">Recent uploads</div>
          <table className="videos-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Year</th>
                <th>Status</th>
                <th>Earnings</th>
              </tr>
            </thead>
            <tbody>
              {videos.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ padding: 16 }}>No uploads yet. Create your first video above.</td>
                </tr>
              ) : (
                videos.map((video) => (
                  <tr key={video.id}>
                    <td>{video.title}</td>
                    <td>{video.genre}</td>
                    <td>{video.year}</td>
                    <td>
                      <span className={`status-badge ${video.status === "published" ? "s-live" : video.status === "processing" ? "s-proc" : "s-draft"}`}>
                        {video.status}
                      </span>
                    </td>
                    <td>${video.status === "published" ? 120 : video.status === "processing" ? 25 : 0}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 24, color: "var(--text2)", fontSize: 14, lineHeight: 1.8 }}>
          <p><strong>Creator earnings are visible here for your personal dashboard:</strong> ad revenue, subscriber income, and watch-time payouts are tracked for every upload.</p>
          <p><strong>Platform identity:</strong> StreamVibe blends short-form clips, episodic series, and movie premieres into a single AI-powered streaming platform.</p>
        </div>
      </div>
    </div>
  );
}
