import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import Navbar from "../../../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../../../components/Footer";

function ProductListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://zivora-262a.onrender.com/api/listings"
        );

        console.log(data.data);

        setProducts(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const setFilter = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value === "All") {
      params.delete("category");
    } else {
      params.set("category", value);
    }

    setSearchParams(params);
  };

  const heading = category
    ? `${category}'s Collection`
    : "New Arrivals";

  const filteredProducts = category
    ? products.filter(
        (product) =>
          product.category?.toLowerCase() ===
          category.toLowerCase()
      )
    : products;

  return (
    <div className="bg-white text-black">
      <Navbar />

      <main className="pt-28 pb-24 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        {/* Hero */}
        <section className="mb-12 border-b border-black/10 pb-10">
          <p className="text-sm uppercase tracking-[6px] text-black/50 mb-4">
            Spring / Summer 2024 Collection
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-5xl md:text-7xl font-semibold uppercase tracking-tight">
              {heading}
            </h1>

            <span className="text-sm uppercase tracking-[4px] text-black/50">
              {filteredProducts.length} Products Found
            </span>
          </div>
        </section>

        {/* Filter Bar */}
        <div className="sticky top-[80px] z-40 bg-white border-y border-black/10 mb-12">
          <div className="h-14 flex items-center justify-between">
            <div className="flex gap-8 items-center">
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

              <div className="hidden sm:flex gap-4 ml-4 border-l border-black/10 pl-6">
                {["All", "Men", "Women"].map((label) => {
                  const isActive =
                    (label === "All" && !category) ||
                    category === label;

                  return (
                    <button
                      key={label}
                      onClick={() => setFilter(label)}
                      className={`text-xs uppercase tracking-[4px] transition ${
                        isActive
                          ? "text-black font-medium"
                          : "text-black/40 hover:text-black/70"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <span className="hidden md:block text-xs uppercase tracking-[3px] text-black/40">
              Showing {filteredProducts.length} Products
            </span>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20">
            Loading Products...
          </div>
        ) : (
          <ProductGrid products={filteredProducts} />
        )}

        <div className="mt-20 flex flex-col items-center gap-5">
          <button className="px-12 py-4 border border-black uppercase tracking-[4px] text-sm hover:bg-black hover:text-white transition-all duration-300">
            Load More
          </button>

          <p className="text-xs uppercase tracking-[4px] text-black/40">
            Showing {filteredProducts.length} of {products.length}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProductListPage;