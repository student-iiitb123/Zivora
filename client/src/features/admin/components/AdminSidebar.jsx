import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  Settings,
  ShoppingBag,
  Users,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const navLinks = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { label: "Orders", icon: ShoppingBag, path: "/admin/orders" },
    { label: "Inventory", icon: Boxes, path: "/admin/inventory" },
    { label: "Customers", icon: Users, path: "/admin/customers" },
    { label: "Analytics", icon: BarChart3, path: "/admin/analytics" },
    { label: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  return (
    <>
      {/* Backdrop — mobile only */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          h-screen w-64 fixed left-0 top-0
          bg-[#fbf9f9] border-r border-black/10
          flex flex-col py-8 px-8 z-50
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Logo + close button */}
        <div className="mb-12 flex items-center justify-between">
          <Link to="/admin" onClick={() => setSidebarOpen(false)}>
            <h1 className="text-3xl font-semibold tracking-tight">ZIVORA</h1>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-black/40 hover:text-black"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-4 uppercase tracking-[3px] text-sm transition ${
                  isActive
                    ? "text-black border-b border-black pb-1 font-semibold"
                    : "text-black/50 hover:text-black"
                }`}
              >
                <Icon size={20} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Admin Profile */}
        <div className="mt-auto pt-8">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-100">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADvEYwau7bn_zEbeadYXwf7zQHp6-8CbkPj1zueJjdN1NUo1FnLkwKvxtSsL4uAUYzLfzhQLLsOwL7JzSlbu0lJvpYog1CNwSTQsseEXEB-39ta3U8f1Ov13uu0-6dmX3CefklB9_3RBIajV661S6RsDHiS1zTJ0ZcjxLmVQAp99KTgpRehoWDxYkU_rN0E1l3yKAf5Dc22ftGOPvplL4ErfV234NdkLleDFKltCReF8fqR3pU4-WJcFtn84o20d9XlBZdQOYE"
                alt="Admin Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold leading-none">Alex Rivera</p>
              <p className="text-[10px] uppercase text-black/50">Admin Access</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;