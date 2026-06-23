import { useEffect, useState } from "react";

import OrdersHero from "../components/OrdersHero";
import OrdersList from "../components/OrdersList";
import LoadMoreOrders from "../components/LoadMoreOrders";
import OrdersBottomNav from "../components/OrdersBottomNav";

import { getUserOrders } from "../../../services/orderService";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user?._id) return;

      const res = await getUserOrders(user._id);

      setOrders(res.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="pt-24 pb-32">
        <OrdersHero />

        <OrdersList orders={orders} />

        <LoadMoreOrders />
      </main>

      <OrdersBottomNav />
    </>
  );
}

export default OrdersPage;