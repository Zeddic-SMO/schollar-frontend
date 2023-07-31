import booksession from "../../assets/media/icons/Home/bookSession.png";
import google from "../../assets/media/icons/Home/signup-icons/google.png";
import facebook from "../../assets/media/icons/Home/signup-icons/facebook.png";
import linkedIn from "../../assets/media/icons/Home/signup-icons/linkedIn.png";
import gitHub from "../../assets/media/icons/Home/signup-icons/gitHub.png";

const BookSession = () => {
  return (
    <div className="px-10 md:px-40 py-10 bg-[#F3F6FF]">
      <h1 className="py-10 font-ManropeExtraBold text-center text-[25px] md:text-[35px]">
        Ready to School Abroad? Book a Session Today
      </h1>
      <div className="flex flex-col md:flex-row items center md:justify-between">
        <div className="w-full md:w-[55%]">
          <img src={booksession} alt="" />
        </div>
        <div className="bg-white w-full md:w-[43%] px-8 py-4 rounded-lg">
          <h3 className="font-ManropeExtraBold text-[25px] my-3">
            Sign up and get <span className="text-[#EF4444]">20% off</span> for
            your first session!{" "}
          </h3>
          <div className="py-3">
            <label htmlFor="email" className="font-ManropeSemiBold text-[14px]">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border outline-none rounded-lg py-2 font-ManropeRegular"
              placeholder="Enter Email"
            />
          </div>

          <div className="pb-3">
            <label htmlFor="email" className="font-ManropeSemiBold text-[14px]">
              Password
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border outline-none rounded-lg py-2 font-ManropeRegular"
              placeholder="Enter Password"
            />
          </div>
          <button className="bg-BrandPrimary p-2 text-white rounded-lg">
            Create free account
          </button>
          <h6 className="font-ManropeSemiBold text-[14px] py-3">
            Or sign up using:
          </h6>
          <div className="flex gap-3">
            <img
              src={google}
              alt="facebook"
              className="w-[30px] cursor-pointer"
            />
            <img
              src={facebook}
              alt="facebook"
              className="w-[30px] cursor-pointer"
            />
            <img
              src={linkedIn}
              alt="facebook"
              className="w-[30px] cursor-pointer"
            />
            <img
              src={gitHub}
              alt="facebook"
              className="w-[30px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSession;
