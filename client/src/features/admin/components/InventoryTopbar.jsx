import { Bell, CircleHelp, Search } from "lucide-react";

function InventoryTopbar() {
  return (
    <header className="w-full h-16 sticky top-0 bg-white/80 backdrop-blur-xl border-b border-black/10 shadow-sm flex items-center justify-between px-16 z-40">
      <h1 className="text-2xl font-bold tracking-tight">
        Inventory Management
      </h1>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40"
          />

          <input
            className="bg-neutral-100 border-none focus:ring-1 focus:ring-black text-sm pl-10 pr-4 py-2 w-64"
            placeholder="Search products..."
            type="text"
          />
        </div>

        <Bell size={20} />
        <CircleHelp size={20} />
      </div>
    </header>
  );
}

export default InventoryTopbar;