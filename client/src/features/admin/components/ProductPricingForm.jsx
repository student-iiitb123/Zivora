function ProductPricingForm() {
  return (
    <section className="space-y-8 bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl font-semibold">Pricing & Inventory</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <InputField label="Base Price (USD)" placeholder="0.00" type="number" />
        <InputField label="Sale Price (Optional)" placeholder="0.00" type="number" />
        <InputField label="SKU" placeholder="ZIV-2024-001" type="text" />
        <InputField label="Initial Stock" placeholder="100" type="number" />
      </div>
    </section>
  );
}

function InputField({ label, placeholder, type }) {
  return (
    <div>
      <label className="block text-sm uppercase tracking-[2px] font-semibold mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-black/20 py-3 focus:ring-0 focus:border-black"
      />
    </div>
  );
}

export default ProductPricingForm;