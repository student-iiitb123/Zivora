import WishlistItem from "./WishlistItem";

function WishlistGrid({
  wishlist,
  loading,
  onRemove,
  onAddToCart,
}) {
  if (loading) {
    return (
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 py-16">
        <div className="text-center text-white/60">
          Loading wishlist...
        </div>
      </section>
    );
  }

  if (!wishlist.length) {
    return (
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 py-24">

        <div className="border border-white/10 rounded-3xl bg-[#111] py-24 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Your Wishlist is Empty ❤️
          </h2>

          <p className="text-white/50">
            Save your favorite products and they'll appear here.
          </p>

        </div>

      </section>
    );
  }

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 py-16">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {wishlist.map((item) => (
          <WishlistItem
            key={item.product._id}
            item={item}
            onRemove={onRemove}
            onAddToCart={onAddToCart}
          />
        ))}

      </div>

    </section>
  );
}

export default WishlistGrid;