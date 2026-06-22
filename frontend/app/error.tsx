"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold">Something went wrong</h1>

      <p className="mt-4 text-zinc-500">{error.message}</p>

      <button
        onClick={reset}
        className="mt-6 rounded-lg bg-sky-600 px-5 py-3 text-white">
        Try Again
      </button>
    </div>
  );
}
