import WishlistItem from "./WishlistItem";
import { wishlistProducts } from "../data/wishlistProducts";

function WishlistGrid() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 py-16">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {wishlistProducts.map((item) => (
          <WishlistItem
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </section>
  );
}

export default WishlistGrid;