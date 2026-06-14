import AdminLoginHero from "../components/AdminLoginHero";
import AdminLoginPanel from "../components/AdminLoginPanel";
import AdminLoginFooter from "../components/AdminLoginFooter";

function AdminLoginPage() {
  return (
    <div className="bg-[#fbf9f9] text-black min-h-screen overflow-hidden">
      <main className="min-h-screen flex flex-col md:flex-row">
        <AdminLoginHero />

        <section className="flex-1 md:w-1/2 flex items-center justify-center px-5 md:px-16 py-12 relative">
          <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
            <span className="text-[120px] leading-none select-none font-bold">
              Z
            </span>
          </div>

          <AdminLoginPanel />
        </section>
      </main>

      <AdminLoginFooter />
    </div>
  );
}

export default AdminLoginPage;