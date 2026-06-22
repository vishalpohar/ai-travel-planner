import Skeleton from "../ui/Skeleton";

export default function TripCardSkeleton() {
  return (
    <div className="rounded-xl border bg-transparent p-5">
      <Skeleton className="h-6 w-40" />

      <Skeleton className="mt-3 h-4 w-28" />

      <Skeleton className="mt-5 h-4 w-20" />
    </div>
  );
}
