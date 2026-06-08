import Navbar from "../../../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../../../components/Footer";

function ProductListPage() {
  return (
    <div className="bg-white text-black">

      <Navbar />

      <main className="pt-24 pb-24 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">

        {/* Collection Header */}
        <section className="mb-14">
          <span className="block text-sm uppercase tracking-[6px] text-black/50 mb-4">
            Spring / Summer 2026
          </span>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            NEW ARRIVALS
          </h1>

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <p className="text-black/60 max-w-xl leading-relaxed">
              Discover the latest pieces crafted with timeless elegance,
              refined tailoring and modern sophistication.
            </p>

            <span className="text-sm uppercase tracking-[4px] text-black/50">
              124 Products
            </span>
          </div>
        </section>

        {/* Filter Bar */}
        <div className="sticky top-[80px] z-30 bg-white border-y border-black/10 mb-12">
          <div className="h-14 flex justify-between items-center">

            <div className="flex gap-8">

              <button className="flex items-center gap-2 text-sm uppercase tracking-widest">
                <span className="material-symbols-outlined text-[18px]">
                  tune
                </span>
                Filter
              </button>

              <button className="flex items-center gap-2 text-sm uppercase tracking-widest">
                <span className="material-symbols-outlined text-[18px]">
                  swap_vert
                </span>
                Sort
              </button>

            </div>

            <span className="hidden md:block text-sm text-black/50">
              Showing 1–24 of 124
            </span>

          </div>
        </div>

        {/* Products */}
        <ProductGrid />

        {/* Load More */}
        <div className="mt-20 flex flex-col items-center">

          <button className="px-12 py-4 border border-black uppercase tracking-[4px] hover:bg-black hover:text-white transition-all duration-300">
            Load More
          </button>

          <p className="mt-5 text-xs uppercase tracking-[4px] text-black/40">
            Showing 24 of 124 Products
          </p>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default ProductListPage;