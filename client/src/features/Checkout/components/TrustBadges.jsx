import {
  RefreshCcw,
  Leaf,
} from "lucide-react";

function TrustBadges() {
  return (
    <div className="space-y-4 mt-8">

      <div className="flex gap-4">
        <RefreshCcw size={20} />

        <div>
          <h5 className="uppercase text-sm font-medium">
            Free Returns
          </h5>

          <p className="text-sm text-black/50 mt-1">
            30-day complimentary return policy on all orders.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <Leaf size={20} />

        <div>
          <h5 className="uppercase text-sm font-medium">
            Sustainability
          </h5>

          <p className="text-sm text-black/50 mt-1">
            Shipped in carbon-neutral, biodegradable packaging.
          </p>
        </div>
      </div>

    </div>
  );
}

export default TrustBadges;