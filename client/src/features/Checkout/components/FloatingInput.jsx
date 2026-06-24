function FloatingInput({
  label,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="relative pt-6">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="
          peer
          w-full
          border-0
          border-b
          border-black/20
          bg-transparent
          pt-4
          pb-2
          focus:ring-0
          focus:border-black
          outline-none
        "
      />

      <label
        className="
          absolute
          left-0
          top-10
          text-black/50
          transition-all
          duration-200
          pointer-events-none

          peer-focus:top-0
          peer-focus:text-xs
          peer-focus:text-black

          peer-[&:not(:placeholder-shown)]:top-0
          peer-[&:not(:placeholder-shown)]:text-xs
        "
      >
        {label}
      </label>
    </div>
  );
}

export default FloatingInput;