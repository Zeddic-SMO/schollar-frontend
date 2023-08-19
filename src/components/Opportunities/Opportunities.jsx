import { Link } from "react-router-dom";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import { ChevronsRight, Home } from "react-feather";
import SideBar from "./SideBar";
import MainSection from "./MainSection";
import { useState } from "react";
import Modal from "../Elements/Modal";
import CreateOpportunities from "./CreateOpportunities";

const Opportunities = () => {
  const [Open, SetOpen] = useState(false);
  return (
    <div className="bg-BrandGray100 relative">
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
          <SideBar SetOpen={SetOpen} />
        </main>
      </div>

      {/* Create Opportunities modal */}
      {Open && (
        <Modal>
          <CreateOpportunities SetOpen={SetOpen} />
        </Modal>
      )}
      <Footer />
    </div>
  );
};

export default Opportunities;
