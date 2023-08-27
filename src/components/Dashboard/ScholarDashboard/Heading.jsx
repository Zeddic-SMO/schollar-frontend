import { Eye } from "react-feather";

const Heading = () => {
  return (
    <div className="flex justify-between items-center pb-10">
      <h1 className="font-ManropeBold text-[32px] text-BrandGray900">
        Profile
      </h1>
      <div className="bg-BrandPrimary flex gap-3 text-white items-center rounded-md px-2 py-1">
        <span className="font-ManropeRegular text-[16px]">Preview Profile</span>
        <span>
          <Eye size={16} />
        </span>
      </div>
    </div>
  );
};

export default Heading;
