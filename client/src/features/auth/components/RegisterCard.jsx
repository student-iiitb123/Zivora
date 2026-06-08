import RegisterForm from "./RegisterForm";
import SocialRegister from "./SocialRegister";

function RegisterCard() {
  return (
    <div className="glass-card rounded-lg p-6 shadow-[0_40px_60px_-15px_rgba(0,0,0,0.08)] max-w-2xl mx-auto">
      <RegisterForm />

      <SocialRegister />
    </div>
  );
}

export default RegisterCard;