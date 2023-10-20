import { lazy } from "react";
// import Index from "../Pages/Dashboard/Index";

const Signin = lazy(() => import("../Pages/Auth/Signin"));
const Index = lazy(() => import("../Pages/Dashboard/Index"));

const coreRoutes = [
  {
    path: "/login",
    title: "login",
    component: Index,
  },
  {
    path: "/calendar",
    title: "Calendar",
    component: Signin, // ou substitua por outro componente lazy
  },
];

const routes = [...coreRoutes];
export default routes;
