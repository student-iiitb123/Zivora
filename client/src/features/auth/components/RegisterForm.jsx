import { useState } from "react";
import FloatingInput from "./FloatingInput";
import PasswordStrength from "./PasswordStrength";
import TermsAndPreferences from "./TermsAndPreferences";

function RegisterForm() {
  const [password, setPassword] = useState("");

  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      {/* Name Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FloatingInput id="fname" label="First Name" type="text" />

        <FloatingInput id="lname" label="Last Name" type="text" />
      </div>

      <FloatingInput id="email" label="Email Address" type="email" />

      <FloatingInput id="phone" label="Phone Number" type="tel" />

      <div className="space-y-4">
        <FloatingInput
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <PasswordStrength password={password} />
      </div>

      <FloatingInput
        id="confirm-password"
        label="Confirm Password"
        type="password"
      />

      <TermsAndPreferences />

      <button className="w-full bg-black text-white py-5 uppercase tracking-[4px] text-sm font-medium shadow-xl hover:bg-neutral-800 transition active:scale-[0.98]">
        Create Account
      </button>
    </form>
  );
}

export default RegisterForm;