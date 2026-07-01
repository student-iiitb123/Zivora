import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import {
  SlidersHorizontal,
  ArrowUpDown,
  ChevronDown,
  Sparkles,
  X,
} from "lucide-react";

import Navbar from "../../../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../../../components/Footer";

const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
];

const PRICE_FILTERS = [
  { label: "Under ₹1,000", test: (p) => p.sale_price < 1000 },
  { label: "₹1,000 – ₹2,500", test: (p) => p.sale_price >= 1000 && p.sale_price <= 2500 },
  { label: "Above ₹2,500", test: (p) => p.sale_price > 2500 },
];

/** Fires `true` once the element scrolls into view, then stays true. */
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

function ProductListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceFilter, setPriceFilter] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const [gridRef, gridInView] = useInView({ threshold: 0.02 });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://zivora-262a.onrender.com/api/listings"
        );
        setProducts(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setVisibleCount(12);
  }, [category, sortBy, priceFilter]);

  const setFilter = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value === "All") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    setSearchParams(params);
  };

  const heading = category ? `${category}'s Collection` : "All Products";

  let filteredProducts = category
    ? products.filter(
        (product) => product.category?.toLowerCase() === category.toLowerCase()
      )
    : products;

  if (priceFilter) {
    const rule = PRICE_FILTERS.find((f) => f.label === priceFilter);
    if (rule) filteredProducts = filteredProducts.filter(rule.test);
  }

  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price_asc") return a.sale_price - b.sale_price;
    if (sortBy === "price_desc") return b.sale_price - a.sale_price;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;
  const activeSortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label;

  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative bg-[#0A0A0A] overflow-hidden pt-28 pb-16">
        <div className="pointer-events-none absolute -top-24 right-1/4 w-[420px] h-[420px] bg-[#C6FF3A]/15 rounded-full blur-[130px]" />
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <Sparkles
            size={18}
            className="absolute text-[#C6FF3A]/25 hero-float"
            style={{ top: "22%", left: "6%" }}
          />
          <Sparkles
            size={14}
            className="absolute text-[#C6FF3A]/25 hero-float"
            style={{ top: "70%", left: "90%", animationDelay: "1.2s" }}
          />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
          <p className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[6px] text-white/50 font-mono mb-4">
            <Sparkles size={14} strokeWidth={2} className="text-[#C6FF3A]" />
            The Full Lineup
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="hero-gradient text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.95]">
              {heading}
            </h1>

            <span className="text-sm uppercase tracking-[4px] text-white/40 font-mono whitespace-nowrap">
              {filteredProducts.length} Products Found
            </span>
          </div>
        </div>
      </section>

      <main className="pb-24 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        {/* STICKY FILTER BAR */}
        <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-y border-black/10 mb-12 -mx-6 md:-mx-10 lg:-mx-12 px-6 md:px-10 lg:px-12">
          <div className="h-16 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex gap-3 sm:gap-4 items-center flex-wrap">
              {/* FILTER */}
              <div className="relative">
                <button
                  onClick={() => {
                    setFilterOpen((v) => !v);
                    setSortOpen(false);
                  }}
                  className={`flex items-center gap-2 text-xs uppercase tracking-[3px] px-4 py-2.5 rounded-full border transition-colors ${
                    priceFilter
                      ? "bg-black text-white border-black"
                      : "border-black/15 text-black/70 hover:border-black/40 hover:text-black"
                  }`}
                >
                  <SlidersHorizontal size={14} strokeWidth={2} />
                  Filter
                  {priceFilter && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        setPriceFilter(null);
                      }}
                      className="ml-1 hover:opacity-70"
                    >
                      <X size={12} strokeWidth={2.5} />
                    </span>
                  )}
                </button>

                {filterOpen && (
                  <div className="absolute left-0 top-full mt-2 w-60 bg-white border border-black/10 rounded-xl shadow-xl overflow-hidden z-30">
                    <p className="px-4 pt-3 pb-2 text-[10px] uppercase tracking-[2px] text-black/40 font-mono">
                      Price
                    </p>
                    {PRICE_FILTERS.map((f) => (
                      <button
                        key={f.label}
                        onClick={() => {
                          setPriceFilter(priceFilter === f.label ? null : f.label);
                          setFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-neutral-50 transition-colors ${
                          priceFilter === f.label ? "text-black font-semibold" : "text-black/60"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* SORT */}
              <div className="relative">
                <button
                  onClick={() => {
                    setSortOpen((v) => !v);
                    setFilterOpen(false);
                  }}
                  className="flex items-center gap-2 text-xs uppercase tracking-[3px] px-4 py-2.5 rounded-full border border-black/15 text-black/70 hover:border-black/40 hover:text-black transition-colors"
                >
                  <ArrowUpDown size={14} strokeWidth={2} />
                  {activeSortLabel}
                  <ChevronDown
                    size={14}
                    strokeWidth={2}
                    className={`transition-transform duration-300 ${sortOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {sortOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-black/10 rounded-xl shadow-xl overflow-hidden z-30">
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

              {/* CATEGORY PILLS with sliding highlight */}
              <CategoryPills category={category} setFilter={setFilter} />
            </div>

            <span className="hidden md:block text-xs uppercase tracking-[3px] text-black/40 font-mono">
              Showing {visibleProducts.length} of {filteredProducts.length}
            </span>
          </div>
        </div>

        {/* GRID */}
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
        ) : filteredProducts.length > 0 ? (
          <div
            ref={gridRef}
            className={`grid-reveal ${gridInView ? "in-view" : ""}`}
          >
            <ProductGrid products={visibleProducts} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 sm:py-28 px-6 rounded-3xl bg-[#0A0A0A] text-center">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-8 animate-pulse">
              <Sparkles size={36} strokeWidth={1.6} className="text-[#C6FF3A]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
              No Matches Found
            </h3>
            <p className="max-w-lg text-white/50 leading-7 mb-10 text-sm">
              Try clearing a filter or check back soon for new pieces.
            </p>
            <button
              onClick={() => {
                setPriceFilter(null);
                setFilter("All");
              }}
              className="bg-[#C6FF3A] text-black px-10 py-4 text-sm font-semibold uppercase tracking-[4px] rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* LOAD MORE */}
        {!loading && filteredProducts.length > 0 && (
          <div className="mt-20 flex flex-col items-center gap-5">
            {hasMore && (
              <button
                onClick={() => setVisibleCount((c) => c + 8)}
                className="group px-12 py-4 rounded-full border border-black uppercase tracking-[4px] text-sm hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Load More
                <ChevronDown
                  size={14}
                  strokeWidth={2.4}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </button>
            )}

            <p className="text-xs uppercase tracking-[4px] text-black/40 font-mono">
              Showing {visibleProducts.length} of {filteredProducts.length}
            </p>
          </div>
        )}
      </main>

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
          .hero-gradient, .hero-float, .skeleton-shimmer::after, .grid-reveal {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function CategoryPills({ category, setFilter }) {
  const labels = ["All", "Men", "Women"];
  const wrapRef = useRef(null);
  const btnRefs = useRef({});
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  const activeLabel = category || "All";

  useEffect(() => {
    const measure = () => {
      const btn = btnRefs.current[activeLabel];
      const wrap = wrapRef.current;
      if (btn && wrap) {
        const btnRect = btn.getBoundingClientRect();
        const wrapRect = wrap.getBoundingClientRect();
        setPillStyle({ left: btnRect.left - wrapRect.left, width: btnRect.width });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeLabel]);

  return (
    <div
      ref={wrapRef}
      className="relative hidden sm:flex gap-1 ml-2 bg-neutral-50 rounded-full p-1 border border-black/10"
    >
      <span
        className="absolute top-1 bottom-1 rounded-full bg-black transition-all duration-350 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ left: pillStyle.left, width: pillStyle.width }}
      />
      {labels.map((label) => {
        const isActive = activeLabel === label;
        return (
          <button
            key={label}
            ref={(el) => (btnRefs.current[label] = el)}
            onClick={() => setFilter(label)}
            className={`relative z-10 text-xs uppercase tracking-[3px] px-4 py-2 rounded-full transition-colors duration-300 ${
              isActive ? "text-white" : "text-black/50 hover:text-black"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default ProductListPage;
