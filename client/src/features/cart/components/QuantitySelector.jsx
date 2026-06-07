import { Minus, Plus } from "lucide-react";

function QuantitySelector({ quantity }) {
  return (
    <div className="flex items-center border border-black/20 px-1 py-1">
      <button className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 transition">
        <Minus size={16} />
      </button>

      <span className="w-10 text-center text-sm font-medium">
        {quantity}
      </span>

      <button className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 transition">
        <Plus size={16} />
      </button>
    </div>
  );
}

export default QuantitySelector;