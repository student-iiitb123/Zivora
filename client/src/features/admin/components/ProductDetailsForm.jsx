function ProductDetailsForm() {
  return (
    <section className="space-y-8 bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl font-semibold">Product Details</h2>

      <InputField label="Product Name" placeholder="e.g. Minimalist Silk Blouse" />

      <div>
        <label className="block text-sm uppercase tracking-[2px] font-semibold mb-2">
          Description
        </label>

        <textarea
          rows="4"
          placeholder="Describe the silhouette, fabric composition, and fit..."
          className="w-full bg-transparent border-0 border-b border-black/20 py-3 resize-none focus:ring-0 focus:border-black"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm uppercase tracking-[2px] font-semibold mb-2">
            Category
          </label>

          <select className="w-full bg-transparent border-0 border-b border-black/20 py-3 focus:ring-0 focus:border-black">
            <option>Outerwear</option>
            <option>Dresses</option>
            <option>Tops</option>
            <option>Accessories</option>
          </select>
        </div>

        <label className="flex items-center gap-3 pt-8 cursor-pointer">
          <input type="checkbox" className="w-5 h-5 accent-black" />
          <span className="text-sm">Mark as Featured Listing</span>
        </label>
      </div>
    </section>
  );
}

function InputField({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm uppercase tracking-[2px] font-semibold mb-2">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-black/20 py-3 text-lg focus:ring-0 focus:border-black"
      />
    </div>
  );
}

export default ProductDetailsForm;