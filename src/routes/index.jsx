import { lazy } from 'react';
// import SignIn from '../pages/Authentication/SignIn';
// import SignUp from '../pages/Authentication/SignUp';

// const FormElements = lazy(() => import('../pages/Form/FormElements'));
// const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
// const Profile = lazy(() => import('../pages/Profile'));
// const Settings = lazy(() => import('../pages/Settings'));

const coreRoutes = [
  {
    path: '/profile',
    title: 'Profile',
    component: 'teste',
  },
  // {
  //   path: '/forms/form-elements',
  //   title: 'Forms Elements',
  //   component: FormElements,
  // },
  // {
  //   path: '/settings',
  //   title: 'Settings',
  //   component: Settings,
  // },
  // {
  //   path: '/signin',
  //   title: 'SignIn',
  //   component: SignIn,
  // },
  // {
  //   path: '/signUp',
  //   title: 'SignUp',
  //   component: SignUp,
  // },
];

const routes = [...coreRoutes];
export default routes;
