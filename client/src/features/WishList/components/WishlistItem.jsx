import { X, ShoppingBag, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function WishlistItem({ item }) {
  const navigate = useNavigate();

  const mrp = item.mrp || item.price;
  const salePrice = item.salePrice || item.price;

  const discount =
    mrp > salePrice
      ? Math.round(((mrp - salePrice) / mrp) * 100)
      : 0;

  return (
    <div
      onClick={() => navigate(`/product/${item._id || item.id}`)}
      className="group cursor-pointer w-full max-w-[320px] mx-auto"
    >
      {/* IMAGE */}
      <div className="relative h-[400px] overflow-hidden rounded-3xl bg-[#111] border border-white/10">

        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute top-4 left-4 bg-[#C6FF3A] text-black text-[10px] font-semibold uppercase tracking-[2px] px-3 py-1 rounded-full">
            {discount}% OFF
          </span>
        )}

        {/* Remove */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 backdrop-blur flex items-center justify-center border border-white/10 hover:bg-red-500 transition"
        >
          <X size={18} className="text-white" />
        </button>

        {/* Stock */}
        <span className="absolute bottom-20 left-4 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase tracking-[2px] text-white">
          In Stock
        </span>

        {/* Add to Bag */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-4 left-4 right-4 py-3 rounded-full bg-white text-black uppercase tracking-[3px] font-semibold flex items-center justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#C6FF3A]"
        >
          <ShoppingBag size={16} />
          Add To Bag
        </button>
      </div>

      {/* DETAILS */}

      <div className="mt-5">

        <div className="flex justify-between items-start">

          <div>

            <h3 className="text-white font-semibold text-lg">
              {item.name}
            </h3>

            <p className="text-white/50 uppercase text-xs tracking-[2px] mt-1">
              {item.color}
            </p>

          </div>

          {item.rating && (
            <div className="flex items-center gap-1 text-white/70 text-sm">

              <Star
                size={13}
                className="fill-[#C6FF3A] text-[#C6FF3A]"
              />

              {item.rating}

            </div>
          )}

        </div>

        <div className="flex items-center gap-3 mt-4">

          <span className="text-xl font-bold text-white">
            ₹{salePrice}
          </span>

          {discount > 0 && (
            <span className="text-white/30 line-through">
              ₹{mrp}
            </span>
          )}

        </div>

      </div>

    </div>
  );
}

export default WishlistItem;