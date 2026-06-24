import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../../components/Navbar";
import ProfileDrawer from "../components/ProfileDrawer";
import ProfileHero from "../components/ProfileHero";
import ProfileStats from "../components/ProfileStats";
import RecentOrders from "../components/RecentOrders";
import MembershipBenefits from "../components/MembershipBenefits";
import ProfileBottomNav from "../components/ProfileBottomNav";
import Footer from "../../../components/Footer";

function ProfilePage() {
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("user");

      // Redirect if not logged in
      if (!savedUser) {
        navigate("/login", { replace: true });
        return;
      }

      const parsedUser = JSON.parse(savedUser);
      setUserData(parsedUser);
    } catch (error) {
      console.error("Error loading user data:", error);

      localStorage.removeItem("user");
      navigate("/login", { replace: true });
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbf9f9]">
        <p className="text-sm uppercase tracking-[4px] text-black/60">
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
        <ProfileHero
          user={userData}
          onMenuClick={() => setDrawerOpen(true)}
        />

        <ProfileStats user={userData} />

        <RecentOrders
          userId={userData?._id || userData?.id}
        />

        <MembershipBenefits user={userData} />
      </main>

      <ProfileBottomNav />

      <Footer />
    </div>
  );
}

export default ProfilePage;