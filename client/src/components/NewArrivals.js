import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/listings"
        );

        setProducts(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() ===
            activeCategory.toLowerCase()
        );

  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-black mb-6 sm:mb-8">
            NEW ARRIVALS
          </h2>

          <div className="flex justify-center gap-8 overflow-x-auto border-b border-black/10 pb-4 max-w-2xl mx-auto">
            {["ALL", "MEN", "WOMEN"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-medium pb-4 ${
                  activeCategory === category
                    ? "text-black border-b-2 border-black -mb-[18px]"
                    : "text-black/50 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
       {/* Loading */}
{loading ? (
  <div className="text-center py-20 text-black/50">
    Loading Products...
  </div>
) : filteredProducts.length > 0 ? (
  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
    {filteredProducts.map((product, index) => (
      <div
        key={product._id}
        onClick={() => navigate(`/products/${product._id}`)}
        className={`group cursor-pointer ${
          index % 2 !== 0 ? "md:mt-12" : ""
        }`}
      >
        <div className="aspect-[4/5] overflow-hidden mb-4 bg-neutral-100">
          <img
            src={
              product.media?.[0]?.url ||
              "https://via.placeholder.com/600x750"
            }
            alt={product.product_name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <h5 className="text-xs sm:text-sm font-medium text-black uppercase">
          {product.product_name}
        </h5>

        <p className="text-xs sm:text-sm text-black/60">
          ₹{product.sale_price}
        </p>
      </div>
    ))}
  </div>
) : (
  <div className="flex flex-col items-center justify-center py-28 px-6 border border-black/10 bg-neutral-50 text-center">
    <div className="w-24 h-24 rounded-full bg-white shadow-sm flex items-center justify-center mb-8">
      <span className="material-symbols-outlined text-5xl text-black/30">
        auto_awesome
      </span>
    </div>

    <span className="text-xs tracking-[6px] uppercase text-black/40 mb-3">
      Coming Soon
    </span>

    <h3 className="text-3xl md:text-4xl font-semibold text-black mb-4">
      No New Arrivals Yet
    </h3>

    <p className="max-w-lg text-black/50 leading-7 mb-10">
      Fresh styles are arriving soon. Discover timeless silhouettes and
      refined essentials crafted for modern elegance.
    </p>

    <button
      onClick={() => navigate("/products")}
      className="bg-black text-white px-10 py-4 text-sm uppercase tracking-[4px] hover:bg-neutral-800 transition"
    >
      Explore Collection
    </button>
  </div>
)}
      </div>
    </section>
  );
}