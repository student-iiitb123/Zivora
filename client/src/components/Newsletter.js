import { useState } from "react";
import { ArrowRight, Check, Sparkles, Copy } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [copied, setCopied] = useState(false);

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // simulate request — swap for your real subscribe call
    setTimeout(() => setStatus("success"), 900);
  };

  const copyCode = () => {
    navigator.clipboard?.writeText("WELCOME15");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[420px] h-[420px] bg-[#C6FF3A]/15 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 w-[420px] h-[420px] bg-[#FF3AA7]/10 rounded-full blur-[130px]" />

      {/* floating sparkles */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {[
          { top: "15%", left: "8%", size: 16, delay: "0s" },
          { top: "20%", left: "88%", size: 20, delay: "1s" },
          { top: "78%", left: "12%", size: 14, delay: "0.5s" },
          { top: "72%", left: "85%", size: 18, delay: "1.5s" },
        ].map((s, i) => (
          <Sparkles
            key={i}
            size={s.size}
            className="absolute text-[#C6FF3A]/25 newsletter-float"
            style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          />
        ))}
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-sm uppercase tracking-[4px] sm:tracking-[6px] text-white/50 font-mono mb-5 sm:mb-6">
            <span className="w-6 h-px bg-[#C6FF3A]" />
            Join The World Of Katchy
            <span className="w-6 h-px bg-[#C6FF3A]" />
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase mb-5 sm:mb-6 leading-[0.95]">
            Stay in the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6FF3A] to-[#8FE000]">
              know
            </span>
          </h2>

          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-3">
            First access to drops, editorial stories, and invites you won't
            find anywhere else.
          </p>

          <p className="text-[#C6FF3A] text-sm font-semibold uppercase tracking-widest mb-8 sm:mb-12">
            + 15% off your first order
          </p>

          {status === "success" ? (
            <div className="newsletter-fade max-w-md mx-auto bg-white/5 border border-[#C6FF3A]/30 rounded-2xl px-6 sm:px-8 py-8 sm:py-10">
              <div className="w-14 h-14 rounded-full bg-[#C6FF3A] flex items-center justify-center mx-auto mb-5">
                <Check size={26} strokeWidth={2.6} className="text-black" />
              </div>

              <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-2">
                You're in
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Here's your code — use it at checkout on your first order.
              </p>

              <button
                onClick={copyCode}
                className="group inline-flex items-center gap-3 border border-dashed border-[#C6FF3A]/50 rounded-full pl-5 pr-2 py-2 hover:border-[#C6FF3A] transition-colors"
              >
                <span className="font-mono tracking-[3px] text-[#C6FF3A] text-sm font-bold">
                  WELCOME15
                </span>
                <span className="w-8 h-8 rounded-full bg-[#C6FF3A]/10 group-hover:bg-[#C6FF3A]/20 flex items-center justify-center transition-colors">
                  {copied ? (
                    <Check size={14} strokeWidth={2.4} className="text-[#C6FF3A]" />
                  ) : (
                    <Copy size={14} strokeWidth={2.4} className="text-[#C6FF3A]" />
                  )}
                </span>
              </button>
              {copied && (
                <p className="text-[#C6FF3A] text-xs mt-3 font-mono tracking-wide">
                  Copied to clipboard
                </p>
              )}
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="max-w-2xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="Enter your email"
                    className={`w-full h-14 px-6 rounded-full bg-white/5 border outline-none text-white placeholder:text-white/35 transition-all duration-300 ${
                      status === "error"
                        ? "border-[#FF5A5A]"
                        : "border-white/15 focus:border-[#C6FF3A] focus:bg-white/10"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group w-full md:w-auto h-14 px-8 sm:px-10 bg-[#C6FF3A] text-black rounded-full uppercase tracking-widest text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight
                        size={15}
                        strokeWidth={2.4}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </div>

              {status === "error" && (
                <p className="mt-3 text-[#FF5A5A] text-xs font-mono tracking-wide">
                  Enter a valid email to continue
                </p>
              )}
            </form>
          )}

          <p className="mt-6 sm:mt-7 text-[10px] sm:text-xs text-white/30 uppercase tracking-wider">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>

      <style>{`
        .newsletter-float {
          animation: newsletter-float-anim 6s ease-in-out infinite;
        }
        @keyframes newsletter-float-anim {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-14px) rotate(12deg); opacity: 0.45; }
        }
        .newsletter-fade {
          animation: newsletter-fade-in 0.5s ease-out;
        }
        @keyframes newsletter-fade-in {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .newsletter-float, .newsletter-fade { animation: none; }
        }
      `}</style>
    </section>
  );
}
