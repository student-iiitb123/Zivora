import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import SecurityBanner from "../components/SecurityBanner";
import ShippingForm from "../components/ShippingForm";
import DeliveryMethods from "../components/DeliveryMethods";
import PaymentMethods from "../components/PaymentMethods";
import CheckoutSummary from "../components/CheckoutSummary";
import TrustBadges from "../components/TrustBadges";
import { placeOrder } from "../../../services/orderService";
import { getCart } from "../../../services/cartService";

function CheckoutPage() {
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");
   const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);


useEffect(() => {
  fetchCart();
}, []);

const fetchCart = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user?._id) return;

    const res = await getCart(user._id);

    console.log("Checkout Cart:", res.data);

    setCartItems(res.data.cart?.items || []);
  } catch (error) {
    console.log(error);
  }
};
  const handlePlaceOrder = async () => {
    try {
      setLoading(true);

      const user = JSON.parse(localStorage.getItem("user"));

      if (!user?._id) {
        alert("Please login first");
        return;
      }

      const payload = {
        userId: user._id,
        shippingAddress,
        paymentMethod,
      };

      console.log("Sending Order:", payload);

      const res = await placeOrder(payload);

      console.log("Order Response:", res.data);

      if (res.data.success) {
        navigate(`/order-success/${res.data.order._id}`);
      }
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          "Failed to place order"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="pt-24 max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-12">
            <SecurityBanner />

            <ShippingForm
              shippingAddress={shippingAddress}
              setShippingAddress={setShippingAddress}
            />

            <DeliveryMethods />

            <PaymentMethods
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </div>

          <div className="lg:col-span-5">
            <CheckoutSummary
  cartItems={cartItems}
  handlePlaceOrder={handlePlaceOrder}
  loading={loading}
/>

            <TrustBadges />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default CheckoutPage;