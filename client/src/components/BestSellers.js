import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BestSellers() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/listings/best-sellers"
        );

        setProducts(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-10 sm:mb-14">
          <div>
            <span className="text-xs sm:text-sm text-black/50 tracking-[3px] sm:tracking-[5px] uppercase mb-3 block">
              CURATED FAVORITES
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-black">
              BEST SELLERS
            </h2>
          </div>

          <button
            onClick={() => navigate("/products")}
            className="w-fit text-xs sm:text-sm uppercase tracking-widest text-black border-b border-black pb-1 flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            VIEW ALL
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product._id}`)}
      className="group cursor-pointer"
    >
      <div className="relative mb-4 sm:mb-5 aspect-[4/5] overflow-hidden bg-white">

        <img
          src={
            product.media?.[0]?.url ||
            "https://via.placeholder.com/600x750"
          }
          alt={product.product_name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-3 md:group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
        >
          ADD TO BAG
        </button>

        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white/90 rounded-full flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-black text-[20px] sm:text-[24px]">
            favorite
          </span>
        </button>
      </div>

      <h4 className="text-sm sm:text-base font-medium text-black mb-1">
        {product.product_name}
      </h4>

      <p className="text-xs sm:text-sm text-black/50 mb-2">
        {product.category}
      </p>

      <p className="text-sm sm:text-base font-semibold text-black">
        ₹{product.sale_price}
      </p>
    </div>
  );
}