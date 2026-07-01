import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Menu,
  X,
  Plus,
  Minus,
  Radio,
  Truck,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* DATA — swap this out for your real drop                            */
/* ------------------------------------------------------------------ */

const DROP = {
  code: "DROP 004",
  name: "VOID SERIES",
  runSize: 200,
  closes: "2026-07-06T23:59:00", // countdown target
};

const PRODUCTS = [
  {
    sku: "ZV-004-01",
    name: "Void Hoodie",
    price: 3200,
    tone: "linear-gradient(155deg,#1a1a1a 0%,#0b0b0c 55%,#161616 100%)",
    stock: "LOW STOCK",
    left: 6,
  },
  {
    sku: "ZV-004-02",
    name: "Manifest Cargo",
    price: 2800,
    tone: "linear-gradient(155deg,#161616 0%,#0b0b0c 60%,#1c1c1c 100%)",
    stock: "IN STOCK",
    left: 41,
  },
  {
    sku: "ZV-004-03",
    name: "Customs Tee",
    price: 1400,
    tone: "linear-gradient(155deg,#131313 0%,#0b0b0c 55%,#191919 100%)",
    stock: "IN STOCK",
    left: 63,
  },
  {
    sku: "ZV-004-04",
    name: "Perimeter Jacket",
    price: 4600,
    tone: "linear-gradient(155deg,#1c1c1c 0%,#0b0b0c 50%,#141414 100%)",
    stock: "SOLD OUT",
    left: 0,
  },
];

const LOG = [
  {
    handle: "@nn.wears",
    ts: "04:12",
    line: "cop'd the hoodie day one, fit is unreal, sleeves actually long enough",
  },
  {
    handle: "@theo.arc",
    ts: "22:07",
    line: "manifest cargo pockets fit my whole life. wearing it to death already",
  },
  {
    handle: "@ivy_k",
    ts: "09:41",
    line: "missed drop 003, set 3 alarms for this one. not missing again",
  },
];

const FAQ = [
  {
    q: "How limited is limited?",
    a: `Every VOID SERIES piece is numbered out of ${DROP.runSize}. Once a size sells out it is gone — we do not restock a closed manifest.`,
  },
  {
    q: "When does it ship?",
    a: "Orders are packed and manifested within 48 hours of the drop closing, then shipped worldwide with tracking.",
  },
  {
    q: "What's the fit like?",
    a: "Oversized through the body, true to size through the shoulder. Check the size chart on each product tag before you order.",
  },
  {
    q: "Can I return it?",
    a: "Unworn pieces with tags attached can be returned within 14 days of delivery. Numbered pieces are final sale after that window.",
  },
];

/* ------------------------------------------------------------------ */
/* COUNTDOWN HOOK                                                      */
/* ------------------------------------------------------------------ */

function useCountdown(target) {
  const [t, setT] = useState({ d: "00", h: "00", m: "00", s: "00" });

  useEffect(() => {
    const pad = (n) => String(Math.max(n, 0)).padStart(2, "0");
    const tick = () => {
      const diff = new Date(target).getTime() - Date.now();
      if (diff <= 0) {
        setT({ d: "00", h: "00", m: "00", s: "00" });
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setT({ d: pad(d), h: pad(h), m: pad(m), s: pad(s) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return t;
}

/* ------------------------------------------------------------------ */
/* SMALL PIECES                                                        */
/* ------------------------------------------------------------------ */

function Stamp({ children, tone = "acid" }) {
  const colors =
    tone === "acid"
      ? "border-[#C8FF3D]/70 text-[#C8FF3D]"
      : tone === "alert"
      ? "border-[#FF4433]/70 text-[#FF4433]"
      : "border-white/30 text-white/70";
  return (
    <span
      className={`inline-flex items-center gap-2 border ${colors} rounded-sm px-3 py-1 text-[10px] font-mono uppercase tracking-[3px] -rotate-1`}
    >
      {children}
    </span>
  );
}

function Barcode({ className = "" }) {
  // deterministic pseudo-barcode, purely decorative
  const bars = [2, 1, 3, 1, 1, 2, 4, 1, 2, 1, 1, 3, 2, 1, 1, 4, 1, 2, 1, 3, 1, 1, 2, 1];
  return (
    <svg viewBox="0 0 120 28" className={className} aria-hidden="true">
      {bars.map((w, i) => {
        const x = bars.slice(0, i).reduce((a, b) => a + b + 1, 0);
        return <rect key={i} x={x} y="0" width={w} height="28" fill="currentColor" />;
      })}
    </svg>
  );
}

function CountBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center rounded-sm bg-white/[0.04] border border-white/10 font-mono text-2xl sm:text-3xl text-[#C8FF3D] tabular-nums">
        {value}
      </div>
      <span className="mt-2 text-[9px] font-mono uppercase tracking-[3px] text-white/40">
        {label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MAIN PAGE                                                           */
/* ------------------------------------------------------------------ */

export default function DropSalesPage() {
  const t = useCountdown(DROP.closes);
  const [navOpen, setNavOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-[#0B0B0C] text-[#EDEAE0] min-h-screen font-[system-ui]">
      {/* ---------------- NAV ---------------- */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[#0B0B0C]/85 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm tracking-[5px] font-bold">ZIVORA</span>
            <Barcode className="h-4 w-16 text-white/30 hidden sm:block" />
          </div>

          <nav className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-[3px] text-white/50">
            <a href="#manifest" className="hover:text-white transition-colors">
              Manifest
            </a>
            <a href="#drop" className="hover:text-white transition-colors">
              Shop Drop
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 font-mono text-[11px] uppercase tracking-[3px] text-white/70 hover:text-white transition-colors">
              <ShoppingBag size={15} strokeWidth={2} />
              (0)
            </button>
            <button
              onClick={() => setNavOpen((v) => !v)}
              className="md:hidden text-white/70"
              aria-label="Toggle menu"
            >
              {navOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {navOpen && (
          <div className="md:hidden border-t border-white/10 px-6 py-5 flex flex-col gap-4 font-mono text-xs uppercase tracking-[3px] text-white/60">
            <a href="#manifest" onClick={() => setNavOpen(false)}>
              Manifest
            </a>
            <a href="#drop" onClick={() => setNavOpen(false)}>
              Shop Drop
            </a>
            <a href="#faq" onClick={() => setNavOpen(false)}>
              FAQ
            </a>
          </div>
        )}
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute -top-32 left-1/3 w-[480px] h-[480px] bg-[#C8FF3D]/10 rounded-full blur-[140px]" />

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <Stamp>{DROP.code} · {DROP.name}</Stamp>

            <h1 className="mt-6 font-black uppercase leading-[0.9] text-6xl sm:text-7xl lg:text-8xl tracking-tight">
              nothing
              <br />
              lasts.
              <br />
              <span className="text-[#C8FF3D]">that's the</span>
              <br />
              point.
            </h1>

            <p className="mt-7 max-w-md text-white/55 leading-7 text-sm">
              {DROP.runSize} pieces, numbered and manifested. When a size closes
              it doesn't come back — no restock, no second run.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#drop"
                className="glitch-btn relative inline-flex items-center gap-2 bg-[#C8FF3D] text-black px-9 py-4 text-xs font-mono font-bold uppercase tracking-[4px] rounded-sm"
              >
                Shop The Drop
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href="#manifest"
                className="inline-flex items-center gap-2 border border-white/20 px-9 py-4 text-xs font-mono uppercase tracking-[4px] rounded-sm text-white/70 hover:border-white/50 hover:text-white transition-colors"
              >
                View Manifest
              </a>
            </div>

            {/* countdown */}
            <div className="mt-12 flex items-center gap-3">
              <CountBlock value={t.d} label="Days" />
              <span className="text-white/20 font-mono text-xl pb-4">:</span>
              <CountBlock value={t.h} label="Hrs" />
              <span className="text-white/20 font-mono text-xl pb-4">:</span>
              <CountBlock value={t.m} label="Min" />
              <span className="text-white/20 font-mono text-xl pb-4">:</span>
              <CountBlock value={t.s} label="Sec" />
              <span className="ml-2 text-[10px] font-mono uppercase tracking-[3px] text-white/40 self-center">
                until manifest closes
              </span>
            </div>
          </div>

          {/* right: abstract manifest panel, no stock photo needed */}
          <div className="relative aspect-[4/5] rounded-sm border border-white/10 bg-[#111112] overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, #C8FF3D 0 2px, transparent 2px 26px)",
              }}
            />
            <span className="absolute -top-6 -right-10 font-black text-[220px] leading-none text-white/[0.04] select-none">
              004
            </span>

            <div className="absolute inset-0 flex flex-col justify-between p-7">
              <div className="flex justify-between items-start">
                <Stamp tone="alert">Fragile — Limited</Stamp>
                <Radio size={16} className="text-[#C8FF3D] animate-pulse" />
              </div>

              <div className="space-y-3">
                <Barcode className="h-8 w-40 text-white/40" />
                <div className="font-mono text-[10px] uppercase tracking-[3px] text-white/40 space-y-1">
                  <p>manifest — {DROP.code}</p>
                  <p>units — {DROP.runSize}</p>
                  <p>origin — zivora atelier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TICKER ---------------- */}
      <div className="relative bg-[#C8FF3D] text-black py-3 overflow-hidden border-b border-white/10">
        <div className="ticker flex whitespace-nowrap font-mono text-xs font-bold uppercase tracking-[4px]">
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="flex items-center gap-3 pr-3">
                {`LIMITED RUN OF ${DROP.runSize} ✦ WORLDWIDE SHIPPING ✦ NO RESTOCK ✦ NUMBERED 001–${DROP.runSize} ✦ `.repeat(
                  3
                )}
              </span>
            ))}
        </div>
      </div>

      {/* ---------------- PRODUCT GRID ---------------- */}
      <section id="drop" className="max-w-[1440px] mx-auto px-6 md:px-10 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[4px] text-white/40">
              Shop the manifest
            </span>
            <h2 className="mt-2 font-black uppercase text-4xl sm:text-5xl tracking-tight">
              {DROP.name}
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-[3px] text-white/40">
            {PRODUCTS.length} items · {DROP.runSize} units
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <ProductTag key={p.sku} product={p} />
          ))}
        </div>
      </section>

      {/* ---------------- MANIFEST / SPEC SECTION ---------------- */}
      <section id="manifest" className="border-y border-white/10 bg-[#0E0E0F]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[4px] text-white/40">
              The story
            </span>
            <h2 className="mt-3 font-black uppercase text-4xl sm:text-5xl leading-[1] tracking-tight max-w-lg">
              built like it's <span className="text-[#C8FF3D]">going somewhere.</span>
            </h2>
            <p className="mt-6 max-w-md text-white/55 leading-7 text-sm">
              VOID SERIES was cut from deadstock fabric sourced across three
              mills. Every piece is bagged, tagged, and numbered by hand before
              it ships — this isn't a warehouse run, it's a manifest of{" "}
              {DROP.runSize} individual garments.
            </p>
            <div className="mt-8 flex items-center gap-6 text-white/50 font-mono text-[11px] uppercase tracking-[3px]">
              <span className="flex items-center gap-2">
                <Truck size={15} /> Ships in 48h
              </span>
              <span className="flex items-center gap-2">
                <Zap size={15} /> No restock
              </span>
            </div>
          </div>

          <dl className="font-mono text-sm">
            {[
              ["Fabric", "14oz heavyweight cotton"],
              ["Cut", "Oversized, dropped shoulder"],
              ["Origin", "Cut & sewn in-house"],
              ["Run size", `${DROP.runSize} numbered units`],
              ["Manifest closes", new Date(DROP.closes).toDateString()],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline justify-between py-4 border-b border-dashed border-white/15"
              >
                <dt className="text-white/40 uppercase tracking-[2px] text-[11px]">
                  {k}
                </dt>
                <dd className="text-white/85">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- TRANSMISSION LOG (testimonials) ---------------- */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-24">
        <span className="font-mono text-[10px] uppercase tracking-[4px] text-white/40">
          Incoming transmissions
        </span>
        <h2 className="mt-2 font-black uppercase text-3xl sm:text-4xl tracking-tight mb-10">
          what the last drop said
        </h2>

        <div className="rounded-sm border border-white/10 bg-[#111112] font-mono text-sm overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 text-white/30 text-[10px] uppercase tracking-[3px]">
            <span className="w-2 h-2 rounded-full bg-[#FF4433]" />
            <span className="w-2 h-2 rounded-full bg-[#C8FF3D]" />
            <span className="ml-2">live_feed.log</span>
          </div>
          <div className="divide-y divide-white/5">
            {LOG.map((entry) => (
              <div
                key={entry.handle}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-5 py-4 hover:bg-white/[0.03] transition-colors"
              >
                <span className="text-white/30 text-xs w-16 shrink-0">
                  {entry.ts}
                </span>
                <span className="text-[#C8FF3D] shrink-0">{entry.handle}</span>
                <span className="text-white/60">{entry.line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section id="faq" className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[4px] text-white/40">
            Before you order
          </span>
          <h2 className="mt-2 font-black uppercase text-3xl sm:text-4xl tracking-tight mb-10">
            Questions on file
          </h2>

          <div className="border-t border-white/10">
            {FAQ.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8FF3D] rounded-sm"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-[#C8FF3D]">
                        Q{String(i + 1).padStart(3, "0")}
                      </span>
                      <span className="font-semibold text-sm sm:text-base">
                        {item.q}
                      </span>
                    </span>
                    {open ? (
                      <Minus size={16} className="text-white/40 shrink-0" />
                    ) : (
                      <Plus size={16} className="text-white/40 shrink-0" />
                    )}
                  </button>
                  {open && (
                    <p className="pb-6 pl-11 pr-4 text-sm text-white/55 leading-6">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="border-t border-white/10 bg-[#0E0E0F]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[4px] text-white/40">
            {t.d === "00" && t.h === "00" ? "Manifest closed" : "Manifest closing soon"}
          </span>
          <h2 className="mt-4 font-black uppercase text-5xl sm:text-6xl tracking-tight max-w-2xl mx-auto leading-[0.95]">
            get it before it's a rumor.
          </h2>
          <a
            href="#drop"
            className="glitch-btn mt-10 inline-flex items-center gap-2 bg-[#C8FF3D] text-black px-12 py-5 text-sm font-mono font-bold uppercase tracking-[4px] rounded-sm"
          >
            Shop The Drop
            <ArrowUpRight size={17} strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs tracking-[4px] text-white/40">
            ZIVORA © {new Date().getFullYear()}
          </span>
          <div className="flex gap-6 font-mono text-xs uppercase tracking-[3px] text-white/40">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              TikTok
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        .ticker {
          animation: ticker-scroll 22s linear infinite;
          width: max-content;
        }
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .glitch-btn {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .glitch-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 3px 3px 0 0 #FF4433;
        }
        .glitch-btn:active {
          transform: translate(0, 0);
          box-shadow: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker, .glitch-btn, .animate-pulse {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* PRODUCT TAG CARD                                                     */
/* ------------------------------------------------------------------ */

function ProductTag({ product }) {
  const soldOut = product.stock === "SOLD OUT";
  const stampTone =
    product.stock === "SOLD OUT" ? "alert" : product.stock === "LOW STOCK" ? "alert" : "acid";

  return (
    <div className="group relative rounded-sm border border-white/10 bg-[#111112] overflow-hidden flex flex-col">
      {/* perforation notch */}
      <div className="absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-[#0B0B0C] border border-white/10 -translate-y-1/2 z-10" />
      <div className="absolute top-1/2 -right-2 w-4 h-4 rounded-full bg-[#0B0B0C] border border-white/10 -translate-y-1/2 z-10" />

      <div
        className="relative aspect-[4/5]"
        style={{ background: product.tone }}
      >
        <div className="absolute top-3 left-3">
          <Stamp tone={stampTone}>{product.stock}</Stamp>
        </div>
        {!soldOut && (
          <div className="absolute bottom-3 left-3 right-3">
            <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C8FF3D]"
                style={{ width: `${Math.max(product.left, 4)}%` }}
              />
            </div>
            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[2px] text-white/40">
              {product.left}% of run remaining
            </span>
          </div>
        )}
        {soldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="font-mono text-xs uppercase tracking-[4px] text-white/50 border border-white/30 px-4 py-1 -rotate-6">
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className="p-5 border-t border-dashed border-white/15 flex-1 flex flex-col">
        <div className="flex items-center justify-between font-mono text-[10px] text-white/35 uppercase tracking-[2px] mb-1">
          <span>{product.sku}</span>
        </div>
        <h3 className="font-bold text-lg leading-tight">{product.name}</h3>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="font-mono text-sm text-[#C8FF3D]">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <button
            disabled={soldOut}
            className={`font-mono text-[10px] uppercase tracking-[3px] px-4 py-2 rounded-sm border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8FF3D] ${
              soldOut
                ? "border-white/10 text-white/25 cursor-not-allowed"
                : "border-white/25 text-white/80 hover:bg-[#C8FF3D] hover:text-black hover:border-[#C8FF3D]"
            }`}
          >
            {soldOut ? "Notify me" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
