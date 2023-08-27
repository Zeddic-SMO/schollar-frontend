import quotes from "../../../assets/media/icons/Home/quotes.png";

const Testimony = ({ testimony }) => {
  console.log(testimony);
  return (
    <div key={testimony} className="rounded-lg h-full w-full">
      <div>
        <img src={quotes} alt="quotes" />
      </div>
      <div className="py-4">
        <p className="text-BrandGray700 font-ManropeRegular text-[16px]">
          {testimony?.text}
        </p>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:gap-0 justify-between items-center">
        <div className="flex gap-3 items-center">
          <img
            src={testimony?.img}
            alt="User"
            className="w-[60px] rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-[16px] font-ManropeBold text-BrandGray700">
              {testimony?.name}
            </span>
            <span className="text-BrandGray700 font-ManropeRegular text-[14px]">
              {testimony?.headline}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
