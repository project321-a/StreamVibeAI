import Link from "next/link";

export default function MoviesPage() {
  return (
    <main className="page active" style={{ minHeight: "calc(100vh - 54px)", padding: "48px 24px" }}>
      <div className="plan" style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="plan-pop">Movie premiere</div>
        <h1 className="plan-name">AI movie releases for premium viewers.</h1>
        <p className="plan-desc">Stream cinematic AI films, premieres, and long-form content with ad-supported or subscription-backed viewing.</p>

        <div className="grid" style={{ marginTop: 24 }}>
          <article className="card">
            <div className="card-poster">🎥</div>
            <div className="card-info">
              <div className="card-title">Future Noir</div>
              <div className="card-meta">AI sci-fi movie with immersive world-building and premium premiere access.</div>
            </div>
          </article>
          <article className="card">
            <div className="card-poster">🎞️</div>
            <div className="card-info">
              <div className="card-title">Echoes of Tomorrow</div>
              <div className="card-meta">A dramatic AI film with subscription unlocks and watch parties.</div>
            </div>
          </article>
          <article className="card">
            <div className="card-poster">🍿</div>
            <div className="card-info">
              <div className="card-title">Visual Pulse</div>
              <div className="card-meta">Premium movie premiers designed for binge sessions and ad-free subscribers.</div>
            </div>
          </article>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <Link href="/player" className="btn-ghost">Back to watch hub</Link>
          <Link href="/pricing" className="btn-primary">Choose subscription</Link>
        </div>
      </div>
    </main>
  );
}
