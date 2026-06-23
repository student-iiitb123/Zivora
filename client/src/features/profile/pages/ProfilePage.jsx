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
  
  // 1. Setup local state to hold the dynamic user profile data
  const [userData, setUserData] = useState(null);

  // 2. Load the authenticated user details from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUserData(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error parsing user data from localStorage", error);
      }
    }
  }, []);

  return (
    <div className="bg-[#fbf9f9] text-black min-h-screen">
      <Navbar />

      {/* 3. Pass user details down to the drawer so it can display their name/avatar */}
      <ProfileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        user={userData} 
      />

      <main className="pt-20 pb-24 min-h-screen">
        {/* 4. Pass user data to the hero section (e.g. "Welcome, {user.name}") */}
        <ProfileHero user={userData} />
        
        {/* 5. Pass user details to the stats component (e.g. tier, membership rank) */}
        <ProfileStats user={userData} />
        
        {/* 6. Pass user ID or order reference to load historical orders dynamically */}
        <RecentOrders userId={userData?.id} />
        
        <MembershipBenefits user={userData} />
      </main>

      <Footer />
    </div>
  );
}

export default ProfilePage;