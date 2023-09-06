import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import { Link } from "react-router-dom";
import {
  Home,
  ChevronsRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  PhoneCall,
  Mail,
  MapPin,
} from "react-feather";

const Contact = () => {
  return (
    <div className="bg-[#f3effe]">
      <Header />
      <div className=" px-10 md:px-40 py-20">
        <div className="flex text-BrandGray500 text-[14px] items-center gap-2">
          <Link to="/">
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <span>
                <Home size="15px" />
              </span>
              <span>HomePage</span>
            </div>
          </Link>
          <span>
            <ChevronsRight size="15px" />
          </span>
          <span className="text-BrandPrimary">Contact</span>
        </div>

        <div className="py-14 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="font-ManropeBold text-[20px] md:text-[28px]">
              Want to know more about us?
            </h3>
            <h1
              id="contact_lets_talk"
              className="text-[45px] md:text-[80px] font-ManropeBold"
            >
              Let's talk!
            </h1>
            <div className="py-5">
              <p className="flex items-center gap-2">
                <span>
                  <PhoneCall size={14} className="text-BrandPrimary" />
                </span>
                <span className="text-[14px] font-ManropeRegular text-BrandGray800">
                  (406) 555-0120
                </span>
              </p>

              <p className="flex items-center gap-2 py-2">
                <span>
                  <Mail size={14} className="text-BrandPrimary" />
                </span>
                <span className="text-[14px] font-ManropeRegular text-BrandGray800">
                  example@gmail.com
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <MapPin size={14} className="text-BrandPrimary" />
                </span>
                <span className="text-[14px] font-ManropeRegular text-BrandGray800">
                  2464 Royal Ln. Mesa,New Jersey 45463
                </span>
              </p>
            </div>
            {/* Socials */}
            <div className="flex gap-2">
              <span className="bg-BrandGray300 p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600 hover:bg-BrandPrimary hover:text-white">
                <Facebook size="15px" />
              </span>
              <span className="bg-BrandGray300 p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600 hover:bg-BrandPrimary hover:text-white">
                <Twitter size="15px" />
              </span>
              <span className="bg-BrandGray300 p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600 hover:bg-BrandPrimary hover:text-white">
                <Linkedin size="15px" />
              </span>
              <span className="bg-BrandGray300 p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600 hover:bg-BrandPrimary hover:text-white">
                <Instagram size="15px" />
              </span>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex gap-2 mb-5">
              <div className="w-1/2">
                <label
                  htmlFor="full_name"
                  className="block font-ManropeSemiBold text-[15px]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="outline-none bg-white p-2 rounded-md w-full"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="email"
                  className="block font-ManropeSemiBold text-[15px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="outline-none bg-white p-2 rounded-md w-full"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-ManropeSemiBold text-[15px]"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                className="w-full rounded-md outline-none p-2"
              ></textarea>
            </div>
            <div>
              <button className=" bg-BrandPrimary rounded-md text-white font-ManropeRegular p-2 mt-5 shadow-md">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
