import ProductCard from "./ProductCart";

function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <p className="text-center text-black/50 uppercase tracking-[3px] py-20">
        No products found in this category.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;