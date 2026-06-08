function RegisterHero() {
  return (
    <section className="relative h-[500px] md:h-[650px] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
        alt="Zivora Fashion"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <span className="text-white/80 uppercase tracking-[6px] text-sm mb-4">
          Join Zivora
        </span>

        <h1 className="text-white text-5xl md:text-7xl font-bold leading-none max-w-3xl">
          CREATE YOUR
          <br />
          ACCOUNT
        </h1>

        <p className="mt-6 text-white/80 text-lg max-w-xl">
          Unlock exclusive collections, faster checkout,
          personalized recommendations, and member-only access.
        </p>
      </div>
    </section>
  );
}

export default RegisterHero;