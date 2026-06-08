import { useState } from "react";
import Navbar from "../../../components/Navbar";
import ProfileDrawer from "../components/ProfileDrawer";
import ProfileHero from "../components/ProfileHero";
import ProfileStats from "../components/ProfileStats";
import RecentOrders from "../components/RecentOrders";
import MembershipBenefits from "../components/MembershipBenefits";
import ProfileBottomNav from "../components/ProfileBottomNav";
import Footer from "../../../components/Footer";

function ProfilePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="bg-[#fbf9f9] text-black min-h-screen">
<Navbar />

      <ProfileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <main className="pt-20 pb-24 min-h-screen">
        <ProfileHero />
        <ProfileStats />
        <RecentOrders />
        <MembershipBenefits />
      </main>

   <Footer />
    </div>
  );
}

export default ProfilePage;