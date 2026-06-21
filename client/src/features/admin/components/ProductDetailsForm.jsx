function ProductDetailsForm({ formData, setFormData }) {
  return (
    <section className="space-y-8 bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl font-semibold">Product Details</h2>

      <InputField
        label="Product Name"
        placeholder="e.g. Minimalist Silk Blouse"
        value={formData.product_name}
        onChange={(e) =>
          setFormData({
            ...formData,
            product_name: e.target.value,
          })
        }
      />

      <div>
        <label className="block text-sm uppercase tracking-[2px] font-semibold mb-2">
          Description
        </label>

        <textarea
          rows="4"
          placeholder="Describe the silhouette, fabric composition, and fit..."
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
          className="w-full bg-transparent border-0 border-b border-black/20 py-3 resize-none focus:ring-0 focus:border-black"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm uppercase tracking-[2px] font-semibold mb-2">
            Category
          </label>

          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
            className="w-full bg-transparent border-0 border-b border-black/20 py-3 focus:ring-0 focus:border-black"
          >
            <option>Outerwear</option>
            <option>Dresses</option>
            <option>Tops</option>
            <option>Accessories</option>
          </select>
        </div>

        <label className="flex items-center gap-3 pt-8 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_featured}
            onChange={(e) =>
              setFormData({
                ...formData,
                is_featured: e.target.checked,
              })
            }
            className="w-5 h-5 accent-black"
          />

          <span className="text-sm">Mark as Featured Listing</span>
        </label>
      </div>
    </section>
  );
}

function InputField({
  label,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="block text-sm uppercase tracking-[2px] font-semibold mb-2">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-0 border-b border-black/20 py-3 text-lg focus:ring-0 focus:border-black"
      />
    </div>
  );
}

export default ProductDetailsForm;