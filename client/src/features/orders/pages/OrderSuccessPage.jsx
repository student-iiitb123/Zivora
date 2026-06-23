import { CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

function OrderSuccessPage() {
  const { orderId } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-6">
      <div className="bg-white max-w-xl w-full p-12 text-center shadow-sm border">

        <CheckCircle
          size={80}
          className="mx-auto text-green-600 mb-8"
        />

        <h1 className="text-4xl font-semibold mb-4">
          Order Placed Successfully
        </h1>

        <p className="text-black/60 mb-2">
          Thank you for shopping with ZIVORA.
        </p>

        <p className="text-black/50 text-sm mb-8">
          Order ID: {orderId}
        </p>

        <div className="flex flex-col gap-4">
          <Link
            to="/orders"
            className="bg-black text-white py-4 uppercase tracking-[4px]"
          >
            View My Orders
          </Link>

          <Link
            to="/"
            className="border py-4 uppercase tracking-[4px]"
          >
            Continue Shopping
          </Link>
        </div>

      </div>
    </div>
  );
}

export default OrderSuccessPage;