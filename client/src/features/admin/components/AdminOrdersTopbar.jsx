import { Menu, Search } from "lucide-react";

function AdminOrdersTopbar() {
  return (
    <header className="w-full h-16 sticky top-0 bg-white/80 backdrop-blur-xl border-b border-black/10 shadow-sm flex items-center justify-between px-5 md:px-16 z-40">
      <div className="flex items-center gap-4">
        <Menu size={22} className="md:hidden" />

        <h1 className="text-2xl font-bold tracking-tight">
          Orders
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center bg-neutral-100 rounded-full px-4 py-2 border border-black/10">
          <Search size={16} className="text-black/50" />

          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-black/40"
            placeholder="Search orders..."
            type="text"
          />
        </div>

        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">
          AV
        </div>
      </div>
    </header>
  );
}

export default AdminOrdersTopbar;