function PasswordStrength({ password }) {
  const strength =
    password.length >= 12
      ? "Strong"
      : password.length >= 8
      ? "Medium"
      : password.length > 0
      ? "Weak"
      : "";

  const width =
    strength === "Strong"
      ? "100%"
      : strength === "Medium"
      ? "65%"
      : strength === "Weak"
      ? "30%"
      : "0%";

  const color =
    strength === "Strong"
      ? "bg-green-500"
      : strength === "Medium"
      ? "bg-yellow-500"
      : "bg-red-500";

  if (!password) return null;

  return (
    <div className="space-y-2">
      <div className="h-1.5 w-full bg-black/10 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-500`}
          style={{ width }}
        />
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xs uppercase tracking-[2px] text-black/50">
          Password Strength
        </span>

        <span
          className={`text-xs font-medium ${
            strength === "Strong"
              ? "text-green-600"
              : strength === "Medium"
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          {strength}
        </span>
      </div>
    </div>
  );
}

export default PasswordStrength;