import AdminLoginForm from "./AdminLoginForm";

function AdminLoginPanel() {
  return (
    <div className="w-full max-w-[480px] animate-[fadeIn_1s_ease-out]">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-black rounded-full mb-6">
          <span className="text-3xl font-semibold tracking-tight">
            ZV
          </span>
        </div>

        <h2 className="text-3xl font-semibold uppercase tracking-[4px] mb-2">
          Admin Portal
        </h2>

        <p className="text-black/60">
          Secure entrance to the luxury ecosystem.
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] p-10 md:p-12 rounded-lg">
        <AdminLoginForm />

        <div className="mt-10 flex items-center justify-center gap-2 text-black/40">
          <span className="material-symbols-outlined text-[18px]">
            verified_user
          </span>

          <span className="text-xs uppercase tracking-[3px]">
            Protected by ZIVORA Enterprise Security
          </span>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginPanel;