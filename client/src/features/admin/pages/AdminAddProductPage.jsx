import AdminLayout from "../components/AdminLayout";
import AddProductTopbar from "../components/AddProductTopbar";
import AddProductForm from "../components/AddProductForm";
import AdminMobileNav from "../components/AdminMobileNav";

function AdminAddProductPage() {
  return (
    <AdminLayout>
      <AddProductTopbar />

      <div className="max-w-[1440px] mx-auto px-5 md:px-16 py-12">
        <AddProductForm />
      </div>

      <AdminMobileNav />
    </AdminLayout>
  );
}

export default AdminAddProductPage;