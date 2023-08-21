import CAT from "../../assets/media/icons/Home/CATbtn.png";
import star from "../../assets/media/icons/Home/Consultants/icons/star.png";
import view from "../../assets/media/icons/Home/Consultants/icons/view.png";
import chat from "../../assets/media/icons/Home/Consultants/icons/chat.png";
import video from "../../assets/media/icons/Home/Consultants/icons/video.png";

import { ConsultantsInfo } from "./ConsultantsData";
import { Link } from "react-router-dom";

const ExperiencedConsultants = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for instant scrolling
    });
  };
  return (
    <div className="px-10 md:px-40 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center py-10 ">
        <h1 className="font-ManropeExtraBold text-center md:text-left text-[25px] md:text-[35px]">
          Experienced Consultants
        </h1>
        <span>
          <img
            src={CAT}
            alt="call to action"
            className="shadow-lg cursor-pointer"
          />
        </span>
      </div>

      <div className="flex gap-5 justify-center flex-wrap">
        {ConsultantsInfo?.map((consultant) => {
          return (
            <div key={consultant.id} className="cursor-pointer">
              <div className="w-[220px]">
                <div className="relative inline-block group">
                  <img
                    src={consultant.pic}
                    alt={consultant.name}
                    className="hover:scale-105 transition-transform duration-300 transform origin-center"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-BrandPrimary bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md">
                    <Link
                      to={`/consultants/` + consultant.id}
                      onClick={scrollToTop}
                    >
                      <p className="absolute w-full flex justify-center items-center gap-2 bottom-5">
                        <span>
                          <img
                            src={view}
                            alt="view"
                            className="w-[30px] shadow-lg"
                          />
                        </span>
                        <span>
                          <img
                            src={chat}
                            alt="view"
                            className="w-[30px] shadow-lg"
                          />
                        </span>
                        <span>
                          <img
                            src={video}
                            alt="view"
                            className="w-[30px] shadow-lg"
                          />
                        </span>
                      </p>
                    </Link>
                  </div>
                </div>

                <h5 className="text-center text-[18px] font-ManropeSemiBold py-3 text-BrandGray900">
                  {consultant.name}
                </h5>
                <p className="flex gap-2 justify-center">
                  {consultant.specialization.map((item, i) => {
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
                  {consultant.reviews.map((review, i) => (
                    <span key={i} className="mx-[-6px]">
                      <img src={star} alt="rating" className="w-[13px]" />
                    </span>
                  ))}
                  <span>{consultant.reviews.length + " reviews"}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperiencedConsultants;
