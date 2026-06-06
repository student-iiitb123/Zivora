export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-50 border-y border-black/5">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">

        <span className="block text-sm uppercase tracking-[6px] text-black/50 mb-8">
          Client Experience
        </span>

        <div className="flex justify-center gap-1 mb-10">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-black"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          ))}
        </div>

        <blockquote className="text-3xl md:text-5xl font-light tracking-tight leading-[1.4] text-black max-w-4xl mx-auto mb-12">
          “Zivora has completely redefined my wardrobe.
          The quality of the fabrics and the precision
          of the tailoring are unmatched. It is the ultimate
          destination for minimalist luxury.”
        </blockquote>

        <div className="flex flex-col items-center">
          <div className="w-16 h-px bg-black mb-5"></div>

          <h4 className="text-sm uppercase tracking-[4px] font-medium text-black">
            Elizabeth Jerrard
          </h4>

          <p className="text-black/50 text-sm mt-2">
            Verified Customer
          </p>
        </div>

      </div>
    </section>
  );
}