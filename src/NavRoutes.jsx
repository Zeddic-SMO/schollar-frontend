import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Consultants from "./components/Consultants/Consultants";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import Contact from "./components/Contact/Contact";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consultants" element={<Consultants />} />

      {/* Authentication Routes */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* contact page */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default NavRoutes;
