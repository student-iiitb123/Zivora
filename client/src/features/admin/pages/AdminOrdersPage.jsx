import AdminLayout from "../components/AdminLayout";
import AdminOrdersTopbar from "../components/AdminOrdersTopbar";
import AdminOrdersStats from "../components/AdminOrdersStats";
import AdminOrdersFilters from "../components/AdminOrdersFilters";
import AdminOrdersTable from "../components/AdminOrdersTable";
import AdminMobileNav from "../components/AdminMobileNav";

function AdminOrdersPage() {
  return (
    <AdminLayout>
      <AdminOrdersTopbar />

      <div className="px-5 md:px-16 py-8 max-w-[1440px] mx-auto">
        <AdminOrdersStats />

        <AdminOrdersFilters />

        <AdminOrdersTable />
      </div>

      <AdminMobileNav />
    </AdminLayout>
  );
}

export default AdminOrdersPage;