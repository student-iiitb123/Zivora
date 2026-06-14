import AdminLayout from "../components/AdminLayout";
import InventoryTopbar from "../components/InventoryTopbar";
import InventoryActionBar from "../components/InventoryActionBar";
import InventoryTable from "../components/InventoryTable";
import InventoryStats from "../components/InventoryStats";

function AdminInventoryPage() {
  return (
    <AdminLayout>
      <InventoryTopbar />

      <div className="p-8 lg:p-16 max-w-[1440px] mx-auto">
        <InventoryActionBar />

        <InventoryTable />

        <InventoryStats />
      </div>
    </AdminLayout>
  );
}

export default AdminInventoryPage;