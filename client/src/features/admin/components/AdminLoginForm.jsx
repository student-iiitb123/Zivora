import { useState } from "react";
import { Link } from "react-router-dom";
import AdminLoginInput from "./AdminLoginInput";

function AdminLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    setTimeout(() => {
      setLoading(false);
      setStatus("Access granted. Initializing dashboard...");
    }, 1800);
  };

  return (
    <form className="space-y-8" onSubmit={handleLogin}>
      <AdminLoginInput
        id="admin-email"
        label="Email Address"
        type="email"
        placeholder="admin@zivora.com"
        required
      />

      <AdminLoginInput
        id="admin-password"
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
        required
        showToggle
        showPassword={showPassword}
        onToggle={() => setShowPassword(!showPassword)}
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 rounded-none border-black/40 accent-black focus:ring-0"
          />

          <span className="text-sm text-black/60 hover:text-black">
            Keep me signed in
          </span>
        </label>

        <a
          href="#"
          className="text-sm text-black/60 hover:text-black hover:underline underline-offset-4"
        >
          Forgot access?
        </a>
      </div>

     <Link
  to="/admin/dashboard"
  className="
    w-full
    h-14
    bg-black
    text-white
    text-2xl
    uppercase
    tracking-[4px]
    flex
    items-center
    justify-center
    hover:bg-neutral-800
    transition-all
  "
>
  LOGIN
</Link>

      {status && (
        <div className="text-center">
          <p className="text-sm py-2 px-4 rounded border border-neutral-300 bg-neutral-100 text-black">
            {status}
          </p>
        </div>
      )}
    </form>
  );
}

export default AdminLoginForm;