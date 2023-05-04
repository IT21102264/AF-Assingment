import { Routes, Route } from "react-router-dom";
import AboutPage from "../Pages/AboutPage"
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import PayPage from "../Pages/PayPage";


export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/about" element={<AboutPage></AboutPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
      <Route path="/payment" element={<PayPage></PayPage>}></Route>

    </Routes>
  );
}
