import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Crear cuenta!</h1>
          <p className="py-6">
            {" "}
            <span className="ml-1 text-xs text-gray-500">
              Introduce tus datos personales para crear una cuenta. Si ya
              cuentas con una cuenta, puedes{" "}
              <Link to="/login" className="underline">
                iniciar sesión aqui.
              </Link>
            </span>
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre</span>
              </label>
              <input
                type="text"
                placeholder="Introduce un nombre."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre de usuario</span>
              </label>
              <input
                type="text"
                placeholder="Introduce un nombre de usuari."
                className="input input-bordered"
                required
              />
            </div>
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
                placeholder="Introduce un contraseña."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirmar contraseña</span>
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
              <button className="btn btn-primary">Crear cuenta</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
