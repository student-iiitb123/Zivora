function AdminOrdersTable({ orders }) {
  if (!orders.length) {
    return (
      <div className="bg-white border rounded-xl py-24 text-center mt-8">
        <div className="w-20 h-20 mx-auto rounded-full bg-neutral-100 flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-4xl text-black/40">
            receipt_long
          </span>
        </div>

        <h2 className="text-3xl font-semibold mb-3">
          No Orders Yet
        </h2>

        <p className="text-black/50">
          Customer orders will appear here once an order is placed.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden border mt-8">
      <table className="w-full">
        <thead className="border-b bg-neutral-50">
          <tr>
            <th className="p-4 text-left">Order ID</th>
            <th className="p-4 text-left">Customer</th>
            <th className="p-4 text-left">Amount</th>
            <th className="p-4 text-left">Payment</th>
            <th className="p-4 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order._id}
              className="border-b"
            >
              <td className="p-4">
                #{order._id.slice(-8)}
              </td>

              <td className="p-4">
                {order.shippingAddress.fullName}
              </td>

              <td className="p-4">
                ₹{order.totalAmount}
              </td>

              <td className="p-4">
                {order.paymentMethod}
              </td>

              <td className="p-4">
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrdersTable;