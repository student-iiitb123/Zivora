import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Sparkles } from "lucide-react";

const COLLECTIONS = ["Oversized", "Korean", "Summer Edit", "Streetwear"];

const STATS = [
  { end: 25, suffix: "K+", label: "Happy Customers" },
  { end: 500, suffix: "+", label: "Premium Styles" },
  { end: 4.9, suffix: "★", label: "Customer Rating", decimal: true },
];

/** Counts a number up from 0 once the wrapping element enters view. */
function useCountUp(end, duration = 1600, decimal = false) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!started) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      const current = end * eased;
      setValue(decimal ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration, decimal]);

  return [ref, value];
}

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="./assets/anshu.png"
          alt="Katchy Collection"
          className="w-full h-full object-cover hero-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* ambient acid glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#C6FF3A]/10 rounded-full blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto h-full px-6 lg:px-14 flex items-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <span
            className="hero-fade inline-flex items-center gap-2 border border-white/40 text-white text-xs uppercase tracking-[4px] px-4 py-2 rounded-full backdrop-blur-sm relative overflow-hidden"
            style={{ animationDelay: "0ms" }}
          >
            <Sparkles size={13} strokeWidth={2} className="text-[#C6FF3A] animate-pulse" />
            New Collection • 2026
            <span className="badge-sheen" />
          </span>

          {/* Heading */}
      <h1
  className="hero-fade mt-8 text-white font-black leading-[0.9] tracking-tight text-5xl md:text-7xl lg:text-8xl"
  style={{ animationDelay: "120ms" }}
>
  Wear
  <br />
  <span className="typewriter inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C6FF3A]">
    Confidence.
  </span>
</h1>

<style>{`
  .typewriter {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid #C6FF3A;
    width: 0;
    vertical-align: bottom;
    animation:
      typewriter-loop 4.5s steps(11, end) infinite,
      typewriter-caret 0.75s step-end infinite;
  }
  @keyframes typewriter-loop {
    0%   { width: 0; }
    30%  { width: 11ch; }   /* fully typed */
    65%  { width: 11ch; }   /* hold before erasing */
    90%  { width: 0; }      /* fully erased */
    100% { width: 0; }      /* hold before retyping */
  }
  @keyframes typewriter-caret {
    0%, 100% { border-color: #C6FF3A; }
    50% { border-color: transparent; }
  }
  @media (prefers-reduced-motion: reduce) {
    .typewriter {
      animation: none;
      width: 11ch;
      border-right: none;
    }
  }
`}</style>

          {/* Subtitle */}
          <p
            className="hero-fade mt-6 text-white/80 text-lg md:text-xl max-w-lg leading-relaxed"
            style={{ animationDelay: "220ms" }}
          >
            Designed for everyday confidence. Minimal silhouettes. Premium
            fabrics. Inspired by modern streetwear.
          </p>

          {/* CTA */}
          <div className="hero-fade mt-10 flex flex-wrap gap-4" style={{ animationDelay: "320ms" }}>
            <Link
              to="/products"
              className="group relative overflow-hidden bg-white text-black px-10 py-4 uppercase tracking-[3px] text-sm font-semibold rounded-full transition-colors duration-300 hover:text-black"
            >
              <span className="absolute inset-0 bg-[#C6FF3A] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative">Shop Collection</span>
            </Link>

            <Link
              to="/new-arrivals"
              className="border border-white text-white px-10 py-4 uppercase tracking-[3px] text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95"
            >
              New In
            </Link>
          </div>

          {/* Collection Chips */}
          <div className="hero-fade flex flex-wrap gap-3 mt-10" style={{ animationDelay: "420ms" }}>
            {COLLECTIONS.map((item, i) => (
              <Link
                key={item}
                to={`/products?collection=${item}`}
                className="chip-pop px-5 py-2 rounded-full border border-white/30 text-white text-sm hover:bg-[#C6FF3A] hover:text-black hover:border-[#C6FF3A] hover:-translate-y-0.5 transition-all duration-300"
                style={{ animationDelay: `${480 + i * 80}ms` }}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="hero-fade flex gap-10 mt-12 text-white" style={{ animationDelay: "620ms" }}>
            {STATS.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80">
        <span className="text-[10px] font-mono tracking-[3px] uppercase opacity-70">Scroll</span>
        <ChevronDown size={30} className="animate-bounce" />
      </div>

      <style>{`
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade {
          opacity: 0;
          animation: hero-fade-up 0.75s cubic-bezier(0.16,1,0.3,1) forwards;
        }

        @keyframes chip-pop-in {
          from { opacity: 0; transform: translateY(10px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .chip-pop {
          opacity: 0;
          animation: chip-pop-in 0.5s ease-out forwards;
        }

        @keyframes hero-kenburns-anim {
          from { transform: scale(1.12); }
          to { transform: scale(1); }
        }
        .hero-kenburns {
          animation: hero-kenburns-anim 10s ease-out forwards;
        }

        @keyframes badge-sheen-anim {
          0% { transform: translateX(-150%) skewX(-20deg); }
          60%, 100% { transform: translateX(250%) skewX(-20deg); }
        }
        .badge-sheen {
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          animation: badge-sheen-anim 3.5s ease-in-out infinite;
          animation-delay: 1s;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-fade, .chip-pop, .hero-kenburns, .badge-sheen {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function StatItem({ end, suffix, label, decimal }) {
  const [ref, value] = useCountUp(end, 1600, decimal);
  return (
    <div ref={ref}>
      <h3 className="text-2xl font-bold tabular-nums">
        {decimal ? value.toFixed(1) : value}
        {suffix}
      </h3>
      <p className="text-white/70 text-sm">{label}</p>
    </div>
  );
}
