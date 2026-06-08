import { ArrowRight, Truck } from "lucide-react";

function RecentOrderCard() {
  return (
    <>
      <div className="bg-white p-5 shadow-[0_30px_60px_rgba(0,0,0,0.05)] flex gap-5 group">
        <div className="w-24 h-32 bg-neutral-100 overflow-hidden flex-shrink-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTyLDHRa61gdIP01w_qhVeMeSYDfMTxBbufyzVl1864RPQCWKrT4taTPpOfW-60JeVZ0TpUSAybuMCBkOqx51za_oGvU2SO3jqfRiSh6tD-hBEV4dC4bqn5qwhlSuuxWt98iOKTBIpTxFpYvh5YXqL4qGaYFPwZ-WF_-By2F-0161G2mlHpdXAxmXKkg1eJOzN75xcB6t-uvEacCjFLZUx1SOgOJTDskoTfxJAOuJDlbF52Eyr0SWL-o7P_Jy3fKQ6f5Mh0Gaw"
            alt="Atelier Trench Coat"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div>
            <div className="flex justify-between items-start">
              <span className="text-[10px] uppercase tracking-[3px] text-black/40">
                Order #ZV-8821
              </span>

              <span className="bg-neutral-100 text-[9px] font-bold uppercase tracking-[2px] px-2 py-1 rounded-full">
                Shipped
              </span>
            </div>

            <h4 className="text-lg font-semibold mt-2">
              Atelier Trench Coat
            </h4>

            <p className="text-xs text-black/50">
              Color: Midnight Charcoal
            </p>
          </div>

          <div className="flex justify-between items-end">
            <span className="font-semibold">$895.00</span>

            <button className="bg-black text-white p-2">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 border border-dashed border-black/10 flex items-center gap-3">
        <Truck size={18} className="text-black/40" />

        <p className="text-xs text-black/60">
          Estimated delivery:{" "}
          <span className="font-semibold">Oct 24, 2023</span>
        </p>
      </div>
    </>
  );
}

export default RecentOrderCard;