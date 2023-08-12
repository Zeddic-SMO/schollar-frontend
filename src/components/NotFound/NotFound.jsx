import Header from "../Navigation/Header";
import notfound_img from "../../assets//media/icons/404/404.png";
import { Home } from "react-feather";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="bg-[#f3effe] px-10 md:px-40 py-20 relative">
        <div className="flex justify-center">
          <div className="text-center">
            <img src={notfound_img} alt="not found" className="w-[390px]" />
            <h2 className="font-ManropeExtraBold text-[35px] md:text-[48px] py-5">
              Ooops!
            </h2>
            <p className="font-ManropeRegular text-[16px] md:text-[20px]">
              The page you are looking for is not available.
            </p>
            <div className="flex justify-center">
              <Link to="/">
                <button className="bg-BrandPrimary flex p-3 rounded-lg gap-2 text-white my-5">
                  <Home />
                  Go to homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-[12px] absolute bottom-2 text-BrandGray600 font-ManropeRegular ">
          <p className="text-center">
            {new Date().getFullYear()}. All rights reserved. Schollar.net.
            Powered By Maxify Global
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
