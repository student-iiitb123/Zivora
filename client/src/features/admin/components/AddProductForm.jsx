import { useState } from "react";

import ProductMediaSection from "./ProductMediaSection";
import ProductDetailsForm from "./ProductDetailsForm";
import ProductPricingForm from "./ProductPricingForm";
import ProductActionsPanel from "./ProductActionsPanel";
import ProductAttributesPanel from "./ProductAttributesPanel";
import ProductCollectionsPanel from "./ProductCollectionsPanel";

function AddProductForm() {

  const [formData, setFormData] = useState({
    product_name: "",
    description: "",
    category: "",
    base_price: "",
    sale_price: "",
    sku: "",
    initial_stock: "",
    sizes: [],
    colors: [],
    collections: [],
    is_featured: false,
    status: "draft",
  });

  const [images, setImages] = useState([]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 space-y-12">

        <ProductMediaSection
          images={images}
          setImages={setImages}
        />

        <ProductDetailsForm
          formData={formData}
          setFormData={setFormData}
        />

        <ProductPricingForm
          formData={formData}
          setFormData={setFormData}
        />

      </div>

      <div className="lg:col-span-4 space-y-8">

        <ProductActionsPanel
          formData={formData}
          images={images}
        />

        <ProductAttributesPanel
          formData={formData}
          setFormData={setFormData}
        />

        <ProductCollectionsPanel />

      </div>
    </div>
  );
}

export default AddProductForm;