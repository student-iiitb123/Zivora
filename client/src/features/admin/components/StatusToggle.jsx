function StatusToggle({ active, onChange }) {
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={onChange}
        className={`relative w-10 h-5 rounded-full transition ${
          active ? "bg-black" : "bg-neutral-300"
        }`}
      >
        <span
          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
            active ? "translate-x-5 left-0.5" : "translate-x-0 left-0.5"
          }`}
        />
      </button>

      <span
        className={`ml-3 text-xs uppercase tracking-[2px] ${
          active ? "text-black" : "text-black/50"
        }`}
      >
        {active ? "Active" : "Inactive"}
      </span>
    </div>
  );
}

export default StatusToggle;