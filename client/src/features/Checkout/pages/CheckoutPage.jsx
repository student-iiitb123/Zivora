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
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user?._id) return;

      const res = await getCart(user._id);

      setCartItems(res.data.cart?.items || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      const user = JSON.parse(localStorage.getItem("user"));

      if (!user?._id) {
        setErrorMessage("Please login first.");
        setLoading(false);
        return;
      }

      const {
        fullName,
        email,
        phone,
        address,
        city,
        state,
        pincode,
      } = shippingAddress;

      if (
        !fullName.trim() ||
        !email.trim() ||
        !phone.trim() ||
        !address.trim() ||
        !city.trim() ||
        !state.trim() ||
        !pincode.trim()
      ) {
        setErrorMessage(
          "Please fill all shipping details before placing your order."
        );
        setLoading(false);
        return;
      }

      const payload = {
        userId: user._id,
        shippingAddress,
        paymentMethod,
      };

      console.log("Sending Order:", payload);

      const res = await placeOrder(payload);

      if (res.data.success) {
        navigate(`/order-success/${res.data.order._id}`);
      }
    } catch (error) {
      console.log(error);

      setErrorMessage(
        error?.response?.data?.message ||
          "Unable to place order. Please try again."
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

            {errorMessage && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                <h3 className="font-semibold text-red-700">
                  Unable to Place Order
                </h3>

                <p className="mt-1 text-sm text-red-600">
                  {errorMessage}
                </p>
              </div>
            )}

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