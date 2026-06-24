import FloatingInput from "./FloatingInput";

function ShippingForm({
  shippingAddress,
  setShippingAddress,
  errorMessage,
}) {
  const handleChange = (field, value) => {
    setShippingAddress({
      ...shippingAddress,
      [field]: value,
    });
  };

  const hasError = (field) => {
    return (
      errorMessage &&
      !shippingAddress[field]?.trim()
    );
  };

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

        <FloatingInput
          label="Full Name"
          value={shippingAddress.fullName}
          onChange={(e) =>
            handleChange("fullName", e.target.value)
          }
          error={hasError("fullName")}
        />

        <FloatingInput
          label="Phone Number"
          value={shippingAddress.phone}
          onChange={(e) =>
            handleChange("phone", e.target.value)
          }
          error={hasError("phone")}
        />

        <div className="md:col-span-2">
          <FloatingInput
            label="Email Address"
            value={shippingAddress.email}
            onChange={(e) =>
              handleChange("email", e.target.value)
            }
            error={hasError("email")}
          />
        </div>

        <div className="md:col-span-2">
          <FloatingInput
            label="Street Address"
            value={shippingAddress.address}
            onChange={(e) =>
              handleChange("address", e.target.value)
            }
            error={hasError("address")}
          />
        </div>

        <FloatingInput
          label="City"
          value={shippingAddress.city}
          onChange={(e) =>
            handleChange("city", e.target.value)
          }
          error={hasError("city")}
        />

        <FloatingInput
          label="State"
          value={shippingAddress.state}
          onChange={(e) =>
            handleChange("state", e.target.value)
          }
          error={hasError("state")}
        />

        <FloatingInput
          label="Postal Code"
          value={shippingAddress.pincode}
          onChange={(e) =>
            handleChange("pincode", e.target.value)
          }
          error={hasError("pincode")}
        />

      </div>
    </section>
  );
}

export default ShippingForm;