import Skeleton from "../ui/Skeleton";

export default function DashboardSkeleton() {
  return (
    <section className="container py-10">
      <Skeleton className="h-10 w-72" />

      <Skeleton className="mt-3 h-5 w-56" />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="rounded-xl border p-6">
            <Skeleton className="h-5 w-24" />

            <Skeleton className="mt-4 h-10 w-16" />
          </div>
        ))}
      </div>
    </section>
  );
}
