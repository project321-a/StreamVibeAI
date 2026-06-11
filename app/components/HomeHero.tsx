"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const heroStats = [
  { label: "Monthly viewers", value: "2.6M+" },
  { label: "Creators onboarded", value: "18.4K" },
  { label: "Hours watched", value: "12.2M" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-6 lg:pt-10">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(255,176,127,.14),_transparent_38%)] blur-3xl opacity-80" />
      <div className="absolute right-[-14rem] top-12 h-80 w-80 rounded-full bg-[#9b8cff]/20 blur-3xl" />
      <div className="absolute left-[-12rem] top-40 h-72 w-72 rounded-full bg-[#76d6c0]/18 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28"
      >
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="hero-pill">AI-powered entertainment for creators and premium audiences</span>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="mt-8 text-4xl font-black tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            >
              Stream smarter. Create bolder. Grow your creator economy.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              StreamVibe blends premium episodic storytelling, short-form buzz, and AI creator tools in one cinematic platform built for modern audiences and creator revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-orange-400 px-8 py-4 text-sm font-semibold text-slate-950 shadow-[0_24px_80px_rgba(255,176,127,0.18)] transition hover:-translate-y-0.5 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Get started free
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-950/70 px-8 py-4 text-sm font-semibold text-slate-100 transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Explore plans
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.45, ease: "easeOut" }}
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <p className="text-xl font-bold text-slate-50 sm:text-2xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/40 shadow-[0_40px_120px_rgba(15,23,42,0.65)]"
          >
            <div className="hero-showcase" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent px-6 pb-8 pt-32 sm:px-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.34em] text-orange-300/90">Featured premiere</p>
                  <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Rise of the AI auteur</p>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 ring-1 ring-white/10">
                  7.9K live viewers
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate="visible"
          className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {[
            { title: "Creator tools", value: "Pro workflow" },
            { title: "Ultra-fast publish", value: "AI-ready" },
            { title: "Smart monetisation", value: "Unlock more" },
            { title: "Global reach", value: "Mobile first" },
          ].map((item) => (
            <motion.div key={item.title} variants={cardVariants} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.title}</p>
              <p className="mt-4 text-xl font-semibold text-slate-100">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
