import { useEffect, useRef, useState } from "react";
import {
  Star,
  Quote,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { getTopReviews } from "../services/reviewService";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const timerRef = useRef(null);

  // Avatar Colors
  const avatarColors = [
    "#C6FF3A",
    "#FF3AA7",
    "#3AD4FF",
    "#FFB703",
    "#A78BFA",
    "#06D6A0",
  ];

  // Fetch Reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getTopReviews();

        if (response.data.success) {
          setReviews(response.data.reviews);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, []);

  // Auto Slider
  useEffect(() => {
    if (paused) return;
    if (reviews.length === 0) return;

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, [paused, reviews]);

  if (reviews.length === 0) {
    return null;
  }

  const goTo = (i) => {
    setActive(((i % reviews.length) + reviews.length) % reviews.length);
  };

  const current = reviews[active];

  const initials =
    current.user?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U";

  const avatarColor = avatarColors[active % avatarColors.length];

  return (
    <section
      className="relative py-16 sm:py-24 lg:py-32 bg-black overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6FF3A]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-10 text-center">

        {/* Heading */}
        <span className="inline-flex items-center gap-2 text-[11px] sm:text-sm uppercase tracking-[4px] sm:tracking-[6px] text-white/50 font-mono mb-6 sm:mb-8">
          <span className="w-6 h-px bg-[#C6FF3A]" />
          Customer Reviews
          <span className="w-6 h-px bg-[#C6FF3A]" />
        </span>

        {/* Quote Icon */}
        <Quote
          size={40}
          strokeWidth={0}
          className="mx-auto mb-4 text-[#C6FF3A] fill-[#C6FF3A] opacity-80"
        />

        {/* Dynamic Stars */}
        <div className="flex justify-center gap-1 mb-8 sm:mb-10">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={20}
              strokeWidth={0}
              className={
                star <= current.rating
                  ? "fill-[#C6FF3A] text-[#C6FF3A]"
                  : "fill-white/10 text-white/20"
              }
            />
          ))}
        </div>

        {/* Review */}
        <div className="min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] flex items-center justify-center mb-10 sm:mb-12">
          <blockquote
            key={active}
            className="testimonial-fade text-xl sm:text-3xl md:text-4xl font-light tracking-tight leading-[1.5] sm:leading-[1.4] text-white max-w-4xl mx-auto px-2"
          >
            "{current.comment}"
          </blockquote>
        </div>

        {/* User */}
        <div
          key={current._id}
          className="testimonial-fade flex flex-col items-center"
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-black font-bold text-lg mb-4"
            style={{
              backgroundColor: avatarColor,
            }}
          >
            {initials}
          </div>

          <h4 className="text-sm uppercase tracking-[3px] font-semibold text-white">
            {current.user?.name}
          </h4>

          <span className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-mono tracking-wide uppercase text-[#C6FF3A] bg-[#C6FF3A]/10 border border-[#C6FF3A]/30 px-3 py-1 rounded-full">
            <BadgeCheck size={13} />
            Verified Buyer
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12 sm:mt-14">

          <button
            onClick={() => goTo(active - 1)}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-black hover:bg-white hover:border-white transition-all duration-300"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-[#C6FF3A]"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(active + 1)}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-black hover:bg-white hover:border-white transition-all duration-300"
          >
            <ChevronRight size={16} />
          </button>

        </div>

      </div>

      <style>{`
        @keyframes testimonial-fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .testimonial-fade {
          animation: testimonial-fade-in .5s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-fade {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}