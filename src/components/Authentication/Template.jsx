// import Header from "../Navigation/Header";
import { Link } from "react-router-dom";
import cover from "../../assets/media/images/auth/cover.png";
import logo from "../../assets/media/logo/logo _icon.png";

const Template = ({ children }) => {
  return (
    <div className="h-screen">
      {/* <Header /> */}
      <div id="authTemplate" className="md:flex">
        <div className="w-full md:w-1/2 h-full px-10 md:pl-40">
          <Link to="/">
            <div className="flex gap-2 justify-center md:justify-normal items-center cursor-pointer pt-[20px]">
              <span>
                <img src={logo} alt="Logo" />
              </span>

              <span className="text-[20px] font-ManropeExtraBold">
                Schollar
              </span>
            </div>
          </Link>

          {children}
          <div className="text-[12px] absolute bottom-2 text-BrandGray600 font-ManropeRegular">
            <p className="text-center">
              {new Date().getFullYear()}. All rights reserved. Schollar.net.
              Powered By Maxify Global
            </p>
          </div>
        </div>
        <div
          className=" hidden md:inline-block md:w-1/2 h-full bg-cover bg-center bg-no-repeat bg-origin-content"
          style={{ backgroundImage: `url(${cover})` }}
        ></div>
      </div>
    </div>
  );
};

export default Template;
