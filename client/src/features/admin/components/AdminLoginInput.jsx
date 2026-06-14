function AdminLoginInput({
  id,
  label,
  type,
  icon,
  placeholder,
  required = false,
  showToggle = false,
  showPassword = false,
  onToggle,
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-[4px] text-black/60 font-medium"
      >
        {label}
      </label>

      <div className="relative group">
        {/* Icon */}
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-black/40 group-focus-within:text-black transition-colors">
          {icon}
        </span>

        {/* Input */}
        <input
          id={id}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete="off"
          className="
            w-full
            h-14
            pl-12
            pr-12
            bg-white
            border
            border-black/20
            rounded-md
            outline-none
            text-black
            placeholder:text-black/30
            transition-all
            duration-300
            focus:border-black
            focus:shadow-[0_0_0_1px_black]
          "
        />

        {/* Password Toggle */}
        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-black/40
              hover:text-black
              transition-colors
            "
          >
            <span className="material-symbols-outlined">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default AdminLoginInput;