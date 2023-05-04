import { Routes, Route } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import HomePage from "../Pages/HomePage";
import ShopPage from "../Pages/ShopPage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import AdminPage from "../Pages/AdminPage";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/about" element={<AboutPage></AboutPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}
