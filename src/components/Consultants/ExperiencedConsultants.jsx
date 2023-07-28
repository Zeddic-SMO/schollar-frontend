import CAT from "../../assets/media/icons/Home/CATbtn.png";
import Darrell from "../../assets/media/icons/Home/Consultants/Darrel.png";
import Esther from "../../assets/media/icons/Home/Consultants/Esther.png";
import Jerome from "../../assets/media/icons/Home/Consultants/Jerome.png";
import Ralph from "../../assets/media/icons/Home/Consultants/Ralph.png";
import rating4 from "../../assets/media/icons/Home/Consultants/icons/rating4.png";
import rating5 from "../../assets/media/icons/Home/Consultants/icons/rating5.png";

const ExperiencedConsultants = () => {
  return (
    <div className="px-10 md:px-40 py-10">
      <div className="flex justify-between py-10 ">
        <h1 className="font-ManropeExtraBold text-[25px] md:text-[35px]">
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
        <div className="w-[220px]">
          <img src={Darrell} alt="Darrell" />
          <h5 className="text-center text-[18px] font-ManropeSemiBold py-3 text-BrandGray900">
            Darrell Steward
          </h5>
          <p className="text-[12px] text-center font-ManropeRegular text-BrandGray700">
            Admission | Travel | Scholarship | Visa
          </p>
          <p className="flex text-[11px] font-ManropeRegular text-BrandGray500 gap-3 justify-center py-2">
            <span>
              <img src={rating4} alt="rating" />
            </span>
            <span>(14 reviews)</span>
          </p>
        </div>
        <div className="w-[220px]">
          <img src={Esther} alt="Esther" />
          <h5 className="text-center text-[18px] font-ManropeSemiBold py-3 text-BrandGray900">
            Esther Howard
          </h5>
          <p className="text-[12px] text-center font-ManropeRegular text-BrandGray700">
            Admission | Travel | Scholarship | Visa
          </p>
          <p className="flex text-[11px] font-ManropeRegular text-BrandGray500 gap-3 justify-center py-2">
            <span>
              <img src={rating5} alt="rating" />
            </span>
            <span>(4 reviews)</span>
          </p>
        </div>
        <div className="w-[220px]">
          <img src={Jerome} alt="Jerome" />
          <h5 className="text-center text-[18px] font-ManropeSemiBold py-3 text-BrandGray900">
            Jerome Bell
          </h5>
          <p className="text-[12px] text-center font-ManropeRegular text-BrandGray700">
            Admission | Travel | Scholarship | Visa
          </p>
          <p className="flex text-[11px] font-ManropeRegular text-BrandGray500 gap-3 justify-center py-2">
            <span>
              <img src={rating4} alt="rating" />
            </span>
            <span>(12 reviews)</span>
          </p>
        </div>
        <div className="w-[220px]">
          <img src={Ralph} alt="Ralph" />
          <h5 className="text-center text-[18px] font-ManropeSemiBold py-3 text-BrandGray900">
            Ralph Edwards
          </h5>
          <p className="text-[12px] text-center font-ManropeRegular text-BrandGray700">
            Admission | Travel | Scholarship | Visa
          </p>
          <p className="flex text-[11px] font-ManropeRegular text-BrandGray500 gap-3 justify-center py-2">
            <span>
              <img src={rating5} alt="rating" />
            </span>
            <span>( reviews)</span>
          </p>
        </div>
        {/* Second row */}
        <div className="w-[220px]">
          <img src={Darrell} alt="Darrell" />
          <h5 className="text-center text-[18px] font-ManropeSemiBold py-3 text-BrandGray900">
            Darrell Steward
          </h5>
          <p className="text-[12px] text-center font-ManropeRegular text-BrandGray700">
            Admission | Travel | Scholarship | Visa
          </p>
          <p className="flex text-[11px] font-ManropeRegular text-BrandGray500 gap-3 justify-center py-2">
            <span>
              <img src={rating4} alt="rating" />
            </span>
            <span>(14 reviews)</span>
          </p>
        </div>
        <div className="w-[220px]">
          <img src={Esther} alt="Esther" />
          <h5 className="text-center text-[18px] font-ManropeSemiBold py-3 text-BrandGray900">
            Esther Howard
          </h5>
          <p className="text-[12px] text-center font-ManropeRegular text-BrandGray700">
            Admission | Travel | Scholarship | Visa
          </p>
          <p className="flex text-[11px] font-ManropeRegular text-BrandGray500 gap-3 justify-center py-2">
            <span>
              <img src={rating5} alt="rating" />
            </span>
            <span>(4 reviews)</span>
          </p>
        </div>
        <div className="w-[220px]">
          <img src={Jerome} alt="Jerome" />
          <h5 className="text-center text-[18px] font-ManropeSemiBold py-3 text-BrandGray900">
            Jerome Bell
          </h5>
          <p className="text-[12px] text-center font-ManropeRegular text-BrandGray700">
            Admission | Travel | Scholarship | Visa
          </p>
          <p className="flex text-[11px] font-ManropeRegular text-BrandGray500 gap-3 justify-center py-2">
            <span>
              <img src={rating4} alt="rating" />
            </span>
            <span>(12 reviews)</span>
          </p>
        </div>
        <div className="w-[220px]">
          <img src={Ralph} alt="Ralph" />
          <h5 className="text-center text-[18px] font-ManropeSemiBold py-3 text-BrandGray900">
            Ralph Edwards
          </h5>
          <p className="text-[12px] text-center font-ManropeRegular text-BrandGray700">
            Admission | Travel | Scholarship | Visa
          </p>
          <p className="flex text-[11px] font-ManropeRegular text-BrandGray500 gap-3 justify-center py-2">
            <span>
              <img src={rating5} alt="rating" />
            </span>
            <span>( reviews)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencedConsultants;
