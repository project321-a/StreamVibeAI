"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const creators = [
  {
    name: "Jade Ellis",
    role: "AI Director",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
    followers: "148K",
  },
  {
    name: "Cleo V.",
    role: "Visual storyteller",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    followers: "96K",
  },
  {
    name: "Mika Orion",
    role: "Short-form creator",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&q=80",
    followers: "112K",
  },
];

export default function FeaturedCreators() {
  return (
    <section className="section-shell">
      <div className="section-header">
        <div>
          <p className="section-eyebrow">Creator spotlight</p>
          <h2 className="section-title">Featured creators building premium series and community revenue.</h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {creators.map((creator, index) => (
          <motion.div
            key={creator.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_35px_90px_rgba(15,23,42,0.22)] hover:-translate-y-1 transition"
          >
            <div className="flex items-center gap-4">
              <Image
                src={creator.avatar}
                alt={creator.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-3xl object-cover"
                unoptimized
              />
              <div>
                <p className="text-lg font-semibold text-slate-100">{creator.name}</p>
                <p className="text-sm text-slate-400">{creator.role}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-900/80 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">{creator.followers} followers</span>
              <span className="rounded-full bg-orange-400/10 px-3 py-2 text-xs uppercase tracking-[0.24em] text-orange-200">Top 3%</span>
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-sm text-slate-300">
              &quot;Built a recurring premium audience with Creator Plan unlocks and tips.&quot;
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
