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
                <p className="footer-note">The AI-powered streaming platform where creators build premium audiences and fans discover premium content.</p>
              </div>
              <div className="footer-col">
                <div className="footer-title">For viewers</div>
                <Link href="/player" className="footer-link">Browse content</Link>
                <Link href="/episodes" className="footer-link">Episodes</Link>
                <Link href="/shorts" className="footer-link">Shorts</Link>
                <Link href="/profile" className="footer-link">My profile</Link>
              </div>
              <div className="footer-col">
                <div className="footer-title">For creators</div>
                <Link href="/dashboard" className="footer-link">Creator dashboard</Link>
                <Link href="/pricing" className="footer-link">Creator plans</Link>
                <Link href="/" className="footer-link">Creator tools</Link>
                <a href="mailto:creators@streamvibe.ai" className="footer-link">Creator support</a>
              </div>
              <div className="footer-col">
                <div className="footer-title">Company</div>
                <Link href="/" className="footer-link">About</Link>
                <Link href="/pricing" className="footer-link">Pricing</Link>
                <a href="mailto:hello@streamvibe.ai" className="footer-link">Contact</a>
                <a href="#" className="footer-link">Privacy policy</a>
              </div>
            </div>
            <div className="footer-bottom">© 2026 StreamVibe. Create, watch, and earn with AI video content.</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
