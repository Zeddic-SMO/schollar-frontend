import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import { Link } from "react-router-dom";
import { ChevronsRight, Home } from "react-feather";

const ConsultantOverview = () => {
  return (
    <>
      <Header />
      <div className="px-10 md:px-40 py-14 ">
        {/* Back to Home page */}
        <div className="flex text-BrandGray500 text-[14px] items-center gap-2">
          <Link to="/">
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <span>
                <Home size="15px" />
              </span>
              <span className="font-ManropeRegular cursor-pointer">
                HomePage
              </span>
            </div>
          </Link>
          <span>
            <ChevronsRight size="15px" />
          </span>
          <Link to="/consultants">
            <span className="font-ManropeRegular cursor-pointer hover:underline">
              Consultants
            </span>
          </Link>
          <span>
            <ChevronsRight size="15px" />
          </span>

          <span className="font-ManropeRegular cursor-pointer text-BrandGray800 ">
            Name
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConsultantOverview;
