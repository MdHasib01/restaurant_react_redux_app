import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import SigninPage from "pages/SignIn";
import SignUpPage from "pages/SignUp";
import useAuthCheck from "hooks/useAuthCheck";
import PageLoading from "components/PageLoading";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "routes/PrivateRoute";
const Homepage = React.lazy(() => import("pages/Homepage"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const Orderonline = React.lazy(() => import("pages/Orderonline"));
const Contact = React.lazy(() => import("pages/Contact"));
const Reservation = React.lazy(() => import("pages/Reservation"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Menu = React.lazy(() => import("pages/Menu"));
const ProjectRoutes = () => {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div>checking auth....</div>
  ) : (
    <React.Suspense fallback={<PageLoading />}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orderonline" element={<Orderonline />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="/homepage" element={<Home />} />
          <Route path="/login" element={<SigninPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
      <Toaster />
    </React.Suspense>
  );
};
export default ProjectRoutes;
