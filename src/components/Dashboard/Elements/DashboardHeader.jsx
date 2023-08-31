import { Link } from "react-router-dom";
import logo from "../../../assets/media/logo/logo _icon.png";
import { Bell, Mail } from "react-feather";
import user from "../../../assets/media/images/Dashboard/user.png";

const DashboardHeader = (prop) => {
  const { role } = prop;

  return (
    <div className="px-10 md:px-40 py-4 md:h-[60px] bg-white shadow-lg sticky top-0 z-20 flex flex-col md:flex-row justify-between items-center">
      <Link to="/">
        <div className="flex gap-2 justify-center md:justify-normal items-center cursor-pointer">
          <span>
            <img src={logo} alt="Logo" />
          </span>

          <span className="text-[20px] font-ManropeExtraBold">Schollar</span>
        </div>
      </Link>

      <div className="flex gap-5 items-center font-ManropeRegular text-[12px]">
        {role != "consultant" && (
          <Link to="/">
            <div className="border bg-BrandPrimary flex items-center py-2 px-3 text-white gap-1 rounded-md cursor-pointer">
              <span>Book a Session</span>
            </div>
          </Link>
        )}
        <Link to="/">
          <div className="border border-BrandPrimary flex items-center py-2 px-3 gap-1 rounded-md cursor-pointer">
            <span>News Board</span>
          </div>
        </Link>
        <Link to="">
          <span className=" inline-block p-2 rounded-full shadow-md hover:bg-BrandGray200">
            <Mail size={16} />
          </span>
        </Link>
        <Link to="">
          <span className=" inline-block p-2 rounded-full shadow-md hover:bg-BrandGray200">
            <Bell size={16} />
          </span>
        </Link>
        <span>
          <img src={user} alt="User pic" className="w-[35px]" />
        </span>
      </div>
    </div>
  );
};

export default DashboardHeader;
