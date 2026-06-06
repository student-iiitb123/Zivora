export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight mb-6">
              ZIVORA
            </h1>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-8">
              Redefining contemporary luxury through architectural silhouettes
              and enduring quality.
            </p>

            <div className="flex gap-3">
              <a
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">
                  public
                </span>
              </a>

              <a
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">
                  share
                </span>
              </a>

              <a
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">
                  mail
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[4px] mb-6">
              Collections
            </h4>

            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Men's New Arrivals
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Women's New Arrivals
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Essential Basics
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  The Suit Studio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[4px] mb-6">
              Customer Care
            </h4>

            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Stores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[4px] mb-6">
              About
            </h4>

            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Our Story
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Sustainability
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs uppercase tracking-widest text-white/40">
            © 2024 ZIVORA. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-white/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}