"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
          <AlertTriangle className="h-8 w-8 text-red-500" />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-black">
          Something went wrong
        </h1>

        <p className="mt-3 text-zinc-500">We couldn't complete your request.</p>

        {process.env.NODE_ENV === "development" && (
          <p className="mt-4 rounded-xl bg-zinc-100 p-3 text-sm text-zinc-600 break-words">
            {error.message}
          </p>
        )}

        <button
          onClick={reset}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:bg-zinc-900 cursor-pointer">
          <RefreshCw size={18} />
          Try Again
        </button>
      </div>
    </div>
  );
}
