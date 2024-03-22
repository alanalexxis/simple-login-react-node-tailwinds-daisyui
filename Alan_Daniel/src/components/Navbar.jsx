import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Mensajes</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <Link to="/login">Iniciar sesión</Link>
          </li>
          <li>
            <Link to="/register">Crear cuenta</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
