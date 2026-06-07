import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import SecurityBanner from "../components/SecurityBanner";
import ShippingForm from "../components/ShippingForm";
import DeliveryMethods from "../components/DeliveryMethods";
import PaymentMethods from "../components/PaymentMethods";
import CheckoutSummary from "../components/CheckoutSummary";
import TrustBadges from "../components/TrustBadges";

function CheckoutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-12 gap-12">

          <div className="lg:col-span-7 space-y-12">
            <SecurityBanner />
            <ShippingForm />
            <DeliveryMethods />
            <PaymentMethods />
          </div>

          <div className="lg:col-span-5">
            <CheckoutSummary />
            <TrustBadges />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default CheckoutPage;