import { ShieldCheck } from "lucide-react";

function SecurityBanner() {
  return (
    <div className="flex items-center gap-3 p-4 bg-neutral-50 border">
      <ShieldCheck size={20} />

      <p className="text-sm text-black/60">
        Your connection is secure. We use advanced encryption
        to protect your data.
      </p>
    </div>
  );
}

export default SecurityBanner;