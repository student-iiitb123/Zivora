const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

function ProductSizeSelector({
  formData,
  setFormData,
}) {

  const toggleSize = (size) => {

    if (formData.sizes.includes(size)) {

      setFormData({
        ...formData,
        sizes: formData.sizes.filter(
          (item) => item !== size
        ),
      });

    } else {

      setFormData({
        ...formData,
        sizes: [...formData.sizes, size],
      });

    }
  };

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
            onClick={() => toggleSize(size)}
            className={`w-12 h-12 border flex items-center justify-center text-sm transition ${
              formData.sizes.includes(size)
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