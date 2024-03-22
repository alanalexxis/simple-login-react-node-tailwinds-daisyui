import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
const routes = [
  {
    name: "Login",
    layout: "/",
    path: "login",
    component: <Login />,
  },
  {
    name: "Register",
    layout: "/",
    path: "register",
    component: <Register />,
  },
];
export default routes;
