import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingInput from "./FloatingInput";
import PasswordStrength from "./PasswordStrength";
import TermsAndPreferences from "./TermsAndPreferences";
import { signupUser } from "../../../api/authApi.js";

//add services to client

function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await signupUser(formData);

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/");
      window.location.reload();
    } else {
      alert(data.message);
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <FloatingInput
        id="name"
        label="Full Name"
        type="text"
        required
        value={formData.name}
        onChange={handleChange}
      />

      <FloatingInput
        id="email"
        label="Email Address"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <div className="space-y-4">
        <FloatingInput
          id="password"
          label="Password"
          type="password"
          required
          showVisibility
          value={formData.password}
          onChange={handleChange}
        />

        <PasswordStrength password={formData.password} />
      </div>

      <TermsAndPreferences />

      <button
        type="submit"
        className="w-full bg-black text-white py-5 uppercase tracking-[4px] text-sm font-medium shadow-xl hover:bg-neutral-800 transition active:scale-[0.98]"
      >
        Create Account
      </button>
    </form>
  );
}

export default RegisterForm;