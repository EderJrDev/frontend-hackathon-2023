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
          <Route path="/" element={<Signin />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/dashboard" element={<DefaultLayout />}>
            <Route index element={<Index />} />
            <Route index element={<Index />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
