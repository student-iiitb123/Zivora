import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState(false);

  return (
 <motion.div
  onClick={() => navigate(`/products/${product._id}`)}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
  }}
  className="group cursor-pointer"
>
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-4 rounded-sm">
      <img
  src={product.media?.[0]?.url}
  alt={product.product_name}
  className="w-full h-full object-cover object-center transition-all duration-1000 ease-out group-hover:scale-110"
  onError={(e) => {
    console.log("Image failed:", product.media?.[0]?.url);
  }}
/>
       <button
  onClick={(e) => {
    e.stopPropagation();
    setWishlist(!wishlist);
  }}
>
          <span className="text-sm">
            {wishlist ? "❤️" : "♡"}
          </span>
        </button>

        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full bg-black text-white py-3 text-xs uppercase tracking-[3px] hover:bg-neutral-800 transition">
            Add To Bag
          </button>
        </div>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium uppercase tracking-wide text-black">
          {product.product_name}
        </h3>

        <div className="flex justify-between items-center">
          <p className="text-sm text-black/50">
            {product.category}
          </p>

          <p className="text-sm font-semibold text-black">
            ₹{product.sale_price}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;