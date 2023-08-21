import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import { Link, useParams } from "react-router-dom";
import { ChevronsRight, Home, MapPin } from "react-feather";
import { ConsultantsInfo } from "../Consultants/ConsultantsData.js";
import { useEffect, useState } from "react";
import star from "../../assets/media/icons//Home/Consultants/icons/star.png";

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

        <div className="flex mt-12">
          <div className="w-[220px]">
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
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConsultantOverview;
