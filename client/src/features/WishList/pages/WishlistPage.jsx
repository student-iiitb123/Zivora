
import WishlistHero from "../components/WishlistHero";
import WishlistStats from "../components/WishlistStats";
import WishlistGrid from "../components/WishlistGrid";
import RecommendedSection from "../components/RecommendedSection";
import WishlistFooter from "../components/WishlistFooter";
import StickyCartBar from "../components/StickyCartBar";
import Navbar from "../../../components/Navbar";

function WishlistPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20 pb-32">
        <WishlistHero />

        <WishlistStats />

        <WishlistGrid />

        <RecommendedSection />
      </main>

      <WishlistFooter />

      <StickyCartBar />
    </>
  );
}

export default WishlistPage;