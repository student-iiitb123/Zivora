import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function FloatingInput({
  id,
  label,
  type = "text",
  required = false,
  showVisibility = false,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    showVisibility && showPassword ? "text" : type;

  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={inputType}
        required={required}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="
          peer
          w-full
          bg-transparent
          border-0
          border-b
          border-black/20
          py-3
          px-0
          pr-10
          text-black
          focus:border-black
          focus:ring-0
          outline-none
          transition-colors
        "
      />

      <label
        htmlFor={id}
        className="
          absolute left-0 top-3
          text-black/50 uppercase tracking-[2px] text-sm
          pointer-events-none transition-all duration-200
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-sm
          peer-focus:-top-3
          peer-focus:text-xs
          peer-not-placeholder-shown:-top-3
          peer-not-placeholder-shown:text-xs
        "
      >
        {label}
      </label>

      {showVisibility && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-0 top-3 text-black/40 hover:text-black transition"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
}

export default FloatingInput;