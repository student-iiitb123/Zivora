import Navbar from "../../../components/Navbar";

import WishlistHero from "../components/WishlistHero";
import WishlistStats from "../components/WishlistStats";
import WishlistGrid from "../components/WishlistGrid";
import RecommendedSection from "../components/RecommendedSection";
import WishlistFooter from "../components/WishlistFooter";
import StickyCartBar from "../components/StickyCartBar";

function WishlistPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      <Navbar />

      <main className="relative">

        {/* Background Glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#C6FF3A]/10 blur-[220px]" />

        {/* Hero */}
        <WishlistHero />

        {/* Stats */}
        <WishlistStats />

        {/* Wishlist Products */}
        <WishlistGrid />

        {/* Recommendations */}
        <RecommendedSection />

      </main>

      {/* Footer */}
      <WishlistFooter />

      {/* Floating Cart */}
      <StickyCartBar />

    </div>
  );
}

export default WishlistPage;