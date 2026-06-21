import InventoryRow from "./InventoryRow";

function InventoryTable({ products = [] }) {
  return (
    <div className="bg-white overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-black/10">
      <table className="w-full text-left border-collapse">
        <thead className="bg-neutral-100 border-b border-black/10">
          <tr>
            <TableHead title="Product" />
            <TableHead title="Category" />
            <TableHead title="Price" />
            <TableHead title="Stock" />
            <TableHead title="Status" />
            <th className="px-6 py-5 text-right"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-black/10">
          {products.length > 0 ? (
            products.map((product) => (
              <InventoryRow
                key={product._id}
                product={product}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center py-10 text-black/50"
              >
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="px-6 py-4 bg-neutral-100 flex justify-between items-center border-t border-black/10">
        <span className="text-xs text-black/50 uppercase tracking-[3px]">
          Showing {products.length} products
        </span>

        <div className="flex gap-2">
          <button
            disabled
            className="px-3 py-2 border border-black/10 opacity-30"
          >
            ‹
          </button>

          <button className="px-3 py-2 border border-black bg-black text-white text-xs font-bold">
            1
          </button>

          <button className="px-3 py-2 border border-black/10">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

function TableHead({ title }) {
  return (
    <th className="px-6 py-5 text-xs uppercase tracking-[3px] text-black/50 font-semibold">
      {title}
    </th>
  );
}

export default InventoryTable;