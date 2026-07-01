import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Swap the img paths for your real lifestyle shots — filenames describe
// what should go in each slot.
const categories = [
  {
    title: "Men's Collection",
    tag: "FOR HIM",
    count: "128 styles",
    img: "./assets/man.png",
    link: "/products?category=Men",
    size: "hero", // col-span-2 row-span-2
    theme: "dark",
  },
  {
    title: "Women's Collection",
    tag: "FOR HER",
    count: "142 styles",
    img: "./assets/women.png",
    link: "/products?category=Women",
    size: "hero",
    theme: "dark",
  },
  {
    title: "Oversized Tees",
    tag: "TRENDING NOW",
    count: "36 styles",
    img: "https://i.pinimg.com/736x/ea/b4/1d/eab41ddd59fba789429d3ab9aa699af2.jpg",
    link: "/products?fit=Oversized",
    size: "square",
    theme: "acid",
  },
  {
    title: "Premium Shirts",
    tag: "ELEVATED BASICS",
    count: "24 styles",
    img: "https://i.pinimg.com/1200x/ff/e5/46/ffe5467ea1eb55b5d3054eec092c36a6.jpg",
    link: "/products?type=Shirts",
    size: "square",
    theme: "dark",
  },
  {
    title: "New Arrivals",
    tag: "JUST DROPPED",
    count: "Fresh this week",
    img: "https://tse3.mm.bing.net/th/id/OIP.GJ3SXQ7m1OJoQthMqAbQOQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "/new-arrivals",
    size: "wide", // col-span-2 row-span-1
    theme: "acid",
  },
];

const sizeClass = {
  hero: "lg:col-span-2 lg:row-span-2",
  square: "lg:col-span-1 lg:row-span-1",
  wide: "lg:col-span-2 lg:row-span-1",
};

export default function FeaturedCategories() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 -left-32 w-[500px] h-[500px] bg-[#C6FF3A]/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 w-[500px] h-[500px] bg-[#C6FF3A]/5 rounded-full blur-[140px]" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="flex items-center gap-2 uppercase tracking-[5px] text-[11px] sm:text-xs text-[#C6FF3A] mb-3 font-mono">
              <span className="w-6 h-px bg-[#C6FF3A]" />
              Shop by Vibe
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[0.95]">
              Pick your
              <br className="hidden sm:block" /> lane.
            </h2>
          </div>

          <p className="max-w-[280px] text-sm text-white/40 leading-relaxed">
            Five drops, zero filler. Tap a category and go straight to the
            fit you're actually here for.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[260px] sm:auto-rows-[280px] lg:auto-rows-[300px] gap-4 sm:gap-5">
          {categories.map((item) => {
            const isAcid = item.theme === "acid";

            return (
              <Link
                to={item.link}
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl block bg-neutral-900 border border-white/10 ${sizeClass[item.size]}`}
              >
                {/* image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* base gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

                {/* hover color wash */}
                <div
                  className={`absolute inset-0 mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-500 ${
                    isAcid ? "bg-[#C6FF3A]" : "bg-[#FF3AA7]"
                  }`}
                />

                {/* top row: tag chip + count */}
                <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono tracking-[2px] uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm ${
                      isAcid
                        ? "border-[#C6FF3A]/50 text-[#C6FF3A] bg-[#C6FF3A]/10"
                        : "border-white/30 text-white bg-white/10"
                    }`}
                  >
                    {item.tag}
                  </span>

                  <span className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={16} strokeWidth={2.4} />
                  </span>
                </div>

                {/* bottom content */}
                <div className="absolute left-4 right-4 bottom-4 sm:left-5 sm:right-5 sm:bottom-5">
                  <p className="text-[11px] font-mono tracking-widest text-white/50 mb-1.5">
                    {item.count}
                  </p>
                  <h3
                    className={`font-black uppercase tracking-tight text-white leading-[0.95] ${
                      item.size === "hero"
                        ? "text-3xl sm:text-4xl lg:text-5xl"
                        : "text-xl sm:text-2xl"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* underline that grows on hover */}
                  <span
                    className={`block h-[2px] w-8 group-hover:w-full mt-3 transition-all duration-500 ease-out ${
                      isAcid ? "bg-[#C6FF3A]" : "bg-white"
                    }`}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
