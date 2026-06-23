function AdminStatCard({ stat, active }) {
  const Icon = stat.icon;

  return (
    <div
      className={`bg-white p-4 sm:p-5 lg:p-6 rounded-sm border-l-4 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-[1.02] ${
        active ? "border-black" : "border-black/10"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <Icon className="text-black/30 w-5 h-5 sm:w-6 sm:h-6" />

        <span
          className={`text-[10px] sm:text-xs font-bold px-2 py-1 rounded-sm whitespace-nowrap ${
            stat.trendType === "up"
              ? "text-emerald-700 bg-emerald-50"
              : "text-black/50 bg-neutral-100"
          }`}
        >
          {stat.trend}
        </span>
      </div>

      <p className="text-[10px] sm:text-xs uppercase text-black/50 tracking-[2px] sm:tracking-[3px] mb-2">
        {stat.label}
      </p>

      <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black break-words">
        {stat.value}
      </p>
    </div>
  );
}

export default AdminStatCard;