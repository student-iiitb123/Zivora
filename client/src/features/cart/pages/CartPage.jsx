import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import YouMayAlsoLike from "../components/YouMayAlsoLike";

import { getCart } from "../../../services/cartService.js"
function CartPage() {
  const [items, setItems] = useState([]);
  const [userId, setUserId] = useState(null);

useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?._id) {
    setUserId(user._id);
  }
}, []);

 useEffect(() => {
  if (userId) {
    fetchCart();
  }
}, [userId]);

// useEffect(() => {
//   console.log("Current UserId:", userId);
// }, [userId]);

const fetchCart = async () => {
  try {
    const res = await getCart(userId);

    console.log("Cart API Response:", res.data);

    setItems(res.data.cart?.items || []);
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div className="bg-white text-black">
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-10 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

          <section className="lg:col-span-2">
            <h1 className="text-4xl font-semibold mb-12">
              Shopping Cart
            </h1>

            <div className="flex flex-col gap-10">



              {items.length > 0 ? (
                
                items.map((item) => (
                  <CartItem
                    key={item._id}
                    item={item}
                    userId={userId}
                    fetchCart={fetchCart}
                  />
                ))
              ) : (
                <p>Your cart is empty.</p>
              )}

            </div>
          </section>

          <OrderSummary items={items} />

        </div>

        <YouMayAlsoLike />
      </main>

      <Footer />
    </div>
  );
}

export default CartPage;