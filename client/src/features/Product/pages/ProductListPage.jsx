import Navbar from "../../../components/Navbar.js";
import ProductGrid from "../components/ProductGrid.js";
import Footer from "../../../components/Footer.js";

function ProductListPage() {
  return (
    <div className="bg-white text-black">
      <Navbar />

      <main className="pt-28 pb-24 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        <section className="mb-12 border-b border-black/10 pb-10">
          <p className="text-sm uppercase tracking-[6px] text-black/50 mb-4">
            Spring / Summer 2024 Collection
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-5xl md:text-7xl font-semibold uppercase tracking-tight">
              New Arrivals
            </h1>

            <span className="text-sm uppercase tracking-[4px] text-black/50">
              124 Products Found
            </span>
          </div>
        </section>

        <div className="sticky top-[80px] z-40 bg-white border-y border-black/10 mb-12">
          <div className="h-14 flex items-center justify-between">
            <div className="flex gap-8">
              <button className="flex items-center gap-2 text-xs uppercase tracking-[4px] text-black/70 hover:text-black">
                <span className="material-symbols-outlined text-[18px]">
                  tune
                </span>
                Filter
              </button>

              <button className="flex items-center gap-2 text-xs uppercase tracking-[4px] text-black/70 hover:text-black">
                <span className="material-symbols-outlined text-[18px]">
                  swap_vert
                </span>
                Sort
              </button>
            </div>

            <span className="hidden md:block text-xs uppercase tracking-[3px] text-black/40">
              Showing 1–24 of 124
            </span>
          </div>
        </div>

        <ProductGrid />

        <div className="mt-20 flex flex-col items-center gap-5">
          <button className="px-12 py-4 border border-black uppercase tracking-[4px] text-sm hover:bg-black hover:text-white transition-all duration-300">
            Load More
          </button>

          <p className="text-xs uppercase tracking-[4px] text-black/40">
            Showing 4 of 124
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProductListPage;