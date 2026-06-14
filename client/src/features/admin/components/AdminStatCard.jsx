function AdminStatCard({ stat, active }) {
  const Icon = stat.icon;

  return (
    <div
      className={`bg-white p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] rounded-sm border-l-4 transition-transform hover:scale-[1.005] ${
        active ? "border-black" : "border-black/10"
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <Icon size={22} className="text-black/30" />

        <span
          className={`text-[10px] font-bold px-2 py-1 ${
            stat.trendType === "up"
              ? "text-emerald-700 bg-emerald-50"
              : "text-black/50 bg-neutral-100"
          }`}
        >
          {stat.trend}
        </span>
      </div>

      <p className="text-xs uppercase text-black/50 tracking-[3px] mb-1">
        {stat.label}
      </p>

      <p className="text-2xl font-semibold text-black">
        {stat.value}
      </p>
    </div>
  );
}

export default AdminStatCard;