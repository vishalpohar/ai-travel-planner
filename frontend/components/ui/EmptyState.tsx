import Link from "next/link";

import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  href?: string;
  icon?: LucideIcon;
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  href,
  icon: Icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-zinc-300 bg-white p-12 text-center">
      {Icon && <Icon size={52} className="mb-5 text-zinc-400" />}

      <h2 className="text-2xl font-bold text-black">{title}</h2>

      <p className="mt-3 max-w-md text-zinc-500">{description}</p>

      {actionLabel && href && (
        <Link
          href={href}
          className="mt-8 rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:bg-zinc-900">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
