import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { PrimeReactProvider } from "primereact/api";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signin from "./Pages/Auth/Signin.jsx";
import Index from "./Pages/Dashboard/Index.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        // errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "calendar/",
            element: <Signin />,
          },
        ],
      },
    ],
  },
]);

//Tailwind customization

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true }}>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);
