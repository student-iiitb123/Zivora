import { Bell, CircleHelp, Search } from "lucide-react";

function AdminTopbar() {
  return (
    <header className="w-full h-16 sticky top-0 bg-white/80 backdrop-blur-xl border-b border-black/10 shadow-sm flex items-center justify-between px-16 z-40">
      <div className="flex items-center gap-4">
        <Search size={20} />

        <input
          className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-black/40 w-64 outline-none"
          placeholder="Search analytics..."
          type="text"
        />
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-6 items-center text-black/50">
          <Bell size={20} />
          <CircleHelp size={20} />
        </div>

        <div className="w-10 h-10 rounded-full border border-black/10 p-0.5">
          <img
            alt="Admin Avatar"
            className="w-full h-full object-cover rounded-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-beA_D3gKDUQFGHX_c_NeXiiFb5GPuERGeDkoMBSS3SnXUJp-HHDWHJRV8-iVTxjE5D5nXVN7gUbd02gMMz84BLVNByZM7r9TSmPaY7mG3wVcyH4PMGMU3CaUbRtm2wfhofc1hsW1CCZp9Ai3pjcifpdgY3bmOPKIM9qZwhkhWYnR9g73MQBzsGPloCvyM55S9JJAFa-FOi-FiFVtPoq3Hfx5jLYtN9JCFjtR_t-3g-Wm7fQEDqQ6m10YxXBF1hrosJPmnU56"
          />
        </div>
      </div>
    </header>
  );
}

export default AdminTopbar;