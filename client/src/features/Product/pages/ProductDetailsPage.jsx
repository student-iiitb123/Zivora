import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Heart } from "lucide-react";

const product = {
  name: "Tailored Wool Blazer",
  category: "New Arrivals",
  price: "$540.00",
  color: "Charcoal",
  images: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCdnvupByvCahVlqd9mZEHHa0bsU_S_kPfzixryVniu2KYWsWQqccCA2NPra4nji6E8yoy-kA1Zfyt8-qCFjY0Tjxw-I--oajeWcAG9JJSGx50ZHj0J4YJ81UEeQ58L05EMH2Mg0jjVkIVa4jaWs7ulNwoWL_mFD3B23SwrKAMVxES4C9cbI5dE6tA6AjwTS-5gNHa14rVHjEo3PX4VoJOWlYS0ky_A-RJvOJWXEjxxJKSiNswI1b8TtZEK1O3qLEFN8OMGkhfI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCmbgPwUAqDIApRBvcrr_ByTw0QmMQvGV0pMmBMGJp-Jd5sPLFdEY_VpfidQBdgqUz6PTpyVIIHsQrzdLzKC1AzNAPFQzDKVmS5pTL-hrvvy6V6YcqyT7ayJ4-UNMwGdUshO7wL3_RNM4FXfgdxQ4uEfIqxx57wn0vEkzZNO-hvnXS821Nid8JkzUvSudrqzSoWyDJWlWHGTQ8NvGZgWiO0MdUtliphPKsdg16OXz-qyBzxbr-V_MVRg_GGtRwCa4jvyLslSoE-",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD4iQ6l8VbpcqNcDc9KR5J3yuT87tDq9Cg9qHak-GrZnBPBOEgyEsjg6SrySl4l5wUinYMJlEluIJ5vqB_KQsr3jE7WEHBVL2Gx_0kCjW-u8kkTFWlpA_rY9CHGHwoi3t2z7mjqR1mXFMPed9qs7lCeaHWPKwiWmEo2d90eqH3df6LOXCbRxVP0HaE8dFcxaQHWQu1sQC9OlSkOorkXb2J8o47LeySKQAAH-Qx2AeqLvZljlA9q40yNpvdfL7aThPCAz1Usmw5Q",
  ],
};

function ProductDetailPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="bg-white text-black">
      <Navbar />

      <main className="pt-28 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-24">
          
          {/* Images */}
          <div className="grid grid-cols-[80px_1fr] gap-5">
            <div className="hidden md:flex flex-col gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-[4/5] overflow-hidden border ${
                    activeImage === index ? "border-black" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-28 h-fit">
            <p className="text-xs uppercase tracking-[5px] text-black/50 mb-4">
              {product.category}
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {product.name}
            </h1>

            <p className="text-xl mb-10">{product.price}</p>

            <div className="mb-10">
              <p className="text-xs uppercase tracking-[4px] mb-4">
                Color: {product.color}
              </p>

              <div className="flex gap-4">
                <button className="w-8 h-8 rounded-full bg-[#333] ring-2 ring-black ring-offset-2"></button>
                <button className="w-8 h-8 rounded-full bg-[#e3e2e0] border border-black/10"></button>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex justify-between mb-4">
                <p className="text-xs uppercase tracking-[4px]">Size</p>
                <button className="text-xs uppercase tracking-[3px] underline">
                  Size Guide
                </button>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-14 border text-sm ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-black/20 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <button className="w-full h-14 bg-black text-white uppercase tracking-[4px] text-sm hover:bg-neutral-800 transition">
                Add To Bag
              </button>

              <button className="w-full h-14 border border-black uppercase tracking-[4px] text-sm flex items-center justify-center gap-3 hover:bg-black hover:text-white transition">
                <Heart size={18} />
                Wishlist
              </button>
            </div>

            <div className="border-t border-black/10">
              {["Composition & Care", "The Fit", "Shipping & Returns"].map(
                (item) => (
                  <details key={item} className="border-b border-black/10 py-5">
                    <summary className="cursor-pointer text-sm uppercase tracking-[3px]">
                      {item}
                    </summary>
                    <p className="pt-4 text-sm leading-relaxed text-black/60">
                      Crafted with premium materials. Designed for comfort,
                      durability and timeless everyday styling.
                    </p>
                  </details>
                )
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProductDetailPage;