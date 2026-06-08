import { Routes, Route } from "react-router-dom";

import ZivoraHome from "../pages/Homepage";
import ProductListPage from "../features/Product/pages/ProductListPage";
import ProductDetailPage from "../features/Product/pages/ProductDetailsPage";
import CartPage from "../features/cart/pages/CartPage";
import CheckoutPage from "../features/Checkout/pages/CheckoutPage";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import WishlistPage from "../features/WishList/pages/WishlistPage";
import ProfilePage from "../features/profile/pages/ProfilePage";
import OrdersPage from "../features/orders/pages/OrdersPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ZivoraHome />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default AppRoutes;