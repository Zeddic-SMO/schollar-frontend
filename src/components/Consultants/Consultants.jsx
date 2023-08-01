import Footer from "../Navigation/Footer";
import { Link } from "react-router-dom";
import Header from "../Navigation/Header";
import { Home, ChevronsRight, Search } from "react-feather";
import searchBtn from "../../assets/media/icons/Home/Search_Btn.png";
import ExperiencedConsultants from "./ExperiencedConsultants";
import DontMissAnything from "../Elements/DontMissAnything";
import cover from "../../assets/media/images/consultants/cover.png";

const Consultants = () => {
  return (
    <div>
      <Header />
      <div
        className="px-10 md:px-40 py-10 h-[500px] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <div className="flex text-BrandGray500 text-[14px] items-center gap-2">
          <Link to="/">
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <span>
                <Home size="15px" />
              </span>
              <span>HomePage</span>
            </div>
          </Link>
          <span>
            <ChevronsRight size="15px" />
          </span>
          <span className="text-white">Consultants</span>
        </div>

        <div className="text-white py-10">
          <h6 className="font-ManropeBold text-[14px] md:text-[16px]">
            Welcome!
          </h6>
          <h1 className="font-ManropeBold text-[27px] md:text-[44px] text-center">
            Lets get you a consultant that is specially for your needs
          </h1>
        </div>

        <div className="py-7 flex gap-3 justify-center">
          <div className="relative w-[100%] md:w-[50%] inline-flex bg-white shadow-lg rounded-lg">
            <select
              name="application"
              id="application"
              className="rounded-l-lg relative text-[12px] md:text-[14px] m-0 block w-[1px] min-w-0 flex-auto border border-BrandGray400 bg-transparent bg-clip-padding px-1 md:px-3 py-[0.25rem] font-ManropeRegular leading-[1.6] text-BrandGray500 outline-none transition duration-200 ease-in-out focus:outline-none cursor-pointer"
            >
              <option selected disabled>
                Application
              </option>
              <option value="Admissions">Admissions</option>
              <option value="Visa">Visa</option>
              <option value="Travel">Travel</option>
            </select>

            <select
              name="application"
              id="application"
              className="rounded-0 relative text-[12px] md:text-[14px] m-0 block w-[1px] min-w-0 flex-auto border border-BrandGray400 bg-transparent bg-clip-padding px-1 md:px-3 py-[0.25rem] font-ManropeRegular leading-[1.6] text-BrandGray500 outline-none transition duration-200 ease-in-outfocus:border-primary focus:outline-none cursor-pointer"
            >
              <option selected disabled>
                Program
              </option>
              <option value="Phd">Phd</option>
              <option value="MSC">MSC</option>
              <option value="BSC">BSC</option>
            </select>

            <select
              name="application"
              id="application"
              className="relative text-[12px] md:text-[14px] m-0 -ml-px block w-[1px] min-w-0 flex-auto rounded-r-lg border border-solid border-BrandGray400 bg-transparent bg-clip-padding px-1 md:px-3 py-[0.25rem] font-ManropeRegular leading-[1.6] text-BrandGray500 outline-none transition duration-200 ease-in-outfocus:border-primary focus:outline-none cursor-pointer"
            >
              <option selected disabled>
                Country
              </option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <span>
            <img
              src={searchBtn}
              alt="Search Button"
              width="37px"
              className="cursor-pointer"
            />
          </span>
        </div>
      </div>

      <div className="px-10 md:px-40 mt-16 md:mt-[85px]">
        <div className="flex items-center bg-white shadow-md p-2 md:w-[420px] rounded-lg">
          <span>
            <Search size="18px" />
          </span>
          <input
            type="text"
            placeholder="Search by name..."
            className="outline-none font-ManropeRegular text-BrandGray800 p-2"
          />
        </div>
      </div>

      <ExperiencedConsultants />

      <DontMissAnything />
      <Footer />
    </div>
  );
};

export default Consultants;
