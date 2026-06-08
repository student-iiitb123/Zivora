import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import RegisterHero from "../components/RegisterHero";
import RegisterCard from "../components/RegisterCard";
import SignInRedirect from "../components/SignInRedirect";


function RegisterPage() {
  return (
    <div className="bg-[#fbf9f9] min-h-screen">
      <Navbar />

      <div className="pt-24">
        <RegisterHero />

        <main className="max-w-7xl mx-auto px-5 py-20">
          <RegisterCard />

          <SignInRedirect />

         
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default RegisterPage;