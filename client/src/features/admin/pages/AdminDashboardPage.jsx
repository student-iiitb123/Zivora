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
      <div className="w-full max-w-[1440px] mx-auto px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-6">
        
        <DashboardHeader />

        <AdminStatsGrid />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          <div className="xl:col-span-2">
            <PerformanceChart />
          </div>

          <div className="xl:col-span-1">
            <CampaignSpotlight />
          </div>

          <div className="xl:col-span-3">
            <RecentOrdersTable />
          </div>

        </div>
      </div>

      <StatusToast show={showToast} />
    </AdminLayout>
  );
}

export default AdminDashboardPage;