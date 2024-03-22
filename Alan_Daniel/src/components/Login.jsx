import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Iniciar sesión!</h1>
          <p className="py-6">
            {" "}
            <span className="ml-1 text-xs text-gray-500">
              Introduce tu nombre de usuario y contraseña para iniciar sesión.
              Si aún no tienes una cuenta, puedes{" "}
              <Link to="/register" className="underline">
                crear una aquí.
              </Link>
            </span>
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Correo</span>
              </label>
              <input
                type="email"
                placeholder="Introduce un correo."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contraseña</span>
              </label>
              <input
                type="password"
                placeholder="Introduce una contraseña."
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Contraseña olvidada?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Iniciar sesión</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
