import { X } from "lucide-react";

function WishlistItem({ item }) {
  return (
    <div className="group">
      <div className="aspect-[3/4] overflow-hidden relative mb-6">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />

        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <X size={18} />
        </button>
      </div>

      <div className="flex justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold">
            {item.name}
          </h3>

          <p className="text-black/50">
            {item.color}
          </p>
        </div>

        <span className="font-semibold">
          {item.price}
        </span>
      </div>

      <button className="w-full h-14 bg-black text-white uppercase tracking-[3px]">
        Add To Bag
      </button>
    </div>
  );
}

export default WishlistItem;