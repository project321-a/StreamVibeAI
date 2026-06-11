"use client";

import { useState } from "react";

export default function UploadZone() {
  const [uploading, setUploading] = useState(false);
  const [pct, setPct] = useState(0);

  const simulateUpload = () => {
    setUploading(true);
    setPct(0);
    const iv = setInterval(() => {
      setPct((p) => {
        const n = Math.min(100, Math.round(p + Math.random() * 8));
        if (n >= 100) {
          clearInterval(iv);
          setUploading(false);
        }
        return n;
      });
    }, 120);
  };

  return (
    <div>
      <div className="upload-zone" onClick={simulateUpload}>
        <div className="upload-icon">☁️</div>
        <div className="upload-title">Drag & drop your video file</div>
        <div className="upload-sub">MP4, MOV, MKV, WebM — up to 50GB</div>
        <button className="btn-primary" style={{ margin: 0, pointerEvents: "none", fontSize: 13, padding: "10px 20px" }}>
          <i className="ti ti-upload"></i> Browse files
        </button>
      </div>

      {uploading && (
        <div id="uploadProgress" style={{ marginTop: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text2)", marginBottom: 4 }}>
            <span>Uploading...</span>
            <span id="uploadPct">{pct}%</span>
          </div>
          <div className="progress-bar-wrap"><div className="progress-bar" style={{ width: pct + "%" }}></div></div>
        </div>
      )}
    </div>
  );
}
