import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../components/AdminLayout";
import InventoryTopbar from "../components/InventoryTopbar";
import InventoryActionBar from "../components/InventoryActionBar";
import InventoryTable from "../components/InventoryTable";
import InventoryStats from "../components/InventoryStats";

function AdminInventoryPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/listings"
    );

    setProducts(response.data.data);
  } catch (error) {
    console.log(error);
  }
};
  return (
    <AdminLayout>
      <InventoryTopbar />

      <div className="p-8 lg:p-16 max-w-[1440px] mx-auto">
        <InventoryActionBar />

      jsx<InventoryTable products={products} />

       <InventoryStats products={products} />
      </div>
    </AdminLayout>
  );
}

export default AdminInventoryPage;