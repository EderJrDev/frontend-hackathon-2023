import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { PrimeReactProvider } from "primereact/api";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./Pages/Dashboard/Index.jsx";
import Signin from "./Pages/Auth/Signin.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader, // loader
    // action: rootAction,
    children: [
      {
        // errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "calendar/",
            element: <Signin />,
            // loader: contactLoader,
            // action: contactAction,
          },
        ],
      },
      // {
      //   path: "contacts/:contactId/edit",
      //   element: <EditContact />,
      //   loader: contactLoader,
      //   action: editAction,
      // },
      // {
      //   path: "contacts/:contactId/destroy",
      //   action: destroyAction,
      //   errorElement: <div>Oops! There was an error.</div>,
      // },
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
