import { Plus } from "lucide-react";

const colors = [
  { name: "Onyx", value: "#000000" },
  { name: "Bone", value: "#FAF9F6" },
  { name: "Slate", value: "#7D7C7A" },
  { name: "White", value: "#FFFFFF" },
  { name: "Navy", value: "#1D3557" },
  { name: "Olive", value: "#606C38" },
  { name: "Beige", value: "#D6C6A5" },
  { name: "Brown", value: "#8B5E3C" },
  { name: "Burgundy", value: "#800020" },
  { name: "Red", value: "#E63946" },
  { name: "Pink", value: "#FFB6C1" },
  { name: "Orange", value: "#F4A261" },
  { name: "Yellow", value: "#FFD60A" },
  { name: "Green", value: "#2A9D8F" },
  { name: "Sky Blue", value: "#87CEEB" },
  { name: "Royal Blue", value: "#4169E1" },
  { name: "Purple", value: "#9D4EDD" },
  { name: "Lavender", value: "#CDB4DB" },
];

function ProductColorSelector({ formData, setFormData }) {
  const toggleColor = (color) => {
    if (formData.colors.includes(color.value)) {
      setFormData({
        ...formData,
        colors: formData.colors.filter((c) => c !== color.value),
      });
    } else {
      setFormData({
        ...formData,
        colors: [...formData.colors, color.value],
      });
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm uppercase tracking-[2px] font-semibold">
        Available Colors
      </label>

      <div className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <div
            key={color.value}
            className="group relative cursor-pointer"
            onClick={() => toggleColor(color)}
          >
            <div
              style={{ backgroundColor: color.value }}
              className={`w-10 h-10 rounded-full border transition ${
                formData.colors.includes(color.value)
                  ? "ring-2 ring-black border-white scale-110"
                  : "border-black/20 hover:scale-105"
              }`}
            />

            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
              {color.name}
            </span>
          </div>
        ))}

        <button
          type="button"
          className="w-10 h-10 rounded-full border border-dashed border-black/20 flex items-center justify-center hover:border-black transition"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}

export default ProductColorSelector;