import { useEffect, useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  CircleUserRound,
  Menu,
  X,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getCart } from "../services/cartService";

export default function Navbar() {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const location = useLocation();

  const isLoggedIn = !!localStorage.getItem("token");

  // extract category from URL
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

        const totalItems = items.reduce(
          (sum, item) => sum + item.quantity,
          0
        );

        setCartCount(totalItems);
      } catch (error) {
        console.log(error);
        setCartCount(0);
      }
    };

    fetchCartCount();
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setShowLoginOptions(false);
  };

  const linkClass = (category) =>
    `font-label-md text-label-md pb-1 border-b transition-all duration-300 ${
      activeCategory === category
        ? "border-black text-black"
        : "border-transparent text-secondary hover:text-primary"
    }`;

  return (
    <header
      id="main-nav"
      className="sticky top-0 z-50 glass-nav border-b border-white/20 shadow-[0px_40px_60px_rgba(0,0,0,0.05)]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">

        {/* LOGO + NAV */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="font-display-lg text-[24px] lg:text-[28px] tracking-tighter text-primary"
          >
            ZIVORA
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link to="/products?category=Men" className={linkClass("Men")}>
              MEN
            </Link>

            <Link to="/products?category=Women" className={linkClass("Women")}>
              WOMEN
            </Link>

            <NavLink
              to="/new-arrivals"
              className={({ isActive }) =>
                `font-label-md text-label-md pb-1 border-b transition-all duration-300 ${
                  isActive
                    ? "border-black text-black"
                    : "border-transparent text-secondary hover:text-primary"
                }`
              }
            >
              NEW ARRIVALS
            </NavLink>

            <NavLink
              to="/collections"
              className={({ isActive }) =>
                `font-label-md text-label-md pb-1 border-b transition-all duration-300 ${
                  isActive
                    ? "border-black text-black"
                    : "border-transparent text-secondary hover:text-primary"
                }`
              }
            >
              COLLECTIONS
            </NavLink>

            {/* <NavLink
              to="/sale"
              className={({ isActive }) =>
                `font-label-md text-label-md pb-1 border-b transition-all duration-300 ${
                  isActive
                    ? "border-black text-black"
                    : "border-transparent text-secondary hover:text-primary"
                }`
              }
            >
              SALE
            </NavLink> */}
          </nav>
        </div>

        {/* SEARCH */}
        <div className="hidden lg:flex items-center h-11 w-[260px] bg-white/80 px-4 rounded-full border border-black/10">
          <Search size={18} strokeWidth={1.8} className="text-black/50 mr-3" />
          <input
            className="w-full bg-transparent border-none outline-none text-sm placeholder:text-black/40"
            placeholder="Search products..."
          />
        </div>

        {/* RIGHT ICONS */}
        <div className="hidden md:flex items-center gap-5">
          {!isLoggedIn ? (
            <>
              <div className="relative">
                <button
                  onClick={() => setShowLoginOptions(!showLoginOptions)}
                  className="text-sm text-primary hover:opacity-60"
                >
                  Login
                </button>

                {showLoginOptions && (
                  <div className="absolute right-0 top-10 w-48 bg-white rounded-xl shadow-xl border overflow-hidden z-50">
                    <Link
                      to="/login"
                      className="block px-4 py-3 text-sm hover:bg-gray-50"
                    >
                      Login as User
                    </Link>
                    <Link
                      to="/admin/login"
                      className="block px-4 py-3 text-sm border-t hover:bg-gray-50"
                    >
                      Login as Admin
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/register"
                className="text-sm bg-black text-white px-4 py-2 rounded-full"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link to="/wishlist">
                <Heart size={22} />
              </Link>

              <Link to="/cart" className="relative">
                <ShoppingBag size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link to="/profile">
                <CircleUserRound size={22} />
              </Link>
            </>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-5">
          <nav className="flex flex-col gap-4">
            <Link onClick={closeMobileMenu} to="/products?category=Men">
              MEN
            </Link>
            <Link onClick={closeMobileMenu} to="/products?category=Women">
              WOMEN
            </Link>
            <Link onClick={closeMobileMenu} to="/new-arrivals">
              NEW ARRIVALS
            </Link>
            <Link onClick={closeMobileMenu} to="/collections">
              COLLECTIONS
            </Link>
            <Link onClick={closeMobileMenu} to="/sale">
              SALE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}