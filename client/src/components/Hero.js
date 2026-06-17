export default function Hero() {
  return (
    <section className="relative min-h-[750px] md:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
  src="./assets/models.png"
  alt="Editorial Fashion"
  className="
    w-full
    h-full
    object-contain
    md:object-cover
    bg-[#b8b2aa]
  "
/>

        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          h-full
          max-w-[1440px]
          mx-auto
          px-4
          sm:px-6
          lg:px-12
          flex
          flex-col
          justify-start
          md:justify-center
          items-center
          text-center
          pt-32
          md:pt-0
        "
      >
        <span
          className="
            uppercase
            tracking-[4px]
            sm:tracking-[6px]
            text-white/80
            text-xs
            sm:text-sm
            mb-5
          "
        >
          Luxury Collection 2026
        </span>

        <h1
          className="
            text-white
            font-bold
            tracking-tight
            leading-none
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            max-w-5xl
          "
        >
          ELEVATE YOUR
          <br />
          EVERYDAY STYLE
        </h1>

        <p
          className="
            mt-6
            sm:mt-8
            text-white/80
            text-base
            sm:text-lg
            max-w-xl
          "
        >
          Discover timeless essentials crafted for modern living.
        </p>

        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            sm:gap-5
            mt-10
            sm:mt-12
            w-full
            sm:w-auto
          "
        >
          <button
            className="
              w-full
              sm:w-auto
              bg-white
              text-black
              px-10
              py-4
              uppercase
              tracking-widest
              font-medium
              hover:scale-105
              transition
            "
          >
            Shop Men
          </button>

          <button
            className="
              w-full
              sm:w-auto
              border
              border-white
              text-white
              px-10
              py-4
              uppercase
              tracking-widest
              font-medium
              hover:bg-white
              hover:text-black
              transition
            "
          >
            Shop Women
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
        <span className="material-symbols-outlined text-3xl md:text-4xl">
          expand_more
        </span>
      </div>
    </section>
  );
}