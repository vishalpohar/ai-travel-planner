import Link from "next/link";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  href?: string;
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  href,
}: EmptyStateProps) {
  return (
    <div className="rounded-xl border bg-white p-10 text-center">
      <div className="text-5xl">✈️</div>

      <h2 className="mt-4 text-xl font-semibold">{title}</h2>

      <p className="mt-2 text-zinc-500">{description}</p>

      {actionLabel && href && (
        <Link
          href={href}
          className="mt-6 inline-block rounded-lg bg-sky-600 px-5 py-3 text-white">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
