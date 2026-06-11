import Link from "next/link";

export default function PlayerPage() {
  return (
    <main className="page active" style={{ minHeight: "calc(100vh - 54px)", padding: "48px 24px" }}>
      <div className="plan" style={{ maxWidth: 980, margin: "0 auto" }}>
        <div className="plan-pop">Watch hub</div>
        <h1 className="plan-name">StreamVibe is the AI streaming platform for movies, episodes, and shorts.</h1>
        <p className="plan-desc">Browse ad-supported videos, catch premium premieres, and discover creator channels with episodic AI content.</p>

        <div className="api-hero">
          <h2>One experience for every format</h2>
          <p>Free viewers watch with ads, subscribers unlock comments and premium access, and creators earn from every view.</p>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card-poster">📽️</div>
            <div className="card-info">
              <div className="card-title">Movie premieres</div>
              <div className="card-meta">AI movie releases with ad support and subscription perks.</div>
            </div>
          </div>
          <div className="card">
            <div className="card-poster">📺</div>
            <div className="card-info">
              <div className="card-title">Episode series</div>
              <div className="card-meta">Season-based storytelling for creators and fans.</div>
            </div>
          </div>
          <div className="card">
            <div className="card-poster">🎬</div>
            <div className="card-info">
              <div className="card-title">Short clips</div>
              <div className="card-meta">Bite-sized AI videos for fast discovery and engagement.</div>
            </div>
          </div>
        </div>

        <section className="sec" style={{ padding: 0, marginTop: 32 }}>
          <div className="sec-hd">
            <h2 className="sec-title">Browse by format</h2>
            <span className="sec-link">Movie, episode, or short</span>
          </div>

          <div className="feature-row">
            <div className="feature-card">
              <strong>Episodes</strong>
              <p>Follow AI series and discover episode drops across genres.</p>
              <Link href="/episodes" className="btn-ghost">Browse episodes</Link>
            </div>
            <div className="feature-card">
              <strong>Movies</strong>
              <p>Watch premium AI films and premiere releases with ad / subscription options.</p>
              <Link href="/movies" className="btn-ghost">Browse movies</Link>
            </div>
            <div className="feature-card">
              <strong>Shorts</strong>
              <p>Catch viral quick clips and creator micro-content in seconds.</p>
              <Link href="/shorts" className="btn-ghost">Browse shorts</Link>
            </div>
          </div>
        </section>

        <div style={{ color: "var(--text2)", marginTop: 24, fontSize: 14, lineHeight: 1.8 }}>
          <p><strong>Free viewers:</strong> get unlimited ad-supported access to AI content across movies, episodes, and shorts.</p>
          <p><strong>Subscribers:</strong> unlock premium commenting, creator community perks, and improved recommendations.</p>
          <p><strong>Creators:</strong> publish AI videos, earn from ads and views, and build a personal channel with real revenue stats.</p>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
          <Link href="/pricing" className="btn-ghost">See pricing</Link>
          <Link href="/dashboard" className="btn-primary">Go to creator dashboard</Link>
        </div>
      </div>
    </main>
  );
}
