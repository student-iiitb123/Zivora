import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
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
    } catch (err) {
      setError("Could not load orders. Try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    if (status === "Delivered") return "bg-emerald-50 text-emerald-700";
    if (status === "Processing") return "bg-amber-50 text-amber-700";
    if (status === "Cancelled") return "bg-red-50 text-red-700";
    if (status === "Shipped") return "bg-blue-50 text-blue-700";
    return "bg-neutral-100 text-black/50";
  };

  return (
    <AdminLayout>
      <div className="w-full max-w-[1440px] mx-auto px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-6">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
              Orders
            </h2>
            <p className="text-sm text-black/50 mt-1">
              View and manage all customer orders.
            </p>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="bg-white border border-black/10 rounded-sm py-24 text-center">
            <p className="text-black/50 uppercase tracking-[3px] text-xs animate-pulse">
              Loading orders...
            </p>
            <p className="text-black/30 text-xs mt-3">
              Server may be waking up — this can take up to 60 seconds.
            </p>
          </div>
        ) : error ? (
          <div className="bg-white border border-black/10 rounded-sm py-24 text-center">
            <p className="text-red-400 text-sm mb-4">{error}</p>
            <button
              onClick={fetchOrders}
              className="text-xs uppercase tracking-[2px] border border-black/20 px-4 py-2 hover:border-black transition"
            >
              Retry
            </button>
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white border border-black/10 rounded-sm py-24 text-center">
            <p className="text-black/40 text-sm">No orders yet.</p>
          </div>
        ) : (
          <div className="bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] rounded-sm p-4 sm:p-6 lg:p-8">

            {/* Mobile cards */}
            <div className="block lg:hidden space-y-4">
              {orders.map((order) => (
                <div key={order._id} className="border border-black/10 rounded-sm p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-black/50">
                      #{order._id.slice(-8).toUpperCase()}
                    </span>
                    <span className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-black/50">Customer</span>
                      <span className="font-medium">{order.shippingAddress?.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black/50">Amount</span>
                      <span className="font-bold">₹{order.totalAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black/50">Payment</span>
                      <span>{order.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black/50">Date</span>
                      <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-black/10">
                    {["Order ID", "Customer", "Date", "Amount", "Payment", "Status"].map((h) => (
                      <th key={h} className="py-4 text-xs uppercase text-black/50 tracking-[3px] pr-6">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {orders.map((order) => (
                    <tr key={order._id} className="hover:bg-neutral-50 transition-colors">
                      <td className="py-5 pr-6 font-mono text-sm text-black/50">
                        #{order._id.slice(-8).toUpperCase()}
                      </td>
                      <td className="py-5 pr-6 font-semibold">
                        {order.shippingAddress?.fullName}
                        <p className="text-xs text-black/40 font-normal">
                          {order.userId?.email}
                        </p>
                      </td>
                      <td className="py-5 pr-6 text-black/50 text-sm">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-5 pr-6 font-bold">
                        ₹{order.totalAmount}
                      </td>
                      <td className="py-5 pr-6 text-sm text-black/60">
                        {order.paymentMethod}
                      </td>
                      <td className="py-5 pr-6">
                        <span className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default AdminOrdersPage;