import { Copy } from "react-feather";
import TopBanner from "../../Elements/TopBanner";
import { useState } from "react";
import Pricing from "./Pricing";
import BussinessHours from "./BussinessHours";

const Availability = () => {
  const [activeTab, setActiveTab] = useState("Pricing");
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

      {/* Tabs */}
      <div className="text-[18px] font-ManropeBold flex gap-12 border-b-2 border-BrandGray300 mb-5">
        <span
          className={`cursor-pointer py-5 ${
            activeTab == "Pricing"
              ? ` text-BrandPrimary `
              : `text-BrandGray600 hover:text-BrandPrimary`
          }`}
          onClick={() => setActiveTab("Pricing")}
        >
          Pricing
        </span>
        <span
          className={`cursor-pointer py-5 ${
            activeTab == "BusinessHours"
              ? ` text-BrandPrimary`
              : `text-BrandGray600 hover:text-BrandPrimary `
          }`}
          onClick={() => setActiveTab("BusinessHours")}
        >
          Business Hours
        </span>
      </div>

      {/* Components */}
      <div>
        {activeTab === "Pricing" && <Pricing />}
        {activeTab === "BusinessHours" && <BussinessHours />}
      </div>
    </>
  );
};

export default Availability;
