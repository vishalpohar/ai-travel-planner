import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-white">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold text-sky-600">
              AI Travel Planner
            </h3>

            <p className="text-sm text-gray-600">
              Generate personalized travel itineraries, hotel recommendations,
              budgets and packing lists using AI.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-gray-700 font-semibold">Quick Links</h4>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>

              <li>
                <Link href="/trips">My Trips</Link>
              </li>

              <li>
                <Link href="/create-trip">Create Trip</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-gray-700 font-semibold">Features</h4>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>AI Itinerary Generation</li>
              <li>Budget Estimation</li>
              <li>Hotel Recommendations</li>
              <li>Weather Packing Assistant</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AI Travel Planner. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
