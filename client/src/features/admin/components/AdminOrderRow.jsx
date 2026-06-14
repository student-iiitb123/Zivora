import { MoreVertical } from "lucide-react";

function AdminOrderRow({ order }) {
  return (
    <tr className="hover:bg-neutral-50 transition-colors">
      <td className="px-6 py-5 font-bold">
        {order.id}
      </td>

      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          {order.avatar ? (
            <img
              src={order.avatar}
              alt={order.customer}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-[10px] font-bold">
              {order.initials}
            </div>
          )}

          <span className="text-sm">
            {order.customer}
          </span>
        </div>
      </td>

      <td className="px-6 py-5 text-right font-semibold">
        {order.amount}
      </td>

      <td className="px-6 py-5 text-center">
        <PaymentBadge payment={order.payment} />
      </td>

      <td className="px-6 py-5">
        <OrderStatus status={order.status} />
      </td>

      <td className="px-6 py-5 text-black/50 text-sm">
        {order.date}
      </td>

      <td className="px-6 py-5 text-right">
        <button className="text-black/50 hover:text-black">
          <MoreVertical size={20} />
        </button>
      </td>
    </tr>
  );
}

function PaymentBadge({ payment }) {
  const cls =
    payment === "Paid"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";

  return (
    <span className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full ${cls}`}>
      {payment}
    </span>
  );
}

function OrderStatus({ status }) {
  const color =
    status === "Delivered"
      ? "bg-green-500"
      : status === "Shipped"
      ? "bg-orange-400"
      : "bg-blue-500";

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <span className="text-sm">{status}</span>
    </div>
  );
}

export default AdminOrderRow;