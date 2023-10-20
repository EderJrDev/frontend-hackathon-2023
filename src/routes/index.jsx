import { lazy } from "react";

const Signin = lazy(() => import("../Pages/Auth/Signin"));

const coreRoutes = [
  {
    path: "/login",
    title: "login",
    component: Signin,
  },
  {
    path: "/calendar",
    title: "Calendar",
    component: Signin, // ou substitua por outro componente lazy
  },
];

const routes = [...coreRoutes];
export default routes;
