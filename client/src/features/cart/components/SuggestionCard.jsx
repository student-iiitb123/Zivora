function SuggestionCard({ item }) {
  return (
    <div className="min-w-[210px] md:min-w-[240px] flex-shrink-0 group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <button className="absolute bottom-3 left-3 right-3 py-2 bg-white/90 text-[11px] uppercase tracking-[3px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
          Quick Add
        </button>
      </div>

      <div className="flex justify-between gap-3 mb-1">
        <h3 className="text-sm font-medium">{item.name}</h3>
        <p className="text-sm">{item.price}</p>
      </div>
    </div>
  );
}

export default SuggestionCard;