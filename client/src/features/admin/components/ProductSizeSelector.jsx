import { useState } from "react";

const sizes = ["XS", "S", "M", "L", "XL"];

function ProductSizeSelector() {
  const [selectedSize, setSelectedSize] = useState("XS");

  return (
    <div className="space-y-4">
      <label className="block text-sm uppercase tracking-[2px] font-semibold">
        Sizes
      </label>

      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => setSelectedSize(size)}
            className={`w-12 h-12 border flex items-center justify-center text-sm transition ${
              selectedSize === size
                ? "bg-black text-white border-black"
                : "border-black/20 text-black hover:border-black"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductSizeSelector;