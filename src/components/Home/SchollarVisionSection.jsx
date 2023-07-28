import scholarvision from "../../assets/media/icons/Home/scholarvision.png";

const SchollarVisionSection = () => {
  return (
    <div className="px-10 md:px-40 py-10 md:py-16 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-[40%] gap-5 md:mr-[10%]">
        <h1 className="text-BrandGray900 text-[25px] md:text-[35px] py-8 font-ManropeExtraBold">
          The Schollar Vision
        </h1>
        <p className="text-[16px] font-ManropeRegular text-BrandGray700 text-left md:text-justify mb-4">
          Our vision is to revolutionize the study abroad industry by leveraging
          technology and experienced consultants to provide African scholars
          with a seamless, personalized, and affordable experience that helps
          them achieve their academic and professional goals, and inspires a new
          generation of global leaders who are committed to creating a more
          connected and inclusive world.
        </p>
        <hr />
        <div className="py-5 mb-10 md:mb-0 flex">
          <div className="mr-10 md:mr-24">
            <span className="font-ManropeExtraBold text-[45px] md:text-[54px] text-BrandGray900">
              83%
            </span>
            <br />
            <span className="text-BrandGray700 font-ManropeRegular text-[14px]">
              Success rate
            </span>
          </div>

          <div>
            <span className="font-ManropeExtraBold text-[45px] md:text-[54px] text-BrandGray900">
              5M
            </span>
            <br />
            <span className="text-BrandGray700 font-ManropeRegular text-[14px]">
              Happy Scholars by 2030
            </span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[50%]">
        <img src={scholarvision} alt="scholar vision" />
      </div>
    </div>
  );
};

export default SchollarVisionSection;
