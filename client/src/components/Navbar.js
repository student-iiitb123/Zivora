import { useEffect, useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  CircleUserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/20 shadow-[0px_40px_60px_rgba(0,0,0,0.05)] transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <h1 className="font-display-lg text-[24px] lg:text-[28px] tracking-tighter text-primary">
            ZIVORA
          </h1>

          <nav className="hidden md:flex gap-6">
            <Link
              className="font-label-md text-label-md text-primary border-b border-primary pb-1"
              to="/men"
            >
              MEN
            </Link>

            <Link
              className="font-label-md text-label-md text-secondary hover:text-primary transition-colors"
              to="/women"
            >
              WOMEN
            </Link>

            <Link
              className="font-label-md text-label-md text-secondary hover:text-primary transition-colors"
              to="/new-arrivals"
            >
              NEW ARRIVALS
            </Link>

            <Link
              className="font-label-md text-label-md text-secondary hover:text-primary transition-colors"
              to="/collections"
            >
              COLLECTIONS
            </Link>

            <Link
              className="font-label-md text-label-md text-secondary hover:text-primary transition-colors"
              to="/sale"
            >
              SALE
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center h-11 w-[260px] bg-white/80 px-4 rounded-full border border-black/10">
            <Search
              size={18}
              strokeWidth={1.8}
              className="text-black/50 mr-3"
            />

            <input
              className="w-full bg-transparent border-none outline-none focus:ring-0 text-sm p-0 placeholder:text-black/40"
              placeholder="Search products..."
              type="text"
            />
          </div>

          <div className="flex items-center gap-5">
            {!isLoggedIn ? (
              <>
                {/* Login Dropdown */}
                <div className="relative">
                  <button
                    onClick={() =>
                      setShowLoginOptions(!showLoginOptions)
                    }
                    className="font-label-md text-sm text-primary hover:opacity-60 transition"
                  >
                    Login
                  </button>

                  {showLoginOptions && (
                    <div className="absolute right-0 top-10 w-48 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
                      <Link
                        to="/login"
                        onClick={() =>
                          setShowLoginOptions(false)
                        }
                        className="block px-4 py-3 text-sm hover:bg-gray-50 transition"
                      >
                        Login as User
                      </Link>

                      <Link
                        to="/admin/login"
                        onClick={() =>
                          setShowLoginOptions(false)
                        }
                        className="block px-4 py-3 text-sm border-t hover:bg-gray-50 transition"
                      >
                        Login as Admin
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/register"
                  className="font-label-md text-sm bg-black text-white px-4 py-2 rounded-full hover:opacity-80 transition"
                >
                  Signup
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/wishlist"
                  className="hover:opacity-60 transition"
                >
                  <Heart size={22} strokeWidth={1.8} />
                </Link>

                <Link
                  to="/cart"
                  className="relative hover:opacity-60 transition"
                >
                  <ShoppingBag size={22} strokeWidth={1.8} />

                  <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium">
                    2
                  </span>
                </Link>

                <Link
                  to="/profile"
                  className="hover:opacity-60 transition"
                >
                  <CircleUserRound
                    size={22}
                    strokeWidth={1.8}
                  />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}