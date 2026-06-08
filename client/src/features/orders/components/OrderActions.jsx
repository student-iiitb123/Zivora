import { ArrowRight, ExternalLink, RotateCcw } from "lucide-react";

function OrderActions({ shipped }) {
  return (
    <div className="hidden md:flex items-center gap-8 mt-6">
      {shipped ? (
        <button className="flex items-center gap-2 text-sm uppercase">
          Track Order
          <ExternalLink size={16} />
        </button>
      ) : (
        <button className="flex items-center gap-2 text-sm uppercase">
          Return Item
          <RotateCcw size={16} />
        </button>
      )}

      <button className="flex items-center gap-2 text-sm uppercase">
        View Details
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

export default OrderActions;