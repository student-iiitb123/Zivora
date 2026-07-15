import { useEffect, useRef, useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  CircleUserRound,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getCart } from "../services/cartService";





const MEGA_MENU = {
  Men: {
    title: "MEN",
    href: "/products?category=Men",
    columns: [
      {
        heading: "SHOP",
        items: [
          { label: "New Arrivals", href: "/products?category=Men&sort=new" },
          { label: "Oversized", href: "/products?category=Men&fit=Oversized" },
          { label: "T-Shirts", href: "/products?category=Men&type=Tshirts" },
          { label: "Shirts", href: "/products?category=Men&type=Shirts" },
          { label: "Pants", href: "/products?category=Men&type=Pants" },
          { label: "Accessories", href: "/products?category=Men&type=Accessories" },
        ],
      },
    ],
  },
  Women: {
    title: "WOMEN",
    href: "/products?category=Women",
    columns: [
      {
        heading: "SHOP",
        items: [
          { label: "New Arrivals", href: "/products?category=Women&sort=new" },
          { label: "Oversized", href: "/products?category=Women&fit=Oversized" },
          { label: "T-Shirts", href: "/products?category=Women&type=Tshirts" },
          { label: "Shirts", href: "/products?category=Women&type=Shirts" },
          { label: "Dresses", href: "/products?category=Women&type=Dresses" },
          { label: "Accessories", href: "/products?category=Women&type=Accessories" },
        ],
      },
    ],
  },
};

// Flat links (no mega menu) — order here is the order they render in.
const NAV_LINKS = [
  { label: "NEW IN", href: "/new-arrivals" },
  { label: "MEN", mega: "Men" },
  { label: "WOMEN", mega: "Women" },
  { label: "OVERSIZED", href: "/products?fit=Oversized" },
  { label: "SHIRTS", href: "/products?type=Shirts" },
  { label: "SUMMER EDIT", href: "/collection" },
  { label: "SALE", href: "/sale", accent: true },
];

export default function Navbar() {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [openMega, setOpenMega] = useState(null); // "Men" | "Women" | null
  const closeMegaTimeout = useRef(null);
  const searchInputRef = useRef(null);

  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("token");

  const queryParams = new URLSearchParams(location.search);
  const activeCategory = queryParams.get("category");

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user?._id) {
          setCartCount(0);
          return;
        }
        const res = await getCart(user._id);
        const items = res.data.cart?.items || [];
        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(totalItems);
      } catch (error) {
        console.log(error);
        setCartCount(0);
      }
    };
    fetchCartCount();
  }, []);

  // Scroll-aware navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Autofocus search when it opens
  useEffect(() => {
    if (searchOpen) {
      const t = setTimeout(() => searchInputRef.current?.focus(), 150);
      return () => clearTimeout(t);
    }
  }, [searchOpen]);

  // Lock body scroll behind the full-screen mobile menu  yvdyv
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setShowLoginOptions(false);
  };

  const handleMegaEnter = (key) => {
    if (closeMegaTimeout.current) clearTimeout(closeMegaTimeout.current);
    setOpenMega(key);
  };

  const handleMegaLeave = () => {
    closeMegaTimeout.current = setTimeout(() => setOpenMega(null), 120);
  };

  const linkBaseClass =
    "relative font-medium text-[12px] tracking-[3px] uppercase text-neutral-700 hover:text-black transition-colors duration-300 py-2 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-[1px] after:h-[1.5px] after:bg-black " +
    "after:transition-all after:duration-300 after:ease-out";

  const isLinkActive = (link) => {
    if (link.mega) return activeCategory === link.mega;
    if (!link.href) return false;
    return (
      location.pathname + location.search === link.href ||
      (link.href.includes("category=") && activeCategory && link.href.includes(activeCategory))
    );
  };

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
  <div className="relative overflow-hidden bg-black text-[#D4AF6A] py-2">
  <div className="announcement-marquee flex gap-12 whitespace-nowrap text-[11px] tracking-[2px] uppercase">
    {Array(8) // more repeats = never runs out, whatever the screen width
      .fill([
        "Free shipping on orders above ₹999",
        "New drops every week",
        "Easy 7-day returns",
      ])
      .flat()
      .map((text, i) => (
        <span key={i} className="flex items-center gap-12 shrink-0">
          {text}
          <span className="text-[#D4AF6A]/40">•</span>
        </span>
      ))}
  </div>

  <style>{`
    .announcement-marquee {
      width: max-content;
      animation: announcement-scroll 25s linear infinite;
    }
    @keyframes announcement-scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-12.5%); }
    }
    @media (prefers-reduced-motion: reduce) {
      .announcement-marquee { animation: none; }
    }
  `}</style>
</div>

      <header
        id="main-nav"
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            : "bg-white/70 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center py-4">
            {/* LOGO */}
            <Link to="/" className="flex flex-col items-start leading-none shrink-0">
   <img
  src="../../assets/katchy-logo.png"
  alt="Katchy"
className="h-20 w-auto object-contain scale-150 origin-left"
/>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-7 mx-8">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link);
                const underline = active
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full";
                const accent = link.accent ? "text-[#B23B3B]" : "";

                if (link.mega) {
                  const menu = MEGA_MENU[link.mega];
                  const isOpen = openMega === link.mega;

                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => handleMegaEnter(link.mega)}
                      onMouseLeave={handleMegaLeave}
                    >
                      <button
                        onClick={() =>
                          setOpenMega(isOpen ? null : link.mega)
                        }
                        className={`${linkBaseClass} ${underline} ${accent} flex items-center gap-1`}
                      >
                        {link.label}
                        <ChevronDown
                          size={12}
                          strokeWidth={2}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* small dropdown box, anchored under this link only */}
                      {isOpen && menu && (
                        <div className="absolute left-0 top-full mt-3 w-64 bg-white border border-black/10 rounded-xl shadow-xl overflow-hidden z-50">
                          {menu.columns.map((col) => (
                            <div key={col.heading} className="px-5 pt-4 pb-2">
                              <p className="text-[10px] tracking-[2px] text-black/40 mb-3">
                                {col.heading}
                              </p>
                              <ul className="flex flex-col gap-2.5 mb-1">
                                {col.items.map((item) => (
                                  <li key={item.label}>
                                    <Link
                                      to={item.href}
                                      onClick={() => setOpenMega(null)}
                                      className="text-[13px] tracking-wide text-neutral-700 hover:text-black transition-colors"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <Link
                            to={menu.href}
                            onClick={() => setOpenMega(null)}
                            className="block px-5 py-3 text-[11px] tracking-[2px] uppercase border-t border-black/10 hover:bg-neutral-50 transition-colors"
                          >
                            View all {menu.title}
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    className={`${linkBaseClass} ${underline} ${accent}`}
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-5">
              <button
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Toggle search"
                className="hidden md:flex text-neutral-800 hover:opacity-60 transition-opacity"
              >
                {searchOpen ? <X size={20} strokeWidth={1.6} /> : <Search size={20} strokeWidth={1.6} />}
              </button>

              <div className="hidden md:flex items-center gap-5">
                {!isLoggedIn ? (
                  <>
                    <div className="relative">
                      <button
                        onClick={() => setShowLoginOptions(!showLoginOptions)}
                        className="text-[12px] tracking-[2px] uppercase text-neutral-800 hover:text-black"
                      >
                        Login
                      </button>

                      {showLoginOptions && (
                        <div className="absolute right-0 top-8 w-48 bg-white rounded-md shadow-xl border border-black/10 overflow-hidden z-50">
                          <Link
                            to="/login"
                            className="block px-4 py-3 text-sm hover:bg-neutral-50"
                            onClick={() => setShowLoginOptions(false)}
                          >
                            Login as User
                          </Link>
                          <Link
                            to="/admin/login"
                            className="block px-4 py-3 text-sm border-t border-black/10 hover:bg-neutral-50"
                            onClick={() => setShowLoginOptions(false)}
                          >
                            Login as Admin
                          </Link>
                        </div>
                      )}
                    </div>

                    <Link
                      to="/register"
                      className="text-[12px] tracking-[2px] uppercase bg-black text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
                    >
                      Signup
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/wishlist" className="text-neutral-800 hover:opacity-60 transition-opacity">
                      <Heart size={20} strokeWidth={1.6} />
                    </Link>

                    <Link to="/cart" className="relative text-neutral-800 hover:opacity-60 transition-opacity">
                      <ShoppingBag size={20} strokeWidth={1.6} />
                      {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                          {cartCount}
                        </span>
                      )}
                    </Link>

                    <Link to="/profile" className="text-neutral-800 hover:opacity-60 transition-opacity">
                      <CircleUserRound size={20} strokeWidth={1.6} />
                    </Link>
                  </>
                )}
              </div>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                className="md:hidden w-9 h-9 flex items-center justify-center text-neutral-800"
              >
                <Menu size={24} strokeWidth={1.6} />
              </button>
            </div>
          </div>

          {/* EXPANDABLE SEARCH (desktop, Zara-style slide down) */}
          <div
            className={`hidden md:block overflow-hidden transition-all duration-300 ease-out ${
              searchOpen ? "max-h-16 opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
            }`}
          >
            <div className="flex items-center border-b border-black/20 py-2">
              <Search size={18} strokeWidth={1.6} className="text-black/40 mr-3" />
              <input
                ref={searchInputRef}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-sm tracking-wide placeholder:text-black/30"
                placeholder="Search products..."
              />
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN OVERLAY MENU */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-black text-white transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-6 py-5 overflow-y-auto">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-8">
            <img src='../../assets/katchy-logo.png' alt="Katchy" className="h-9 w-auto object-contain" />
            <button
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className="w-9 h-9 flex items-center justify-center"
            >
              <X size={26} strokeWidth={1.6} />
            </button>
          </div>

          {/* Search */}
          <div className="mb-8 flex items-center border-b border-white/25 pb-3">
            <Search size={18} strokeWidth={1.6} className="text-white/50 mr-3" />
            <input
              className="w-full bg-transparent border-none outline-none text-sm text-white placeholder:text-white/40"
              placeholder="Search products..."
            />
          </div>

          {/* Primary nav */}
          <nav className="flex flex-col gap-6 mb-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                onClick={closeMobileMenu}
                to={link.mega ? MEGA_MENU[link.mega].href : link.href}
                className={`text-[20px] tracking-[3px] font-light ${
                  link.accent ? "text-[#D4816E]" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Secondary links */}
          <div className="flex flex-col gap-4 mb-10 text-white/60 text-[12px] tracking-[2px] uppercase">
            <Link onClick={closeMobileMenu} to="/about">About</Link>
            <Link onClick={closeMobileMenu} to="/contact">Contact</Link>
          </div>

          {/* Login / Profile */}
          <div className="mt-auto pt-6 border-t border-white/15">
            {!isLoggedIn ? (
              <div className="flex flex-col gap-3">
                <Link
                  onClick={closeMobileMenu}
                  to="/login"
                  className="w-full text-center border border-white/70 py-3 rounded-full text-[12px] tracking-[2px] uppercase"
                >
                  Login
                </Link>
                <Link
                  onClick={closeMobileMenu}
                  to="/admin/login"
                  className="w-full text-center text-white/50 text-[11px] tracking-[2px] uppercase"
                >
                  Login as Admin
                </Link>
                <Link
                  onClick={closeMobileMenu}
                  to="/register"
                  className="w-full text-center bg-[#D4AF6A] text-black py-3 rounded-full text-[12px] tracking-[2px] uppercase font-medium"
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                <Link
                  onClick={closeMobileMenu}
                  to="/wishlist"
                  className="flex flex-col items-center justify-center gap-2 bg-white/10 py-4 rounded-xl text-[11px] tracking-wide"
                >
                  <Heart size={20} strokeWidth={1.6} />
                  Wishlist
                </Link>
                <Link
                  onClick={closeMobileMenu}
                  to="/cart"
                  className="flex flex-col items-center justify-center gap-2 bg-white/10 py-4 rounded-xl text-[11px] tracking-wide"
                >
                  <ShoppingBag size={20} strokeWidth={1.6} />
                  Bag
                </Link>
                <Link
                  onClick={closeMobileMenu}
                  to="/profile"
                  className="flex flex-col items-center justify-center gap-2 bg-white/10 py-4 rounded-xl text-[11px] tracking-wide"
                >
                  <CircleUserRound size={20} strokeWidth={1.6} />
                  Profile
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
