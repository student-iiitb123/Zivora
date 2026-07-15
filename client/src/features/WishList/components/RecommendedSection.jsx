import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import RecommendedCard from "./RecommendedCard";

import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "../../../services/wishlistService";

import { addToCart } from "../../../services/cartService";

function RecommendedSection() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchWishlist();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://zivora-262a.onrender.com/api/listings"
      );

      setProducts(data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchWishlist = async () => {
    try {
      const { data } = await getWishlist();

      const ids =
        data.wishlist?.items?.map((item) => item.product._id) || [];

      setWishlistIds(ids);
    } catch (err) {
      console.log(err);
    }
  };

  const handleWishlist = async (product) => {
    try {
      if (wishlistIds.includes(product._id)) {
        await removeFromWishlist(product._id);

        setWishlistIds((prev) =>
          prev.filter((id) => id !== product._id)
        );
      } else {
        await addToWishlist(product._id);

        setWishlistIds((prev) => [...prev, product._id]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = async (product) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user?._id) {
        navigate("/login");
        return;
      }

      await addToCart({
        userId: user._id,
        productId: product._id,
        quantity: 1,
        size: product.sizes?.[0] || "",
        color: product.colors?.[0] || "",
      });

      alert("Added to Cart ❤️");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-[#C6FF3A]/10 blur-[150px]" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">

          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[5px] text-white/50 mb-4 font-mono">
              <Sparkles
                size={14}
                className="text-[#C6FF3A]"
              />
              AI Recommendations
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none text-white">
              Curated
              <br />
              For You
            </h2>
          </div>

          <button
            onClick={() => navigate("/products")}
            className="group flex items-center gap-2 text-sm uppercase tracking-[3px] text-white hover:text-[#C6FF3A] transition"
          >
            View Collection

            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </button>

        </div>

        {/* Products */}

        <div className="flex gap-8 overflow-x-auto no-scrollbar pb-5">

          {products.map((product) => (
            <RecommendedCard
              key={product._id}
              item={product}
              onWishlist={handleWishlist}
              onAddToCart={handleAddToCart}
              isWishlisted={wishlistIds.includes(product._id)}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default RecommendedSection;