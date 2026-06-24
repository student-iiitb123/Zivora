import { useEffect, useState } from "react";

import AdminLayout from "../components/AdminLayout";
import AdminOrdersTopbar from "../components/AdminOrdersTopbar";
import AdminOrdersStats from "../components/AdminOrdersStats";
import AdminOrdersFilters from "../components/AdminOrdersFilters";
import AdminOrdersTable from "../components/AdminOrdersTable";
import AdminMobileNav from "../components/AdminMobileNav";

import { getAllOrders } from "../../../services/orderService";

function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getAllOrders();
      setOrders(res.data.orders || []);
    } catch (error) {
      setError("Could not load orders. The server may be waking up — try again in a moment.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <AdminOrdersTopbar />

      <div className="px-5 md:px-16 py-8 max-w-[1440px] mx-auto">
        <AdminOrdersStats orders={orders} />

        <AdminOrdersFilters />

        {loading ? (
          <div className="bg-white border rounded-xl py-24 text-center mt-8">
            <p className="text-black/50 uppercase tracking-[3px] text-xs animate-pulse">
              Loading orders...
            </p>
          </div>
        ) : error ? (
          <div className="bg-white border rounded-xl py-24 text-center mt-8">
            <p className="text-red-400 text-sm">{error}</p>
            <button
              onClick={fetchOrders}
              className="mt-4 text-xs uppercase tracking-[2px] border border-black/20 px-4 py-2 hover:border-black transition"
            >
              Retry
            </button>
          </div>
        ) : (
          <AdminOrdersTable orders={orders} />
        )}
      </div>

      <AdminMobileNav />
    </AdminLayout>
  );
}

export default AdminOrdersPage;