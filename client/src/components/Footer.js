import { Link } from "react-router-dom";

export default function Footer() {
  const collections = [
    {
      name: "Men's New Arrivals",
      path: "/products?category=men",
    },
    {
      name: "Women's New Arrivals",
      path: "/products?category=women",
    },
    {
      name: "Essential Basics",
      path: "/products?collection=basics",
    },
    {
      name: "The Suit Studio",
      path: "/products?collection=suits",
    },
  ];

  const customerCare = [
    {
      name: "Shipping & Returns",
      path: "/shipping&returns",
    },
    {
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      name: "Terms of Service",
      path: "/terms-of-service",
    },
    {
      name: "Stores",
      path: "/stores",
    },
  ];

  const about = [
    {
      name: "Our Story",
      path: "/about",
    },
    {
      name: "Sustainability",
      path: "/sustainability",
    },
    {
      name: "Careers",
      path: "/careers",
    },
    {
      name: "Press",
      path: "/press",
    },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-14 sm:py-16 lg:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Logo */}
          <div className="sm:col-span-2 lg:col-span-1">

            <img
              src="../../assets/katchy-logo.png"
              alt="Katchy"
              className="h-20 lg:h-24 w-auto object-contain"
            />

            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-8">
              Redefining contemporary luxury through architectural silhouettes
              and enduring quality.
            </p>

            <div className="flex gap-3">

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">
                  public
                </span>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">
                  share
                </span>
              </a>

              <a
                href="mailto:support@katchy.com"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">
                  mail
                </span>
              </a>

            </div>
          </div>

          <FooterColumn
            title="Collections"
            links={collections}
          />

          <FooterColumn
            title="Customer Care"
            links={customerCare}
          />

          <FooterColumn
            title="About"
            links={about}
          />

        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">

          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-white/40">
            © 2026 KATCHY. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-[11px] sm:text-xs uppercase tracking-widest text-white/40">
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

function FooterColumn({ title, links }) {
  return (
    <div>

      <h4 className="text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[4px] mb-5 sm:mb-6">
        {title}
      </h4>

      <ul className="space-y-3 sm:space-y-4 text-sm text-white/60">

        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          </li>
        ))}

      </ul>

    </div>
  );
}