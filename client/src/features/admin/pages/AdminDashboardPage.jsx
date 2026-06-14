import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import DashboardHeader from "../components/DashboardHeader";
import AdminStatsGrid from "../components/AdminStatsGrid";
import PerformanceChart from "../components/PerformanceChart";
import CampaignSpotlight from "../components/CampaignSpotlight";
import RecentOrdersTable from "../components/RecentOrdersTable";
import StatusToast from "../components/StatusToast";

function AdminDashboardPage() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowToast(true), 1500);
    const hideTimer = setTimeout(() => setShowToast(false), 5500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AdminLayout>
      <div className="p-8 lg:p-16 space-y-6 max-w-[1440px] mx-auto">
        <DashboardHeader />

        <AdminStatsGrid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <PerformanceChart />

          <CampaignSpotlight />

          <RecentOrdersTable />
        </div>
      </div>

      <StatusToast show={showToast} />
    </AdminLayout>
  );
}

export default AdminDashboardPage;