import { Link } from "react-router-dom";
import star from "../../assets/media/icons/Home/Consultants/icons/star.png";
import view from "../../assets/media/icons/Home/Consultants/icons/view.png";
import chat from "../../assets/media/icons/Home/Consultants/icons/chat.png";
import video from "../../assets/media/icons/Home/Consultants/icons/video.png";
import { Bookmark } from "react-feather";
import { useState } from "react";
import HiddenElement from "../Dashboard/ScholarDashboard/Favorite/HiddenElement";

const Consultant = (prop) => {
  const [isHovered, setIsHovered] = useState(false);

  // consultant's data
  const { consultant } = prop;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for instant scrolling
    });
  };
  return (
    <div className="cursor-pointer">
      <div className="w-[220px]">
        <div className="relative inline-block group">
          <img
            src={consultant?.pic}
            alt={consultant?.name}
            className="hover:scale-105 transition-transform duration-300 transform origin-center"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-BrandPrimary bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md">
            <p className="flex justify-end px-1 py-1">
              <span
                className="p-1 bg-BrandGray300 rounded-full shadow-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Bookmark />
              </span>
            </p>
            <Link to={`/consultants/` + consultant?.id} onClick={scrollToTop}>
              <span className="absolute top-[-42px] right-[-22px]">
                {isHovered && <HiddenElement />}
              </span>
              <p className="absolute w-full flex justify-center items-center gap-2 bottom-5">
                <span>
                  <img src={view} alt="view" className="w-[30px] shadow-lg" />
                </span>
                <span>
                  <img src={chat} alt="view" className="w-[30px] shadow-lg" />
                </span>
                <span>
                  <img src={video} alt="view" className="w-[30px] shadow-lg" />
                </span>
              </p>
            </Link>
          </div>
        </div>

        <h5 className="text-center text-[18px] font-ManropeSemiBold py-3 text-BrandGray900">
          {consultant?.name}
        </h5>
        <p className="flex gap-2 justify-center">
          {consultant.specialization?.map((item, i) => {
            return (
              <span
                key={i}
                className="text-[14px] font-ManropeRegular text-BrandGray700"
              >
                {item}
              </span>
            );
          })}
        </p>
        <p className="flex text-[11px] font-ManropeRegular text-BrandGray500 gap-3 justify-center py-1">
          {consultant?.reviews.map((review, i) => (
            <span key={i} className="mx-[-6px]">
              <img src={star} alt="rating" className="w-[13px]" />
            </span>
          ))}
          <Link to={`/consultants/` + consultant?.id} onClick={scrollToTop}>
            <span className="hover:text-BrandPrimary">
              {consultant?.reviews.length + " reviews"}
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Consultant;
