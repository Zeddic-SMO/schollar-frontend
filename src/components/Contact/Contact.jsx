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
} from "react-feather";

const Contact = () => {
  return (
    <div className="bg-[#f3effe] ">
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
            <div className="flex gap-2 pt-5">
              <span className="bg-BrandGray300 p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600">
                <Facebook size="15px" />
              </span>
              <span className="bg-BrandGray300 p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600">
                <Twitter size="15px" />
              </span>
              <span className="bg-BrandGray300 p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600">
                <Linkedin size="15px" />
              </span>
              <span className="bg-BrandGray300 p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600">
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