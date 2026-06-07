function DeliveryCard({
  title,
  time,
  price
}) {
  return (
    <div className="border p-6 hover:border-black transition cursor-pointer">
      <h3 className="uppercase text-sm mb-2">
        {title}
      </h3>

      <p className="text-sm text-black/60 mb-4">
        {time}
      </p>

      <p className="text-xl font-semibold">
        {price}
      </p>
    </div>
  );
}

export default DeliveryCard;