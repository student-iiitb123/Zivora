import AdminOrderStatCard from "./AdminOrderStatCard";
import { adminOrderStats } from "../data/adminOrderStats";

function AdminOrdersStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {adminOrderStats.map((stat) => (
        <AdminOrderStatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
}

export default AdminOrdersStats;