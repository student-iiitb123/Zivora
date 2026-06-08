import { Search, ShoppingBag, Store, User } from "lucide-react";

function ProfileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-20 bg-white/80 backdrop-blur-xl border-t border-black/5 z-50 flex justify-around items-center md:hidden">
      <BottomNavItem icon={<Store size={22} />} label="Shop" />
      <BottomNavItem icon={<Search size={22} />} label="Search" />
      <BottomNavItem icon={<ShoppingBag size={22} />} label="Orders" />
      <BottomNavItem active icon={<User size={22} />} label="Profile" />
    </nav>
  );
}

function BottomNavItem({ icon, label, active }) {
  return (
    <a
      href="#"
      className={`flex flex-col items-center text-xs uppercase tracking-[1px] ${
        active ? "text-black scale-110" : "text-black/50"
      }`}
    >
      {icon}
      <span className="mt-1">{label}</span>
    </a>
  );
}

export default ProfileBottomNav;