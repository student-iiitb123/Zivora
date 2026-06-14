import { Download, Filter } from "lucide-react";

function AdminOrdersFilters() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
        {["All Orders", "Pending", "Shipped", "Completed"].map((item, index) => (
          <button
            key={item}
            className={`px-6 py-2 rounded-full text-sm whitespace-nowrap transition ${
              index === 0
                ? "bg-black text-white"
                : "bg-neutral-100 text-black/60 hover:bg-neutral-200"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 border border-black/10 text-black/60 rounded-lg hover:bg-neutral-100 transition">
          <Filter size={16} />
          <span className="text-sm">Filters</span>
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:opacity-90 transition">
          <Download size={16} />
          <span className="text-sm">Export</span>
        </button>
      </div>
    </div>
  );
}

export default AdminOrdersFilters;