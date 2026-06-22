import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100">
          <Compass className="h-8 w-8 text-black" />
        </div>

        <h1 className="mt-6 text-7xl font-bold tracking-tight text-black">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-black">
          Page Not Found
        </h2>

        <p className="mt-3 text-zinc-500">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/dashboard"
          className="mt-8 inline-flex items-center rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:bg-zinc-900">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
