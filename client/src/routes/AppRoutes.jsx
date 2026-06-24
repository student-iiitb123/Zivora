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
import AdminInventoryPage from "../features/admin/pages/AdminInventoryPage";
import OrderSuccessPage from "../features/orders/pages/OrderSuccessPage";
import AdminDashboardPage from "../features/admin/pages/AdminDashboardPage";
import AdminOrdersPage from "../features/admin/pages/AdminOrdersPage";
import AdminAddProductPage from "../features/admin/pages/AdminAddProductPage";
import AdminLoginPage from "../features/admin/components/AdminLoginPage";
import AdminCustomersPage from "../features/admin/pages/AdminCustomerPage";
import SettingsPage from "../features/admin/pages/SettingPage";

function AppRoutes() {
  return (
    <Routes>
      {/* User Routes */}
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
      <Route path="/order-success/:orderId" element={<OrderSuccessPage />} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      <Route path="/admin/inventory" element={<AdminInventoryPage />} />
      <Route path="/admin/orders" element={<AdminOrdersPage />} />
      <Route path="/admin/products/new" element={<AdminAddProductPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin/customers" element={<AdminCustomersPage />} />
      <Route path="/admin/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default AppRoutes;