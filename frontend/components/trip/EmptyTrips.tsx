import Link from "next/link";

export default function EmptyTrips() {
  return (
    <div className="rounded-xl border bg-white p-10 text-center">
      <h2 className="text-xl font-semibold">No Trips Yet</h2>

      <p className="mt-2 text-zinc-500">Create your first AI-powered trip.</p>

      <Link
        href="/create-trip"
        className="mt-6 inline-block rounded-lg bg-sky-600 px-5 py-3 text-white">
        Create Trip
      </Link>
    </div>
  );
}
