function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-black/5 p-6 h-40 flex flex-col justify-between shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
      <Icon size={24} className="text-black/30" />

      <div>
        <p className="text-xs uppercase tracking-[3px] text-black/40 mb-1">
          {stat.label}
        </p>

        <p className="text-3xl font-semibold leading-none">
          {stat.value}
        </p>
      </div>
    </div>
  );
}

export default StatCard;