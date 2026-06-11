"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const pricingPlans = [
  {
    name: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    description: "Launch your channel with free content and starter tools.",
    perks: ["Ad-enabled watch feed", "Basic creator toolkit", "Public profile"],
    accent: "border-slate-500/60",
    featured: false,
  },
  {
    name: "Creator",
    priceMonthly: 0.99,
    priceYearly: 9.5,
    description: "Ad-free streaming, premium unlocks, and creator analytics.",
    perks: ["Ad-free playback", "Advanced creator tools", "Priority support", "Early feature access"],
    accent: "border-orange-400/40",
    featured: true,
  },
  {
    name: "Pro Studio",
    priceMonthly: 1.99,
    priceYearly: 19.1,
    description: "Team workflows, revenue reports, and unlimited premium perks.",
    perks: ["Team collaboration", "Advanced analytics", "Monetisation tools", "Revenue reporting"],
    accent: "border-purple-400/30",
    featured: false,
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const interval = billing === "monthly" ? "/month" : "/year";

  const message = useMemo(() => {
    return billing === "yearly" ? "Save 20% with annual billing" : "Flexible monthly billing";
  }, [billing]);

  return (
    <section className="section-shell">
      <div className="section-header flex-wrap gap-4">
        <div>
          <p className="section-eyebrow">Creator monetisation</p>
          <h2 className="section-title">Plans built for creators, fans, and premium launches.</h2>
          <p className="section-copy max-w-2xl">
            Choose a plan to launch your channel, unlock premium stories, and keep viewers coming back with subscription perks.
          </p>
        </div>
        <div className="rounded-full border border-white/10 bg-slate-950/70 p-1">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${billing === "monthly" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"}`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBilling("yearly")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${billing === "yearly" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"}`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        {pricingPlans.map((plan) => {
          const price = billing === "monthly" ? plan.priceMonthly : plan.priceYearly;
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`group rounded-[32px] border bg-slate-950/90 p-8 shadow-[0_42px_120px_rgba(15,23,42,.28)] ${plan.featured ? "border-orange-400/50 bg-slate-900/90 shadow-[0_50px_140px_rgba(255,176,127,.18)]" : "border-white/10"}`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{plan.name}</p>
                  <p className="mt-4 text-4xl font-black text-slate-100">
                    {price === 0 ? "Free" : `$${price.toFixed(2)}`}
                    <span className="text-base font-medium text-slate-400">{price === 0 ? "" : interval}</span>
                  </p>
                </div>
                {plan.featured ? <span className="rounded-full bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">Most popular</span> : null}
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-300">{plan.description}</p>

              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs text-orange-300">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-semibold transition ${plan.featured ? "bg-orange-400 text-slate-950 hover:bg-orange-300" : "border border-white/10 bg-white/5 text-white hover:bg-white/10"}`}
              >
                {plan.priceMonthly === 0 ? "Start free" : "Choose plan"}
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 text-sm text-slate-500">{message}</div>
    </section>
  );
}
