"use client";

import { motion } from "motion/react";

interface Props {
  title: string;
  value: number;
}

export default function StatCard({ title, value }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="min-w-[80px] max-w-[250px] flex-1 rounded-xl border border-white/30 bg-transparent p-2 md:p-6 shadow-sm">
      <p className="text-xs md:text-sm text-zinc-400">{title}</p>

      <h2 className="mt-2 text-xl md:text-3xl font-bold">{value}</h2>
    </motion.div>
  );
}
