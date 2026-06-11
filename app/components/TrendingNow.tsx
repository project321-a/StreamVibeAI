"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const trendingItems = [
  {
    title: "Neon Nights: AI Cyberdrama",
    subtitle: "Exclusive episode premiere",
    creator: "Mira Lane",
    viewers: "98K",
    duration: "14m",
    thumbnail: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Vibe Shorts: Flash Beats",
    subtitle: "Shorts feed trending",
    creator: "Taro Pixel",
    viewers: "184K",
    duration: "45s",
    thumbnail: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Creator Labs: Studio Pulse",
    subtitle: "AI tool walkthrough",
    creator: "Nova Sparks",
    viewers: "63K",
    duration: "8m",
    thumbnail: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Premium Premiere: Moonburst",
    subtitle: "Unlock with Creator plan",
    creator: "Eli Frost",
    viewers: "28K",
    duration: "1h 2m",
    thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

export default function TrendingNow() {
  return (
    <section className="section-shell">
      <div className="section-header">
        <div>
          <p className="section-eyebrow">Trending now</p>
          <h2 className="section-title">What millions are watching today</h2>
        </div>
        <Link href="/player" className="section-link">
          View the watch feed
        </Link>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {trendingItems.map((item, index) => (
          <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            key={item.title}
            className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 shadow-[0_30px_90px_rgba(15,23,42,0.45)] transition-all hover:-translate-y-1 hover:bg-slate-900/95"
          >
            <div className="relative h-72 overflow-hidden rounded-t-[32px] bg-slate-900">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute left-5 bottom-5 rounded-full bg-orange-400/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950">
                {item.duration}
              </div>
            </div>
            <div className="space-y-3 p-6 sm:p-7">
              <div className="text-sm font-medium uppercase tracking-[0.26em] text-orange-300/90">{item.subtitle}</div>
              <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span>{item.creator}</span>
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-slate-500" />
                <span>{item.viewers} viewers</span>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <Link href="/player" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                  <span>Watch now</span>
                </Link>
                <div className="rounded-full bg-slate-800/80 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">Premium</div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
