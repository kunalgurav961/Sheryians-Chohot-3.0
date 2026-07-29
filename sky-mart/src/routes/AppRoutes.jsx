import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import { useContext } from "react";
import { SkyMart } from "../context/AppContext";
import ProductDetails from "../components/ProductDetails";
import CheckoutSuccess from "../components/CheckoutSuccess";

const AppRoutes = () => {

  const { isLoggedIn } = useContext(SkyMart);


  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />} />
      <Route path="/products" element={isLoggedIn ? <Products /> : <Navigate to="/login" replace />} />
      <Route path="/products/:id" element={isLoggedIn ? <ProductDetails /> : <Navigate to="/login" replace />} />
      <Route path="/cart" element={isLoggedIn ? <Cart /> : <Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/checkout-success"
        element={<CheckoutSuccess />}
      />

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;