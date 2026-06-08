import {
  Home,
  Search,
  Heart,
  User,
} from "lucide-react";

function OrdersBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-black/10 h-20 flex justify-around items-center">
      <NavItem icon={<Home size={22} />} />

      <NavItem icon={<Search size={22} />} />

      <NavItem icon={<Heart size={22} />} />

      <NavItem
        icon={<User size={22} />}
        active
      />
    </nav>
  );
}

function NavItem({ icon, active }) {
  return (
    <button
      className={
        active
          ? "text-black"
          : "text-black/40"
      }
    >
      {icon}
    </button>
  );
}

export default OrdersBottomNav;