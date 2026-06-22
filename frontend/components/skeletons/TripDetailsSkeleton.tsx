import Skeleton from "../ui/Skeleton";

export default function TripDetailsSkeleton() {
  return (
    <section className="container py-10">
      <Skeleton className="h-10 w-64" />

      <Skeleton className="mt-3 h-5 w-40" />

      <div className="mt-10 space-y-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="rounded-xl border p-6">
            <Skeleton className="h-6 w-40" />

            <Skeleton className="mt-4 h-4 w-full" />

            <Skeleton className="mt-2 h-4 w-3/4" />

            <Skeleton className="mt-2 h-4 w-1/2" />
          </div>
        ))}
      </div>
    </section>
  );
}
