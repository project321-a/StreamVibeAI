"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "How does Creator monetisation work?",
    answer: "Creators can publish locked episodes, premium series, and receive tips. Revenue is shared through subscriptions, unlock sales, and pay-per-view content.",
  },
  {
    question: "Can I upgrade from Free to Creator?",
    answer: "Yes — upgrade anytime. Your creator analytics, premium tools, and ad-free audience experience activate instantly.",
  },
  {
    question: "Does StreamVibe support tips and one-time purchases?",
    answer: "Absolutely. Fans can tip creators instantly, pay for VIP content, and unlock special show releases.",
  },
  {
    question: "What payments are supported?",
    answer: "StreamVibe works with Stripe, PayPal, and local payments like M-Pesa and Airtel Money for creators and audiences.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-shell">
      <div className="section-header">
        <div>
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-title">Everything creators and viewers want to know.</h2>
        </div>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => {
          const open = index === openIndex;
          return (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/85 p-6"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-lg font-semibold text-slate-100">{item.question}</p>
                  <span className="text-xl text-orange-300">{open ? "−" : "+"}</span>
                </div>
              </button>
              {open ? <p className="mt-4 text-sm leading-7 text-slate-300">{item.answer}</p> : null}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
