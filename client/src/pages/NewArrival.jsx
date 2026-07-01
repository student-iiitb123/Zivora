import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Sparkles, Heart, ChevronDown, SlidersHorizontal } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
];

/** Fires `true` once the element scrolls into view, then stays true. */
function useInView(options = { threshold: 0.12 }) {
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

export default function NewArrivalPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [liked, setLiked] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://zivora-262a.onrender.com/api/listings"
        );

        const sortedProducts = data.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setProducts(sortedProducts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price_asc") return a.sale_price - b.sale_price;
    if (sortBy === "price_desc") return b.sale_price - a.sale_price;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const toggleLike = (id) =>
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  const activeSortLabel =
    SORT_OPTIONS.find((o) => o.value === sortBy)?.label || "Newest First";

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative bg-[#0A0A0A] overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute -top-24 left-1/3 w-[420px] h-[420px] bg-[#C6FF3A]/15 rounded-full blur-[130px]" />
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {[
            { top: "20%", left: "6%", size: 16, delay: "0s" },
            { top: "65%", left: "92%", size: 20, delay: "1s" },
          ].map((s, i) => (
            <Sparkles
              key={i}
              size={s.size}
              className="absolute text-[#C6FF3A]/25 hero-float"
              style={{ top: s.top, left: s.left, animationDelay: s.delay }}
            />
          ))}
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-sm uppercase tracking-[4px] sm:tracking-[6px] text-white/50 font-mono mb-5">
            <Sparkles size={14} strokeWidth={2} className="text-[#C6FF3A] animate-pulse" />
            Fresh Off The Rack
          </span>

          <h1 className="hero-gradient text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase mb-4">
            New Arrivals
          </h1>

          <p className="text-white/50 text-sm sm:text-base max-w-lg mx-auto">
            The latest drops, sorted by what just landed. Nothing here is
            older than this week.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="min-h-screen bg-white py-14 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          {/* toolbar: count + sort */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 sm:mb-12 pb-6 border-b border-black/10">
            <p className="text-xs sm:text-sm text-black/50 font-mono tracking-wide uppercase">
              {loading ? "Loading…" : `${sortedProducts.length} pieces`}
            </p>

            <div className="relative">
              <button
                onClick={() => setSortOpen((v) => !v)}
                className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest px-4 py-2.5 rounded-full border border-black/15 hover:border-black/40 transition-colors"
              >
                <SlidersHorizontal size={14} strokeWidth={2} />
                {activeSortLabel}
                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  className={`transition-transform duration-300 ${sortOpen ? "rotate-180" : ""}`}
                />
              </button>

              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-black/10 rounded-xl shadow-xl overflow-hidden z-30">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSortBy(opt.value);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-neutral-50 transition-colors ${
                        sortBy === opt.value ? "text-black font-semibold" : "text-black/60"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <div key={i}>
                    <div className="aspect-[4/5] mb-4 rounded-2xl bg-neutral-100 skeleton-shimmer" />
                    <div className="h-3 w-3/4 mb-2 rounded-full bg-neutral-100 skeleton-shimmer" />
                    <div className="h-3 w-1/3 rounded-full bg-neutral-100 skeleton-shimmer" />
                  </div>
                ))}
            </div>
          ) : sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {sortedProducts.map((product, index) => (
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
            <div className="flex flex-col items-center justify-center py-24 sm:py-28 px-6 rounded-3xl bg-[#0A0A0A] text-center">
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-8 animate-pulse">
                <Sparkles size={36} strokeWidth={1.6} className="text-[#C6FF3A]" />
              </div>

              <span className="text-[11px] tracking-[6px] uppercase text-white/40 font-mono mb-3">
                Coming Soon
              </span>

              <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
                Nothing New Yet
              </h3>

              <p className="max-w-lg text-white/50 leading-7 mb-10 text-sm">
                Check back soon — fresh styles are on the way.
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
      </section>

      <Footer />

      <style>{`
        .hero-gradient {
          background: linear-gradient(90deg, #fff 0%, #fff 40%, #C6FF3A 50%, #fff 60%, #fff 100%);
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: hero-shimmer 5s ease-in-out infinite;
        }
        @keyframes hero-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -50% 0; }
        }
        .hero-float {
          animation: hero-float-anim 6s ease-in-out infinite;
        }
        @keyframes hero-float-anim {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-14px) rotate(12deg); opacity: 0.45; }
        }
        .skeleton-shimmer {
          position: relative;
          overflow: hidden;
        }
        .skeleton-shimmer::after {
          content: "";
          position: absolute;
          inset: 0;
          transform: translateX(-100%);
          background: linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent);
          animation: shimmer-sweep 1.4s infinite;
        }
        @keyframes shimmer-sweep {
          100% { transform: translateX(100%); }
        }
        .card-reveal {
          opacity: 0;
          transform: translateY(28px) scale(0.97);
          transition: opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .card-reveal.in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
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
          .hero-gradient, .hero-float, .skeleton-shimmer::after,
          .card-reveal, .new-badge-ping {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}

function ProductCard({ product, index, liked, onToggleLike, onClick }) {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const cardRef = useRef(null);

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
      className={`card-reveal group cursor-pointer ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: inView ? `${(index % 8) * 60}ms` : "0ms" }}
    >
      <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-neutral-100 rounded-2xl">
        <img
          src={product.media?.[0]?.url || "https://via.placeholder.com/600x750"}
          alt={product.product_name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(180px circle at var(--mx, 50%) var(--my, 50%), rgba(198,255,58,0.25), transparent 70%)",
          }}
        />

        <span className="absolute top-4 left-4">
          <span className="relative inline-flex">
            <span className="new-badge-ping" />
            <span className="relative text-[10px] font-mono tracking-[2px] uppercase bg-black text-white px-3 py-1 rounded-full">
              New
            </span>
          </span>
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleLike();
          }}
          aria-label="Toggle wishlist"
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            liked
              ? "bg-black scale-100"
              : "bg-white/90 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
          }`}
        >
          <Heart
            size={16}
            strokeWidth={2}
            className={liked ? "text-[#C6FF3A] fill-[#C6FF3A]" : "text-black"}
          />
        </button>

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="mt-4">
        <h3 className="font-semibold uppercase text-sm tracking-wide text-black">
          {product.product_name}
        </h3>

        <p className="text-black/60 mt-1 text-sm font-medium">
          ₹{product.sale_price}
        </p>
      </div>
    </div>
  );
}
