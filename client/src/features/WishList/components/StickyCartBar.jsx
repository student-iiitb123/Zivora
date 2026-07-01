import { ShoppingBag, ArrowRight } from "lucide-react";

function StickyCartBar() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-5">

      <div className="backdrop-blur-2xl bg-black/80 border border-white/10 rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.45)]">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5 px-6 py-5">

          {/* Left */}
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-[#C6FF3A]/15 border border-[#C6FF3A]/30 flex items-center justify-center">

              <ShoppingBag
                size={24}
                className="text-[#C6FF3A]"
              />

            </div>

            <div>

              <p className="text-white font-semibold text-lg">
                8 Items Selected
              </p>

              <p className="text-white/50 text-sm uppercase tracking-[2px]">
                Total • ₹12,499
              </p>

            </div>

          </div>

          {/* Right */}

          <button className="group bg-[#C6FF3A] hover:bg-white transition-all duration-300 text-black font-bold uppercase tracking-[3px] rounded-full px-10 py-4 flex items-center gap-3 hover:scale-105 active:scale-95">

            Add All To Cart

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </button>

        </div>

      </div>

    </div>
  );
}

export default StickyCartBar;