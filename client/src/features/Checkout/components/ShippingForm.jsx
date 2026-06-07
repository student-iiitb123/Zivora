import FloatingInput from "./FloatingInput";

function ShippingForm() {
  return (
    <section>
      <div className="flex justify-between mb-8">
        <h2 className="text-2xl font-semibold">
          Shipping Details
        </h2>

        <button className="underline text-sm">
          Login for faster checkout
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        <FloatingInput label="First Name" />
        <FloatingInput label="Last Name" />

        <div className="md:col-span-2">
          <FloatingInput label="Email Address" />
        </div>

        <div className="md:col-span-2">
          <FloatingInput label="Street Address" />
        </div>

        <FloatingInput label="City" />
        <FloatingInput label="Postal Code" />

      </div>
    </section>
  );
}

export default ShippingForm;