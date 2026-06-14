import { Plus } from "lucide-react";

const colors = [
  { name: "Onyx", value: "#000000" },
  { name: "Bone", value: "#FAF9F6" },
  { name: "Slate", value: "#7D7C7A" },
];

function ProductColorSelector() {
  return (
    <div className="space-y-4">
      <label className="block text-sm uppercase tracking-[2px] font-semibold">
        Available Colors
      </label>

      <div className="flex flex-wrap gap-4">
        {colors.map((color, index) => (
          <div key={color.name} className="group relative cursor-pointer">
            <div
              style={{ backgroundColor: color.value }}
              className={`w-10 h-10 rounded-full border ${
                index === 0
                  ? "border-white ring-1 ring-black"
                  : "border-black/20"
              }`}
            />

            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase opacity-0 group-hover:opacity-100 transition">
              {color.name}
            </span>
          </div>
        ))}

        <button className="w-10 h-10 rounded-full border border-dashed border-black/20 flex items-center justify-center hover:border-black transition">
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}

export default ProductColorSelector;