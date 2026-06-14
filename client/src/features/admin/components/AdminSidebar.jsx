import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";

const navLinks = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Orders", icon: ShoppingBag },
  { label: "Inventory", icon: Boxes },
  { label: "Customers", icon: Users },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

function AdminSidebar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-[#fbf9f9] border-r border-black/10 flex flex-col py-8 px-8 z-50">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight">
          ZIVORA
        </h1>
      </div>

      <nav className="flex flex-col space-y-6">
        {navLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.label}
              href="#"
              className={`flex items-center gap-4 uppercase tracking-[3px] text-sm transition ${
                link.active
                  ? "text-black border-b border-black pb-1 font-semibold"
                  : "text-black/50 hover:text-black"
              }`}
            >
              <Icon size={20} />
              {link.label}
            </a>
          );
        })}
      </nav>

      <div className="mt-auto pt-8">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-100">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-200">
            <img
              alt="Admin Avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADvEYwau7bn_zEbeadYXwf7zQHp6-8CbkPj1zueJjdN1NUo1FnLkwKvxtSsL4uAUYzLfzhQLLsOwL7JzSlbu0lJvpYog1CNwSTQsseEXEB-39ta3U8f1Ov13uu0-6dmX3CefklB9_3RBIajV661S6RsDHiS1zTJ0ZcjxLmVQAp99KTgpRehoWDxYkU_rN0E1l3yKAf5Dc22ftGOPvplL4ErfV234NdkLleDFKltCReF8fqR3pU4-WJcFtn84o20d9XlBZdQOYE"
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