import type { Hotel } from "@/types/trip";

import HotelCard from "./HotelCard";

interface Props {
  hotels: Hotel[];
}

export default function HotelList({ hotels }: Props) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">Recommended Hotels</h2>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}
