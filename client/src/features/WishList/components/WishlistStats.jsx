import StatsCard from "./StatsCard";

function WishlistStats({ wishlist }) {
  const savedItems = wishlist.length;

  const totalValue = wishlist.reduce((total, item) => {
    return total + (item.product?.sale_price || 0);
  }, 0);

  // For now
  const priceDrops = 0;
  const backInStock = 0;

  return (
    <section className="relative -mt-14 z-20 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatsCard
            title="Saved Items"
            value={savedItems}
            icon="wishlist"
          />

          <StatsCard
            title="Total Value"
            value={`₹${totalValue.toLocaleString("en-IN")}`}
            icon="value"
          />

          <StatsCard
            title="Price Drops"
            value={priceDrops}
            icon="discount"
          />

          <StatsCard
            title="Back In Stock"
            value={backInStock}
            icon="stock"
          />

        </div>

      </div>
    </section>
  );
}

export default WishlistStats;