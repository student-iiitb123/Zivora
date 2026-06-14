import { X } from "lucide-react";

function ProductCollectionsPanel() {
  return (
    <section className="bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] space-y-6">
      <div>
        <label className="block text-sm uppercase tracking-[2px] font-semibold mb-2">
          Collections
        </label>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-neutral-100 text-black/60 text-xs rounded-full flex items-center gap-2">
            SS24 Essentials
            <X size={12} />
          </span>
        </div>

        <input
          type="text"
          placeholder="Add to collection..."
          className="w-full bg-transparent border-0 border-b border-black/20 py-2 focus:ring-0 focus:border-black"
        />
      </div>
    </section>
  );
}

export default ProductCollectionsPanel;