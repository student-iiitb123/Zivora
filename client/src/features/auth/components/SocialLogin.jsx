import SocialButton from "./SocialButton";

function SocialLogin() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <SocialButton provider="google" />
      <SocialButton provider="apple" />
      <SocialButton provider="github" />
    </div>
  );
}

export default SocialLogin;