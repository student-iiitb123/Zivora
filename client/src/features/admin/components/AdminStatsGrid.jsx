import AdminStatCard from "./AdminStatCard";
import { adminStats } from "../data/adminStats";

function AdminStatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {adminStats.map((stat, index) => (
        <AdminStatCard
          key={stat.label}
          stat={stat}
          active={index === 0}
        />
      ))}
    </div>
  );
}

export default AdminStatsGrid;