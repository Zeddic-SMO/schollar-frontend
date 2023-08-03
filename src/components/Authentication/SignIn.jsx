import Template from "./Template";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Template>
      <div className="md:py-10">
        <h1 className="font-ManropeExtraBold text-center md:text-left text-[25px] md:text-[35px]">
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
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-1 w-full"
          />
        </div>
      </div>
    </Template>
  );
};

export default SignIn;
