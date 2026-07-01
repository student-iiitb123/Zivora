import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RecommendedCard from "./RecommendedCard";

const recommendations = [
  {
    _id: 1,
    name: "Minimalist Loafers",
    category: "Footwear",
    salePrice: 650,
    mrp: 850,
    rating: 4.8,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZuAHEP6b2D1XawYsfC5IvYr7idlnPcuEMdpa9q3A9duRSeHFpk0QQJ84kgxSiUIJOMZEpJEijdHndJP3JqymkrPq7C3b7HvDn0ov2eluHNASF9JCipi_vuAHYryI8fq7nKabUAqqgv8xrVn6kqMQBwxUzew4ASuxmKuWZ1lFw1frPZYL-3iGBGyqWTjLqYGeYQuEn-j8KIyuE5x7eDQjUenAPUKCQXFjWU_BFBfgmu-rduAcK85OYENCuXB58EuK8lo5Hw-GS",
  },
];

function RecommendedSection() {
  const navigate = useNavigate();

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

        {/* Horizontal Slider */}

        <div className="flex gap-8 overflow-x-auto no-scrollbar pb-5">

          {recommendations.map((item) => (
            <RecommendedCard
              key={item._id}
              item={item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default RecommendedSection;