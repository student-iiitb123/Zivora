import FloatingInput from "./FloatingInput";
import RememberMe from "./RememberMe";

function LoginForm() {
  return (
    <form
      className="space-y-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <FloatingInput
        id="email"
        label="Email Address"
        type="email"
        required
      />

      <FloatingInput
        id="password"
        label="Password"
        type="password"
        required
        showVisibility
      />

      <RememberMe />

      <button
        type="submit"
        className="
          w-full
          bg-black
          text-white
          py-4
          uppercase
          tracking-[4px]
          text-sm
          font-medium
          rounded-md
          hover:bg-neutral-800
          transition-all
          duration-300
          active:scale-[0.98]
        "
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;