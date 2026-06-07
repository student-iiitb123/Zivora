import { X } from "lucide-react";
import QuantitySelector from "./QuantitySelector";

function CartItem({ item }) {
  return (
    <article className="group flex gap-8 pb-10 border-b border-black/10">
      <div className="w-40 md:w-48 aspect-[4/5] bg-neutral-100 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between py-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-black/50 mb-2">
              {item.category}
            </p>

            <h2 className="text-2xl font-semibold mb-3">
              {item.name}
            </h2>

            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-black/50">Size:</span>
                <span className="text-sm font-medium uppercase">
                  {item.size}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-black/50">Color:</span>
                <div
                  className="w-4 h-4 rounded-full border border-black/10"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            </div>
          </div>

          <button className="text-black/40 hover:text-red-500 transition">
            <X size={20} />
          </button>
        </div>

        <div className="flex justify-between items-end">
          <QuantitySelector quantity={item.quantity} />

          <p className="text-2xl font-semibold">
            {item.price}
          </p>
        </div>
      </div>
    </article>
  );
}

export default CartItem;