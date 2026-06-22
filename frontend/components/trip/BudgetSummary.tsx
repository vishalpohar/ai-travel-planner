import type { EstimatedBudget } from "@/types/trip";

import BudgetCard from "./BudgetCard";

interface Props {
  budget: EstimatedBudget;
}

export default function BudgetSummary({ budget }: Props) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">Budget Summary</h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        <BudgetCard title="Transport" value={budget.transport} />

        <BudgetCard title="Stay" value={budget.accommodation} />

        <BudgetCard title="Food" value={budget.food} />

        <BudgetCard title="Activities" value={budget.activities} />

        <BudgetCard title="Total" value={budget.total} />
      </div>
    </section>
  );
}
