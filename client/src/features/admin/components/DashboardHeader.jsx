import { Download } from "lucide-react";

function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-end lg:justify-between mb-8">
      <div className="min-w-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
          Executive Dashboard
        </h2>

        <p className="text-sm sm:text-base text-black/50 mt-2">
          Performance overview for the current fiscal period.
        </p>
      </div>

      <button className="w-full sm:w-auto bg-black text-white px-5 py-3 flex items-center justify-center gap-2 uppercase tracking-[2px] text-xs sm:text-sm active:scale-95 transition-transform">
        <Download size={16} />
        Export Report
      </button>
    </div>
  );
}

export default DashboardHeader;