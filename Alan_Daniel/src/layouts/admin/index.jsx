import React from "react";
import { useLocation } from "react-router-dom"; // Asumiendo que estás utilizando react-router-dom
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Login from "../../components/Login"; // Importa el componente de Login
import Register from "../../components/Register"; // Importa el componente de Register

const MainLayout = () => {
  const location = useLocation();

  // Verifica si la ruta actual es "/login" o "/register"
  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";

  return (
    <div>
      <Navbar />
      {/* Renderiza el componente correspondiente según la ruta */}
      {isLogin ? <Login /> : isRegister ? <Register /> : <Hero />}
      <Footer />
    </div>
  );
};

export default MainLayout;
