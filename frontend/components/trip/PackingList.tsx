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
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">Smart Packing List</h2>

      <p className="mb-4 text-sm text-zinc-500">
        Also carry any other personal necessities not listed below.
      </p>

      <div className="space-y-3">
        {sortedPackingList.map((item) => (
          <PackingItemCard key={item._id} item={item} tripId={tripId} />
        ))}
      </div>
    </section>
  );
}
