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

  // Added state to track loading and explicit errors safely
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const data = await loginUser(formData);

      if (data && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/");
        window.location.reload();
      } else {
        // Fallback to error message display if token isn't returned
        setErrorMessage(data?.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An unexpected network error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      {/* Dynamic Error Banner */}
      {errorMessage && (
        <div className="text-xs text-red-600 bg-red-50 border border-red-200/60 p-3 rounded text-center tracking-wide uppercase">
          {errorMessage}
        </div>
      )}

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

      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-black text-white py-4 uppercase tracking-[4px] text-sm font-medium rounded-md transition-opacity disabled:opacity-50"
      >
        {loading ? "Verifying..." : "Sign In"}
      </button>
    </form>
  );
}

export default LoginForm;