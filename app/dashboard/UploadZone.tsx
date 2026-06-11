"use client";

import { useState } from "react";

export default function UploadZone() {
  const [uploading, setUploading] = useState(false);
  const [pct, setPct] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"published" | "draft">("published");
  const [format, setFormat] = useState<"episode" | "movie" | "short">("episode");

  const simulateUpload = () => {
    setUploading(true);
    setPct(0);
    const iv = setInterval(() => {
      setPct((prev) => {
        const next = Math.min(100, Math.round(prev + Math.random() * 12));
        if (next >= 100) {
          clearInterval(iv);
          setUploading(false);
        }
        return next;
      });
    }, 120);
  };

  const estimatedEarnings = () => {
    if (format === "movie") return 180;
    if (format === "short") return 24;
    return 92;
  };

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("Please enter a title for your video.");
      return;
    }
    simulateUpload();
  };

  return (
    <div style={{ display: "grid", gap: 14 }}>
      <div className="upload-zone" onClick={simulateUpload}>
        <div className="upload-icon">☁️</div>
        <div className="upload-title">Drag & drop your video file</div>
        <div className="upload-sub">MP4, MOV, MKV, WebM — up to 50GB</div>
        <button className="btn-primary" style={{ margin: 0, pointerEvents: "none", fontSize: 13, padding: "10px 20px" }}>
          Upload file
        </button>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Video title"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Format</label>
          <select className="form-select" value={format} onChange={(e) => setFormat(e.target.value as "episode" | "movie" | "short")}> 
            <option value="episode">Episode</option>
            <option value="movie">Movie</option>
            <option value="short">Short</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Status</label>
          <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value as "published" | "draft")}> 
            <option value="published">Publish</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        <div className="form-group full">
          <label className="form-label">Description</label>
          <textarea
            className="form-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a short summary of your video"
          />
        </div>
      </div>

      <div className="upload-actions">
        <button className="plan-btn primary" onClick={handleSubmit} disabled={uploading}>
          {uploading ? "Uploading..." : status === "published" ? "Publish video" : "Save draft"}
        </button>
      </div>

      <div style={{ color: "var(--text2)", fontSize: 13, marginTop: 10 }}>
        Estimated creator earnings for this {format}: ${estimatedEarnings()} per 1K views.
      </div>

      {uploading && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text2)", marginBottom: 4 }}>
            <span>Uploading {title || "video"}...</span>
            <span>{pct}%</span>
          </div>
          <div className="progress-bar-wrap"><div className="progress-bar" style={{ width: `${pct}%` }} /></div>
        </div>
      )}
    </div>
  );
}
