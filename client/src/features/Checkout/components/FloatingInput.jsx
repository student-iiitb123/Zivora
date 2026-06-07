function FloatingInput({ label }) {
  return (
    <div className="relative">
      <input
        placeholder=" "
        className="peer w-full border-0 border-b border-black/20 bg-transparent py-3 focus:ring-0 focus:border-black"
      />

      <label className="absolute left-0 top-3 transition-all peer-focus:-translate-y-5 peer-focus:scale-90 peer-placeholder-shown:translate-y-0">
        {label}
      </label>
    </div>
  );
}

export default FloatingInput;