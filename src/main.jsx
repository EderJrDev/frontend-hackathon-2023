// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// import { PrimeReactProvider } from "primereact/api";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Signin from "./Pages/Auth/Signin.jsx";
// import Index from "./Pages/Dashboard/Index.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     // errorElement: <ErrorPage />,
//     children: [
//       {
//         // errorElement: <ErrorPage />,
//         children: [
//           { index: true, element: <Index /> },
//           {
//             path: "calendar/",
//             element: <Signin />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// //Tailwind customization

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <PrimeReactProvider value={{ unstyled: true }}>
//       <RouterProvider router={router} />
//     </PrimeReactProvider>
//   </React.StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App.jsx";
// import "./index.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import { PrimeReactProvider } from "primereact/api";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <PrimeReactProvider value={{ unstyled: true }}>
//       <Router>
//         <App />
//       </Router>
//     </PrimeReactProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//theme
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { BrowserRouter as Router } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true }}>
      <Router>
        <App />
      </Router>
    </PrimeReactProvider>
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <PrimeReactProvider value={{ unstyled: true }}>
//       <Router>
//         <App />
//       </Router>
//     </PrimeReactProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
