export default function Editorial() {
  return (
    <section className="relative min-h-[800px] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWa7WL0Yed07SYgnO0CViNgl-RgZW3zNHr21LObN6ZXiGLkjTEWE_-ymDQKzx_kow1k-wFS8mlY4BsTqL2TWIejas0Fda7zEOg6sENuVeQmnIMANPt5TfwFyECPN2qtea3HvbwsbIfePE54GH8osfA0CuNcFgxjFPCSRawmtrO1Ci1Jyip9oD05yTkM7gOziAImu8Pr10qt1GEc0j_gvPtQttrQvLrknwKzhxRDVzfTinTwCruSewIk5ooC4PjYqXBjJpn7ihQ"
          alt="Modern Nomad Editorial"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 min-h-[800px] flex items-center">

        <div className="max-w-2xl">

          <span className="uppercase tracking-[6px] text-white/70 text-sm block mb-6">
            Fall / Winter 2025
          </span>

          <h2 className="text-white text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
            ESSENTIALS FOR
            <br />
            THE MODERN NOMAD
          </h2>

          <p className="text-white/80 text-lg leading-relaxed max-w-xl mb-10">
            A collection designed for those who move between worlds.
            Versatile, durable and uncompromisingly elegant.
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-black px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-black hover:text-white transition-all duration-300">
              Explore Collection
            </button>

            <button className="border border-white text-white px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
              View Lookbook
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}