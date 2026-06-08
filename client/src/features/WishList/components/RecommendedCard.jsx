function RecommendedCard({ item }) {
  return (
    <div className="min-w-[280px]">
      <div className="aspect-[4/5] overflow-hidden mb-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="font-medium">
        {item.name}
      </p>

      <p className="text-black/50">
        {item.price}
      </p>
    </div>
  );
}

export default RecommendedCard;