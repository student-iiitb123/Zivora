import RecentOrderCard from "./RecentOrderCard";

function RecentOrders() {
  return (
    <section className="px-5 mb-12">
      <div className="flex justify-between items-end mb-6">
        <h3 className="text-2xl font-semibold uppercase tracking-[3px]">
          Recent Orders
        </h3>

        <a
          href="#"
          className="text-xs uppercase tracking-[2px] border-b border-black"
        >
          View All
        </a>
      </div>

      <RecentOrderCard />
    </section>
  );
}

export default RecentOrders;