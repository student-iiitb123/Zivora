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
  const [debugInfo, setDebugInfo] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);
      setDebugInfo("Connecting to server...");

      const res = await getAllOrders();

      setDebugInfo(`Success! Got ${res.data?.orders?.length ?? 0} orders.`);
      setOrders(res.data.orders || []);
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || "Unknown error";
      setError(`Error: ${msg}`);
      setDebugInfo(`Failed. Status: ${err?.response?.status || "No response (timeout or network)"}`);
      console.error("Orders fetch error:", err);
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

        {/* Debug banner — remove after fixing */}
        <div className="mb-4 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800 font-mono">
          {debugInfo || "Waiting..."}
        </div>

        {loading ? (
          <div className="bg-white border rounded-xl py-24 text-center mt-8">
            <p className="text-black/50 uppercase tracking-[3px] text-xs animate-pulse">
              Loading orders...
            </p>
            <p className="text-black/30 text-xs mt-3">
              Server may be waking up — this can take up to 60 seconds.
            </p>
          </div>
        ) : error ? (
          <div className="bg-white border rounded-xl py-24 text-center mt-8">
            <p className="text-red-400 text-sm mb-2">{error}</p>
            <p className="text-black/30 text-xs mb-4">{debugInfo}</p>
            <button
              onClick={fetchOrders}
              className="mt-2 text-xs uppercase tracking-[2px] border border-black/20 px-4 py-2 hover:border-black transition"
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