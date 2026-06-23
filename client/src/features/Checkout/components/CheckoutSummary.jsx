import { Lock } from "lucide-react";
import CheckoutProduct from "./CheckoutProduct";

function CheckoutSummary({
  cartItems = [],
  handlePlaceOrder,
  loading,
}) {
  const subtotal = cartItems.reduce(
  (sum, item) =>
    sum +
    item.productId.sale_price * item.quantity,
  0
);

  const shipping = 0;

  const tax = Math.round(subtotal * 0.08);

  const total = subtotal + shipping + tax;

  return (
    <div className="sticky top-28">
      <div className="bg-white border p-8 shadow-sm">

        <h3 className="text-2xl font-semibold mb-8">
          Order Summary
        </h3>

        <div className="space-y-6 mb-8">
         {cartItems?.map((item) => (
            <CheckoutProduct
              key={item._id}
              product={item}
            />
          ))}
        </div>

        <div className="flex gap-2 mb-8">
          <input
            type="text"
            placeholder="Promo Code"
            className="flex-1 border px-4 py-3"
          />

          <button className="px-6 py-3 bg-neutral-200">
            Apply
          </button>
        </div>

        <div className="space-y-4 border-t pt-6">

          <div className="flex justify-between text-black/60">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between text-black/60">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between text-black/60">
            <span>Tax</span>
            <span>₹{tax}</span>
          </div>

          <div className="flex justify-between pt-4 border-t text-xl font-semibold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

        </div>

        <button
          onClick={handlePlaceOrder}
          disabled={loading}
          className="w-full mt-8 bg-black text-white py-5 uppercase tracking-[4px] flex items-center justify-center gap-3 hover:bg-neutral-800 transition"
        >
          <Lock size={18} />

          {loading
            ? "Placing Order..."
            : "Complete Secure Purchase"}
        </button>

      </div>
    </div>
  );
}

export default CheckoutSummary;