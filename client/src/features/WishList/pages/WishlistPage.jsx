import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

import WishlistHero from "../components/WishlistHero";
import WishlistStats from "../components/WishlistStats";
import WishlistGrid from "../components/WishlistGrid";
import RecommendedSection from "../components/RecommendedSection";
import WishlistFooter from "../components/WishlistFooter";
import StickyCartBar from "../components/StickyCartBar";

import {
  getWishlist,
  removeFromWishlist,
} from "../../../services/wishlistService";

function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWishlist = async () => {
    try {
      setLoading(true);

      const { data } = await getWishlist();

      setWishlist(data.wishlist?.items || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleRemove = async (productId) => {
    try {
      await removeFromWishlist(productId);
      fetchWishlist();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      <Navbar />

      <main className="relative">

        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#C6FF3A]/10 blur-[220px]" />

        <WishlistHero />

        <WishlistStats wishlist={wishlist} />

        <WishlistGrid
          wishlist={wishlist}
          loading={loading}
          onRemove={handleRemove}
        />

        <RecommendedSection />

      </main>

      <WishlistFooter />

      <StickyCartBar wishlist={wishlist} />

    </div>
  );
}

export default WishlistPage;