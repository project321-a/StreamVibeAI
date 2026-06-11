"use client";

import { motion } from "framer-motion";

const toolCards = [
  {
    title: "Instant series builder",
    description: "Convert ideas into episodic AI narratives in seconds with smart scene drafts.",
    icon: "🎬",
  },
  {
    title: "Premium unlocks",
    description: "Lock episodes and shorts behind premium access for fans and supporters.",
    icon: "🔒",
  },
  {
    title: "Real-time analytics",
    description: "Track watch trends, creator earnings, and subscription momentum in one dashboard.",
    icon: "📈",
  },
  {
    title: "Fan tipping",
    description: "Let supporters tip instantly with smart buttons and reward leaderboards.",
    icon: "💎",
  },
];

export default function CreatorTools() {
  return (
    <section className="section-shell">
      <div className="section-header">
        <div>
          <p className="section-eyebrow">AI Creator Tools</p>
          <h2 className="section-title">Launch premium content faster with smart creator workflows.</h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {toolCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_28px_80px_rgba(15,23,42,.2)] transition hover:-translate-y-1 hover:bg-slate-900/90"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-2xl shadow-[0_16px_40px_rgba(15,23,42,.25)]">
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-100">{card.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">{card.description}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition group-hover:text-orange-200">
              Learn more <span className="text-lg">→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
