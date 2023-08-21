import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import { Link, useParams } from "react-router-dom";
import { ChevronsRight, Home, MapPin } from "react-feather";
import { ConsultantsInfo } from "../Consultants/ConsultantsData.js";
import { useEffect, useState } from "react";
import star from "../../assets/media/icons/Home/Consultants/icons/star.png";
import chat from "../../assets/media/icons/Home/Consultants/icons/circle_chat.png";
import video from "../../assets/media/icons/Home/Consultants/icons/circle_video.png";
import { InlineWidget } from "react-calendly";

const ConsultantOverview = () => {
  const { consultantId } = useParams();
  const [consultant, setConsultant] = useState(null);

  useEffect(() => {
    const selectedConsultant = ConsultantsInfo.find(
      (consultant) => consultant.id === parseInt(consultantId)
    );
    setConsultant(selectedConsultant);
  }, [consultantId]);

  return (
    <>
      <Header />
      <div className="px-10 md:px-40 py-14 ">
        {/* Back to Home page */}
        <div className="flex text-BrandGray500 text-[14px] items-center gap-2">
          <Link to="/">
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <span>
                <Home size="15px" />
              </span>
              <span className="font-ManropeRegular cursor-pointer">
                HomePage
              </span>
            </div>
          </Link>
          <span>
            <ChevronsRight size="15px" />
          </span>
          <Link to="/consultants">
            <span className="font-ManropeRegular cursor-pointer hover:underline">
              Consultants
            </span>
          </Link>
          <span>
            <ChevronsRight size="15px" />
          </span>

          <span className="font-ManropeRegular cursor-pointer text-BrandGray800 ">
            {consultant?.name}
          </span>
        </div>

        {/* Consultant Details */}
        <div className="flex mt-12 gap-10">
          <div className="w-[250px]">
            <img src={consultant?.pic} alt={consultant?.name} />
            <h5 className="text-center text-[18px] font-ManropeSemiBold py-3 text-BrandGray900">
              {consultant?.name}
            </h5>
            <p className="flex text-[11px] font-ManropeRegular text-BrandGray500 gap-3 justify-center py-1">
              {consultant?.reviews.map((review, i) => (
                <span key={i} className="mx-[-6px]">
                  <img src={star} alt="rating" className="w-[13px]" />
                </span>
              ))}
              <span>{consultant?.reviews.length + " reviews"}</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <MapPin size={20} className="text-BrandPrimary" />{" "}
              <span className="font-ManropeSemiBold text-BrandGray900">
                {" "}
                {consultant?.location}
              </span>
            </p>
          </div>
          <div className="w-full">
            <div>
              <h3 className="font-ManropeBold text-BrandPrimary text-[20px]">
                Specialization
              </h3>
              <div className="flex gap-5 pt-5 pb-10">
                {consultant?.specialization.map((specialize, i) => {
                  return (
                    <span
                      key={i}
                      className="bg-BrandGray200 px-3 py-1 rounded-md font-ManropeSemiBold text-[14px]"
                    >
                      {specialize}
                    </span>
                  );
                })}
              </div>
            </div>
            <hr className="border-[1px] bg-BrandGray300 my-5" />
            <div>
              <h3 className="font-ManropeBold text-BrandPrimary text-[20px]">
                Services
              </h3>
              <div className="pt-5">
                <div className="flex items-center gap-7">
                  <img src={chat} alt="chat" className="w-[35px]" />
                  <span className="font-ManropeBold text-BrandGray900">
                    Unlimited
                  </span>
                  <span className="font-ManropeRegular bg-red-600 text-[14px] text-white px-2 rounded-md">
                    FREE
                  </span>
                </div>
              </div>
              <div className="py-4">
                <div className="flex items-center gap-7">
                  <img src={video} alt="chat" className="w-[35px]" />
                  <span className="font-ManropeBold text-BrandGray900">
                    15 mins Session
                  </span>
                  <span className="font-ManropeRegular bg-[#22C55E] text-[14px] text-white px-2 rounded-md">
                    {consultant?.fifteenMins}
                  </span>

                  <div className="w-[1px] h-[35px] border bg-BrandPrimary"></div>

                  <span className="font-ManropeBold text-BrandGray900">
                    30 mins Session
                  </span>
                  <span className="font-ManropeRegular bg-[#22C55E] text-[14px] text-white px-2 rounded-md">
                    {consultant?.thirtyMins}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-[1px] bg-BrandGray300 my-5" />

        {/* Booking Section */}
        <div>
          <h3 className="font-ManropeBold text-BrandPrimary text-[20px]">
            Book Consultation
          </h3>

          <InlineWidget url="https://calendly.com/ictzoid/30min" />

          <div>
            <label
              htmlFor="message"
              className="block font-ManropeSemiBold text-[15px] text-BrandGray800 pt-5 pb-2"
            >
              Consultation Brief
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Write a short note describing your consultation need..."
              className="w-full rounded-md outline-none p-2 border"
            ></textarea>
          </div>

          <button className="bg-BrandPrimary text-white px-3 py-2 font-ManropeRegular text-[14px] rounded-md shadow-md my-5">
            Make an appointment
          </button>
        </div>

        <hr className="border-[1px] bg-BrandGray300 my-5" />

        {/* Reviews */}
        <div>
          <h3 className="font-ManropeBold text-BrandPrimary text-[20px]">
            Reviews
          </h3>

          <div>
            {consultant?.reviews.map((review, i) => {
              return (
                <div key={i} className="py-5">
                  <p className="flex items-center font-ManropeSemiBold text-BrandGray800 gap-4">
                    <span className="bg-BrandGray200 rounded-md px-2 py-1 text-[13px]">
                      {review.tag}
                    </span>
                    <span className="text-[13px]">{review.date}</span>
                  </p>
                  <p className="text-BrandGray700 text-[15px] font-ManropeRegular py-2">
                    {review.text}
                  </p>
                  <p className="font-ManropeSemiBold text-BrandGray900">
                    {review.studentName}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConsultantOverview;
