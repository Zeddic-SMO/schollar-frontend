import Template from "./Template";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Facebook } from "react-feather";
import { useState } from "react";
import google from "../../assets/media/icons/signIn/google.png";

const SignIn = () => {
  const [open, setOpen] = useState(false);
  return (
    <Template>
      <div className="md:py-5">
        <h1 className="font-ManropeExtraBold text-center md:text-center text-[25px] md:text-[30px]">
          Welcome Back
        </h1>
        <p className="font-ManropeRegular text-[14px] text-BrandGray700 py-3">
          Don't have an account yet?{" "}
          <span className="text-BrandPrimary  underline cursor-pointer">
            <Link to="/signup">Register here</Link>
          </span>
        </p>
        <div>
          <label htmlFor="email" className="block font-ManropeSemiBold">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>
        <div className="py-3">
          <label htmlFor="Password" className="block font-ManropeSemiBold">
            Password
          </label>
          <div className="flex justify-between border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2">
            <input
              type={open ? "text" : "password"}
              id="Password"
              className="outline-none w-[90%]"
            />
            <span>
              {open ? (
                <Eye onClick={() => setOpen(false)} />
              ) : (
                <EyeOff onClick={() => setOpen(true)} />
              )}
            </span>
          </div>
          <div className="flex gap-2 py-3">
            <input type="checkbox" />
            <label
              htmlFor=""
              className="font-ManropeRegular text-BrandGray700 text-[13px]"
            >
              Remember me
            </label>
          </div>
          <button className="w-full bg-BrandPrimary py-2 text-center text-white rounded-md">
            Sign in
          </button>
          <p className="font-ManropeSemiBold text-BrandPrimary text-center py-4 text-[13px]">
            Forgot your password?
          </p>
          <hr />
          <p className="font-ManropeExtraBold text-center text-BrandGray900 py-3 text-[13px]">
            Or sign in with your social network
          </p>
        </div>
        <div className="flex gap-3 justify-between">
          <div className="flex items-center gap-2 bg-BrandGray200 py-3 cursor-pointer px-3 rounded-md w-1/2 justify-center">
            <span>
              <img src={google} alt="Google Logo" width="12px" />
            </span>
            <span className="text-[13px] font-ManropeSemiBold text-BrandGray800">
              Google
            </span>
          </div>

          <div className="flex items-center gap-2 bg-BrandGray200 py-3 cursor-pointer px-3 rounded-md w-1/2 justify-center">
            <span>
              <Facebook size="15px" />
            </span>
            <span className="text-[13px] font-ManropeSemiBold text-BrandGray800">
              Facebook
            </span>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default SignIn;
