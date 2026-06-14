function ProductActionsPanel() {
  return (
    <section className="bg-black p-8 space-y-4">
      <button className="w-full bg-white text-black py-4 text-sm uppercase tracking-[4px] font-bold hover:bg-neutral-200 transition">
        Publish Listing
      </button>

      <button className="w-full border border-white/40 text-white py-4 text-sm uppercase tracking-[4px] hover:border-white transition">
        Save as Draft
      </button>

      <p className="text-white/60 text-center text-[10px] uppercase tracking-[3px] pt-2">
        Last saved: 2 mins ago
      </p>
    </section>
  );
}

export default ProductActionsPanel;