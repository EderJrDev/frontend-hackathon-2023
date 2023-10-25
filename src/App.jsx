// import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./Loader/Loader";
import DefaultLayout from "./layouts/DefaultLayout";
import Signin from "./Pages/Auth/Signin";
import Index from "./Pages/Energy/Index";
import { useEffect, useState } from "react";
import PageNotFound from "./layouts/PageNotFound";
import { AuthProvider } from "./hooks/AuthContext";
import LandingPage from "./Pages/LandingPage/Index";
import Simulator from "./Pages/Simulator/Simulator";
import Energy from "./Pages/Energy/Index";
import Water from "./Pages/Water/Index";
import Waste from "./Pages/Waste/Index";

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
          <Route path="/energy" element={<DefaultLayout />}>
            <Route index element={<Energy />} />
          </Route>
          <Route path="/water" element={<DefaultLayout />}>
            <Route index element={<Water />} />
          </Route>
          <Route path="/waste" element={<DefaultLayout />}>
            <Route index element={<Waste />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
