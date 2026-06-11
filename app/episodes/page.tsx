import Link from "next/link";

export default function EpisodesPage() {
  return (
    <main className="page active" style={{ minHeight: "calc(100vh - 54px)", padding: "48px 24px" }}>
      <div className="plan" style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="plan-pop">Episodic AI</div>
        <h1 className="plan-name">AI-powered series and episode collections.</h1>
        <p className="plan-desc">Stream serialized stories, follow season releases, and keep audiences returning for the next episode.</p>

        <div className="grid" style={{ marginTop: 24 }}>
          <article className="card">
            <div className="card-poster">📺</div>
            <div className="card-info">
              <div className="card-title">Neo Drama Season 1</div>
              <div className="card-meta">AI episodic sci-fi with weekly drops and cliffhangers.</div>
            </div>
          </article>
          <article className="card">
            <div className="card-poster">🧠</div>
            <div className="card-info">
              <div className="card-title">Creator Journey</div>
              <div className="card-meta">Behind-the-scenes episodes for creator fans and supporters.</div>
            </div>
          </article>
          <article className="card">
            <div className="card-poster">🌍</div>
            <div className="card-info">
              <div className="card-title">World Builder Tales</div>
              <div className="card-meta">AI story arcs across fantasy, action, and drama.</div>
            </div>
          </article>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
          <Link href="/player" className="btn-ghost">Back to watch hub</Link>
          <Link href="/dashboard" className="btn-primary">Create episodic series</Link>
        </div>
      </div>
    </main>
  );
}
