import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function FloatingInput({
  id,
  label,
  type = "text",
  required = false,
  showVisibility = false,
  value = "",
  onChange,
  error = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    showVisibility && showPassword ? "text" : type;

  return (
    <div className="relative pt-4">
      <input
        id={id}
        name={id}
        type={inputType}
        required={required}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`
          peer
          w-full
          bg-transparent
          border-0
          border-b
          py-4
          px-0
          pr-10
          text-black
          outline-none
          transition-all
          ${
            error
              ? "border-red-500"
              : "border-black/20 focus:border-black"
          }
        `}
      />

      <label
        htmlFor={id}
        className="
          absolute
          left-0
          top-8
          text-black/50
          uppercase
          tracking-[2px]
          text-sm
          pointer-events-none
          transition-all
          duration-200

          peer-focus:top-0
          peer-focus:text-xs
          peer-focus:text-black

          peer-[:not(:placeholder-shown)]:top-0
          peer-[:not(:placeholder-shown)]:text-xs
        "
      >
        {label}
      </label>

      {showVisibility && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-0 top-8 text-black/40 hover:text-black"
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      )}

      {error && (
        <p className="mt-1 text-xs text-red-500">
          This field is required
        </p>
      )}
    </div>
  );
}

export default FloatingInput;