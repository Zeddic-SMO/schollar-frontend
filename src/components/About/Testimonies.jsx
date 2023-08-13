import Carousel from "../Home/Carousel/Carousel";
import slides from "../Home/Carousel/Slides";
import review from "../../assets/media/icons/About/btn-clutch.png";

const Testimonies = () => {
  return (
    <div className="px-10 md:px-40 pb-5 md:py-16 flex flex-col md:flex-row items-center gap-5">
      <div className="bg-BrandGray900 rounded-md h-[350px] md:w-[350px] px-10 flex flex-col justify-center">
        <h1 className="font-ManropeExtraBold text-[25px] text-BrandPrimary md:text-[34px] ">
          200+
        </h1>
        <h2 className="text-BrandGray300  font-ManropeSemiBold text-[20px] md:text-[24px]">
          Scolars Already Served
        </h2>
        <div className="pt-4">
          <img src={review} alt="review" />
        </div>
      </div>
      <div className="w-full md:w-[60%] bg-transparent shadow-2xl rounded-2xl p-5 md:h-[350px]">
        <Carousel slides={slides} autoSlide={true} />
      </div>
    </div>
  );
};

export default Testimonies;
