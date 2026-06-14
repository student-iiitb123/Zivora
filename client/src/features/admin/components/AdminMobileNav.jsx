import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  ShoppingBag,
  Users,
} from "lucide-react";

function AdminMobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-xl border-t border-black/10 flex items-center justify-around px-4 z-50">
      <MobileNavItem icon={<LayoutDashboard size={20} />} label="Dash" />
      <MobileNavItem icon={<ShoppingBag size={20} />} label="Orders" active />
      <MobileNavItem icon={<Boxes size={20} />} label="Stock" />
      <MobileNavItem icon={<Users size={20} />} label="Users" />
    </nav>
  );
}

function MobileNavItem({ icon, label, active }) {
  return (
    <a
      href="#"
      className={`flex flex-col items-center gap-1 ${
        active ? "text-black" : "text-black/50"
      }`}
    >
      {icon}
      <span className="text-[10px] uppercase font-bold">
        {label}
      </span>
    </a>
  );
}

export default AdminMobileNav;