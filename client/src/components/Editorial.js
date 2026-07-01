import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";

export default function Editorial() {
  return (
    <section className="relative min-h-[620px] sm:min-h-[700px] lg:min-h-[860px] overflow-hidden bg-black">
      {/* IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWa7WL0Yed07SYgnO0CViNgl-RgZW3zNHr21LObN6ZXiGLkjTEWE_-ymDQKzx_kow1k-wFS8mlY4BsTqL2TWIejas0Fda7zEOg6sENuVeQmnIMANPt5TfwFyECPN2qtea3HvbwsbIfePE54GH8osfA0CuNcFgxjFPCSRawmtrO1Ci1Jyip9oD05yTkM7gOziAImu8Pr10qt1GEc0j_gvPtQttrQvLrknwKzhxRDVzfTinTwCruSewIk5ooC4PjYqXBjJpn7ihQ"
          alt="Modern Nomad Editorial"
          className="w-full h-full object-cover scale-105 editorial-kenburns"
        />

        {/* duotone + grain for an editorial print feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* ambient acid glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] bg-[#C6FF3A]/20 rounded-full blur-[130px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 min-h-[620px] sm:min-h-[700px] lg:min-h-[860px] flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* eyebrow */}
          <span className="editorial-fade flex items-center gap-3 uppercase tracking-[4px] sm:tracking-[6px] text-white/70 text-[11px] sm:text-sm mb-5 sm:mb-7 font-mono" style={{ animationDelay: "0ms" }}>
            <Sparkles size={14} strokeWidth={2} className="text-[#C6FF3A]" />
            Fall / Winter 2025
          </span>

          {/* headline */}
          <h2 className="editorial-fade text-white text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-black leading-[0.95] tracking-tight mb-6 sm:mb-8 uppercase" style={{ animationDelay: "120ms" }}>
            Essentials for
            <br />
            the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6FF3A] to-[#8FE000]">modern</span> nomad
          </h2>

          {/* copy */}
          <p className="editorial-fade text-white/75 text-base sm:text-lg leading-relaxed max-w-xl mb-9 sm:mb-11" style={{ animationDelay: "220ms" }}>
            Built for people who move between worlds — versatile, durable,
            and uncompromisingly elegant. No filler, just pieces that
            actually earn their spot in your bag.
          </p>

          {/* CTAs */}
          <div className="editorial-fade flex flex-col sm:flex-row gap-3 sm:gap-4" style={{ animationDelay: "320ms" }}>
            <button className="group w-full sm:w-auto bg-[#C6FF3A] text-black px-7 sm:px-9 py-4 uppercase tracking-widest text-xs sm:text-sm font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300">
              Explore Collection
              <ArrowRight size={16} strokeWidth={2.4} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="w-full sm:w-auto border border-white/50 text-white px-7 sm:px-9 py-4 uppercase tracking-widest text-xs sm:text-sm font-medium rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              View Lookbook
            </button>
          </div>
        </div>

        {/* floating stat chip */}
        <div className="editorial-fade hidden sm:flex absolute right-6 lg:right-12 bottom-24 lg:bottom-28 items-center gap-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4" style={{ animationDelay: "420ms" }}>
          <div className="flex -space-x-3">
            {["A", "B", "C"].map((l) => (
              <span
                key={l}
                className="w-8 h-8 rounded-full bg-[#C6FF3A] text-black text-[11px] font-bold flex items-center justify-center border-2 border-black"
              >
                {l}
              </span>
            ))}
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-none mb-1">10K+ nomads</p>
            <p className="text-white/50 text-[11px] tracking-wide">already repping the drop</p>
          </div>
        </div>

        {/* scroll cue */}
        <div className="editorial-fade absolute left-4 sm:left-6 md:left-10 lg:left-12 bottom-8 sm:bottom-10 flex items-center gap-3 text-white/50" style={{ animationDelay: "500ms" }}>
          <span className="text-[10px] font-mono tracking-[3px] uppercase rotate-0">Scroll</span>
          <span className="w-8 h-px bg-white/30" />
          <ArrowDown size={14} strokeWidth={1.8} className="animate-bounce" />
        </div>
      </div>

      <style>{`
        @keyframes editorial-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .editorial-fade {
          opacity: 0;
          animation: editorial-fade-up 0.7s ease-out forwards;
        }
        @keyframes editorial-kenburns-anim {
          from { transform: scale(1.08); }
          to { transform: scale(1); }
        }
        .editorial-kenburns {
          animation: editorial-kenburns-anim 8s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .editorial-fade, .editorial-kenburns {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
