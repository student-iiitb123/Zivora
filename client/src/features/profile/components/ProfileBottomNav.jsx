import { Search, ShoppingBag, Store, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function ProfileBottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full h-20 bg-white/80 backdrop-blur-xl border-t border-black/5 z-50 flex justify-around items-center md:hidden">
      <BottomNavItem
        to="/products"
        icon={<Store size={22} />}
        label="Shop"
        active={location.pathname === "/products"}
      />

      <BottomNavItem
        to="/collections"
        icon={<Search size={22} />}
        label="Search"
      />

      <BottomNavItem
        to="/orders"
        icon={<ShoppingBag size={22} />}
        label="Orders"
        active={location.pathname === "/orders"}
      />

      <BottomNavItem
        to="/profile"
        icon={<User size={22} />}
        label="Profile"
        active={location.pathname === "/profile"}
      />
    </nav>
  );
}

function BottomNavItem({ to, icon, label, active }) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center text-xs uppercase tracking-[1px] transition ${
        active ? "text-black scale-110" : "text-black/50"
      }`}
    >
      {icon}
      <span className="mt-1">{label}</span>
    </Link>
  );
}

export default ProfileBottomNav;