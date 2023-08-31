import { Copy, Trash } from "react-feather";
import TopBanner from "../../Elements/TopBanner";

const Availability = () => {
  return (
    <>
      <TopBanner />
      {/* Header */}
      <div className="flex justify-between items-center pb-10">
        <h1 className="font-ManropeBold text-[32px] text-BrandGray900">
          Availability
        </h1>
        <div className="flex items-center gap-5 px-2 border-[1px] border-BrandGray400 rounded-md py-2 shadow-sm font-ManropeRegular">
          <span>Personal Booking Link</span>
          <div className="flex gap-3 bg-BrandPrimary text-white border items-center rounded-md px-2 py-1 cursor-pointer">
            <span className="font-ManropeRegular text-[16px]">Copy Link</span>
            <Copy size={15} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Availability;
