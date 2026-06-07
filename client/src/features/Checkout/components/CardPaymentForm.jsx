import FloatingInput from "./FloatingInput";

function CardPaymentForm() {
  return (
    <div className="bg-neutral-50 p-8 border">
      <div className="grid md:grid-cols-2 gap-8">

        <div className="md:col-span-2">
          <FloatingInput label="Card Number" />
        </div>

        <FloatingInput label="MM/YY" />
        <FloatingInput label="CVV" />

      </div>
    </div>
  );
}

export default CardPaymentForm;