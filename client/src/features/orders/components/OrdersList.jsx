import OrderCard from "./OrderCard";

function OrdersList({ orders }) {
  if (!orders.length) {
    return (
      <section className="px-5 md:px-16 py-24 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          No Orders Yet
        </h2>

        <p className="text-black/50">
          Your purchase history will appear here.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-12 px-5 md:px-16">
      {orders.map((order) => (
        <OrderCard
          key={order._id}
          order={order}
        />
      ))}
    </section>
  );
}

export default OrdersList;