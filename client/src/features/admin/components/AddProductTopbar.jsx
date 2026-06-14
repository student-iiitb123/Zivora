import { ArrowLeft, Search } from "lucide-react";

function AddProductTopbar() {
  return (
    <header className="w-full h-16 sticky top-0 bg-white/80 backdrop-blur-xl border-b border-black/10 shadow-sm flex items-center justify-between px-5 md:px-16 z-40">
      <div className="flex items-center gap-4">
        <ArrowLeft size={22} />
        <h1 className="text-2xl font-bold tracking-tight">New Listing</h1>
      </div>

      <div className="flex items-center gap-6">
        <Search size={20} />

        <div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrUF_iqu0NMofoNbRqwYSQLO6hp9h9mojgH8nNi-gsyeqxFcOnODKVL29o1ptsW86vPVwRiMslw56AwML7Dem5braiOZBQcZRLcZMmievIIuiAibQV7cpRwB0Pw1Y54lQ4iPQCBRRU17tmNkqiLBYx4COLaqzW1Cbq7T5sLhR4DcYSzDP4vY9O3IvBBX_xuKAALCRx7Ew6OAk1eVGYzvdiP4DFxTVgAIOokMxBOPy4lqGAxX2Dvc_ancbzYU8XjK2VTtVlIXk2"
          />
        </div>
      </div>
    </header>
  );
}

export default AddProductTopbar;