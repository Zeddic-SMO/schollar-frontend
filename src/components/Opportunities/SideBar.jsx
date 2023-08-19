import {
  Facebook,
  Grid,
  Instagram,
  Linkedin,
  List,
  Plus,
  Search,
  Twitter,
} from "react-feather";
import ads_banner from "../../assets/media/images/opportunities/banner.png";

const SideBar = () => {
  return (
    <div className="w-[25%]">
      <div className="absolute top-10 right-0">
        <div className="flex gap-5 justify-between">
          <button className="flex items-center gap-1 py-1 px-2 bg-BrandPrimary rounded-lg text-white">
            <Plus size={16} /> Post Opportunity
          </button>
          <div className="flex items-center gap-2">
            <List size={14} className="cursor-pointer" />
            <Grid size={14} className="cursor-pointer" />
          </div>
        </div>

        <div className="flex justify-between px-2 w-full py-1 my-5 bg-white border border-BrandGray300 rounded-md">
          <input
            type="text"
            placeholder="Search the blog..."
            className="font-ManropeRegular text-BrandGray600 text-[14px] bg-transparent w-[90%]"
          />
          <Search size={18} className="cursor-pointer" />
        </div>

        <div className="p-5 border border-BrandGray300 bg-white rounded-md">
          <h2 className="text-BrandGray900 text-[20px] font-ManropeExtraBold py-2">
            Categories
          </h2>
          <ul className="font-ManropeRegular text-[14px]">
            <li>
              <span className="text-BrandGray800">Admssion</span>{" "}
              <span className="text-BrandGray600">(1)</span>
            </li>
            <li>
              <span className="text-BrandGray800">Travel</span>{" "}
              <span className="text-BrandGray600">(1)</span>
            </li>
          </ul>
        </div>

        <div className="p-5 mt-5 border border-BrandGray300 bg-white rounded-md">
          <h2 className="text-BrandGray900 text-[20px] font-ManropeExtraBold py-2">
            Follow Us
          </h2>

          <div className="flex gap-2 pt-5">
            <span className="bg-BrandGray300 p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600 hover:bg-BrandPrimary hover:text-white">
              <Facebook size="15px" />
            </span>
            <span className="bg-BrandGray300 p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600 hover:bg-BrandPrimary hover:text-white">
              <Twitter size="15px" />
            </span>
            <span className="bg-BrandGray300 p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600 hover:bg-BrandPrimary hover:text-white">
              <Linkedin size="15px" />
            </span>
            <span className="bg-BrandGray300 p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600 hover:bg-BrandPrimary hover:text-white">
              <Instagram size="15px" />
            </span>
          </div>
        </div>

        <div>
          <img src={ads_banner} alt="ads banner" className="w-[220px] mt-5" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
