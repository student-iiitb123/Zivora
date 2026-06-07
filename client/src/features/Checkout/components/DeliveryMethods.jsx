import DeliveryCard from "./DeliveryCard";

function DeliveryMethods() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8">
        Delivery Method
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <DeliveryCard
          title="Standard"
          time="5-7 Business Days"
          price="FREE"
        />

        <DeliveryCard
          title="Express"
          time="2-3 Business Days"
          price="$25"
        />

        <DeliveryCard
          title="Priority"
          time="Next Day"
          price="$45"
        />
      </div>
    </section>
  );
}

export default DeliveryMethods;