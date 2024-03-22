import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const URI = import.meta.env.VITE_APP_API_BACKEND + "users/";

const Register = () => {
  const [correo, setCorreo] = useState("");
  const [nombre, setNombre] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const navigate = useNavigate();
  //procedimiento para guardar
  const store = async (e) => {
    e.preventDefault();
    if (!nombre) {
      setError("Introduzca un nombre.");
    } else if (!username) {
      setError("Introduzca un nombre de usuario.");
    } else if (!correo.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      setError("El formato del correo es incorrecto.");
    } else if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
    } else if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
    } else {
      try {
        await axios.post(URI, {
          correo: correo,
          nombre: nombre,
          password: password,
          username: username,
        });
        setRegistroExitoso(true);
        // Después de un tiempo (por ejemplo, 3 segundos), restablece registroExitoso a false
        setTimeout(() => {
          setRegistroExitoso(false);
        }, 3000); // Cambia el valor de 3000 según tus preferencias
        // Limpiar los campos después de un registro exitoso
        setNombre("");
        setCorreo("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setError("");
      } catch (error) {
        setError("Error al crear la cuenta.");
      }
    }
  };
  useEffect(() => {
    async function fetchCSRFToken() {
      const response = await axios.get("/csrf-token");
      const csrfToken = response.data.csrfToken;
      axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;
    }
    fetchCSRFToken();
  }, []);
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
          {error && (
            <p className=" rounded border border-red-400 bg-red-100 px-4 py-2 text-red-500 text-sm">
              {error}
            </p>
          )}
          {registroExitoso && (
            <p className=" rounded border border-green-400 bg-green-100 px-4 py-2 text-green-500">
              Registro exitoso.
            </p>
          )}
          <form className="card-body" onSubmit={store}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre</span>
              </label>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                placeholder="Introduce un nombre."
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre de usuario</span>
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Introduce un nombre de usuari."
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Correo</span>
              </label>
              <input
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                type="email"
                placeholder="Introduce un correo."
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contraseña</span>
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Introduce un contraseña."
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirmar contraseña</span>
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirma tu contraseña."
                className="input input-bordered"
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
