import { Heart, Sparkles } from "lucide-react";

function WishlistHero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] pt-32 pb-24">

      {/* Green Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-[#C6FF3A]/10 blur-[180px]" />

      {/* Floating Sparkles */}
      <Sparkles
        size={18}
        className="absolute left-[8%] top-32 text-[#C6FF3A]/30 animate-pulse"
      />

      <Sparkles
        size={14}
        className="absolute right-[12%] top-56 text-[#C6FF3A]/20 animate-bounce"
      />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">

        {/* Top Label */}
        <div className="flex items-center gap-2 mb-6">

          <Heart
            size={16}
            className="text-[#C6FF3A]"
            fill="#C6FF3A"
          />

          <span className="text-xs uppercase tracking-[6px] text-white/45 font-mono">
            Saved Collection
          </span>

        </div>

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

          <div>

            <h1 className="hero-gradient text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight">
              Your
              <br />
              Wishlist
            </h1>

            <p className="mt-8 max-w-lg text-white/55 text-base leading-8">
              Every piece you've saved in one place. Explore your curated
              favorites and complete your wardrobe with timeless essentials.
            </p>

          </div>

          {/* Counter */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-6">

            <p className="text-xs uppercase tracking-[4px] text-white/40 mb-3">
              Saved Items
            </p>

            <h2 className="text-5xl font-black text-[#C6FF3A]">
              12
            </h2>

          </div>

        </div>

      </div>

      {/* Shimmer Animation */}
      <style>{`
        .hero-gradient{
          background:linear-gradient(
            90deg,
            #ffffff 0%,
            #ffffff 40%,
            #C6FF3A 50%,
            #ffffff 60%,
            #ffffff 100%
          );

          background-size:250% 100%;
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
          animation:heroShimmer 5s linear infinite;
        }

        @keyframes heroShimmer{

          from{
            background-position:200% 0;
          }

          to{
            background-position:-50% 0;
          }

        }
      `}</style>

    </section>
  );
}

export default WishlistHero;