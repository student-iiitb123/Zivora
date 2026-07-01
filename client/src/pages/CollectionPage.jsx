import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CATEGORIES = ["ALL", "MEN", "WOMEN"];

/** Fires once an element scrolls into view, then stays true. */
function useInView(options = { threshold: 0.08 }) {
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

/** A short, stable-looking SKU tag derived from the mongo _id. */
function skuFor(id = "") {
  return `ZV-${id.slice(-5).toUpperCase()}`;
}

export default function CollectionPage() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const pillWrapRef = useRef(null);
  const pillRefs = useRef({});
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [gridRef, gridInView] = useInView({ threshold: 0.02 });

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

  useEffect(() => {
    const measure = () => {
      const btn = pillRefs.current[activeCategory];
      const wrap = pillWrapRef.current;
      if (btn && wrap) {
        const btnRect = btn.getBoundingClientRect();
        const wrapRect = wrap.getBoundingClientRect();
        setPillStyle({ left: btnRect.left - wrapRect.left, width: btnRect.width });
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

  return (
    <>
      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-[#0B0B0C] overflow-hidden pt-32 pb-16">
        <div className="pointer-events-none absolute -top-24 left-1/3 w-[420px] h-[420px] bg-[#C8FF3D]/12 rounded-full blur-[130px]" />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
          <p className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[5px] text-white/40 font-mono mb-5">
            <Sparkles size={13} strokeWidth={2} className="text-[#C8FF3D]" />
            Full Catalog
          </p>

          <h1 className="text-6xl sm:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
            Colle<span className="text-[#C8FF3D]">c</span>tion
          </h1>

          <p className="mt-5 text-white/45 text-sm max-w-md mx-auto">
            Timeless essentials, cut for right now.
          </p>
        </div>
      </section>

      <section className="min-h-screen bg-white pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          {/* ---------------- STICKY FILTER BAR ---------------- */}
          <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-black/10 -mx-4 sm:-mx-8 px-4 sm:px-8 mb-14">
            <div className="h-16 flex items-center justify-between gap-4">
              <div
                ref={pillWrapRef}
                className="relative flex gap-1 bg-neutral-50 rounded-full p-1 border border-black/10"
              >
                <span
                  className="absolute top-1 bottom-1 rounded-full bg-black transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]"
                  style={{ left: pillStyle.left, width: pillStyle.width }}
                />
                {CATEGORIES.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      ref={(el) => (pillRefs.current[category] = el)}
                      onClick={() => setActiveCategory(category)}
                      className={`relative z-10 text-xs uppercase tracking-[3px] px-5 py-2.5 rounded-full font-mono transition-colors duration-300 ${
                        isActive ? "text-white" : "text-black/50 hover:text-black"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              <span className="hidden sm:block text-[11px] uppercase tracking-[3px] text-black/40 font-mono">
                {filteredProducts.length} Pieces
              </span>
            </div>
          </div>

          {/* ---------------- GRID ---------------- */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <div key={i}>
                    <div className="aspect-[4/5] mb-4 bg-neutral-100 skeleton-shimmer" />
                    <div className="h-3 w-3/4 mb-2 rounded-full bg-neutral-100 skeleton-shimmer" />
                    <div className="h-3 w-1/3 rounded-full bg-neutral-100 skeleton-shimmer" />
                  </div>
                ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div
              ref={gridRef}
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 grid-reveal ${
                gridInView ? "in-view" : ""
              }`}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  onClick={() => navigate(`/products/${product._id}`)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                    <img
                      src={
                        product.media?.[0]?.url ||
                        "https://via.placeholder.com/600x750"
                      }
                      alt={product.product_name}
                      className="w-full h-full object-cover transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />

                    {/* SKU tag, revealed on hover */}
                    <span className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[2px] text-white bg-black/60 backdrop-blur-sm px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skuFor(product._id)}
                    </span>

                    {/* view details, revealed on hover */}
                    <span className="absolute bottom-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-[#C8FF3D] text-black opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </span>
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-3">
                    <h3 className="uppercase font-semibold text-sm tracking-tight leading-snug">
                      {product.product_name}
                    </h3>
                    <p className="text-black/60 text-sm font-mono whitespace-nowrap">
                      ₹{product.sale_price?.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 px-6 text-center bg-[#0B0B0C]">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-7">
                <Sparkles size={30} strokeWidth={1.6} className="text-[#C8FF3D]" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
                Nothing here yet
              </h3>
              <p className="max-w-sm text-white/50 text-sm leading-6 mb-8">
                This category is empty right now. Check back soon or browse
                everything instead.
              </p>
              <button
                onClick={() => setActiveCategory("ALL")}
                className="bg-[#C8FF3D] text-black px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-[3px] hover:bg-white transition-colors"
              >
                Shop All
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
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
        .grid-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .grid-reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .skeleton-shimmer::after, .grid-reveal {
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
