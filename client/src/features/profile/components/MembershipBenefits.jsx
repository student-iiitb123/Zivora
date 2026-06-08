import BenefitItem from "./BenefitItem";
import { benefits } from "../data/benefits";

function MembershipBenefits() {
  return (
    <section className="px-5 mb-12">
      <h3 className="text-2xl font-semibold uppercase tracking-[3px] mb-6">
        Your Benefits
      </h3>

      <div className="flex flex-col gap-3">
        {benefits.map((benefit) => (
          <BenefitItem key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </section>
  );
}

export default MembershipBenefits;