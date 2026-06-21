import { useEffect, useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  CircleUserRound,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setShowLoginOptions(false);
  };

  return (
    <header
      id="main-nav"
      className="sticky top-0 z-50 glass-nav border-b border-white/20 shadow-[0px_40px_60px_rgba(0,0,0,0.05)]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="font-display-lg text-[24px] lg:text-[28px] tracking-tighter text-primary"
          >
            ZIVORA
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link className="font-label-md text-label-md text-primary border-b border-primary pb-1" to="/products?category=Men">
              MEN
            </Link>
            <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" to="/products?category=Women">
              WOMEN
            </Link>
            <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" to="/new-arrivals">
              NEW ARRIVALS
            </Link>
            <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" to="/collections">
              COLLECTIONS
            </Link>
            <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" to="/sale">
              SALE
            </Link>
          </nav>
        </div>

        <div className="hidden lg:flex items-center h-11 w-[260px] bg-white/80 px-4 rounded-full border border-black/10">
          <Search size={18} strokeWidth={1.8} className="text-black/50 mr-3" />
          <input
            className="w-full bg-transparent border-none outline-none focus:ring-0 text-sm p-0 placeholder:text-black/40"
            placeholder="Search products..."
            type="text"
          />
        </div>

        <div className="hidden md:flex items-center gap-5">
          {!isLoggedIn ? (
            <>
              <div className="relative">
                <button
                  onClick={() => setShowLoginOptions(!showLoginOptions)}
                  className="font-label-md text-sm text-primary hover:opacity-60 transition"
                >
                  Login
                </button>

                {showLoginOptions && (
                  <div className="absolute right-0 top-10 w-48 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
                    <Link to="/login" className="block px-4 py-3 text-sm hover:bg-gray-50 transition">
                      Login as User
                    </Link>
                    <Link to="/admin/login" className="block px-4 py-3 text-sm border-t hover:bg-gray-50 transition">
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
              <Link to="/wishlist" className="hover:opacity-60 transition">
                <Heart size={22} strokeWidth={1.8} />
              </Link>

              <Link to="/cart" className="relative hover:opacity-60 transition">
                <ShoppingBag size={22} strokeWidth={1.8} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  2
                </span>
              </Link>

              <Link to="/profile" className="hover:opacity-60 transition">
                <CircleUserRound size={22} strokeWidth={1.8} />
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/80 border border-black/10"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-black/10 px-4 py-5 shadow-xl">
          <div className="mb-5 flex items-center h-11 w-full bg-neutral-100 px-4 rounded-full border border-black/10">
            <Search size={18} strokeWidth={1.8} className="text-black/50 mr-3" />
            <input
              className="w-full bg-transparent border-none outline-none focus:ring-0 text-sm p-0 placeholder:text-black/40"
              placeholder="Search products..."
              type="text"
            />
          </div>

          <nav className="flex flex-col gap-4">
            <Link onClick={closeMobileMenu} to="/men" className="text-sm font-medium tracking-widest">
              MEN
            </Link>
            <Link onClick={closeMobileMenu} to="/women" className="text-sm font-medium tracking-widest">
              WOMEN
            </Link>
            <Link onClick={closeMobileMenu} to="/new-arrivals" className="text-sm font-medium tracking-widest">
              NEW ARRIVALS
            </Link>
            <Link onClick={closeMobileMenu} to="/collections" className="text-sm font-medium tracking-widest">
              COLLECTIONS
            </Link>
            <Link onClick={closeMobileMenu} to="/sale" className="text-sm font-medium tracking-widest">
              SALE
            </Link>
          </nav>

          <div className="mt-6 pt-6 border-t border-black/10">
            {!isLoggedIn ? (
              <div className="flex flex-col gap-3">
                <Link
                  onClick={closeMobileMenu}
                  to="/login"
                  className="w-full text-center border border-black text-black py-3 rounded-full text-sm font-medium"
                >
                  Login as User
                </Link>

                <Link
                  onClick={closeMobileMenu}
                  to="/admin/login"
                  className="w-full text-center border border-black text-black py-3 rounded-full text-sm font-medium"
                >
                  Login as Admin
                </Link>

                <Link
                  onClick={closeMobileMenu}
                  to="/register"
                  className="w-full text-center bg-black text-white py-3 rounded-full text-sm font-medium"
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                <Link
                  onClick={closeMobileMenu}
                  to="/wishlist"
                  className="flex flex-col items-center justify-center gap-2 bg-neutral-100 py-4 rounded-xl text-xs"
                >
                  <Heart size={20} />
                  Wishlist
                </Link>

                <Link
                  onClick={closeMobileMenu}
                  to="/cart"
                  className="flex flex-col items-center justify-center gap-2 bg-neutral-100 py-4 rounded-xl text-xs"
                >
                  <ShoppingBag size={20} />
                  Bag
                </Link>

                <Link
                  onClick={closeMobileMenu}
                  to="/profile"
                  className="flex flex-col items-center justify-center gap-2 bg-neutral-100 py-4 rounded-xl text-xs"
                >
                  <CircleUserRound size={20} />
                  Profile
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}