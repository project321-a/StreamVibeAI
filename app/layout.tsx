import "./globals.css";
import Link from "next/link";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import AuthWidget from "./components/AuthWidget";
import TopNav from "./components/TopNav";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"], display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });
const jetBrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClass = [syne.className, dmSans.className, jetBrains.className].join(" ");

  return (
    <html lang="en">
      <body className={bodyClass}>
        <div className="app">
          <header className="top-bar">
            <Link href="/" className="logo">
              Stream<span>Vibe</span>
            </Link>
            <TopNav />
            <div className="top-actions">
              <AuthWidget />
            </div>
          </header>

          <main className="page-shell">{children}</main>

          <footer className="site-footer">
            <div className="footer-grid">
              <div className="footer-col">
                <div className="logo footer-logo">Stream<span>Vibe</span></div>
                <p className="footer-note">StreamVibe is the AI-powered streaming platform for episodes, movies, shorts, and creator monetisation.</p>
              </div>
              <div className="footer-col">
                <div className="footer-title">Product</div>
                <Link href="/" className="footer-link">Home</Link>
                <Link href="/player" className="footer-link">Watch</Link>
                <Link href="/pricing" className="footer-link">Pricing</Link>
                <Link href="/dashboard" className="footer-link">Creator dashboard</Link>
              </div>
              <div className="footer-col">
                <div className="footer-title">Support</div>
                <Link href="/signup" className="footer-link">Create account</Link>
                <Link href="/login" className="footer-link">Login</Link>
                <a href="mailto:hello@streamvibe.ai" className="footer-link">Contact</a>
              </div>
              <div className="footer-col">
                <div className="footer-title">Monetisation</div>
                <p className="footer-link">Ads, subscriptions, views, and creator payments.</p>
                <p className="footer-link">Episodes, movies, and shorts.</p>
                <p className="footer-link">AI-powered streaming experiences.</p>
              </div>
            </div>
            <div className="footer-bottom">© 2026 StreamVibe. Create, watch, and earn with AI video content.</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
