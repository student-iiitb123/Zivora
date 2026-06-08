import StatsCard from "./StatsCard";

function WishlistStats() {
  return (
    <section className="px-5 grid grid-cols-2 gap-4 -mt-6 relative z-10">
      <StatsCard
        title="Total Value"
        value="$2,140"
      />

      <StatsCard
        title="Opportunities"
        value="1 Sale"
        danger
      />
    </section>
  );
}

export default WishlistStats;