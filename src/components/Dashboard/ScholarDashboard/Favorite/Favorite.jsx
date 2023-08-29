import { Trash } from "react-feather";
import TopBanner from "../../Elements/TopBanner";

export const Favorite = () => {
  return (
    <>
      <TopBanner />

      {/* Header */}
      <div className="flex justify-between items-center pb-10">
        <h1 className="font-ManropeBold text-[32px] text-BrandGray900">
          Favourite
        </h1>
        <div className="flex gap-3 text-red-500 border border-red-200 items-center rounded-md px-2 py-1 cursor-pointer hover:bg-red-400 hover:text-white">
          <span>
            <Trash size={16} />
          </span>
          <span className="font-ManropeRegular text-[16px]">Delete All</span>
        </div>
      </div>
    </>
  );
};
