import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="hero-inner">
          <span className="hero-pill">AI video platform for episodes, shorts, and movies</span>
          <h1>StreamVibe is YouTube + TikTok + Moviebox + Dailymotion for AI-powered video content.</h1>
          <p>
            Create and watch episodic AI series, premium movie premieres, and short-form clips with ads, subscriptions, and creator revenue built into one platform.
          </p>

          <div className="hero-cta">
            <Link href="/signup" className="btn-primary">Create account</Link>
            <Link href="/pricing" className="btn-ghost">View pricing</Link>
          </div>

          <div className="hero-stats">
            <div>
              <div className="stat-val">4.8M+</div>
              <div className="stat-lbl">Stream minutes</div>
            </div>
            <div>
              <div className="stat-val">1.2K</div>
              <div className="stat-lbl">Active creators</div>
            </div>
            <div>
              <div className="stat-val">99.9%</div>
              <div className="stat-lbl">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="sec-hd">
          <h2 className="sec-title">How new users get started</h2>
          <span className="sec-link">Quick tour</span>
        </div>

        <div className="feature-row">
          <div className="feature-card">
            <strong>Watch</strong>
            <p>Explore episodes, shorts, and movies in one feed, with free ad playback and premium subscriber streams.</p>
            <Link href="/player" className="btn-ghost">Start watching</Link>
          </div>
          <div className="feature-card">
            <strong>Upload</strong>
            <p>Publish AI-powered videos as episodic series, movie premieres, or fast shorts — all from your creator dashboard.</p>
            <Link href="/dashboard" className="btn-ghost">Open creator studio</Link>
          </div>
          <div className="feature-card">
            <strong>Monetise</strong>
            <p>Generate revenue from ads, subscriptions, viewership, and clicks across every format.</p>
            <Link href="/pricing" className="btn-ghost">See monetisation</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="sec-hd">
          <h2 className="sec-title">Why StreamVibe is different</h2>
          <span className="sec-link">Survey-backed improvements</span>
        </div>

        <div className="grid">
          <article className="card">
            <div className="card-poster">💡</div>
            <div className="card-info">
              <div className="card-title">Web-first reach</div>
              <div className="card-meta">No app store required. Viewers can use the platform instantly on any device.</div>
            </div>
          </article>
          <article className="card">
            <div className="card-poster">🚀</div>
            <div className="card-info">
              <div className="card-title">Creator tools built-in</div>
              <div className="card-meta">Upload, publish, and manage content from one dashboard, with profile and analytics support.</div>
            </div>
          </article>
          <article className="card">
            <div className="card-poster">🎯</div>
            <div className="card-info">
              <div className="card-title">Revenue-first roadmap</div>
              <div className="card-meta">Focus on micro-payments, watch-to-earn, and smart recommendations — not one-size-fits-all ads.</div>
            </div>
          </article>
        </div>
      </section>

      <section className="sec">
        <div className="sec-hd">
          <h2 className="sec-title">StreamVibe roadmap</h2>
          <span className="sec-link">Phase 1 → 3</span>
        </div>

        <div className="plans">
          <div className="plan featured">
            <div className="plan-pop">Phase 1</div>
            <div className="plan-name">Monetisation & retention</div>
            <div className="plan-desc">Build coins, early unlocks, watch ads, series format, continue watching progress, and first revenue loops.</div>
            <ul className="plan-feat">
              <li><span className="check">✓</span> Wallet + coin flow</li>
              <li><span className="check">✓</span> Series and episode tracking</li>
              <li><span className="check">✓</span> Continue watching row</li>
            </ul>
          </div>
          <div className="plan">
            <div className="plan-pop">Phase 2</div>
            <div className="plan-name">Personalisation & PWA</div>
            <div className="plan-desc">Add recommendations, install prompt, offline playback, and daily engagement loops.</div>
            <ul className="plan-feat">
              <li><span className="check">✓</span> AI-powered suggestions</li>
              <li><span className="check">✓</span> PWA install prompt</li>
              <li><span className="check">✓</span> Streak rewards</li>
            </ul>
          </div>
          <div className="plan">
            <div className="plan-pop">Phase 3</div>
            <div className="plan-name">Community & expansion</div>
            <div className="plan-desc">Launch reactions, social watchlists, regional localisation, and third-party API integrations.</div>
            <ul className="plan-feat">
              <li><span className="check">✓</span> Reactions + comments</li>
              <li><span className="check">✓</span> Low-bandwidth mode</li>
              <li><span className="check">✓</span> Public API</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
