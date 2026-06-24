import { useState, useEffect } from "react";
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
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("user");

      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUserData(parsedUser);
      }
    } catch (error) {
      console.error("Error loading user data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm tracking-wider uppercase">
          Loading Profile...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#fbf9f9] text-black min-h-screen">
      <Navbar />

      <ProfileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        user={userData}
      />

      <main className="pt-20 pb-24 min-h-screen">
        <ProfileHero user={userData} />

        <ProfileStats user={userData} />

        <RecentOrders userId={userData?._id || userData?.id} />

        <MembershipBenefits user={userData} />
      </main>

      <ProfileBottomNav />

      <Footer />
    </div>
  );
}

export default ProfilePage;