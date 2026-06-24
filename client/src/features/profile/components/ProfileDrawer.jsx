import {
  LayoutDashboard,
  Package,
  ShieldCheck,
  Settings,
  Crown,
  X,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function ProfileDrawer({ open, onClose, user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-[55] transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed left-0 top-0 z-[60] h-screen w-80 bg-white shadow-2xl transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div>
            <button onClick={onClose} className="mb-8">
              <X size={24} />
            </button>

            <div className="mb-12">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-neutral-200 mb-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuArWJ7sFfTwpoq073Jli5vaYA8RgdVKKqqgBw0to1eocIq799lqa65c86N6XZ_PIB5Qfrvm__Md2ZaaB6EZJtkyjnLM-qIVCyYQq1HaGHX5UOh9cWtFTUoA4gfytboQq6FzLQjwGKZMhk7IAEUBWVzhBEW_p4gZFVJLnyo7F2WBbHi9eOvLp_krWgdvs2bgkqEjNYCjEcJUCAYHuSl12QJ5Y5aNhwVIXW9CiXNWU9_0I64ci8vCDxNLia3jnzWp6C16k4EcUnbb"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-semibold">
                {user?.name || "Guest User"}
              </h2>

              <p className="text-sm text-black/60 mt-1">
                {user?.email || "guest@example.com"}
              </p>

              <p className="text-xs uppercase tracking-[3px] text-black/50 mt-2">
                Platinum Member
              </p>
            </div>

            <nav className="space-y-1">
              <DrawerLink
                to="/profile"
                active
                icon={<LayoutDashboard size={20} />}
                label="Dashboard"
              />
              <DrawerLink
                to="/orders"
                icon={<Package size={20} />}
                label="Orders"
              />
              <DrawerLink
                to="/membership"
                icon={<Crown size={20} />}
                label="Membership"
              />
              <DrawerLink
                to="/security"
                icon={<ShieldCheck size={20} />}
                label="Security"
              />
              <DrawerLink
                to="/settings"
                icon={<Settings size={20} />}
                label="Settings"
              />
            </nav>
          </div>

          <div className="mt-auto pt-6 border-t">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-3 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition uppercase tracking-[2px] text-sm"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

function DrawerLink({ to, icon, label, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-4 px-4 py-4 text-sm uppercase tracking-[3px] transition ${
        active
          ? "bg-black text-white"
          : "text-black/60 hover:bg-neutral-100 hover:text-black"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}

export default ProfileDrawer;