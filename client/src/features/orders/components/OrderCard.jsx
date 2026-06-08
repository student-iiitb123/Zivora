import OrderActions from "./OrderActions";

function OrderCard({ order }) {
  return (
    <article className="group border-b border-black/10 pb-10">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="w-full md:w-48">
          <p className="text-sm text-black/50 mb-1">
            {order.date}
          </p>

          <p className="text-lg font-semibold mb-4">
            #{order.id}
          </p>

          <span
            className={`px-3 py-1 text-xs uppercase tracking-[2px] ${
              order.status === "SHIPPED"
                ? "border border-black"
                : "bg-neutral-100"
            }`}
          >
            {order.status}
          </span>
        </div>

        <div className="flex gap-6 flex-1">
          <div className="w-24 md:w-32 aspect-[4/5] overflow-hidden bg-neutral-100">
            <img
              src={order.image}
              alt={order.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {order.name}
              </h3>

              <p className="text-black/50">
                {order.variant}
              </p>

              <p className="mt-4 font-semibold">
                {order.price}
              </p>
            </div>

            <OrderActions
              shipped={order.status === "SHIPPED"}
            />
          </div>
        </div>
      </div>

      <div className="md:hidden flex justify-between mt-6 pt-4 border-t border-black/10">
        <button className="text-sm uppercase">
          Track Order
        </button>

        <button className="text-sm uppercase">
          Details
        </button>
      </div>
    </article>
  );
}

export default OrderCard;