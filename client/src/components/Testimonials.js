import { useEffect, useRef, useState } from "react";
import { Star, Quote, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { getTopReviews } from "../services/reviewService";
// Fallback shown only if the API returns nothing (empty state / API down)
const FALLBACK_TESTIMONIALS = [
  {
    quote:
      "Katchy completely redefined my wardrobe. The fabrics hit different and the fits are unmatched — it's my go-to for pieces that actually feel premium.",
    name: "Aanya Kapoor",
    handle: "@aanya.wears",
    role: "Verified Buyer",
    rating: 5,
    avatarColor: "#C6FF3A",
  },
  {
    quote:
      "Ordered the oversized fit not knowing what to expect and it's now in every fit pic. Delivery was fast, packaging was clean — genuinely no notes.",
    name: "Rohan Malhotra",
    handle: "@rohan.fits",
    role: "Verified Buyer",
    rating: 5,
    avatarColor: "#FF3AA7",
  },
  {
    quote:
      "Minimal, expensive-looking, doesn't fall apart after two washes. This is what I recommend when people ask where I get my basics.",
    name: "Simran Bedi",
    handle: "@simran.b",
    role: "Verified Buyer",
    rating: 5,
    avatarColor: "#3AD4FF",
  },
];

const AVATAR_COLORS = ["#C6FF3A", "#FF3AA7", "#3AD4FF", "#FFB23A", "#B23AFF", "#3AFFB2"];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // Fetch top reviews dynamically
  useEffect(() => {
    const fetchTopReviews = async () => {
      try {
        setLoading(true);

        // getTopReviews() already returns the parsed { success, reviews } object
        const data = await getTopReviews();
        const rawReviews = data?.reviews || [];

        const mapped = rawReviews
          .filter((r) => r.comment?.trim())
          .map((r, index) => {
            const name = r.user?.name || "Verified Buyer";
            const handle = `@${name.toLowerCase().replace(/\s+/g, "")}`;

            return {
              quote: r.comment,
              name,
              handle,
              role: "Verified Buyer",
              rating: r.rating || 5,
              avatarColor: AVATAR_COLORS[index % AVATAR_COLORS.length],
            };
          });

        setTestimonials(mapped.length > 0 ? mapped : FALLBACK_TESTIMONIALS);
      } catch (error) {
        console.error("Fetch Top Reviews Error:", error);
        setTestimonials(FALLBACK_TESTIMONIALS);
      } finally {
        setLoading(false);
      }
    };

    fetchTopReviews();
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (paused || testimonials.length === 0) return;
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [paused, testimonials]);

  const goTo = (i) => {
    if (testimonials.length === 0) return;
    setActive(((i % testimonials.length) + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return (
      <section className="relative py-16 sm:py-24 lg:py-32 bg-black flex items-center justify-center">
        <p className="text-white/40 text-sm font-mono uppercase tracking-[3px]">
          Loading reviews...
        </p>
      </section>
    );
  }

  if (testimonials.length === 0) return null;

  const current = testimonials[active];
  const initials = current.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section
      className="relative py-16 sm:py-24 lg:py-32 bg-black overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6FF3A]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-10 text-center">
        <span className="inline-flex items-center gap-2 text-[11px] sm:text-sm uppercase tracking-[4px] sm:tracking-[6px] text-white/50 font-mono mb-6 sm:mb-8">
          <span className="w-6 h-px bg-[#C6FF3A]" />
          The Reviews Are In
          <span className="w-6 h-px bg-[#C6FF3A]" />
        </span>

        {/* quote mark */}
        <Quote
          size={40}
          strokeWidth={0}
          className="mx-auto mb-4 text-[#C6FF3A] fill-[#C6FF3A] opacity-80"
        />

        {/* stars — dynamic based on the actual review rating */}
        <div className="flex justify-center gap-1 mb-8 sm:mb-10">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              strokeWidth={0}
              className={
                i < current.rating
                  ? "fill-[#C6FF3A] text-[#C6FF3A]"
                  : "fill-white/10 text-white/10"
              }
            />
          ))}
        </div>

        {/* quote text — fixed min-height so the layout doesn't jump between quotes */}
        <div className="min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] flex items-center justify-center mb-10 sm:mb-12">
          <blockquote
            key={active}
            className="testimonial-fade text-xl sm:text-3xl md:text-4xl font-light tracking-tight leading-[1.5] sm:leading-[1.4] text-white max-w-4xl mx-auto px-2"
          >
            "{current.quote}"
          </blockquote>
        </div>

        {/* attribution */}
        <div key={`attr-${active}`} className="testimonial-fade flex flex-col items-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-black font-bold text-lg mb-4"
            style={{ backgroundColor: current.avatarColor }}
          >
            {initials}
          </div>

          <h4 className="text-sm uppercase tracking-[3px] font-semibold text-white">
            {current.name}
          </h4>

          <p className="text-white/40 text-xs mt-1 font-mono">{current.handle}</p>

          <span className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-mono tracking-wide uppercase text-[#C6FF3A] bg-[#C6FF3A]/10 border border-[#C6FF3A]/30 px-3 py-1 rounded-full">
            <BadgeCheck size={13} strokeWidth={2} />
            {current.role}
          </span>
        </div>

        {/* controls */}
        <div className="flex items-center justify-center gap-6 mt-12 sm:mt-14">
          <button
            onClick={() => goTo(active - 1)}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-black hover:bg-white hover:border-white transition-all duration-300"
          >
            <ChevronLeft size={16} strokeWidth={2} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-[#C6FF3A]" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(active + 1)}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-black hover:bg-white hover:border-white transition-all duration-300"
          >
            <ChevronRight size={16} strokeWidth={2} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes testimonial-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .testimonial-fade {
          animation: testimonial-fade-in 0.5s ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .testimonial-fade { animation: none; }
        }
      `}</style>
    </section>
  );
}