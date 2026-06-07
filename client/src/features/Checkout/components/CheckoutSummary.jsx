import {
  Lock,
} from "lucide-react";

import CheckoutProduct from "./CheckoutProduct";
import { checkoutProducts } from "../data/checkoutProducts";

function CheckoutSummary() {
  return (
    <div className="sticky top-28">

      <div className="bg-white border p-8 shadow-sm">

        <h3 className="text-2xl font-semibold mb-8">
          Order Summary
        </h3>

        <div className="space-y-6 mb-8">
          {checkoutProducts.map((product) => (
            <CheckoutProduct
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* Coupon */}

        <div className="flex gap-2 mb-8">
          <input
            type="text"
            placeholder="Promo Code"
            className="flex-1 border px-4 py-3"
          />

          <button className="px-6 py-3 bg-neutral-200 hover:bg-black hover:text-white transition">
            Apply
          </button>
        </div>

        {/* Pricing */}

        <div className="space-y-4 border-t pt-6">

          <div className="flex justify-between text-black/60">
            <span>Subtotal</span>
            <span>$2,140.00</span>
          </div>

          <div className="flex justify-between text-black/60">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between text-black/60">
            <span>Estimated Tax</span>
            <span>$171.20</span>
          </div>

          <div className="flex justify-between pt-4 border-t text-xl font-semibold">
            <span>Total</span>
            <span>$2,311.20</span>
          </div>

        </div>

        {/* CTA */}

        <button className="w-full mt-8 bg-black text-white py-5 uppercase tracking-[4px] flex items-center justify-center gap-3 hover:bg-neutral-800 transition">

          <Lock size={18} />

          Complete Secure Purchase

        </button>

      </div>

    </div>
  );
}

export default CheckoutSummary;