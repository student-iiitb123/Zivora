import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Sparkles, Heart } from "lucide-react";

const CATEGORIES = ["ALL", "MEN", "WOMEN"];

/** Fires `true` once the element scrolls into view, then stays true. */
function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(el);
      }
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}

export default function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState({});
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  const navigate = useNavigate();
  const pillsWrapRef = useRef(null);
  const pillRefs = useRef({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://zivora-262a.onrender.com/api/listings"
        );
        setProducts(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // measure the active pill so the sliding highlight can chase it
  useEffect(() => {
    const measure = () => {
      const btn = pillRefs.current[activeCategory];
      const wrap = pillsWrapRef.current;
      if (btn && wrap) {
        const btnRect = btn.getBoundingClientRect();
        const wrapRect = wrap.getBoundingClientRect();
        setPillStyle({
          left: btnRect.left - wrapRect.left,
          width: btnRect.width,
        });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeCategory, loading]);

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  const toggleLike = (id) =>
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  const [headerRef, headerInView] = useInView();

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#0B0B0C] overflow-hidden">
      {/* floating decorative sparkles */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {[
          { top: "8%", left: "4%", size: 16, delay: "0s", dur: "6s" },
          { top: "18%", left: "92%", size: 22, delay: "1.2s", dur: "7s" },
          { top: "70%", left: "6%", size: 14, delay: "0.6s", dur: "5.5s" },
          { top: "82%", left: "90%", size: 18, delay: "1.8s", dur: "6.5s" },
        ].map((s, i) => (
          <Sparkles
            key={i}
            size={s.size}
            className="absolute text-[#C6FF3A]/25 float-sparkle"
            style={{ top: s.top, left: s.left, animationDelay: s.delay, animationDuration: s.dur }}
          />
        ))}
      </div>

      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#C6FF3A]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* HEADING */}
        <div
          ref={headerRef}
          className={`text-center mb-10 sm:mb-14 transition-all duration-700 ease-out ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs tracking-[4px] uppercase text-white/50 font-mono mb-4">
            <Sparkles size={14} strokeWidth={2} className="text-[#C6FF3A] animate-pulse" />
            Fresh Drops
          </span>

          <h2 className="gradient-shimmer text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-8 sm:mb-10">
            New Arrivals
          </h2>

          {/* PILL FILTERS with sliding highlight */}
          <div
            ref={pillsWrapRef}
            className="relative inline-flex gap-2 sm:gap-3 flex-wrap justify-center bg-white/[0.04] border border-white/10 rounded-full p-1.5"
          >
            {/* sliding highlight */}
            <span
              className="absolute top-1.5 bottom-1.5 rounded-full bg-[#C6FF3A] transition-all duration-350 ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{ left: pillStyle.left, width: pillStyle.width }}
            />
            {CATEGORIES.map((category) => (
              <button
                key={category}
                ref={(el) => (pillRefs.current[category] = el)}
                onClick={() => setActiveCategory(category)}
                className={`relative z-10 text-xs sm:text-sm font-semibold uppercase tracking-widest px-5 sm:px-6 py-2.5 rounded-full transition-colors duration-300 ${
                  activeCategory === category
                    ? "text-black"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* LOADING SKELETON */}
        {loading ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div key={i} className={i % 2 !== 0 ? "md:mt-12" : ""}>
                  <div className="aspect-[4/5] mb-4 rounded-2xl bg-white/[0.05] skeleton-shimmer" />
                  <div className="h-3 w-3/4 mb-2 rounded-full bg-white/[0.05] skeleton-shimmer" />
                  <div className="h-3 w-1/3 rounded-full bg-white/[0.05] skeleton-shimmer" />
                </div>
              ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product._id}
                product={product}
                index={index}
                liked={!!liked[product._id]}
                onToggleLike={() => toggleLike(product._id)}
                onClick={() => navigate(`/products/${product._id}`)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 sm:py-28 px-6 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-8 animate-pulse">
              <Sparkles size={36} strokeWidth={1.6} className="text-[#C6FF3A]" />
            </div>

            <span className="text-[11px] tracking-[6px] uppercase text-white/40 font-mono mb-3">
              Coming Soon
            </span>

            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
              No New Arrivals Yet
            </h3>

            <p className="max-w-lg text-white/50 leading-7 mb-10 text-sm">
              Fresh styles are landing soon. Check back for silhouettes and
              essentials worth the wait.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="bg-[#C6FF3A] text-black px-10 py-4 text-sm font-semibold uppercase tracking-[4px] rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all"
            >
              Explore Collection
            </button>
          </div>
        )}
      </div>

      <style>{`
        /* gradient shimmer heading — light sweep on dark bg */
        .gradient-shimmer {
          background: linear-gradient(90deg, #fff 0%, #fff 40%, #C6FF3A 50%, #fff 60%, #fff 100%);
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer-sweep-text 5s ease-in-out infinite;
        }
        @keyframes shimmer-sweep-text {
          0% { background-position: 200% 0; }
          100% { background-position: -50% 0; }
        }

        /* floating sparkles */
        .float-sparkle {
          animation-name: float-sparkle-anim;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes float-sparkle-anim {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.25; }
          50% { transform: translateY(-14px) rotate(15deg); opacity: 0.5; }
        }

        /* skeleton shimmer */
        .skeleton-shimmer {
          position: relative;
          overflow: hidden;
        }
        .skeleton-shimmer::after {
          content: "";
          position: absolute;
          inset: 0;
          transform: translateX(-100%);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          animation: shimmer-sweep 1.4s infinite;
        }
        @keyframes shimmer-sweep {
          100% { transform: translateX(100%); }
        }

        /* card entrance */
        .card-reveal {
          opacity: 0;
          transform: translateY(28px) scale(0.97);
          transition: opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .card-reveal.in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* NEW badge pulse ring */
        .new-badge-ping {
          position: absolute;
          inset: -3px;
          border-radius: 9999px;
          border: 1.5px solid #C6FF3A;
          animation: new-badge-ping-anim 1.8s cubic-bezier(0,0,0.2,1) infinite;
        }
        @keyframes new-badge-ping-anim {
          0% { transform: scale(0.9); opacity: 0.8; }
          80%, 100% { transform: scale(1.5); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .gradient-shimmer, .float-sparkle, .skeleton-shimmer::after,
          .card-reveal, .new-badge-ping {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function ProductCard({ product, index, liked, onToggleLike, onClick }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const cardRef = useRef(null);

  // cursor spotlight — updates CSS vars consumed by the glow overlay
  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={(node) => {
        ref.current = node;
        cardRef.current = node;
      }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`card-reveal group cursor-pointer ${inView ? "in-view" : ""} ${
        index % 2 !== 0 ? "md:mt-12" : ""
      }`}
      style={{ transitionDelay: inView ? `${(index % 8) * 70}ms` : "0ms" }}
    >
      <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-white/[0.05] rounded-2xl border border-white/[0.06]">
        <img
          src={product.media?.[0]?.url || "https://via.placeholder.com/600x750"}
          alt={product.product_name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
        />

        {/* cursor spotlight glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(180px circle at var(--mx, 50%) var(--my, 50%), rgba(198,255,58,0.25), transparent 70%)",
          }}
        />

        {/* NEW badge with pulsing ring */}
        <span className="absolute top-3 left-3">
          <span className="relative inline-flex">
            <span className="new-badge-ping" />
            <span className="relative text-[10px] font-mono tracking-[2px] uppercase bg-[#C6FF3A] text-black px-2.5 py-1 rounded-full">
              New
            </span>
          </span>
        </span>

        {/* wishlist */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleLike();
          }}
          aria-label="Toggle wishlist"
          className={`absolute top-3 right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
            liked
              ? "bg-[#C6FF3A] scale-100"
              : "bg-black/40 border border-white/20 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
          }`}
        >
          <Heart
            size={15}
            strokeWidth={2}
            className={`transition-transform duration-300 ${liked ? "scale-110" : ""} ${
              liked ? "text-black fill-black" : "text-white"
            }`}
          />
        </button>

        {/* bottom gradient on hover */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h5 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wide mb-1 transition-colors group-hover:text-white/70">
        {product.product_name}
      </h5>

      <p className="text-xs sm:text-sm text-white/50 font-medium">
        ₹{product.sale_price}
      </p>
    </div>
  );
}
