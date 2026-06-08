function StatsCard({ title, value, danger }) {
  return (
    <div className="glass-card p-5 rounded-lg h-32 flex flex-col justify-between shadow-lg">
      <span className="uppercase text-xs tracking-[2px] text-black/50">
        {title}
      </span>

      <span
        className={`text-3xl font-semibold ${
          danger ? "text-red-500" : "text-black"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export default StatsCard;