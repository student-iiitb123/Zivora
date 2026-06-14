import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
  const location = useLocation();

  const navLinks = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin/dashboard",
    },
    {
      label: "Orders",
      icon: ShoppingBag,
      path: "/admin/orders",
    },
    {
      label: "Inventory",
      icon: Boxes,
      path: "/admin/inventory",
    },
    {
      label: "Customers",
      icon: Users,
      path: "/admin/customers",
    },
    {
      label: "Analytics",
      icon: BarChart3,
      path: "/admin/analytics",
    },
    {
      label: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-[#fbf9f9] border-r border-black/10 flex flex-col py-8 px-8 z-50">
      {/* Logo */}
      <div className="mb-12">
        <Link to="/admin">
          <h1 className="text-3xl font-semibold tracking-tight">
            ZIVORA
          </h1>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-6">
        {navLinks.map((link) => {
          const Icon = link.icon;

          const isActive =
            location.pathname === link.path;

          return (
            <Link
              key={link.label}
              to={link.path}
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
          <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-200">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADvEYwau7bn_zEbeadYXwf7zQHp6-8CbkPj1zueJjdN1NUo1FnLkwKvxtSsL4uAUYzLfzhQLLsOwL7JzSlbu0lJvpYog1CNwSTQsseEXEB-39ta3U8f1Ov13uu0-6dmX3CefklB9_3RBIajV661S6RsDHiS1zTJ0ZcjxLmVQAp99KTgpRehoWDxYkU_rN0E1l3yKAf5Dc22ftGOPvplL4ErfV234NdkLleDFKltCReF8fqR3pU4-WJcFtn84o20d9XlBZdQOYE"
              alt="Admin Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-bold leading-none">
              Alex Rivera
            </p>

            <p className="text-[10px] uppercase text-black/50">
              Admin Access
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default AdminSidebar;
