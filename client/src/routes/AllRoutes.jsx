import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ShopPage from "../pages/ShopPage";
import AdminPage from "../pages/AdminPage";
import { Products } from "../pages/Products";
import { AddProducts } from "../pages/AddProduct";

import PayPage from "../pages/PayPage";
import AdminRoute from "./AdminRoute";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import Cart from "../pages/Cart";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/about" element={<AboutPage></AboutPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminPage />
          </AdminRoute>
        }
      />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/addProducts" element={<AddProducts />} />
      <Route path="/cart" element={<Cart></Cart>} />
      <Route path="/paypage" element={<PayPage></PayPage>} />
    </Routes>
  );
}
