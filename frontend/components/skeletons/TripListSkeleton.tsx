import TripCardSkeleton from "./TripCardSkeleton";

export default function TripListSkeleton() {
  return (
    <div className="w-full p-5">
      <div className="max-w-4xl grid gap-5 m-auto">
        <TripCardSkeleton />
        <TripCardSkeleton />
        <TripCardSkeleton />
        <TripCardSkeleton />
      </div>
    </div>
  );
}
