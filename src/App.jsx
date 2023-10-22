// import { Suspense, useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import routes from "./routes";
// import Loader from "./Loader/Loader";
// import Index from "./Pages/Dashboard/Index";
// // import DefaultLayout from "./layouts/DefaultLayout";
// import Signin from "./Pages/Auth/Signin";

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   return loading ? (
//     <Loader />
//   ) : (
//     <>
//       <Toaster
//         position="top-right"
//         reverseOrder={false}
//         containerClassName="overflow-auto"
//       />
//       <Routes>
//         <Route path="/" element={<Signin />}>
//           <Route index element={<Index />} />
//           {routes.map(({ path, component: Component }) => (
//             <Route
//               key={path}
//               path={path}
//               element={
//                 <Suspense fallback={<Loader />}>
//                   <Component />
//                 </Suspense>
//               }
//             />
//           ))}
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;

// import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./Loader/Loader";
import DefaultLayout from "./layouts/DefaultLayout";
import Signin from "./Pages/Auth/Signin";
import Index from "./Pages/Dashboard/Index";
import { useEffect, useState } from "react";
import PageNotFound from "./layouts/PageNotFound";
import { AuthProvider } from "./hooks/AuthContext";
import LandingPage from "./Pages/LandingPage/Index";
import Simulator from "./Pages/Simulator/Simulator";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <AuthProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
          containerClassName="overflow-auto"
        />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/dashboard" element={<DefaultLayout />}>
            <Route index element={<Index />} />
          </Route>
          <Route path="/simulator" element={<DefaultLayout />}>
            <Route index element={<Simulator />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
