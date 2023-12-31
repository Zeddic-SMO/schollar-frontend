import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Consultants from "./components/Consultants/Consultants";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Opportunities from "./components/Opportunities/Opportunities";
import ConsultantOverview from "./components/ConsultantDetailsAndBooking/ConsultantOverview";
import ConsultantDashboard from "./components/Dashboard/ConsultantDashboard/ConsultantDashboard";
import SchollarDashboard from "./components/Dashboard/ScholarDashboard/SchollarDashboard";
import ForgotPassword from "./components/Authentication/ForgotPassword";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Authentication Routes */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Forgot Password */}
      <Route path="/forgot_password" element={<ForgotPassword />} />

      {/* contact page */}
      <Route path="/contact" element={<Contact />} />

      {/* About Us Page */}
      <Route path="/about" element={<About />} />

      {/* Consultants Listing */}
      <Route path="/consultants" element={<Consultants />} />

      {/* About a consultant and booking */}
      <Route
        path="/consultants/:consultantId"
        element={<ConsultantOverview />}
      />

      {/* Features pages */}
      <Route path="/features" element={<Features />} />

      {/* Opportunities pages */}
      <Route path="/opportuities" element={<Opportunities />} />

      {/* Consultant Dashboard*/}
      <Route path="/dashboard/consultant" element={<ConsultantDashboard />} />

      {/* Schollar Dashboard*/}
      <Route path="/dashboard/schollar" element={<SchollarDashboard />} />

      {/* Not found - 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default NavRoutes;
