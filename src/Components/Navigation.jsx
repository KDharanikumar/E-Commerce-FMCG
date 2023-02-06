import { Routes, Route } from "react-router-dom";
import Shop from "../Pages/Shop";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";
import Register from "../Pages/Register";
import { ShoppingCart } from "../Pages/ShoppingCart";
import Checkout from "../Pages/CheckOut";
import SingleProduct from "../Components/SingleProduct";

const Navigation = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="singleproduct" element={<SingleProduct />} />
      </Routes>
    </section>
  );
};

export default Navigation;
