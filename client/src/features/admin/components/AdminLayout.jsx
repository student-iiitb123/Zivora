import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbf9f9] text-black">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="md:ml-64 min-h-screen">
        <AdminTopbar setSidebarOpen={setSidebarOpen} />

        {children}
      </main>
    </div>
  );
}

export default AdminLayout;