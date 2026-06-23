import { Menu } from "lucide-react";

function AdminTopbar({ setSidebarOpen }) {
  return (
    <header className="h-16 bg-white border-b px-5 md:px-10 flex items-center gap-4">
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden text-black/60 hover:text-black transition"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      <h1 className="text-xl font-semibold tracking-tight">ZIVORA ADMIN</h1>
    </header>
  );
}

export default AdminTopbar;