import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../api/authApi";
import FloatingInput from "./FloatingInput";
import RememberMe from "./RememberMe";

function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

    const data = await loginUser(formData);

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
        id="email"
        label="Email Address"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <FloatingInput
        id="password"
        label="Password"
        type="password"
        required
        showVisibility
        value={formData.password}
        onChange={handleChange}
      />

      <RememberMe />

      <button type="submit" className="w-full bg-black text-white py-4 uppercase tracking-[4px] text-sm font-medium rounded-md">
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;