import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="page-shell">
      <section className="pricing-hero">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="plan-pop">Creator monetisation</div>
          <h1 className="plan-name">Premium revenue for creators, fans, and series.</h1>
          <p className="plan-desc">
            StreamVibe makes every upload a potential income stream — with subscription tiers, unlockable content,
            pay-per-premiere access, and ad revenue built into one intelligent creator platform.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link href="/signup" className="plan-btn primary">
              Start your creator journey
            </Link>
            <Link href="/pricing" className="plan-btn secondary">
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-3">
          <article className="rounded-[28px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
            <p className="section-eyebrow">For creators</p>
            <h2 className="section-title">Unlock recurring support</h2>
            <p className="section-copy">
              Build direct fan relationships with subscription unlocks, premium series, and creator-led communities that pay over time.
            </p>
          </article>
          <article className="rounded-[28px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
            <p className="section-eyebrow">For viewers</p>
            <h2 className="section-title">Watch free or go premium</h2>
            <p className="section-copy">
              Discover free ad-supported videos, upgrade for exclusive content, and support creators through subscriptions and micro-payments.
            </p>
          </article>
          <article className="rounded-[28px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
            <p className="section-eyebrow">For teams</p>
            <h2 className="section-title">Scale with smarter tools</h2>
            <p className="section-copy">
              Manage production, revenue splits, analytics, and community access across multiple creators and series from one dashboard.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell">
        <div className="plan" style={{ padding: 0, border: "none", background: "transparent" }}>
          <div className="plans">
            <div className="plan featured">
              <div className="plan-pop">Viewer</div>
              <div className="plan-name">Free with ads</div>
              <div className="plan-price">$0</div>
              <p className="plan-desc">
                Watch unlimited content across episodes, shorts, and premium premieres while creators earn from ads.
              </p>
              <ul className="plan-feat">
                <li><span className="check">✓</span> Free watch feed with ads</li>
                <li><span className="check">✓</span> Discover new creators daily</li>
                <li><span className="check">✓</span> Join early access drops</li>
              </ul>
              <Link href="/player" className="plan-btn primary">Browse for free</Link>
            </div>

            <div className="plan">
              <div className="plan-pop">Creator</div>
              <div className="plan-name">Launch your channel</div>
              <div className="plan-price">$0</div>
              <p className="plan-desc">
                Publish, earn from ads, unlock premium episodes, and convert fans into paying subscribers.
              </p>
              <ul className="plan-feat">
                <li><span className="check">✓</span> Creator upload studio</li>
                <li><span className="check">✓</span> Ads + subscription payouts</li>
                <li><span className="check">✓</span> Quick content analytics</li>
              </ul>
              <Link href="/dashboard" className="plan-btn secondary">Start uploading</Link>
            </div>

            <div className="plan">
              <div className="plan-pop">Pro Studio</div>
              <div className="plan-name">Premium creator tools</div>
              <div className="plan-price">$7 / mo</div>
              <p className="plan-desc">
                Unlock advanced community perks, revenue insights, priority support, and deeper subscriber engagement tools.
              </p>
              <ul className="plan-feat">
                <li><span className="check">✓</span> Premium subscription unlocks</li>
                <li><span className="check">✓</span> Rich creator analytics</li>
                <li><span className="check">✓</span> Subscriber-only access</li>
              </ul>
              <Link href="/login" className="plan-btn primary">Activate premium</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
            <p className="section-eyebrow">Creator revenue engine</p>
            <h2 className="section-title">Built to grow recurring creator income</h2>
            <p className="section-copy">
              StreamVibe blends ad monetisation, subscriber revenue, unlockable episodes, and direct fan support into one creator-centric streaming system.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li>• Sell premium premieres and series access to paying fans.</li>
              <li>• Offer subscription tiers with comments, badges, and early drops.</li>
              <li>• Keep creators paid with transparent payout reporting.</li>
            </ul>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
            <p className="section-eyebrow">Why StreamVibe</p>
            <h2 className="section-title">Premium fans stay longer</h2>
            <p className="section-copy">
              High-value audiences want curated collections, unlockable first looks, and seamless support options. StreamVibe delivers all of it with cinematic discovery and creator-first economics.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li>• Free viewers fuel discovery, premium fans deliver recurring revenue.</li>
              <li>• Creator dashboards show the real growth drivers behind every upload.</li>
              <li>• Every plan supports a stronger economy for creators and audiences.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell text-center">
        <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-10 shadow-[0_35px_100px_rgba(15,23,42,0.15)]">
          <p className="section-eyebrow">Ready to launch</p>
          <h2 className="section-title">Create premium content that pays.</h2>
          <p className="section-copy max-w-3xl mx-auto">
            Grow your streaming brand with creator-first tools and monetisation features designed for episodic series, shorts, and community-driven launches.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup" className="plan-btn primary">
              Start free creator account
            </Link>
            <Link href="/dashboard" className="plan-btn secondary">
              Explore creator features
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
