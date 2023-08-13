import { Link } from "react-router-dom";
import Header from "../Navigation/Header";
import { ChevronsRight, Home } from "react-feather";
import headerImg from "../../assets/media/icons/About/Header.png";
import consultantNum from "../../assets/media/icons/About/consultants.png";
import conversationNum from "../../assets/media/icons/About/conversation.png";
import newScholars from "../../assets/media/icons/About/scholars.png";
import success from "../../assets/media/icons/About/success.png";
import photos from "../../assets/media/icons/About/bx-images.png";
import videoImg from "../../assets/media/icons/About/video.png";
import lady from "../../assets/media/icons/About/thumbup.png";
import guy from "../../assets/media/icons/About/guy.png";
import guys from "../../assets/media/icons/About/lady_guys.png";
import lady_guy from "../../assets/media/icons/About/lady_guy.png";
import TrustedPartnersSection from "../Home/TrustedPartnersSection";
import Testimonies from "./Testimonies";
import OurLeaders from "./OurLeaders";
import shape from "../../assets/media/icons/About/shape.png";
import Footer from "../Navigation/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div
        className="h-[400px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${headerImg})` }}
      ></div>
      <div className="px-10 md:px-40 py-10 ">
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
          <span className="text-BrandPrimary font-ManropeRegular">About</span>
        </div>

        {/* Who we are section */}
        <div>
          <h1 className="font-ManropeExtraBold text-[30px] md:text-[40px] py-5">
            Who We Are
          </h1>

          <hr className="border-[1px] border-BrandGray300" />
          <div className="py-5 flex flex-col md:flex-row md:justify-between gap-10 font-ManropeRegular text-[15px] mb-5">
            <p>
              Schollar is a tech Startup founded by a team of experienced
              professionals who are passionate about helping African scholars
              achieve their dreams of studying abroad. We understand the
              challenges that African students face when it comes to studying
              abroad, and we are dedicated to providing professional guidance
              and support to help them succeed.
            </p>
            <p>
              At Schollar, we believe in making education accessible to
              everyone. Our services are affordable, and we work hard to ensure
              that our clients receive the best possible value for their
              investment. We are committed to providing exceptional service and
              support to every African scholar who uses our platform.
            </p>
          </div>
        </div>

        {/* Schollar by Numbers */}
        <div className="bg-BrandGray100 p-10 rounded-md">
          <h2 className="font-ManropeExtraBold text-[30px]">
            Schollar by Numbers
          </h2>
          <div>
            <div className="flex flex-col gap-3 md:flex-row pb-3 mt-5 justify-between">
              <div className="flex gap-5 p-5 bg-white rounded-lg shadow-lg md:w-1/2">
                <div>
                  <img
                    src={consultantNum}
                    alt="consultants number"
                    className="w-[100px]"
                  />
                </div>
                <div>
                  <h2 className="font-ManropeExtraBold text-[48px]">2,480</h2>
                  <p className="text-BrandGray700 font-ManropeRegular">
                    <span className="font-bold">Consultation</span> Sessions per
                    month
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-5 bg-white rounded-lg shadow-lg md:w-1/2">
                <div>
                  <img
                    src={conversationNum}
                    alt="consultants number"
                    className="w-[100px]"
                  />
                </div>
                <div>
                  <h2 className="font-ManropeExtraBold text-[48px]">1,200</h2>
                  <p className="text-BrandGray700 font-ManropeRegular">
                    <span className="font-bold">Text Conversation</span> per Day
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:flex-row justify-between">
              <div className="flex gap-5 p-5 bg-white rounded-lg shadow-lg md:w-1/2">
                <div>
                  <img
                    src={newScholars}
                    alt="new scholars number"
                    className="w-[100px]"
                  />
                </div>
                <div>
                  <h2 className="font-ManropeExtraBold text-[48px]">760</h2>
                  <p className="text-BrandGray700 font-ManropeRegular">
                    <span className="font-bold">New Scholars</span> per month
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-5 bg-white rounded-lg shadow-lg md:w-1/2">
                <div>
                  <img
                    src={success}
                    alt="success number"
                    className="w-[100px]"
                  />
                </div>
                <div>
                  <h2 className="font-ManropeExtraBold text-[48px]">58</h2>
                  <p className="text-BrandGray700 font-ManropeRegular">
                    <span className="font-bold">Success</span> stories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* See all photos */}
        <div className="mt-10">
          <div className="flex justify-between items-center pb-5">
            <h1 className="font-ManropeExtraBold text-[30px] md:text-[40px] py-5">
              We are Dedicated
            </h1>
            <div className="flex items-center rounded-md border border-BrandPrimary gap-2 p-1">
              <div>
                <img src={photos} alt="" className="w-[15px] h-[15px]" />
              </div>
              <span className="text-BrandPrimary font-ManropeRegular">
                See all photos
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="row-span-3 col-start-1 row-start-1">
              <img src={videoImg} alt="" className="h-full" />
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <img src={lady} alt="" />
              </div>
              <div>
                <img src={guy} alt="" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <img src={guys} alt="" />
              </div>
              <div>
                <img src={lady_guy} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Partners Component */}
      <TrustedPartnersSection />

      {/* Testimonies Component */}
      <Testimonies />

      {/* Our Leaders components */}
      <OurLeaders />

      <div className="px-10 md:px-40 py-14 ">
        <div className="bg-BrandGray100 py-5 px-10 rounded-xl h-[420px] relative">
          <div className="py-14 flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3">
              <h3 className="font-ManropeBold text-[18px] md:text-[20px] text-BrandGray700">
                Want to partner with us?
              </h3>
              <h1 className="text-[30px] md:text-[30px] py-4 font-ManropeBold text-BrandGray900">
                Don't Hesitate to Contact Us
              </h1>
            </div>
            <div className="md:w-2/3 z-40">
              <div className="flex gap-2 mb-5">
                <div className="w-1/2 z-50">
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
                  Send Request
                </button>
              </div>
              <img
                src={shape}
                alt=""
                className="absolute bottom-0 right-0 w-[350px] z-20"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
