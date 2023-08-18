import { Link } from "react-router-dom";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import { ChevronsRight, Grid, Home, List, Plus } from "react-feather";

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
        <main className="flex items-center">
          <div className="w-[75%]">
            <h1 className="font-ManropeExtraBold text-[30px] md:text-[40px] py-5">
              List View with Sidebar
            </h1>
          </div>
          <div className="w-[25%] flex justify-between">
            <button className="flex items-center gap-1 py-1 px-2 bg-BrandPrimary rounded-lg text-white">
              <Plus size={16} /> Post Opportunity
            </button>
            <div className="flex items-center gap-2">
              <List size={14} className="cursor-pointer" />
              <Grid size={14} className="cursor-pointer" />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Opportunities;
