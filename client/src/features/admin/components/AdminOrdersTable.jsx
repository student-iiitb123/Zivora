import AdminOrderRow from "./AdminOrderRow";
import AdminOrdersPagination from "./AdminOrdersPagination";
import { adminOrders } from "../data/adminOrders";

function AdminOrdersTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-black/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-neutral-100 border-b border-black/10">
              <TableHead title="Order ID" />
              <TableHead title="Customer" />
              <TableHead title="Amount" right />
              <TableHead title="Payment" center />
              <TableHead title="Order Status" />
              <TableHead title="Date" />
              <th className="px-6 py-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-black/10">
            {adminOrders.map((order) => (
              <AdminOrderRow key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>

      <AdminOrdersPagination />
    </div>
  );
}

function TableHead({ title, right, center }) {
  return (
    <th
      className={`px-6 py-4 text-xs uppercase text-black/50 tracking-[2px] ${
        right ? "text-right" : center ? "text-center" : ""
      }`}
    >
      {title}
    </th>
  );
}

export default AdminOrdersTable;