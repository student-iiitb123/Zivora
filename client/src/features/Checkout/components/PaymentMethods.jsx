import CardPaymentForm from "./CardPaymentForm";

function PaymentMethods() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8">
        Payment Method
      </h2>

      <div className="flex gap-4 mb-8">
        <button className="px-6 py-3 bg-black text-white">
          CARD
        </button>

        <button className="px-6 py-3 border">
          APPLE PAY
        </button>

        <button className="px-6 py-3 border">
          PAYPAL
        </button>
      </div>

      <CardPaymentForm />
    </section>
  );
}

export default PaymentMethods;