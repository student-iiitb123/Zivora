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

    // Replace with your API call
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  const copyCode = () => {
    navigator.clipboard?.writeText("WELCOME15");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-24 lg:py-32">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating Sparkles */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {[
          { top: "15%", left: "8%", size: 16, delay: "0s" },
          { top: "20%", left: "88%", size: 20, delay: "1s" },
          { top: "78%", left: "12%", size: 14, delay: "0.5s" },
          { top: "72%", left: "85%", size: 18, delay: "1.5s" },
        ].map((sparkle, index) => (
          <Sparkles
            key={index}
            size={sparkle.size}
            className="absolute text-[#C6FF3A]/25 newsletter-float"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              animationDelay: sparkle.delay,
            }}
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
            <span className="bg-gradient-to-r from-[#C6FF3A] to-[#8FE000] bg-clip-text text-transparent">
              know
            </span>
          </h2>

          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-3">
            First access to drops, editorial stories, and invites you won't
            find anywhere else.
          </p>

          <p className="text-[#C6FF3A] text-sm font-semibold uppercase tracking-widest mb-8 sm:mb-12">
            +15% OFF YOUR FIRST ORDER
          </p>

          {status === "success" ? (
            <div className="newsletter-fade max-w-md mx-auto rounded-2xl border border-[#C6FF3A]/30 bg-white/5 px-6 py-8 sm:px-8 sm:py-10 backdrop-blur-sm">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#C6FF3A]">
                <Check
                  size={26}
                  strokeWidth={2.6}
                  className="text-black"
                />
              </div>

              <h3 className="mb-2 text-xl font-bold uppercase tracking-tight text-white">
                You're In 🎉
              </h3>

              <p className="mb-6 text-sm text-white/50">
                Here's your discount code. Use it on your first order.
              </p>

              <button
                onClick={copyCode}
                className="group inline-flex items-center gap-3 rounded-full border border-dashed border-[#C6FF3A]/50 py-2 pl-5 pr-2 transition hover:border-[#C6FF3A]"
              >
                <span className="font-mono text-sm font-bold tracking-[3px] text-[#C6FF3A]">
                  WELCOME15
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C6FF3A]/10 transition group-hover:bg-[#C6FF3A]/20">
                  {copied ? (
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="text-[#C6FF3A]"
                    />
                  ) : (
                    <Copy
                      size={14}
                      strokeWidth={2.5}
                      className="text-[#C6FF3A]"
                    />
                  )}
                </span>
              </button>

              {copied && (
                <p className="mt-3 font-mono text-xs tracking-wide text-[#C6FF3A]">
                  Copied to clipboard ✓
                </p>
              )}
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mx-auto max-w-2xl"
            >
              <div className="flex flex-col gap-4 md:flex-row">
                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className={`h-14 flex-1 rounded-full border px-6 text-white outline-none transition-all duration-300 bg-white/5 placeholder:text-white/35 ${
                    status === "error"
                      ? "border-red-500"
                      : "border-white/15 focus:border-[#C6FF3A] focus:bg-white/10"
                  }`}
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group flex h-14 items-center justify-center gap-2 rounded-full bg-[#C6FF3A] px-10 text-xs font-semibold uppercase tracking-widest text-black transition hover:bg-white disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
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
                <p className="mt-3 font-mono text-xs tracking-wide text-red-500">
                  Please enter a valid email address.
                </p>
              )}
            </form>
          )}

          <p className="mt-7 text-[10px] uppercase tracking-wider text-white/30 sm:text-xs">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>

      <style>{`
        .newsletter-float {
          animation: newsletter-float-anim 6s ease-in-out infinite;
        }

        @keyframes newsletter-float-anim {
          0%,100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-14px) rotate(12deg);
            opacity: 0.45;
          }
        }

        .newsletter-fade {
          animation: newsletter-fade-in .45s ease;
        }

        @keyframes newsletter-fade-in {
          from {
            opacity:0;
            transform:translateY(12px) scale(.98);
          }
          to {
            opacity:1;
            transform:translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .newsletter-float,
          .newsletter-fade {
            animation:none;
          }
        }
      `}</style>
    </section>
  );
}