import { DollarSign } from "react-feather";

const Pricing = () => {
  return (
    <>
      {/* Set Call Pricing */}
      <span className="font-ManropeSemiBold text-[16px]">Set Call Pricing</span>
      <div className="flex justify-between gap-4 mt-2">
        <div className="bg-BrandGray200 w-1/2 text-center p-2 rounded-lg font-ManropeRegular text-BrandGray800 cursor-pointer">
          15 mins Session
        </div>
        <div className="bg-BrandGray200 w-1/2 text-center p-2 rounded-lg font-ManropeRegular text-BrandGray800 cursor-pointer">
          30 mins Session
        </div>
      </div>

      {/* 15mins and 30 mins */}
      <div className="flex  items-center gap-4 my-10">
        <div className="w-1/2">
          <label htmlFor="15Mins" className="font-ManropeSemiBold text-[16px]">
            15 Mins
          </label>
          <div className="flex items-center justify-between p-1 border border-BrandGray400 rounded-md font-ManropeRegular">
            <input
              type="text"
              id="15Mins"
              placeholder="Enter Price"
              className="outline-none px-2"
            />
            <span className="bg-BrandGray200 p-2 rounded-md">
              <DollarSign size={16} className="text-BrandGray600" />
            </span>
          </div>
        </div>

        <div className="w-1/2">
          <label htmlFor="15Mins" className="font-ManropeSemiBold text-[16px]">
            30 Mins
          </label>
          <div className="flex items-center justify-between p-1 border border-BrandGray400 rounded-md font-ManropeRegular">
            <input
              type="text"
              id="30Mins"
              placeholder="Enter Price"
              className="outline-none px-2"
            />
            <span className="bg-BrandGray200 p-2 rounded-md">
              <DollarSign size={16} className="text-BrandGray600" />
            </span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="font-ManropeRegular text-[14px] flex items-center gap-5 pb-10 mb-5 border-b">
        <button className="bg-BrandGray200 py-2 px-3 rounded-lg">Cancel</button>
        <button className="bg-BrandPrimary py-2 px-3 rounded-lg text-white">
          Save Changes
        </button>
      </div>
    </>
  );
};

export default Pricing;
