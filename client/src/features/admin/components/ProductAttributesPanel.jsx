import ProductSizeSelector from "./ProductSizeSelector";
import ProductColorSelector from "./ProductColorSelector";

function ProductAttributesPanel() {
  return (
    <section className="bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] space-y-8">
      <h2 className="text-2xl font-semibold">Attributes</h2>

      <ProductSizeSelector />

      <ProductColorSelector />
    </section>
  );
}

export default ProductAttributesPanel;