"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const testimonials = [
  {
    quote: "StreamVibe turned my shorts into a creator business overnight.",
    name: "Jules K.",
    role: "AI filmmaker",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote: "The subscription tools helped me build a premium audience without selling out.",
    name: "Ava R.",
    role: "Creator coach",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&q=80",
  },
];

export default function SuccessStories() {
  return (
    <section className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
        <div>
          <p className="section-eyebrow">Trust & growth</p>
          <h2 className="section-title">Creators and audiences trust StreamVibe.</h2>
          <p className="section-copy">
            A modern creator economy needs better revenue share, elegant unlocking, and premium subscription tools. StreamVibe gives creators the growth and engagement engine they need.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-3xl font-bold text-slate-50"><AnimatedCounter target={108.4} suffix="K" /></p>
              <p className="mt-2 text-sm text-slate-400">Active creators</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-3xl font-bold text-slate-50"><AnimatedCounter target={22.1} suffix="M" /></p>
              <p className="mt-2 text-sm text-slate-400">Premium hours watched</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-3xl font-bold text-slate-50"><AnimatedCounter target={5.6} suffix="M" /></p>
              <p className="mt-2 text-sm text-slate-400">Revenue shared</p>
            </motion.div>
          </div>
        </div>

        <div className="space-y-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.35)]"
            >
              <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                  unoptimized
                />
                <div>
                  <p className="font-semibold text-slate-100">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
