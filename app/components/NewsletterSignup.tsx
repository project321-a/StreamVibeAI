"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="section-shell relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-slate-950/90 via-slate-900/95 to-slate-950/90 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.35)]">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-teal-300/10 blur-3xl" />
      <div className="relative grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
        <div>
          <p className="section-eyebrow">Stay in the loop</p>
          <h2 className="section-title">Launch new drops, creator stories, and platform updates.</h2>
          <p className="section-copy max-w-xl">
            Subscribe to StreamVibe updates and get the latest AI creator features, premium premieres, and brand collaborations delivered straight to your inbox.
          </p>
        </div>

        <form className="space-y-3 rounded-[28px] border border-white/10 bg-slate-950/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,.25)]" onSubmit={handleSubmit}>
          <label className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Email address</label>
          <input
            className="w-full rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-sm text-slate-100 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
            type="email"
            placeholder="hello@streamvibe.ai"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-orange-400 px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-orange-300"
          >
            {submitted ? "You're signed up" : "Join the list"}
          </button>
          <p className="text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
        </form>
      </div>
    </section>
  );
}
