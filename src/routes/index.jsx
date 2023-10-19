import { lazy } from "react";
// import Signin from "../Pages/Auth/Signin";
// import SignIn from '../pages/Authentication/SignIn';
// import SignUp from '../pages/Authentication/SignUp';

// const FormElements = lazy(() => import('../pages/Form/FormElements'));
// const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
// const Profile = lazy(() => import('../pages/Profile'));
// const Settings = lazy(() => import('../pages/Settings'));

const Signin = lazy(() => import("../Pages/Auth/Signin"));

const coreRoutes = [
  {
    path: "/profile",
    title: "Profile",
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
