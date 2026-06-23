import {
  Lock,
  ShieldCheck,
  Truck,
} from "lucide-react";

function OrderSummary({ items }) {
  const subtotal = items.reduce(
    (sum, item) =>
      sum +
      item.quantity *
        item.productId.sale_price,
    0
  );

  return (
    <aside className="lg:sticky lg:top-32">
      <div className="bg-white/80 backdrop-blur-xl border border-black/10 p-8 lg:p-10 shadow-[0_40px_60px_-15px_rgba(0,0,0,0.08)]">
        <h2 className="text-2xl font-semibold mb-8">
          Order Summary
        </h2>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between text-black/60">
            <span>Subtotal</span>

            <span className="text-black font-medium">
              ₹{subtotal}
            </span>
          </div>

          <div className="flex justify-between text-black/60">
            <span>Shipping</span>

            <span className="italic text-sm">
              Calculated at checkout
            </span>
          </div>

          <div className="flex justify-between text-black/60">
            <span>Tax</span>

            <span className="text-black font-medium">
              ₹0
            </span>
          </div>
        </div>

        <div className="mb-8">
          <label className="text-xs uppercase tracking-widest text-black/50 mb-2 block">
            Promo Code
          </label>

          <div className="flex border-b border-black/20">
            <input
              className="w-full py-3 bg-transparent outline-none text-sm placeholder:text-black/30"
              placeholder="Enter code"
              type="text"
            />

            <button className="text-xs uppercase tracking-widest hover:opacity-60">
              Apply
            </button>
          </div>
        </div>

        <div className="flex justify-between items-baseline pt-6 border-t border-black/10 mb-10">
          <span className="text-sm uppercase tracking-widest">
            Total
          </span>

          <span className="text-4xl font-bold">
            ₹{subtotal}
          </span>
        </div>

        <button className="w-full py-5 bg-black text-white text-sm font-semibold uppercase tracking-[4px] hover:bg-neutral-800 transition">
          Proceed To Checkout
        </button>

        <div className="mt-8 flex justify-center gap-6 text-black/40">
          <ShieldCheck size={20} />
          <Truck size={20} />
          <Lock size={20} />
        </div>
      </div>
    </aside>
  );
}

export default OrderSummary;