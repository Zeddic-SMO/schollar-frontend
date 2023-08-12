import HeroLarge from "../../assets/media/icons/Home/Hero_Lg.png";
import searchBtn from "../../assets/media/icons/Home/Search_Btn.png";
import students from "../../assets/media/icons/Home/Hero_Sm.png";

const HeroSection = () => {
  return (
    <div
      id="heroBg"
      className="bg-[#f3effe] md:h-[600px] w-full px-10 md:px-40 py-20 flex items-center"
    >
      <div className="w-full md:w-[80%]">
        <h6 className="font-ManropeBold text-[14px] md:text-[20px]">
          Welcome!
        </h6>
        <h1 className="font-ManropeBold text-[30px] md:text-[44px] text-center md:text-left">
          Get <span className="text-BrandPrimary">Personalized Support</span>{" "}
          for all your Study Abroad Queries
        </h1>
        <div className="block md:hidden">
          <img
            src={HeroLarge}
            alt="connecting"
            className="w-[300px] mx-auto py-3"
          />
        </div>
        <p className="text-[16px] font-ManropeRegular py-3">
          Access a pool of experienced consultants, resources and community of
          scholars to make your academic dreams a reality!
        </p>
        <div className="py-7 flex gap-3">
          <div className="relative w-[95%] md:w-[90%] flex flex-wrap items-stretch bg-white shadow-lg rounded-lg">
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
        <div className="flex items-center gap-2 py-8">
          <img src={students} alt="students" className="w-[120px]" />
          <p className="font-ManropeRegular text-[14px]">
            <span className="text-BrandPrimary font-ManropeBold">10K+</span>{" "}
            students are already with us
          </p>
        </div>
      </div>
      <div className="hidden md:inline-block">
        <img src={HeroLarge} alt="connecting" />
      </div>
    </div>
  );
};

export default HeroSection;
