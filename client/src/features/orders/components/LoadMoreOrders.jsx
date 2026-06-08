import { ChevronDown } from "lucide-react";

function LoadMoreOrders() {
  return (
    <div className="mt-20 flex justify-center">
      <button className="flex items-center gap-3 uppercase text-sm">
        Load Previous Orders
        <ChevronDown size={18} />
      </button>
    </div>
  );
}

export default LoadMoreOrders;