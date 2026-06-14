import { MoreVertical, AlertTriangle } from "lucide-react";
import { useState } from "react";
import StatusToggle from "./StatusToggle";

function InventoryRow({ product }) {
  const [active, setActive] = useState(product.active);

  return (
    <tr
      className={`hover:bg-neutral-50 transition-colors group ${
        !active ? "opacity-60" : ""
      }`}
    >
      {/* Product */}
      <td className="px-6 py-6">
        <div
          className={`flex items-center gap-4 ${
            !active ? "grayscale" : ""
          }`}
        >
          <div className="w-16 h-20 bg-neutral-100 overflow-hidden flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col">
            <span
              className={`text-base font-semibold ${
                !active ? "italic" : ""
              }`}
            >
              {product.name}
            </span>

            <span className="text-[11px] text-black/40 uppercase">
              SKU: {product.sku}
            </span>
          </div>
        </div>
      </td>

      {/* Category */}
      <td className="px-6 py-6 text-sm text-black/60">
        {product.category}
      </td>

      {/* Price */}
      <td className="px-6 py-6 text-sm font-semibold">
        {product.price}
      </td>

      {/* Stock */}
      <td className="px-6 py-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-medium ${
                product.lowStock
                  ? "text-red-600 font-bold"
                  : "text-black"
              }`}
            >
              {product.stock} Units
            </span>

            {product.lowStock && (
              <AlertTriangle
                size={14}
                className="text-red-600"
              />
            )}
          </div>

          <span
            className={`text-[10px] uppercase ${
              product.lowStock
                ? "text-red-500 font-semibold"
                : "text-black/40"
            }`}
          >
            {product.stockLabel}
          </span>
        </div>
      </td>

      {/* Status Toggle */}
      <td className="px-6 py-6">
        <StatusToggle
          active={active}
          onChange={() => setActive(!active)}
        />
      </td>

      {/* Actions */}
      <td className="px-6 py-6 text-right">
        <button className="text-black/50 hover:text-black transition-colors">
          <MoreVertical size={20} />
        </button>
      </td>
    </tr>
  );
}

export default InventoryRow;