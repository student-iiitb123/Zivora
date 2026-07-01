import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  ArrowRight,
  ShoppingBag,
  PackageSearch,
  Star,
} from "lucide-react";

export default function BestSellers() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const { data } = await axios.get(
          "https://zivora-262a.onrender.com/api/listings/best-sellers"
        );

        setProducts(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-black">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* HEADING */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-8 sm:mb-10">
          <div>
            <span className="flex items-center gap-2 text-xs sm:text-sm text-white/50 tracking-[4px] uppercase mb-3 font-mono">
              <span className="w-6 h-px bg-white/40" />
              Curated Favorites
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[0.95]">
              Best Sellers
            </h2>
          </div>

          <button
            onClick={() => navigate("/products")}
            className="group w-fit text-xs sm:text-sm uppercase tracking-widest text-white flex items-center gap-2"
          >
            <span className="border-b border-white pb-1 group-hover:text-[#C6FF3A] group-hover:border-[#C6FF3A] transition-all">
              View All
            </span>

            <ArrowRight
              size={16}
              className="group-hover:text-[#C6FF3A] transition-all group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* MOVING TICKER */}
        <div className="relative overflow-hidden rounded-full bg-[#111] border border-white/10 mb-12 py-2.5">
          <div className="marquee-track flex gap-8 whitespace-nowrap text-[11px] sm:text-xs font-mono tracking-[3px] uppercase text-[#C6FF3A]">
            {Array(2)
              .fill([
                "🔥 Trending Now",
                "Customer Faves",
                "Restocked This Week",
                "Selling Fast",
                "Loved By 10k+",
              ])
              .flat()
              .concat(
                Array(2)
                  .fill([
                    "🔥 Trending Now",
                    "Customer Faves",
                    "Restocked This Week",
                    "Selling Fast",
                    "Loved By 10k+",
                  ])
                  .flat()
              )
              .map((text, i) => (
                <span key={i} className="flex items-center gap-8">
                  {text}
                  <span className="text-white/20">•</span>
                </span>
              ))}
          </div>

          <style>{`
            .marquee-track{
              width:max-content;
              animation:marquee-scroll 22s linear infinite;
            }

            @keyframes marquee-scroll{
              from{transform:translateX(0);}
              to{transform:translateX(-50%);}
            }
          `}</style>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 rounded-3xl bg-[#111] border border-white/10">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <PackageSearch
                size={32}
                className="text-[#C6FF3A]"
              />
            </div>

            <h3 className="text-3xl font-black text-white uppercase mb-3">
              Nothing Here Yet
            </h3>

            <p className="text-white/50 text-center max-w-md mb-8">
              We're restocking the favorites. Browse the complete collection
              while you wait.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="px-8 py-4 rounded-full bg-[#C6FF3A] text-black font-semibold uppercase tracking-[3px] hover:bg-white transition"
            >
              Explore Collection
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const primaryImg =
    product.media?.[0]?.url ||
    "https://via.placeholder.com/600x750";

  const secondaryImg =
    product.media?.[1]?.url || primaryImg;

  const mrp = product.mrp || product.original_price;

  const hasDiscount =
    mrp && mrp > product.sale_price;

  const discountPct = hasDiscount
    ? Math.round(((mrp - product.sale_price) / mrp) * 100)
    : 0;

  return (
    <div
      onClick={() => navigate(`/product/${product._id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#111] border border-white/10 mb-5 transition duration-500 group-hover:border-[#C6FF3A]/40">
        <img
          src={hovered ? secondaryImg : primaryImg}
          alt={product.product_name}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-black text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-[2px]">
            Bestseller
          </span>

          {hasDiscount && (
            <span className="bg-[#C6FF3A] text-black text-[10px] px-3 py-1 rounded-full uppercase tracking-[2px] w-fit">
              {discountPct}% OFF
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition ${
            liked
              ? "bg-[#C6FF3A]"
              : "bg-black/70 backdrop-blur"
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
          className="absolute bottom-4 left-4 right-4 bg-white text-black rounded-full py-3 uppercase tracking-widest text-xs font-semibold flex justify-center items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-3 md:group-hover:translate-y-0 transition duration-300 hover:bg-[#C6FF3A]"
        >
          <ShoppingBag size={15} />
          Add to Bag
        </button>
      </div>

      <div className="flex justify-between items-start mb-1">
        <h4 className="text-white font-semibold text-base">
          {product.product_name}
        </h4>

        {product.rating && (
          <span className="flex items-center gap-1 text-xs text-white/70">
            <Star
              size={12}
              className="fill-[#C6FF3A] text-[#C6FF3A]"
            />
            {product.rating}
          </span>
        )}
      </div>

      <p className="text-white/40 uppercase tracking-wide text-sm mb-2">
        {product.category}
      </p>

      <div className="flex items-center gap-2">
        <span className="text-white font-bold text-lg">
          ₹{product.sale_price}
        </span>

        {hasDiscount && (
          <span className="line-through text-white/30">
            ₹{mrp}
          </span>
        )}
      </div>
    </div>
  );
}