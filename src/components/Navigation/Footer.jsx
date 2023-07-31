import { Link } from "react-router-dom";
import logo from "../../assets/media/logo/logo.png";

const Footer = () => {
  return (
    <div className="px-10 md:px-40 py-10 bg-BrandGray900">
      <div className="flex gap-10">
        <div>
          <img src={logo} alt="logo" className="py-5" />
          <p className="text-[14px] font-ManropeRegular text-BrandGray400">
            Schollar is a company that provides personalized guidance and <br />
            support to African scholars who are interested in studying <br />
            abroad. Our experienced consultants help scholars navigate the
            <br />
            complex application process, providing them with access to vital
            <br />
            resources, information, and communities.
          </p>
          <h6 className="text-[14px] font-ManropeSemiBold text-white pt-10 py-3">
            Subscribe to our newsletter
          </h6>
          <div className="items-center inline-flex border-[1px] border-BrandGray700 rounded-lg">
            <span></span>
            <input
              type="email"
              placeholder="Your Email"
              className="font-ManropeRegular p-2 rounded-l-lg outline-none text-[15px] bg-transparent w-[310px]"
            />
            <button className="text-white bg-BrandPrimary rounded-r-lg p-2">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-white flex flex-col mt-10 gap-3 md:ml-14">
          <span className="hover:text-BrandPrimary cursor-pointer">About</span>
          <span className="hover:text-BrandPrimary cursor-pointer">
            Features
          </span>
          <span className="hover:text-BrandPrimary cursor-pointer">
            Why Scholar
          </span>
          <span className="hover:text-BrandPrimary cursor-pointer">
            Careers
          </span>
          <span className="hover:text-BrandPrimary cursor-pointer">Blog</span>

          <div className="text-white flex flex-col pt-5">
            <span className="hover:text-BrandPrimary cursor-pointer">
              Terms & Conditions
            </span>
            <span className="hover:text-BrandPrimary cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>

        <div className="text-white mt-10 flex flex-col gap-5">
          <span className="hover:text-BrandPrimary cursor-pointer">
            Facebook
          </span>
          <span className="hover:text-BrandPrimary cursor-pointer">
            Linkedin
          </span>
          <span className="hover:text-BrandPrimary cursor-pointer">
            Twitter
          </span>
          <span className="hover:text-BrandPrimary cursor-pointer">
            Instagram
          </span>
        </div>

        <div className="text-white mt-10 flex flex-col gap-5">
          <span>Contact Us</span>
          <span className="text-BrandPrimary cursor-pointer">
            hello@schollar.com
          </span>
        </div>
      </div>
      <p className="text-white py-5 text-[12px] mt-8">
        {new Date().getFullYear()}. All rights reserved. Schollar.net. Powered
        By Maxify Global
      </p>
    </div>
  );
};

export default Footer;
