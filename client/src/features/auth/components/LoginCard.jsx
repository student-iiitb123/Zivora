import LoginForm from "./LoginForm";
import SocialLogin from "./SocialLogin";
import AuthFooter from "./AuthFooter";

function LoginCard() {
  return (
    <div className="w-full max-w-[440px] bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_40px_60px_rgba(0,0,0,0.06)] p-10 md:p-12 rounded-lg">
      <header className="mb-10 text-left">
        <h2 className="text-3xl font-semibold text-black mb-2">
          Welcome Back
        </h2>

        <p className="text-black/60">
          Please enter your details to access your account.
        </p>
      </header>

      <LoginForm />

      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-black/10"></span>
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-4 text-black/50">
            Or continue with
          </span>
        </div>
      </div>

      <SocialLogin />

      <AuthFooter />
    </div>
  );
}

export default LoginCard;