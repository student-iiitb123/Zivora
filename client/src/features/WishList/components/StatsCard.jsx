import { TrendingUp, Heart, ShoppingBag, Tag } from "lucide-react";

function StatsCard({ title, value, danger, icon }) {
  const icons = {
    wishlist: <Heart size={22} />,
    value: <ShoppingBag size={22} />,
    discount: <Tag size={22} />,
    stock: <TrendingUp size={22} />,
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-[#111] border border-white/10 p-6 h-40 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-[#C6FF3A]/40 hover:shadow-[0_0_35px_rgba(198,255,58,0.12)]">

      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#C6FF3A]/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Icon */}
      <div className="relative flex items-center justify-between">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C6FF3A]">
          {icons[icon]}
        </div>

        <span className="text-[10px] uppercase tracking-[3px] text-white/35 font-mono">
          LIVE
        </span>
      </div>

      {/* Content */}
      <div className="relative">
        <p className="text-xs uppercase tracking-[3px] text-white/45 mb-2">
          {title}
        </p>

        <h3
          className={`text-4xl font-black tracking-tight ${
            danger ? "text-red-400" : "text-white"
          }`}
        >
          {value}
        </h3>
      </div>

    </div>
  );
}

export default StatsCard;