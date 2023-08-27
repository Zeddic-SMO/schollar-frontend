import { Link } from "react-router-dom";
import logo from "../../assets/media/logo/logo _icon.png";
import sign_in from "../../assets/media/icons/Header/sign_in.png";
import sign_up from "../../assets/media/icons/Header/sign_up.png";

const Header = () => {
  return (
    <div className="px-10 md:px-40 py-4 md:h-[60px] bg-transparent flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col md:flex-row justify-center md:justify-normal gap-4 md:gap-10 text-BrandGray800 font-ManropeSemiBold items-center">
        <Link to="/">
          <div className="flex gap-2 justify-center md:justify-normal items-center cursor-pointer">
            <span>
              <img src={logo} alt="Logo" />
            </span>

            <span className="text-[20px] font-ManropeExtraBold">Schollar</span>
          </div>
        </Link>
        <div className="flex gap-2 text-[12px] md:text-[16px] pb-4 md:pb-0 md:gap-5">
          <Link to="/consultants">
            <span className="hover:text-BrandPrimary">Consultants</span>
          </Link>
          <Link to="/features">
            <span className="hover:text-BrandPrimary">Features</span>
          </Link>
          <Link to="/opportuities">
            <span className="hover:text-BrandPrimary">Opportunities</span>
          </Link>
          <Link to="/contact">
            <span className="hover:text-BrandPrimary">Contact</span>
          </Link>
        </div>
      </div>
      <div className="flex gap-5 items-center font-ManropeRegular text-[12px]">
        <Link to="/signin">
          <div className="border border-BrandPrimary flex items-center py-1 px-3 gap-1 rounded-md cursor-pointer">
            <span>
              <img src={sign_in} alt="sign in" className="w-[15px]" />
            </span>
            <span>Sign in</span>
          </div>
        </Link>
        <Link to="/signup">
          <div className="border bg-BrandPrimary flex items-center py-1 px-3 text-white gap-1 rounded-md cursor-pointer">
            <span>
              <img src={sign_up} alt="sign in" className="w-[10px]" />
            </span>
            <span>Sign up</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
