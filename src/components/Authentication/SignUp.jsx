import Template from "./Template";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Facebook } from "react-feather";
import { useState } from "react";
import google from "../../assets/media/icons/signIn/google.png";

const SignUp = () => {
  const [open, setOpen] = useState(false);
  return (
    <Template>
      <div className="md:py-2">
        <div className="pb-1">
          <h2 className="text-center font-ManropeBold">I am a:</h2>
          <div className="flex justify-center gap-10 py-2">
            <div className="flex items-center gap-2">
              <input type="radio" name="role" checked />
              <span className="font-ManropeRegular text-BrandGray700">
                Scholar
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="role" />
              <span className="font-ManropeRegular text-BrandGray700">
                Consultant
              </span>
            </div>
          </div>
        </div>
        <h1 className="font-ManropeExtraBold text-center md:text-left text-[25px] md:text-[20px]">
          Create Account
        </h1>
        <p className="font-ManropeRegular text-[13px] text-BrandGray700 py-3">
          Already have an account?{" "}
          <span className="text-BrandPrimary  underline cursor-pointer">
            <Link to="/signin">Signin Here</Link>
          </span>
        </p>
        <div className="flex gap-3 pb-2">
          <div>
            <label
              htmlFor="firstname"
              className="font-ManropeSemiBold text-[14px]"
            >
              First name
            </label>
            <input
              type="text"
              id="firstname"
              className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-1 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="font-ManropeSemiBold text-[14px]"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastname"
              className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-1 w-full"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-ManropeSemiBold text-[14px]"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-1 w-full"
          />
        </div>
        <div className="py-2">
          <label
            htmlFor="Password"
            className="block font-ManropeSemiBold text-[14px]"
          >
            Password
          </label>
          <div className="flex justify-between items-center border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-1">
            <input
              type={open ? "text" : "password"}
              id="Password"
              className="outline-none w-[90%]"
            />
            <span>
              {open ? (
                <Eye onClick={() => setOpen(false)} size="18px" />
              ) : (
                <EyeOff onClick={() => setOpen(true)} size="18px" />
              )}
            </span>
          </div>
          {/* Terms & Conditions */}
          <div className="flex gap-2 pt-3">
            <input type="checkbox" />
            <label
              htmlFor=""
              className="font-ManropeRegular text-BrandGray700 text-[13px]"
            >
              I agree to the{" "}
              <span className="text-BrandPrimary  underline cursor-pointer">
                <Link to="">Terms & Conditions</Link>
              </span>
            </label>
          </div>

          {/* Privacy policy */}
          <div className="flex gap-2 py-3">
            <input type="checkbox" />
            <label
              htmlFor=""
              className="font-ManropeRegular text-BrandGray700 text-[13px]"
            >
              I agree to the{" "}
              <span className="text-BrandPrimary  underline cursor-pointer">
                <Link to="">Privacy policy</Link>
              </span>
            </label>
          </div>
          <button className="w-full bg-BrandPrimary py-1 text-center text-white rounded-md">
            Sign up
          </button>

          <p className="font-ManropeExtraBold text-center text-BrandGray900 py-3 text-[13px]">
            Or sign up with your social network
          </p>
        </div>
        <div className="flex gap-3 justify-between">
          <div className="flex items-center gap-2 bg-BrandGray200 py-2 cursor-pointer px-3 rounded-md w-1/2 justify-center">
            <span>
              <img src={google} alt="Google Logo" width="12px" />
            </span>
            <span className="text-[13px] font-ManropeSemiBold text-BrandGray800">
              Google
            </span>
          </div>

          <div className="flex items-center gap-2 bg-BrandGray200 py-2 cursor-pointer px-3 rounded-md w-1/2 justify-center">
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

export default SignUp;
