import { recentOrders } from "../data/recentOrders";

function RecentOrdersTable() {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] rounded-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold">
          Recent Orders
        </h3>

        <a
          className="text-sm font-bold text-black border-b border-black/20 hover:border-black transition-all w-max"
          href="#"
        >
          View All Orders
        </a>
      </div>

      {/* Mobile Cards */}
      <div className="block lg:hidden space-y-4">
        {recentOrders.map((order) => (
          <div
            key={order.id}
            className="border border-black/10 rounded-sm p-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center font-bold">
                {order.initials}
              </div>

              <div>
                <p className="font-semibold">{order.customer}</p>
                <p className="text-xs text-black/50">{order.email}</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-black/50">Order ID</span>
                <span className="font-mono">{order.id}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-black/50">Date</span>
                <span>{order.date}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-black/50">Amount</span>
                <span className="font-semibold">{order.amount}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-black/50">Status</span>

                <span
                  className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full ${getStatusClass(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-black/10">
              <th className="py-4 text-xs uppercase text-black/50 tracking-[3px]">
                Customer
              </th>
              <th className="py-4 text-xs uppercase text-black/50 tracking-[3px]">
                Order ID
              </th>
              <th className="py-4 text-xs uppercase text-black/50 tracking-[3px]">
                Date
              </th>
              <th className="py-4 text-xs uppercase text-black/50 tracking-[3px] text-right">
                Amount
              </th>
              <th className="py-4 text-xs uppercase text-black/50 tracking-[3px] text-center">
                Status
              </th>
              <th className="py-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-black/5">
            {recentOrders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-neutral-50 transition-colors group"
              >
                <td className="py-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center font-bold">
                    {order.initials}
                  </div>

                  <div>
                    <p className="font-bold">{order.customer}</p>
                    <p className="text-xs text-black/50">
                      {order.email}
                    </p>
                  </div>
                </td>

                <td className="py-6 font-mono text-sm text-black/50">
                  {order.id}
                </td>

                <td className="py-6 text-black/50">
                  {order.date}
                </td>

                <td className="py-6 text-right font-bold">
                  {order.amount}
                </td>

                <td className="py-6 text-center">
                  <span
                    className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full ${getStatusClass(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="py-6 text-right text-black/40 opacity-0 group-hover:opacity-100 transition">
                  •••
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function getStatusClass(status) {
  if (status === "Delivered")
    return "bg-emerald-50 text-emerald-700";
  if (status === "Processing")
    return "bg-amber-50 text-amber-700";
  if (status === "Cancelled")
    return "bg-red-50 text-red-700";

  return "bg-blue-50 text-blue-700";
}

export default RecentOrdersTable;