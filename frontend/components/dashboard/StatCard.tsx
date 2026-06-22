"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: number;
  icon: LucideIcon;
}

export default function StatCard({ title, value, icon: Icon }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-zinc-600">{title}</p>

        <div className="rounded-lg bg-zinc-100 p-2">
          <Icon size={18} color="black" />
        </div>
      </div>

      <h2 className="text-4xl text-black font-bold">{value}</h2>
    </motion.div>
  );
}
