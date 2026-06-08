function ProfileCompletion() {
  return (
    <div className="bg-neutral-100 p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs uppercase tracking-[3px] text-black/50">
          Profile Completion
        </span>

        <span className="text-sm font-semibold">85%</span>
      </div>

      <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
        <div className="h-full bg-black w-[85%]"></div>
      </div>

      <p className="text-xs mt-4 text-black/50 italic">
        Add a secondary shipping address to reach 100%
      </p>
    </div>
  );
}

export default ProfileCompletion;