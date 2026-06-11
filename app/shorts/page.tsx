import Link from "next/link";

export default function ShortsPage() {
  return (
    <main className="page active" style={{ minHeight: "calc(100vh - 54px)", padding: "48px 24px" }}>
      <div className="plan" style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="plan-pop">Short clips</div>
        <h1 className="plan-name">Fast AI shorts for instant discovery.</h1>
        <p className="plan-desc">Browse quick AI-created clips, trailers, and viral moments optimized for rapid views and engagement.</p>

        <div className="grid" style={{ marginTop: 24 }}>
          <article className="card">
            <div className="card-poster">⚡</div>
            <div className="card-info">
              <div className="card-title">AI Quick Beat</div>
              <div className="card-meta">Short-form highlights and creator teasers for quick engagement.</div>
            </div>
          </article>
          <article className="card">
            <div className="card-poster">🔥</div>
            <div className="card-info">
              <div className="card-title">StreamVibe Flash</div>
              <div className="card-meta">Short AI moments designed to spark views and subscription interest.</div>
            </div>
          </article>
          <article className="card">
            <div className="card-poster">🎬</div>
            <div className="card-info">
              <div className="card-title">Creator microcuts</div>
              <div className="card-meta">Bite-sized stories and preview clips from larger AI projects.</div>
            </div>
          </article>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <Link href="/player" className="btn-ghost">Back to watch hub</Link>
          <Link href="/dashboard" className="btn-primary">Upload a short</Link>
        </div>
      </div>
    </main>
  );
}
