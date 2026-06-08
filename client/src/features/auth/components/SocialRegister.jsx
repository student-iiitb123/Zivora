import SocialButton from "./SocialButton";

function SocialRegister() {
  return (
    <>
      {/* Divider */}
      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-black/10"></span>
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-xs uppercase tracking-[3px] text-black/40">
            Or Continue With
          </span>
        </div>
      </div>

      {/* Social Buttons */}

      <div className="grid grid-cols-3 gap-4">
        <SocialButton provider="google" />

        <SocialButton provider="apple" />

        <SocialButton provider="github" />
      </div>
    </>
  );
}

export default SocialRegister;