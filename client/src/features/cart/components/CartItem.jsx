import { X } from "lucide-react";
import QuantitySelector from "./QuantitySelector";
import { removeCartItem } from "../../../services/cartService";

function CartItem({ item, userId, fetchCart }) {
 const handleDelete = async () => {
  try {
    console.log("Deleting:", {
      userId,
      itemId: item._id,
    });

    await removeCartItem(userId, item._id);

    fetchCart();
  } catch (error) {
    console.log(error);
  }
};
  return (
    <article className="group flex gap-8 pb-10 border-b border-black/10">
      <div className="w-40 md:w-48 aspect-[4/5] bg-neutral-100 overflow-hidden">
        <img
          src={item.productId.media[0]?.url}
          alt={item.productId.product_name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between py-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-black/50 mb-2">
              {item.productId.category}
            </p>

            <h2 className="text-2xl font-semibold mb-3">
              {item.productId.product_name}
            </h2>

            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-black/50">
                  Size:
                </span>

                <span className="text-sm font-medium uppercase">
                  {item.size}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-black/50">
                  Color:
                </span>

                <div
                  className="w-4 h-4 rounded-full border border-black/10"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleDelete}
            className="text-black/40 hover:text-red-500 transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex justify-between items-end">
          <QuantitySelector
            quantity={item.quantity}
            itemId={item._id}
            userId={userId}
            fetchCart={fetchCart}
          />

          <p className="text-2xl font-semibold">
            ₹{item.productId.sale_price}
          </p>
        </div>
      </div>
    </article>
  );
}

export default CartItem;