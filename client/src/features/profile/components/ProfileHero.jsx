import ProfileCompletion from "./ProfileCompletion";
import { BadgeCheck } from "lucide-react";

function ProfileHero() {
  return (
    <section className="px-5 pt-8 pb-12">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-black p-1">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU60H7H-aGJoQbxBgQcKr8eCQcnWL3Nr2xl2OMHlK1Re_AKOSJK5MUepVT9_Up40VOOr3HE9WVs6wFNHTeC0jD795nwNmz69sJymc1zR42QHYZjfPDoNkhlfCvjEbfkYAdrw8mTXYbtpoAP6CMhqInyShnEL3TXLZ4h7sLxS8CcZRK4lTjmbFEmiK023ajjOJVIayHb-cRYvDhpehXtHMR9NP3rNqpj5c4hJbwCa0mOD9zqOp1Ql6fohzBAr4h7mnoQsDFXVVD"
                alt="Alexander Vane"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="absolute -bottom-1 -right-1 bg-black text-white p-1.5 rounded-full">
              <BadgeCheck size={16} fill="black" />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-semibold leading-tight">
              Alexander Vane
            </h2>

            <span className="inline-flex mt-2 bg-black text-white px-3 py-1 text-[10px] uppercase tracking-[3px] rounded-full">
              Platinum Member
            </span>
          </div>
        </div>

        <ProfileCompletion />
      </div>
    </section>
  );
}

export default ProfileHero;