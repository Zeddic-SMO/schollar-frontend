import { useState } from "react";
import TopBanner from "../../Elements/TopBanner";
import Heading from "../../ScholarDashboard/Profile/Heading";
import BasicInfo from "./BasicInfo";
import Address from "./Address";
import IDVerification from "./IDVerification";
import Specialization from "./Specialization";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("BasicTab");
  return (
    <>
      <TopBanner />
      <Heading />

      {/* Tabs */}
      <div className="text-[18px] font-ManropeBold flex items-center justify-between border-b-2 border-BrandGray300 mb-5">
        {/* Basic Info Tab */}
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

        {/* Address Tab */}
        <span
          className={`cursor-pointer py-5 ${
            activeTab == "AddressTab"
              ? ` text-BrandPrimary `
              : `text-BrandGray600 hover:text-BrandPrimary`
          }`}
          onClick={() => setActiveTab("AddressTab")}
        >
          Address
        </span>

        {/* ID Verification Tab */}
        <span
          className={`cursor-pointer py-5 
                ${
                  activeTab == "IDVerificationTab"
                    ? ` text-BrandPrimary `
                    : `text-BrandGray600 hover:text-BrandPrimary `
                }`}
          onClick={() => setActiveTab("IDVerificationTab")}
        >
          ID Verification
        </span>

        {/* Specialization Tab */}
        <span
          className={`cursor-pointer py-5 
                ${
                  activeTab == "SpecializationTab"
                    ? ` text-BrandPrimary `
                    : `text-BrandGray600 hover:text-BrandPrimary `
                }`}
          onClick={() => setActiveTab("SpecializationTab")}
        >
          Specialization
        </span>
      </div>

      {/*Tab Components */}
      {activeTab == "BasicTab" && <BasicInfo />}
      {activeTab == "AddressTab" && <Address />}
      {activeTab == "IDVerificationTab" && <IDVerification />}
      {activeTab == "SpecializationTab" && <Specialization />}
    </>
  );
};

export default Profile;
