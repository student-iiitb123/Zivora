export default function Testimonials() {
  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-neutral-50 border-y border-black/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 text-center">
        <span className="block text-xs sm:text-sm uppercase tracking-[4px] sm:tracking-[6px] text-black/50 mb-6 sm:mb-8">
          Client Experience
        </span>

        <div className="flex justify-center gap-1 mb-8 sm:mb-10">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-black text-[20px] sm:text-[24px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          ))}
        </div>

        <blockquote className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.5] sm:leading-[1.4] text-black max-w-4xl mx-auto mb-10 sm:mb-12 px-2">
          “Zivora has completely redefined my wardrobe.
          The quality of the fabrics and the precision
          of the tailoring are unmatched. It is the ultimate
          destination for minimalist luxury.”
        </blockquote>

        <div className="flex flex-col items-center">
          <div className="w-12 sm:w-16 h-px bg-black mb-4 sm:mb-5"></div>

          <h4 className="text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[4px] font-medium text-black">
            Elizabeth Jerrard
          </h4>

          <p className="text-black/50 text-xs sm:text-sm mt-2">
            Verified Customer
          </p>
        </div>
      </div>
    </section>
  );
}