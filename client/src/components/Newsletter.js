export default function Newsletter() {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">

        <div className="max-w-4xl mx-auto text-center">

          <span className="block text-sm uppercase tracking-[6px] text-black/50 mb-5">
            JOIN THE WORLD OF ZIVORA
          </span>

          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-black mb-6">
            STAY IN THE KNOW
          </h2>

          <p className="text-black/60 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Subscribe to receive early access to new collections,
            editorial stories and exclusive event invitations.
          </p>

          <form className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                flex-1
                h-14
                px-5
                border
                border-black/10
                bg-white
                outline-none
                text-black
                placeholder:text-black/40
                focus:border-black
                transition-all
              "
            />

            <button
              type="submit"
              className="
                h-14
                px-10
                bg-black
                text-white
                uppercase
                tracking-widest
                text-sm
                hover:bg-neutral-800
                transition-all
              "
            >
              Subscribe
            </button>
          </form>

          <p className="mt-6 text-xs text-black/40 uppercase tracking-wider">
            No spam. Unsubscribe anytime.
          </p>

        </div>

      </div>
    </section>
  );
}