import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
      <h1 className="text-7xl font-bold">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>

      <p className="mt-3 text-zinc-500">
        The page you're looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-sky-600 px-5 py-3 text-white">
        Go Home
      </Link>
    </div>
  );
}
