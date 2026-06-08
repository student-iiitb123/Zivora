function WishlistHero() {
  return (
    <section className="px-5 py-12 bg-gradient-to-b from-neutral-100 to-white">
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-5xl font-bold leading-none">
          Your
          <br />
          Wishlist
        </h2>

        <div className="bg-black text-white px-3 py-1 text-xs tracking-[3px] uppercase">
          2 Items Saved
        </div>
      </div>

      <p className="text-black/60 max-w-sm">
        Curated pieces reserved for your ultimate wardrobe collection.
      </p>
    </section>
  );
}

export default WishlistHero;