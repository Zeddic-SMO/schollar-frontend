import logo from "../../assets/media/logo/logo _icon.png";
import sign_in from "../../assets/media/icons/Header/sign_in.png";
import sign_up from "../../assets/media/icons/Header/sign_up.png";

const Header = () => {
  return (
    <div className="px-10 md:px-40 py-4 h-[60px] bg-white flex justify-between items-center">
      <div className="flex gap-10 text-BrandGray800 font-ManropeSemiBold items-center">
        <div className="flex gap-2 items-center">
          <span>
            <img src={logo} alt="Logo" />
          </span>
          <span className="text-[20px] font-ManropeExtraBold">Schollar</span>
        </div>
        <div className="flex gap-5">
          <span>Consultants</span>
          <span>Features</span>
          <span>Opportunities</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="flex gap-5 items-center font-ManropeRegular text-[12px]">
        <div className="border border-BrandPrimary flex items-center py-1 px-3 gap-1 rounded-md cursor-pointer">
          <span>
            <img src={sign_in} alt="sign in" className="w-[15px]" />
          </span>
          <span>Sign in</span>
        </div>
        <div className="border bg-BrandPrimary flex items-center py-1 px-3 text-white gap-1 rounded-md cursor-pointer">
          <span>
            <img src={sign_up} alt="sign in" className="w-[10px]" />
          </span>
          <span>Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
