function InventoryStatCard({ stat }) {
  return (
    <div className="p-6 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-black/5 flex flex-col">
      <span className="text-[10px] uppercase tracking-[3px] text-black/50 mb-2">
        {stat.label}
      </span>

      <span
        className={`text-3xl font-semibold ${
          stat.danger ? "text-red-600" : "text-black"
        }`}
      >
        {stat.value}
      </span>

      {stat.progress ? (
        <div className="w-full bg-neutral-100 h-1 mt-4">
          <div
            className="bg-black h-full"
            style={{ width: stat.progress }}
          />
        </div>
      ) : (
        <span
          className={`text-[11px] mt-2 ${
            stat.success ? "text-green-600" : "text-black/50"
          }`}
        >
          {stat.subtext}
        </span>
      )}
    </div>
  );
}

export default InventoryStatCard;