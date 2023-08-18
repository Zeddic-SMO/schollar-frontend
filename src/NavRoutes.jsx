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

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Authentication Routes */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* contact page */}
      <Route path="/contact" element={<Contact />} />

      {/* About Us Page */}
      <Route path="/about" element={<About />} />

      {/* Consultants Listing */}
      <Route path="/consultants" element={<Consultants />} />

      {/* About a consultant and booking */}
      <Route
        path="/consultants/:consultant_Id"
        element={<ConsultantOverview />}
      />

      {/* Features pages */}
      <Route path="/features" element={<Features />} />

      {/* Opportunities pages */}
      <Route path="/opportuities" element={<Opportunities />} />

      {/* Not found - 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default NavRoutes;
