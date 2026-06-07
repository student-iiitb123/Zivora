import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import { cartItems } from "../data/cartData";

function CartPage() {
  return (
    <div className="bg-white text-black">
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-10 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <section className="lg:col-span-2">
            <h1 className="text-4xl font-semibold mb-12">Shopping Cart</h1>

            <div className="flex flex-col gap-10">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </section>

          <OrderSummary />
        </div>

        <YouMayAlsoLike />
      </main>

      <Footer />
    </div>
  );
}

export default CartPage;