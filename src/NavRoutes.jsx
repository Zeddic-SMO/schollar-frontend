import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Consultants from "./components/Consultants/Consultants";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consultants" element={<Consultants />} />
    </Routes>
  );
};

export default NavRoutes;
