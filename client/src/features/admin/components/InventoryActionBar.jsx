import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

function InventoryActionBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
      <div className="flex items-center gap-4">
        <FilterSelect
          label="Filter by category"
          options={[
            "All Collections",
            "Tailoring",
            "Evening Wear",
            "Knitwear",
            "Accessories",
          ]}
        />

        <FilterSelect
          label="Sort by"
          options={[
            "Newest Arrivals",
            "Price: High to Low",
            "Inventory Level",
          ]}
        />
      </div>

      <Link
        to="/admin/products/new"
        className="bg-black text-white px-8 py-3 flex items-center gap-2 uppercase tracking-[3px] text-sm font-bold active:scale-95 transition"
      >
        <Plus size={18} />
        Add Product
      </Link>
    </div>
  );
}

function FilterSelect({ label, options }) {
  return (
    <div className="flex flex-col">
      <label className="text-[10px] uppercase tracking-[3px] text-black/50 mb-1 ml-1">
        {label}
      </label>

      <select className="bg-[#fbf9f9] border border-black/10 text-sm px-4 py-2 focus:ring-0 focus:border-black min-w-[160px]">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default InventoryActionBar;