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
      className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-zinc-400">{title}</p>

      <h3 className="mt-3 text-3xl font-bold text-black">
        {currenyFormatter(value)}
      </h3>
    </motion.div>
  );
}
