import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AdminPage from "../pages/AdminPage";
import { Products } from "../pages/Products";
import { AddProducts } from "../pages/AddProduct";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/about" element={<AboutPage></AboutPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/addProducts" element={<AddProducts />} />
    </Routes>
  );
}
