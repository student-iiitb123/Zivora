import { CheckCircle } from "lucide-react";

function StatusToast({ show }) {
  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-xl shadow-xl border border-black/10 px-8 py-4 flex items-center gap-4 z-50 transition-all duration-500 ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <CheckCircle size={20} className="text-emerald-600" />

      <p className="text-sm font-bold">
        Live Data Feed Synchronized
      </p>
    </div>
  );
}

export default StatusToast;