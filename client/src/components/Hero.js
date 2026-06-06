export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="./assets/models.png"
          alt="Editorial Fashion"
          className="w-full h-[100%] object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-8 lg:px-12 flex flex-col justify-center items-center text-center">

        <span className="uppercase tracking-[6px] text-white/80 text-sm mb-6">
          Luxury Collection 2026
        </span>

        <h1 className="text-white font-bold tracking-tight leading-none text-5xl md:text-7xl lg:text-8xl max-w-5xl">
          ELEVATE YOUR
          <br />
          EVERYDAY STYLE
        </h1>

        <p className="mt-8 text-white/80 text-lg max-w-xl">
          Discover timeless essentials crafted for modern living.
        </p>

        <div className="flex flex-col md:flex-row gap-5 mt-12">
          <button className="bg-white text-black px-10 py-4 uppercase tracking-widest font-medium hover:scale-105 transition">
            Shop Men
          </button>

          <button className="border border-white text-white px-10 py-4 uppercase tracking-widest font-medium hover:bg-white hover:text-black transition">
            Shop Women
          </button>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
        <span className="material-symbols-outlined text-4xl">
          expand_more
        </span>
      </div>

    </section>
  );
}