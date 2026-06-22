import { PackingItem } from "@/types/trip";

import PackingItemCard from "./PackingItemCard";

interface Props {
  packingList: PackingItem[];
  tripId: string;
}

export default function PackingList({ packingList, tripId }: Props) {
  const sortedPackingList = [...packingList].sort(
    (a, b) => Number(a.isPacked) - Number(b.isPacked),
  );

  if (packingList.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center">
        <h3 className="font-semibold">No Packing Items</h3>

        <p className="mt-2 text-zinc-500">
          Packing recommendations will appear here.
        </p>
      </div>
    );
  }

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Packing List</h2>

        <p className="mt-2 text-zinc-500">
          Generated based on destination weather and itinerary.
        </p>
      </div>

      <div className="space-y-3">
        {sortedPackingList.map((item) => (
          <PackingItemCard key={item._id} item={item} tripId={tripId} />
        ))}
      </div>
    </section>
  );
}
