import { Link } from "react-router-dom";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import { ChevronsRight, Home } from "react-feather";
import SideBar from "./SideBar";
import MainSection from "./MainSection";

const Opportunities = () => {
  return (
    <div className="bg-BrandGray100">
      <Header />
      <div className="px-10 md:px-40 py-14 ">
        {/* Back to Home page */}
        <div className="flex text-BrandGray500 text-[14px] items-center gap-2">
          <Link to="/">
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <span>
                <Home size="15px" />
              </span>
              <span className="font-ManropeRegular">HomePage</span>
            </div>
          </Link>
          <span>
            <ChevronsRight size="15px" />
          </span>
          <span className="text-BrandPrimary font-ManropeRegular">
            Opportunities
          </span>
        </div>

        {/* The main section */}
        <main className="flex items-center relative">
          <MainSection />
          <SideBar />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Opportunities;
