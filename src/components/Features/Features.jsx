import { Link } from "react-router-dom";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import {
  ChevronsRight,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
} from "react-feather";
import { ArrowRightCircle } from "react-feather";
import { chooseUs, featuresItems, servicesItems } from "./featuresData.js";
import TestimoniesSection from "../Home/TestimoniesSection";

const Features = () => {
  return (
    <div className="bg-BrandGray100">
      <Header />
      <div className="px-10 md:px-40 py-14">
        {/* Back to Home page */}
        <div className="flex text-BrandGray500 text-[14px] items-center gap-2">
          <Link to="/">
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <span>
                <Home size="15px" />
              </span>
              <span className="font-ManropeRegular">HomePage</span>
            </div>
          </Link>
          <span>
            <ChevronsRight size="15px" />
          </span>
          <span className="text-BrandPrimary font-ManropeRegular">
            Features
          </span>
        </div>

        <h1 className="font-ManropeExtraBold text-[30px] md:text-[40px] py-5">
          Schollar Features
        </h1>

        {/* Features section */}
        <div className="flex flex-wrap gap-10 mt-10">
          {featuresItems?.map((item) => {
            return (
              <div
                key={item.id}
                className="relative bg-white rounded-lg shadow-md w-[47%] p-6 cursor-pointer hover:scale-105 transition-transform duration-300 transform origin-center"
              >
                <span className="bg-BrandPrimary rounded-md p-2 absolute top-[-22px]">
                  <img
                    src={item.icon}
                    alt={item.feature}
                    className="w-[28px]"
                  />
                </span>
                <div className="flex items-center gap-2 py-2">
                  <h4 className="font-ManropeBold text-BrandGray900 text-[22px]">
                    {item.feature}
                  </h4>
                  <ArrowRightCircle size={15} className="text-BrandPrimary" />
                </div>
                <p className="font-ManropeRegular text-[14px] text-BrandGray700">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonies Section */}
      <div className="relative">
        <div className="bg-BrandGray100 h-[200px] absolute top-0 right-0 left-0"></div>
        <TestimoniesSection />
      </div>

      {/* Why Choose Us */}
      <div className="px-10 md:px-40 py-14 bg-white">
        <div className="text-center">
          <h1 className="font-ManropeExtraBold text-[30px] md:text-[40px] py-5">
            Why Choose Us?
          </h1>
          <p className="font-ManropeRegular text-BrandGray600 text-[18px]">
            We literally hold your hand every step on the way until the finish
            line
          </p>

          <div className="flex flex-col md:flex-row gap-10 py-10 justify-between">
            {chooseUs?.map((item) => {
              return (
                <div
                  key={item.text}
                  className=" cursor-pointer hover:border-t hover:border-b p-1 border-BrandGray600"
                >
                  <div className="p-3 bg-white rounded-full shadow-md inline-block">
                    <img src={item.icon} alt={item.text} />
                  </div>
                  <p className="font-ManropeSemiBold text-BrandGray700 py-5 text-center text-[14px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Get in Touch */}
      <div className="px-10 md:px-40 py-14 bg-white">
        <div className="bg-BrandGray100 p-10 flex justify-between rounded-md">
          <div className="w-[45%]">
            <div>
              <h2 className="font-ManropeExtraBold text-[30px] text-BrandGray900">
                Get in Touch
              </h2>
              <p className="font-ManropeRegular text-[15px] text-BrandGray700">
                We would love to talk to you if you have any questions that need
                clarifications or with to partner with us
              </p>
            </div>

            <div className="py-10">
              <h3 className="font-ManropeExtraBold text-[20px] text-BrandGray900 py-2">
                Contact Info
              </h3>
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

              {/* Socials */}
              <div className="flex gap-2 pt-5">
                <span className="p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600 hover:bg-BrandPrimary hover:text-white">
                  <Facebook size="15px" />
                </span>
                <span className="p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600 hover:bg-BrandPrimary hover:text-white">
                  <Twitter size="15px" />
                </span>
                <span className="p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600 hover:bg-BrandPrimary hover:text-white">
                  <Linkedin size="15px" />
                </span>
                <span className="p-1 md:p-2 cursor-pointer rounded-md border-[1px] border-BrandGray600 hover:bg-BrandPrimary hover:text-white">
                  <Instagram size="15px" />
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-md p-10 w-[50%]">
            <div className="pb-3">
              <label
                htmlFor="service"
                className="block font-ManropeSemiBold text-[14px]"
              >
                Service
              </label>
              <select
                name=""
                id="service"
                className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray600 p-1 w-full"
              >
                <option selected>
                  Choose the service you are interested in
                </option>
                {servicesItems?.map((item) => {
                  return <option key={item.id}>{item.name}</option>;
                })}
              </select>
            </div>

            <div className="pb-3">
              <label
                htmlFor="name"
                className="block font-ManropeSemiBold text-[14px]"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-1 w-full"
              />
            </div>

            <div className="pb-3">
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

            <div>
              <label
                htmlFor="message"
                className="block font-ManropeSemiBold text-[15px]"
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Leave a message"
                id="message"
                cols="30"
                rows="5"
                className="w-full rounded-md outline-none p-2 border-[1px] border-BrandGray400 text-BrandGray700"
              ></textarea>
            </div>

            <div className="flex gap-2 py-3">
              <input type="checkbox" />
              <label
                htmlFor=""
                className="font-ManropeRegular text-BrandGray700 text-[13px]"
              >
                I agree to the{" "}
                <span className="text-BrandPrimary underline cursor-pointer">
                  <Link to="">Terms & Conditions</Link>
                </span>
              </label>
            </div>

            <button className="bg-BrandPrimary py-1 px-2 text-center text-white rounded-md">
              Send Request
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Features;
