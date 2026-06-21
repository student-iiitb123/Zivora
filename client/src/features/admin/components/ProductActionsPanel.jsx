import API from "../../../api/listingApi";


function ProductActionsPanel({
  formData,
  images,
}) {

  const handlePublish = async (e) => {
   e.preventDefault();
  try {

    const data = new FormData();

    data.append(
      "seller_id",
      "686d7abec5f69b5b3e96d801"
    );

    data.append(
      "product_name",
      formData.product_name
    );

    data.append(
      "description",
      formData.description
    );

    data.append(
      "category",
      formData.category
    );

    data.append(
      "base_price",
      formData.base_price
    );

    data.append(
      "sale_price",
      formData.sale_price
    );

    data.append(
      "sku",
      formData.sku
    );

    data.append(
      "initial_stock",
      formData.initial_stock
    );

    data.append(
      "sizes",
      JSON.stringify(formData.sizes)
    );

    data.append(
      "colors",
      JSON.stringify(formData.colors)
    );

    data.append(
      "collections",
      JSON.stringify(formData.collections)
    );

    data.append(
      "status",
      "published"
    );

    images.forEach((image) => {
      data.append("images", image);
    });

    const res = await API.post(
      "/listings",
      data
    );

    console.log(res.data);

    alert("Listing Created!");

  } catch (error) {

    console.log(error);

    alert("Something went wrong");

  }
};
  return (
    <section className="bg-black p-8 space-y-4">
    <button
  type="button"
  onClick={handlePublish}
  className="w-full bg-white text-black py-4 text-sm uppercase tracking-[4px] font-bold hover:bg-neutral-200 transition"
>
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