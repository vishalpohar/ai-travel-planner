"use client";

import { motion } from "motion/react";
import { currenyFormatter } from "@/utils/currencyFormatter";

interface Props {
  title: string;
  value: number;
}

export default function BudgetCard({ title, value }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="rounded-xl border border-white/30 bg-transparent p-5">
      <p className="text-sm text-zinc-400">{title}</p>

      <h3 className="mt-2 text-white text-xl font-bold">
        {currenyFormatter(value)}
      </h3>
    </motion.div>
  );
}
