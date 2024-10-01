import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import LayoutWebsite from "./page/(website)/layout";
import HomePage from "./page/(website)/home/page";
import SignupPage from "./page/(auth)/signup/page";
import LayoutAdmin from "./page/(admin)/layout";
import DashboardPage from "./page/(admin)/dashboard/page";
import NotFoundPage from "./page/(website)/404/page";
import ShopPage from "./page/(website)/shop/page";
import ContactPage from "./page/(website)/contact/page";
import AboutPage from "./page/(website)/about/page";
import Product_Detail from "./page/(website)/product_detail/page";
import CartPage from "./page/(website)/cart/page";
import CheckoutPage from "./page/(website)/checkout/page";
import AdminProductsPage from "./page/(admin)/products/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutWebsite />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="shop/product_detail" element={<Product_Detail />} />
        <Route path="shop/cart" element={<CartPage />} />
        <Route path="shop/cart/checkout" element={<CheckoutPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>
      <Route path="admin" element={<LayoutAdmin />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="products" element={<AdminProductsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
