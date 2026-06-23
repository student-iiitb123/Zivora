import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NewArrivalPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://zivora-262a.onrender.com/api/listings"
        );

        const sortedProducts = data.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setProducts(sortedProducts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          {/* Heading */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-semibold tracking-tight mb-4">
              NEW ARRIVALS
            </h1>

            <p className="text-black/50">
              Discover the latest pieces added to the collection.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-20">
              Loading Products...
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div
                  key={product._id}
                  onClick={() => navigate(`/products/${product._id}`)}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] bg-neutral-100 overflow-hidden relative">
                    <img
                      src={
                        product.media?.[0]?.url ||
                        "https://via.placeholder.com/600x750"
                      }
                      alt={product.product_name}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 uppercase">
                      New
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-medium uppercase">
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