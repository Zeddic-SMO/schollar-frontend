import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import quotes from "../../../assets/media/icons/Home/quotes.png";
import facebook from "../../../assets/media/icons/Home/fb.png";
import instagram from "../../../assets/media/icons/Home/instagram.png";
import twitter from "../../../assets/media/icons/Home/twitter.png";

const Carousel = ({ autoSlide = false, autoSlideInterval = 3000, slides }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((testimony) => (
          <div key={testimony.id} className="bg-white rounded-lg h-full">
            <div>
              <img src={quotes} alt="quotes" />
            </div>
            <div className="py-4">
              <p className="text-BrandGray700 font-ManropeRegular text-[16px]">
                {testimony.text}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img
                  src={testimony.img}
                  alt="User"
                  className="w-[60px] rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-[16px] font-ManropeBold text-BrandGray700">
                    {testimony.name}
                  </span>
                  <span className="text-BrandGray700 font-ManropeRegular">
                    {testimony.headline}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <img
                  src={facebook}
                  alt="facebook"
                  className="w-[30px] h-[30px] cursor-pointer"
                />
                <img
                  src={twitter}
                  alt="twitter"
                  className="w-[30px] h-[30px] cursor-pointer"
                />
                <img
                  src={instagram}
                  alt="instagram"
                  className="w-[30px] h-[30px] cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <div className="absolute top-0 right-0">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Carousel;
