import TopBanner from "../../Elements/TopBanner";
import Heading from "../Heading";
import { useState } from "react";
import ProgressTracking from "./ProgressTracking";
import BasicInfo from "./BasicInfo";
import Address from "./Address";
import Education from "./Education";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("ProgressTab");
  return (
    <>
      <TopBanner />
      <Heading />
      <div className="text-[18px] font-ManropeBold flex items-center justify-between border-b-2 border-BrandGray300 mb-5">
        <span
          className={`cursor-pointer py-5 ${
            activeTab == "ProgressTab"
              ? ` text-BrandPrimary `
              : `text-BrandGray600 hover:text-BrandPrimary`
          }`}
          onClick={() => setActiveTab("ProgressTab")}
        >
          Progress Tracker
        </span>
        <span
          className={`cursor-pointer py-5 ${
            activeTab == "BasicTab"
              ? ` text-BrandPrimary`
              : `text-BrandGray600 hover:text-BrandPrimary `
          }`}
          onClick={() => setActiveTab("BasicTab")}
        >
          Basic Info
        </span>
        <span
          className={`cursor-pointer py-5 
                ${
                  activeTab == "AddressTab"
                    ? ` text-BrandPrimary `
                    : `text-BrandGray600 hover:text-BrandPrimary `
                }`}
          onClick={() => setActiveTab("AddressTab")}
        >
          Address
        </span>
        <span
          className={`cursor-pointer py-5 
                ${
                  activeTab == "EducationTab"
                    ? ` text-BrandPrimary `
                    : `text-BrandGray600 hover:text-BrandPrimary `
                }`}
          onClick={() => setActiveTab("EducationTab")}
        >
          Education
        </span>
      </div>
      {activeTab === "ProgressTab" && <ProgressTracking />}
      {activeTab === "BasicTab" && <BasicInfo />}
      {activeTab === "AddressTab" && <Address />}
      {activeTab === "EducationTab" && <Education />}
    </>
  );
};

export default Profile;
