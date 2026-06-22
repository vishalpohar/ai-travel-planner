import type { Hotel } from "@/types/trip";

import HotelCard from "./HotelCard";

interface Props {
  hotels: Hotel[];
}

export default function HotelList({ hotels }: Props) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Recommended Hotels</h2>

        <p className="mt-2 text-zinc-500">
          AI-selected accommodations based on your budget.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel, index) => (
          <HotelCard key={`${hotel.name}-${index}`} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}
