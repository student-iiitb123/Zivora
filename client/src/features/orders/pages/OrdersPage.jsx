//import OrdersNavbar from "../components/OrdersNavbar";
import OrdersHero from "../components/OrdersHero";
import OrdersList from "../components/OrdersList";
import LoadMoreOrders from "../components/LoadMoreOrders";
import OrdersBottomNav from "../components/OrdersBottomNav";

function OrdersPage() {
  return (
    <>
  

      <main className="pt-24 pb-32">
        <OrdersHero />

        <OrdersList />

        <LoadMoreOrders />
      </main>

      <OrdersBottomNav />
    </>
  );
}

export default OrdersPage;