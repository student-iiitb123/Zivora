import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

import { addToCart } from "../../../services/cartService";

function WishlistPage() {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Wishlist
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

  // Remove Item
  const handleRemove = async (productId) => {
    try {
      await removeFromWishlist(productId);

      setWishlist((prev) =>
        prev.filter((item) => item.product._id !== productId)
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Add To Cart
  const handleAddToCart = async (product) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user?._id) {
        navigate("/login");
        return;
      }

      await addToCart({
        userId: user._id,
        productId: product._id,
        quantity: 1,
        size: product.sizes?.[0] || "",
        color: product.colors?.[0] || "",
      });

      alert("Added to cart successfully ❤️");
    } catch (err) {
      console.log(err);
      alert("Failed to add to cart.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <main className="relative">
        {/* Background Glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#C6FF3A]/10 blur-[220px]" />

        {/* Hero */}
        <WishlistHero />

        {/* Stats */}
        <WishlistStats wishlist={wishlist} />

        {/* Wishlist Products */}
        <WishlistGrid
          wishlist={wishlist}
          loading={loading}
          onRemove={handleRemove}
          onAddToCart={handleAddToCart}
        />

        {/* Recommended Products */}
        <RecommendedSection />
      </main>

      {/* Footer */}
      <WishlistFooter />

      {/* Sticky Cart */}
      <StickyCartBar wishlist={wishlist} />
    </div>
  );
}

export default WishlistPage;