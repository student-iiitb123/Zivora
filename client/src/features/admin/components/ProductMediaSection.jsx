import { Edit, ImagePlus, Plus } from "lucide-react";

function ProductMediaSection() {
  return (
    <section className="space-y-6">
      <div className="flex justify-between items-end">
        <h2 className="text-2xl font-semibold">Media</h2>
        <span className="text-xs text-black/50">Recommended: 4:5 Aspect Ratio</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2 row-span-2 aspect-[4/5] bg-neutral-100 border border-dashed border-black/20 flex flex-col items-center justify-center cursor-pointer hover:bg-neutral-200 transition group">
          <ImagePlus size={38} className="text-black/40 group-hover:text-black" />
          <span className="mt-4 text-sm uppercase tracking-[3px] text-black/50">
            Primary Image
          </span>
        </div>

        <div className="aspect-[4/5] bg-white border border-black/10 overflow-hidden relative group cursor-pointer">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE9sVpaVjFOC2kQ0JE-x31LrgMzD4lqtu-_dRpy5xO6RGiWYQXmnz2t-3vgfHq9qk2tC2E3X3psjRR1sByizneadK5c6gjNacT3wi8iU54EKn_ShCCbcVuSGEVO7kTdm67yN2rI_A2BszqLZ9vjd7w69IZi9kc7R72Oa21YvqCoqIEhN6MmHoyKIyNQ43DWKoOGueTotRhc5SRP98BdtoOU2JhZ3lnygxrNo0712QUsYXcAizXtTvC3Kg10MfStKt6upulSWm1"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
            <Edit size={22} className="text-white" />
          </div>
        </div>

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="aspect-[4/5] bg-neutral-100 border border-dashed border-black/20 flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition"
          >
            <Plus size={20} className="text-black/40" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductMediaSection;