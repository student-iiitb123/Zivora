import { Download } from "lucide-react";

function DashboardHeader() {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <h2 className="text-4xl font-semibold tracking-tight">
          Executive Dashboard
        </h2>

        <p className="text-black/50">
          Performance overview for the current fiscal period.
        </p>
      </div>

      <button className="bg-black text-white px-6 py-3 flex items-center gap-2 uppercase tracking-[2px] text-sm active:scale-95 transition-transform">
        <Download size={16} />
        Export Report
      </button>
    </div>
  );
}

export default DashboardHeader;