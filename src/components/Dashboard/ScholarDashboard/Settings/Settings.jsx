import { useState } from "react";
import TopBanner from "../../Elements/TopBanner";
import Password from "./Password";
import Notification from "./Notification";
import DeleteAccount from "./DeleteAccount";

const SettingsTab = () => {
  const [activeTab, setActiveTab] = useState("Password");
  return (
    <>
      <TopBanner />

      {/* Header */}
      <div className="flex justify-between items-center pb-10">
        <h1 className="font-ManropeBold text-[32px] text-BrandGray900">
          Settings
        </h1>
      </div>

      {/* Tabs */}
      <div className="text-[18px] font-ManropeBold flex gap-12 border-b-2 border-BrandGray300 mb-5">
        <span
          className={`cursor-pointer py-5 ${
            activeTab == "Password"
              ? ` text-BrandPrimary `
              : `text-BrandGray600 hover:text-BrandPrimary`
          }`}
          onClick={() => setActiveTab("Password")}
        >
          Password
        </span>
        <span
          className={`cursor-pointer py-5 ${
            activeTab == "Notifications"
              ? ` text-BrandPrimary`
              : `text-BrandGray600 hover:text-BrandPrimary `
          }`}
          onClick={() => setActiveTab("Notifications")}
        >
          Notifications
        </span>
        <span
          className={`cursor-pointer py-5 
                ${
                  activeTab == "DeleteAccount"
                    ? ` text-BrandPrimary `
                    : `text-BrandGray600 hover:text-BrandPrimary `
                }`}
          onClick={() => setActiveTab("DeleteAccount")}
        >
          Delete Account
        </span>
      </div>

      {/* Components */}
      <div>
        {activeTab === "Password" && <Password />}
        {activeTab === "Notifications" && <Notification />}
        {activeTab === "DeleteAccount" && <DeleteAccount />}
      </div>
    </>
  );
};

export default SettingsTab;
