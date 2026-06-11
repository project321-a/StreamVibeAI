import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="page active" style={{ minHeight: "calc(100vh - 54px)", padding: "48px 24px" }}>
      <div className="plan" style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="plan-pop">Pricing</div>
        <h1 className="plan-name">Free to watch, built to pay creators.</h1>
        <p className="plan-desc">StreamVibe supports ad revenue, subscription perks, community comments, and creator earnings from every upload.</p>

        <div className="plans">
          <div className="plan featured">
            <div className="plan-pop">Viewer</div>
            <div className="plan-name">Free with ads</div>
            <div className="plan-price">$0</div>
            <p className="plan-desc">Watch content for free while ads support creators and keep the platform thriving.</p>
            <ul className="plan-feat">
              <li><span className="check">✓</span> Unlimited ad-supported viewing</li>
              <li><span className="check">✓</span> Discover trending creators</li>
              <li><span className="check">✓</span> Continue watching queue</li>
            </ul>
            <Link href="/player" className="plan-btn primary">Browse free</Link>
          </div>

          <div className="plan">
            <div className="plan-pop">Creator</div>
            <div className="plan-name">Earn from uploads</div>
            <div className="plan-price">$0</div>
            <p className="plan-desc">Upload videos, collect revenue from ads and views, and track earnings with creator analytics.</p>
            <ul className="plan-feat">
              <li><span className="check">✓</span> Creator upload studio</li>
              <li><span className="check">✓</span> Revenue per view</li>
              <li><span className="check">✓</span> Ad earnings and referrals</li>
            </ul>
            <Link href="/dashboard" className="plan-btn secondary">Start uploading</Link>
          </div>

          <div className="plan">
            <div className="plan-pop">Subscriber</div>
            <div className="plan-name">Comment & premium</div>
            <div className="plan-price">$7 / mo</div>
            <p className="plan-desc">Subscribe to activate comments, join creator communities, and remove ads on subscribed channels.</p>
            <ul className="plan-feat">
              <li><span className="check">✓</span> Commenting privileges</li>
              <li><span className="check">✓</span> Ad-free experience on subscribed channels</li>
              <li><span className="check">✓</span> Early access to new uploads</li>
            </ul>
            <Link href="/login" className="plan-btn primary">Subscribe now</Link>
          </div>
        </div>

        <div className="chart-wrap">
          <div className="chart-title">Payment connectors</div>
          <p className="plan-desc">Connect common payment providers to pay for subscriptions, avoid ads, and let creators receive payouts.</p>
          <div className="grid" style={{ gap: 14, marginTop: 16 }}>
            <article className="card">
              <div className="card-poster">💳</div>
              <div className="card-info">
                <div className="card-title">Stripe support</div>
                <div className="card-meta">Accept card payments and manage recurring subscriber billing.</div>
              </div>
            </article>
            <article className="card">
              <div className="card-poster">🅿️</div>
              <div className="card-info">
                <div className="card-title">PayPal support</div>
                <div className="card-meta">Enable flexible digital wallet payments for viewers and creators.</div>
              </div>
            </article>
            <article className="card">
              <div className="card-poster">💱</div>
              <div className="card-info">
                <div className="card-title">Fast payouts</div>
                <div className="card-meta">Creators can receive subscription and ad revenue through connected accounts.</div>
              </div>
            </article>
          </div>
        </div>

        <div style={{ color: "var(--text2)", marginTop: 32, fontSize: 14, lineHeight: 1.8 }}>
          <p><strong>How creators earn:</strong> ad views, clicks, and watch time generate payouts, while subscribers bring recurring support and comments unlock deeper community engagement.</p>
          <p><strong>How viewers benefit:</strong> watch free with ads, upgrade for comments and perks, and support creators through every session.</p>
          <p><strong>How StreamVibe grows:</strong> free access drives discovery, ads create revenue, subscriptions deepen loyalty, and creator uploads keep fresh content flowing.</p>
        </div>

        <Link href="/" className="btn-ghost" style={{ marginTop: 24 }}>Back to home</Link>
      </div>
    </main>
  );
}
