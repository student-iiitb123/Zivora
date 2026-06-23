import { Minus, Plus } from "lucide-react";
import { updateQuantity } from "../../../services/cartService";

function QuantitySelector({
  quantity,
  itemId,
  userId,
  fetchCart,
}) {
  const increase = async () => {
    try {
      await updateQuantity(
        userId,
        itemId,
        quantity + 1
      );

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const decrease = async () => {
    if (quantity === 1) return;

    try {
      await updateQuantity(
        userId,
        itemId,
        quantity - 1
      );

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center border border-black/20 px-1 py-1">
      <button
        onClick={decrease}
        className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 transition"
      >
        <Minus size={16} />
      </button>

      <span className="w-10 text-center text-sm font-medium">
        {quantity}
      </span>

      <button
        onClick={increase}
        className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 transition"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}

export default QuantitySelector;