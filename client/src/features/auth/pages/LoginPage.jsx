import EditorialPanel from "../components/EditorialPanel";
import LoginCard from "../components/LoginCard";
import MobileLogo from "../components/MobileLogo";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function LoginPage() {
  return (
    <>
    <main className="min-h-screen flex bg-[#fbf9f9]">
        <Navbar />
      <EditorialPanel />

      <section className="w-full md:w-1/2 min-h-screen flex items-center justify-center px-6 md:px-16 relative">
        <MobileLogo />
        <LoginCard />

       
      
      </section>
    </main>
    <Footer />
    </>
  );
}

export default LoginPage;