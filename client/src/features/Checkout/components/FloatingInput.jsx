function FloatingInput({
  label,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer w-full border-0 border-b border-black/20 bg-transparent py-3 focus:ring-0 focus:border-black outline-none"
      />

      <label
        className="
          absolute left-0 top-3 transition-all
          peer-focus:-translate-y-5
          peer-focus:scale-90
          peer-focus:text-black
          peer-placeholder-shown:translate-y-0
          peer-placeholder-shown:scale-100
          peer-not-placeholder-shown:-translate-y-5
          peer-not-placeholder-shown:scale-90
        "
      >
        {label}
      </label>
    </div>
  );
}

export default FloatingInput;