import WishlistItem from "./WishlistItem";
import { wishlistProducts } from "../data/wishlistProducts";

function WishlistGrid() {
  return (
    <section className="px-5 mt-12 space-y-16">
      {wishlistProducts.map((item) => (
        <WishlistItem
          key={item.id}
          item={item}
        />
      ))}
    </section>
  );
}

export default WishlistGrid;