import ProductMediaSection from "./ProductMediaSection";
import ProductDetailsForm from "./ProductDetailsForm";
import ProductPricingForm from "./ProductPricingForm";
import ProductActionsPanel from "./ProductActionsPanel";
import ProductAttributesPanel from "./ProductAttributesPanel";
import ProductCollectionsPanel from "./ProductCollectionsPanel";

function AddProductForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 space-y-12">
        <ProductMediaSection />
        <ProductDetailsForm />
        <ProductPricingForm />
      </div>

      <div className="lg:col-span-4 space-y-8">
        <ProductActionsPanel />
        <ProductAttributesPanel />
        <ProductCollectionsPanel />
      </div>
    </div>
  );
}

export default AddProductForm;