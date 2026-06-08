import StatCard from "./StatCard";
import { profileStats } from "../data/profileStats";

function ProfileStats() {
  return (
    <section className="px-5 grid grid-cols-2 gap-4 mb-12">
      {profileStats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </section>
  );
}

export default ProfileStats;