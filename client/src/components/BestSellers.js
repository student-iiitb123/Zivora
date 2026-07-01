import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowRight, ShoppingBag, PackageSearch, Star } from "lucide-react";

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
      } catch (error) {
        console.log(error);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* HEADING */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-8 sm:mb-10">
          <div>
            <span className="flex items-center gap-2 text-xs sm:text-sm text-black/50 tracking-[4px] uppercase mb-3 font-mono">
              <span className="w-6 h-px bg-black/40" />
              Curated Favorites
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black uppercase leading-[0.95]">
              Best Sellers
            </h2>
          </div>

          <button
            onClick={() => navigate("/products")}
            className="group w-fit text-xs sm:text-sm uppercase tracking-widest text-black flex items-center gap-2"
          >
            <span className="border-b border-black pb-1 group-hover:opacity-60 transition-opacity">
              View All
            </span>
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* MARQUEE TICKER */}
        <div className="relative overflow-hidden bg-black rounded-full mb-10 sm:mb-14 py-2.5">
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
                  <span className="text-white/30">•</span>
                </span>
              ))}
          </div>
          <style>{`
            .marquee-track {
              width: max-content;
              animation: marquee-scroll 22s linear infinite;
            }
            @keyframes marquee-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}</style>
        </div>

        {/* PRODUCTS */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-14 lg:gap-x-10">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center rounded-3xl bg-[#0A0A0A]">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <PackageSearch size={32} strokeWidth={1.6} className="text-[#C6FF3A]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-3">
              Nothing Here Yet
            </h3>

            <p className="max-w-md text-white/50 text-sm leading-7 mb-8 px-6">
              We're restocking the faves. Check back soon or browse the full
              drop while you wait.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="px-8 py-4 bg-[#C6FF3A] text-black text-sm font-semibold uppercase tracking-[4px] rounded-full hover:bg-white transition-colors"
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
    product.media?.[0]?.url || "https://via.placeholder.com/600x750";
  const secondaryImg = product.media?.[1]?.url || primaryImg;

  const mrp = product.mrp || product.original_price;
  const hasDiscount = mrp && mrp > product.sale_price;
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
      <div className="relative mb-4 sm:mb-5 aspect-[4/5] overflow-hidden bg-neutral-100 rounded-2xl">
        <img
          src={hovered ? secondaryImg : primaryImg}
          alt={product.product_name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* top-left badges */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col gap-2">
          <span className="text-[10px] font-mono tracking-[2px] uppercase bg-black text-white px-2.5 py-1 rounded-full">
            Bestseller
          </span>
          {hasDiscount && (
            <span className="text-[10px] font-mono tracking-[2px] uppercase bg-[#C6FF3A] text-black px-2.5 py-1 rounded-full w-fit">
              {discountPct}% Off
            </span>
          )}
        </div>

        {/* wishlist toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked((v) => !v);
          }}
          aria-label="Toggle wishlist"
          className={`absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
            liked ? "bg-black" : "bg-white/90 hover:bg-white"
          }`}
        >
          <Heart
            size={18}
            strokeWidth={2}
            className={liked ? "text-[#C6FF3A] fill-[#C6FF3A]" : "text-black"}
          />
        </button>

        {/* add to bag */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 backdrop-blur-sm py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-3 md:group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
        >
          <ShoppingBag size={15} strokeWidth={2} />
          Add to Bag
        </button>
      </div>

      <div className="flex items-start justify-between gap-2 mb-1">
        <h4 className="text-sm sm:text-base font-semibold text-black leading-snug">
          {product.product_name}
        </h4>

        {product.rating && (
          <span className="shrink-0 flex items-center gap-1 text-[11px] text-black/60 font-medium">
            <Star size={12} strokeWidth={0} className="fill-[#C6FF3A] text-[#C6FF3A]" />
            {product.rating}
          </span>
        )}
      </div>

      <p className="text-xs sm:text-sm text-black/45 mb-2 uppercase tracking-wide">
        {product.category}
      </p>

      <div className="flex items-center gap-2">
        <p className="text-sm sm:text-base font-bold text-black">
          ₹{product.sale_price}
        </p>
        {hasDiscount && (
          <p className="text-xs sm:text-sm text-black/35 line-through">
            ₹{mrp}
          </p>
        )}
      </div>
    </div>
  );
}
