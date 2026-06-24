import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../components/AdminLayout";
import InventoryTopbar from "../components/InventoryTopbar";
import InventoryActionBar from "../components/InventoryActionBar";
import InventoryTable from "../components/InventoryTable";
import InventoryStats from "../components/InventoryStats";

function AdminInventoryPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        "https://zivora-262a.onrender.com/api/listings",
        { timeout: 15000 }
      );
      setProducts(response.data.data || []);
    } catch (error) {
      setError("Could not load inventory. The server may be waking up — try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <InventoryTopbar />
      <div className="p-8 lg:p-16 max-w-[1440px] mx-auto">
        <InventoryActionBar />

        {loading ? (
          <div className="bg-white border rounded-xl py-24 text-center mt-8">
            <p className="text-black/50 uppercase tracking-[3px] text-xs animate-pulse">
              Loading inventory...
            </p>
          </div>
        ) : error ? (
          <div className="bg-white border rounded-xl py-24 text-center mt-8">
            <p className="text-red-400 text-sm">{error}</p>
            <button
              onClick={fetchProducts}
              className="mt-4 text-xs uppercase tracking-[2px] border border-black/20 px-4 py-2 hover:border-black transition"
            >
              Retry
            </button>
          </div>
        ) : (
          <InventoryTable products={products} />
        )}

        <InventoryStats products={products} />
      </div>
    </AdminLayout>
  );
}

export default AdminInventoryPage;