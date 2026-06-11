import "./globals.css";
import Link from "next/link";
import React from "react";
import AuthWidget from "./components/AuthWidget";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          
          <aside style={{ width: "220px", background: "#111", color: "#fff", padding: "20px" }}>
            <h2>SaaS App</h2>

            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link href="/dashboard" style={{ color: "#fff" }}>Dashboard</Link>
              <Link href="/profile" style={{ color: "#fff" }}>Profile</Link>
            </nav>
          </aside>

          <main style={{ flex: 1, padding: "20px" }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
              <AuthWidget />
            </div>
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}