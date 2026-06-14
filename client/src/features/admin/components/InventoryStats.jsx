import InventoryStatCard from "./InventoryStatCard";
import { inventoryStats } from "../data/inventoryStats";

function InventoryStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 pt-6 border-t border-black/10">
      {inventoryStats.map((stat) => (
        <InventoryStatCard
          key={stat.label}
          stat={stat}
        />
      ))}
    </div>
  );
}

export default InventoryStats;