function AdminOrderStatCard({ stat }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-black/10 flex flex-col justify-between h-32">
      <span className="text-xs text-black/50 uppercase tracking-[2px]">
        {stat.label}
      </span>

      <div className="flex justify-between items-end">
        <span className="text-2xl font-semibold">
          {stat.value}
        </span>

        <span className={`text-xs font-bold ${stat.metaClass}`}>
          {stat.meta}
        </span>
      </div>
    </div>
  );
}

export default AdminOrderStatCard;