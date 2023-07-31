import Carousel from "./Carousel/Carousel";
import slides from "./Carousel/Slides";

const TestimoniesSection = () => {
  return (
    <div className="px-10 md:px-40 py-10 md:py-16 flex flex-col md:flex-row items-center gap-5">
      <div className="bg-[#f3effe] h-[350px] md:w-[350px] flex justify-center items-center p-10">
        <h1 className="font-ManropeExtraBold text-[25px] text-center md:text-[28px]">
          What Students Say About Schollar
        </h1>
      </div>
      <div className="w-full md:w-[60%] bg-transparent shadow-2xl rounded-2xl p-5 md:h-[350px]">
        <Carousel slides={slides} autoSlide={true} />
      </div>
    </div>
  );
};

export default TestimoniesSection;
