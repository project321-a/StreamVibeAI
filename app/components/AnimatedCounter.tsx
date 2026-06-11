"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
}

export default function AnimatedCounter({ target, suffix = "" }: AnimatedCounterProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 1300;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = window.setInterval(() => {
      start += 1;
      setValue(start);
      if (start >= end) {
        window.clearInterval(timer);
      }
    }, stepTime);

    return () => window.clearInterval(timer);
  }, [target]);

  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      {Math.round(value * 10) / 10}
      {suffix}
    </motion.span>
  );
}
