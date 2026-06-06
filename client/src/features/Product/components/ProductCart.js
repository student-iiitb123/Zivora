import { useState } from "react";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  const [wishlist, setWishlist] = useState(false);

  return (
    <motion.div
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
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-all duration-1000 ease-out group-hover:scale-110"
        />

        {/* Wishlist */}
        <button
          onClick={() => setWishlist(!wishlist)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-all duration-300"
        >
          <span className="text-sm">
            {wishlist ? "❤️" : "♡"}
          </span>
        </button>

        {/* Add To Bag */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full bg-black text-white py-3 text-xs uppercase tracking-[3px] hover:bg-neutral-800 transition">
            Add To Bag
          </button>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">

        <h3 className="text-sm font-medium uppercase tracking-wide text-black">
          {product.name}
        </h3>

        <div className="flex justify-between items-center">
          <p className="text-sm text-black/50">
            {product.color}
          </p>

          <p className="text-sm font-semibold text-black">
            {product.price}
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default ProductCard;