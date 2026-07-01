import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function RecommendedCard({ item }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const image1 = item.image;
  const image2 = item.image2 || item.image;

  const mrp = item.mrp || item.price;
  const salePrice = item.salePrice || item.price;

  const discount =
    mrp > salePrice
      ? Math.round(((mrp - salePrice) / mrp) * 100)
      : 0;

  return (
    <div
      onClick={() => navigate(`/product/${item._id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group min-w-[290px] cursor-pointer"
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#111] border border-white/10">

        <img
          src={hovered ? image2 : image1}
          alt={item.name}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute top-4 left-4 bg-[#C6FF3A] text-black text-[10px] uppercase tracking-[2px] px-3 py-1 rounded-full font-semibold">
            {discount}% OFF
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition
            ${
              liked
                ? "bg-[#C6FF3A]"
                : "bg-black/70 backdrop-blur hover:bg-black"
            }`}
        >
          <Heart
            size={18}
            className={
              liked
                ? "fill-black text-black"
                : "text-white"
            }
          />
        </button>

        {/* Add to Bag */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-4 left-4 right-4 py-3 rounded-full bg-white text-black font-semibold uppercase tracking-[3px]
          flex items-center justify-center gap-2
          opacity-0 translate-y-4
          group-hover:opacity-100
          group-hover:translate-y-0
          transition duration-300
          hover:bg-[#C6FF3A]"
        >
          <ShoppingBag size={15} />
          Add to Bag
        </button>
      </div>

      {/* DETAILS */}
      <div className="mt-5">

        <div className="flex justify-between items-start">

          <h3 className="text-white font-semibold text-base">
            {item.name}
          </h3>

          {item.rating && (
            <span className="flex items-center gap-1 text-sm text-white/70">
              <Star
                size={13}
                className="fill-[#C6FF3A] text-[#C6FF3A]"
              />
              {item.rating}
            </span>
          )}
        </div>

        <p className="text-white/45 uppercase text-xs tracking-[2px] mt-2">
          {item.category}
        </p>

        <div className="flex items-center gap-2 mt-3">

          <span className="text-white font-bold text-lg">
            ₹{salePrice}
          </span>

          {discount > 0 && (
            <span className="line-through text-white/30 text-sm">
              ₹{mrp}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecommendedCard;