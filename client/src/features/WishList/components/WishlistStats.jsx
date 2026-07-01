import StatsCard from "./StatsCard";

function WishlistStats() {
  return (
    <section className="relative -mt-14 z-20 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatsCard
            title="Saved Items"
            value="12"
            icon="wishlist"
          />

          <StatsCard
            title="Total Value"
            value="₹42,560"
            icon="value"
          />

          <StatsCard
            title="Price Drops"
            value="6"
            icon="discount"
          />

          <StatsCard
            title="Back In Stock"
            value="3"
            icon="stock"
          />

        </div>

      </div>
    </section>
  );
}

export default WishlistStats;