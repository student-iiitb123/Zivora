import OrderCard from "./OrderCard";
import { orders } from "../data/ordersData";

function OrdersList() {
  return (
    <section className="space-y-12 px-5 md:px-16">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
        />
      ))}
    </section>
  );
}

export default OrdersList;