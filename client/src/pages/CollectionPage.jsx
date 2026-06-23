import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CollectionPage() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://zivora-262a.onrender.com/api/listings"
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
    <>
      <Navbar />

      <section className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-semibold mb-4">
              COLLECTION
            </h1>

            <p className="text-black/50">
              Timeless essentials crafted for modern elegance.
            </p>
          </div>

          {/* Categories */}
          <div className="flex justify-center gap-8 border-b border-black/10 pb-4 mb-12">
            {["ALL", "MEN", "WOMEN"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm uppercase pb-2 ${
                  activeCategory === category
                    ? "border-b-2 border-black text-black"
                    : "text-black/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products */}
          {loading ? (
            <div className="text-center py-20">
              Loading Products...
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  onClick={() => navigate(`/products/${product._id}`)}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
                    <img
                      src={
                        product.media?.[0]?.url ||
                        "https://via.placeholder.com/600x750"
                      }
                      alt={product.product_name}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="uppercase font-medium">
                      {product.product_name}
                    </h3>

                    <p className="text-black/60 mt-1">
                      ₹{product.sale_price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}