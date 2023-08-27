import { useRef, useState } from "react";
import Footer from "../../Navigation/Footer";
import DashboardHeader from "../Elements/DashboardHeader";
import Profile from "./Profile/Profile";
import user from "../../../assets/media/images/Dashboard/avatar.png";
import {
  BookOpen,
  Calendar,
  CreditCard,
  Heart,
  LogOut,
  MessageSquare,
  Settings,
  User,
} from "react-feather";
import Community from "./Community/Community";
import Appointments from "./Appointments/Appointments";
import { Favorite } from "./Favorite/Favorite";
import Reviews from "./Reviews/Reviews";
import SettingsTab from "./Settings/Settings";

const SchollarDashboard = () => {
  const divRef = useRef(null);
  const [activeTab, setActiveTab] = useState("ProfileTab");

  const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <>
      <DashboardHeader />
      <div className="px-10 md:px-40 flex">
        {/* SideBar */}
        <div className="w-[320px] mr-10 border-r-[1.5px] border-[#E2E5F1] py-10">
          {/* User image and info */}
          <div className="h-[200px] flex flex-col justify-center items-center gap-2">
            <img src={user} alt="User" className="w-[130px]" />
            <h6 className="text-BrandGray900 font-ManropeBold text-[20px]">
              John Doe
            </h6>
            <span className="text-white bg-[#22C55E] rounded-md px-3 py-1 font-ManropeRegular shadow-md text-[14px]">
              Go premium
            </span>
          </div>

          {/* Dashboard Main Tabs */}
          <div className="py-10">
            {/* ProfileTab */}
            <div
              className={`flex items-center gap-3 px-3 mb-5 cursor-pointer ${
                activeTab === "ProfileTab"
                  ? "bg-BrandPrimary text-white mr-4 py-3 rounded-lg shadow-md"
                  : ""
              }`}
              onClick={() => {
                toTop();
                setActiveTab("ProfileTab");
              }}
            >
              <span>
                <User
                  className={`${
                    activeTab === "ProfileTab"
                      ? "text-white"
                      : "text-BrandGray600"
                  }`}
                />
              </span>
              <span
                className={`text-[16px] font-ManropeRegular ${
                  activeTab === "ProfileTab"
                    ? "text-white"
                    : "text-BrandGray800"
                }`}
              >
                Profile
              </span>
            </div>

            {/* CommunityTab */}
            <div
              className={`flex items-center gap-3 px-3 mb-5 cursor-pointer ${
                activeTab === "CommunityTab"
                  ? "bg-BrandPrimary text-white mr-4 py-3 rounded-lg shadow-md"
                  : ""
              }`}
              onClick={() => {
                toTop();
                setActiveTab("CommunityTab");
              }}
            >
              <span>
                <MessageSquare
                  className={`${
                    activeTab === "CommunityTab"
                      ? "text-white"
                      : "text-BrandGray600"
                  }`}
                />
              </span>
              <span>Community</span>
            </div>

            {/* AppointmentsTab */}
            <div
              className={`flex items-center gap-3 px-3 mb-5 cursor-pointer ${
                activeTab === "AppointmentsTab"
                  ? "bg-BrandPrimary text-white mr-4 py-3 rounded-lg shadow-md"
                  : ""
              }`}
              onClick={() => {
                toTop();
                setActiveTab("AppointmentsTab");
              }}
            >
              <span>
                <Calendar
                  className={`${
                    activeTab === "AppointmentsTab"
                      ? "text-white"
                      : "text-BrandGray600"
                  }`}
                />
              </span>
              <span>Appointments</span>
            </div>

            {/* FavoriteTab */}
            <div
              className={`flex items-center gap-3 px-3 mb-5 cursor-pointer ${
                activeTab === "FavoriteTab"
                  ? "bg-BrandPrimary text-white mr-4 py-3 rounded-lg shadow-md"
                  : ""
              }`}
              onClick={() => {
                toTop();
                setActiveTab("FavoriteTab");
              }}
            >
              <span>
                <Heart
                  className={`${
                    activeTab === "FavoriteTab"
                      ? "text-white"
                      : "text-BrandGray600"
                  }`}
                />
              </span>
              <span>Favorite</span>
            </div>

            {/* TransactionsTab */}
            <div
              className={`flex items-center gap-3 px-3 mb-5 cursor-pointer ${
                activeTab === "TransactionsTab"
                  ? "bg-BrandPrimary text-white mr-4 py-3 rounded-lg shadow-md"
                  : ""
              }`}
              onClick={() => {
                toTop();
                setActiveTab("TransactionsTab");
              }}
            >
              <span>
                <CreditCard
                  className={`${
                    activeTab === "TransactionsTab"
                      ? "text-white"
                      : "text-BrandGray600"
                  }`}
                />
              </span>
              <span>Transactions</span>
            </div>

            {/* ReviewsTab */}
            <div
              className={`flex items-center gap-3 px-3 mb-5 cursor-pointer ${
                activeTab === "ReviewsTab"
                  ? "bg-BrandPrimary text-white mr-4 py-3 rounded-lg shadow-md"
                  : ""
              }`}
              onClick={() => {
                toTop();
                setActiveTab("ReviewsTab");
              }}
            >
              <span>
                <BookOpen
                  className={`${
                    activeTab === "ReviewsTab"
                      ? "text-white"
                      : "text-BrandGray600"
                  }`}
                />
              </span>
              <span>Reviews</span>
            </div>

            {/* SettingsTab */}
            <div
              className={`flex items-center gap-3 px-3 mb-5 cursor-pointer ${
                activeTab === "SettingsTab"
                  ? "bg-BrandPrimary text-white mr-4 py-3 rounded-lg shadow-md"
                  : ""
              }`}
              onClick={() => {
                toTop();
                setActiveTab("SettingsTab");
              }}
            >
              <span>
                <Settings
                  className={`${
                    activeTab === "SettingsTab"
                      ? "text-white"
                      : "text-BrandGray600"
                  }`}
                />
              </span>
              <span>Settings</span>
            </div>

            {/* SignOutTab */}
            <div
              className={`flex items-center gap-3 px-3 mb-5 cursor-pointer ${
                activeTab === "SignOutTab"
                  ? "bg-BrandPrimary text-white mr-4 py-3 rounded-lg shadow-md"
                  : ""
              }`}
            >
              <span>
                <LogOut className="text-BrandGray600" />
              </span>
              <span>Sign Out</span>
            </div>
          </div>
        </div>

        {/* Active Sections conditionally displayed */}
        <div ref={divRef}>
          {activeTab === "ProfileTab" && <Profile />}
          {activeTab === "CommunityTab" && <Community />}
          {activeTab === "AppointmentsTab" && <Appointments />}
          {activeTab === "FavoriteTab" && <Favorite />}
          {activeTab === "ReviewsTab" && <Reviews />}
          {activeTab === "SettingsTab" && <SettingsTab />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SchollarDashboard;
