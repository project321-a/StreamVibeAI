"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const economyHighlights = [
  {
    title: "Subscription revenue",
    description: "Turn superfans into monthly supporters with premium tiers and unlockable series.",
  },
  {
    title: "Pay-per-premiere",
    description: "Sell early access premieres and special drops directly to your audience.",
  },
  {
    title: "Creator payouts",
    description: "Track real earnings and payouts with transparent reporting built for creators.",
  },
];

export default function CreatorEconomy() {
  return (
    <section className="section-shell">
      <div className="section-header">
        <div>
          <p className="section-eyebrow">Creator economy</p>
          <h2 className="section-title">A premium revenue stack for creators and premium fans.</h2>
          <p className="section-copy">
            StreamVibe gives creators the tools to publish premium content, build subscription communities, and earn from every view.
          </p>
        </div>
        <Link href="/pricing" className="section-link">
          Explore creator plans
        </Link>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-orange-300/80">Revenue experience</p>
          <h3 className="mt-4 text-3xl font-semibold text-slate-100">Stay paid for premium storytelling.</h3>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Combine free discovery with premium subscriber access, unlockable episodes, and smart creator payouts so your best work generates real income.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-400">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              • Launch subscription tiers for exclusive episodes, behind-the-scenes content, and community access.
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              • Let viewers support you with tips, access passes, and premium playlists.
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              • Track earnings and engagement in one creator dashboard.
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {economyHighlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.25)]"
            >
              <div className="text-sm uppercase tracking-[0.24em] text-orange-300/90">{item.title}</div>
              <p className="mt-4 text-lg font-semibold text-slate-100">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
