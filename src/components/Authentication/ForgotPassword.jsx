import { Link } from "react-router-dom";
import Header from "../Navigation/Header";
import { Home } from "react-feather";

const ForgotPassword = () => {
  return (
    <>
      <Header />
      <div className="bg-[#f3effe] px-10 md:px-40 py-20 relative">
        <div className="flex justify-center">
          <div className="text-center">
            <div>
              <input
                type="text"
                placeholder="Enter your email address"
                className="outline-none"
              />
              <button>Submit</button>
            </div>
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

export default ForgotPassword;
