import InventoryStatCard from "./InventoryStatCard";

function InventoryStats({ products = [] }) {
  const totalProducts = products.length;

  const lowStockProducts = products.filter(
    (product) => Number(product.initial_stock) < 10
  ).length;

  const activeProducts = products.filter(
    (product) => product.status === "published"
  ).length;

  const totalInventoryValue = products.reduce(
    (sum, product) =>
      sum +
      Number(product.base_price) *
      Number(product.initial_stock),
    0
  );

  const stats = [
    {
      label: "Total Products",
      value: totalProducts,
      subtext: `${activeProducts} Active`,
      success: true,
    },
    {
      label: "Inventory Value",
      value: `₹${totalInventoryValue.toLocaleString()}`,
      subtext: "Current Stock Value",
    },
    {
      label: "Low Stock",
      value: lowStockProducts,
      danger: lowStockProducts > 0,
      subtext:
        lowStockProducts > 0
          ? "Needs Attention"
          : "Healthy Stock",
    },
    {
      label: "Published",
      value: activeProducts,
      progress:
        totalProducts > 0
          ? `${(activeProducts / totalProducts) * 100}%`
          : "0%",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 pt-6 border-t border-black/10">
      {stats.map((stat) => (
        <InventoryStatCard
          key={stat.label}
          stat={stat}
        />
      ))}
    </div>
  );
}

export default InventoryStats;