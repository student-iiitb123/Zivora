import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#fbf9f9] text-black">
      <AdminSidebar />

      <main className="ml-64 min-h-screen">
        <AdminTopbar />

        {children}
      </main>
    </div>
  );
}

export default AdminLayout;