import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart } from "../../../services/cartService";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Heart } from "lucide-react";
import { getReviews } from "../../../services/reviewService.js";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [reviews, setReviews] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(true);

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://zivora-262a.onrender.com/api/listings/${id}`
        );

        setProduct(data.data);

        if (data.data.sizes?.length > 0) {
          setSelectedSize(data.data.sizes[0]);
        }
        if (data.data.colors?.length > 0) {
          setSelectedColor(data.data.colors[0]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Fetch reviews (moved out of handleAddToBag — it was defined there but never called)
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setReviewLoading(true);

        const { data } = await getReviews(id);

        setReviews(data.reviews || []);
      } catch (err) {
        console.log(err);
      } finally {
        setReviewLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  const handleAddToBag = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user?._id) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      const res = await addToCart({
        userId: user._id,
        productId: product._id,
        quantity: 1,
        size: selectedSize,
        color: selectedColor,
      });

      console.log("Add To Cart Response:", res.data);

      navigate("/cart");
    } catch (error) {
      console.error("Add To Cart Error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="bg-white text-black">
      <Navbar />

      <main className="pt-28 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-24">

          {/* Images */}
          <div className="grid grid-cols-[80px_1fr] gap-5">
            <div className="hidden md:flex flex-col gap-4">
              {product.media?.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-[4/5] overflow-hidden border ${
                    activeImage === index
                      ? "border-black"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img.url}
                    alt={product.product_name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
              <img
                src={product.media?.[activeImage]?.url}
                alt={product.product_name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 h-fit">

            <p className="text-xs uppercase tracking-[5px] text-black/50 mb-4">
              {product.category}
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {product.product_name}
            </h1>

            <p className="text-xl font-semibold mb-4">
              ₹{product.sale_price}
            </p>

            <div className="flex items-center gap-3 mb-6">
  <span className="text-yellow-500 text-lg">
    {"⭐".repeat(Math.round(product.average_rating || 0))}
  </span>

  <span className="text-sm text-gray-600">
    {product.average_rating || 0} ({product.total_reviews || 0} Reviews)
  </span>
</div>

            <p className="text-black/60 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            {product.colors?.length > 0 && (
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[4px] mb-4">
                  Available Colors
                </p>

                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1 border text-xs uppercase ${
                        selectedColor === color
                          ? "bg-black text-white"
                          : ""
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes?.length > 0 && (
              <div className="mb-10">
                <div className="flex justify-between mb-4">
                  <p className="text-xs uppercase tracking-[4px]">
                    Size
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
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
            )}

            {/* Stock */}
            <div className="mb-8">
              <p className="text-sm text-black/60">
                Stock Available: {product.stock}
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-4 mb-10">
              <button
                onClick={handleAddToBag}
                className="w-full h-14 bg-black text-white uppercase tracking-[4px] text-sm"
              >
                Add To Bag
              </button>

              <button className="w-full h-14 border border-black uppercase tracking-[4px] text-sm flex items-center justify-center gap-3">
                <Heart size={18} />
                Wishlist
              </button>
            </div>

            {/* Accordion */}
            <div className="border-t border-black/10">
              <details className="border-b border-black/10 py-5">
                <summary className="cursor-pointer text-sm uppercase tracking-[3px]">
                  Product Details
                </summary>

                <p className="pt-4 text-sm leading-relaxed text-black/60">
                  SKU: {product.sku}
                </p>

                <p className="pt-2 text-sm leading-relaxed text-black/60">
                  Category: {product.category}
                </p>
              </details>

              <details className="border-b border-black/10 py-5">
                <summary className="cursor-pointer text-sm uppercase tracking-[3px]">
                  Shipping & Returns
                </summary>

                <p className="pt-4 text-sm leading-relaxed text-black/60">
                  Standard shipping available. Returns accepted as per store
                  policy.
                </p>
              </details>
            </div>

          </div>
        </section>

        {/* Reviews */}
        <section className="pb-24 border-t border-black/10 pt-12">
          <h2 className="text-2xl font-semibold mb-8">Customer Reviews</h2>

          {reviewLoading ? (
            <p className="text-black/60">Loading reviews...</p>
          ) : reviews.length === 0 ? (
            <p className="text-black/60">No reviews yet.</p>
          ) : (
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={review._id || index} className="border-b border-black/10 pb-6">
                 <p className="text-sm font-semibold mb-1">
  {review.user?.name || "Anonymous"} — {"⭐".repeat(review.rating)}
</p>
                  <p className="text-sm text-black/60">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProductDetailPage;