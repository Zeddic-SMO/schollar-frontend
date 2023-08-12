import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Consultants from "./components/Consultants/Consultants";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";

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

      {/* Not found - 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default NavRoutes;
