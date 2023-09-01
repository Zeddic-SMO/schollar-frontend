import {
  BookOpen,
  Calendar,
  Clock,
  CreditCard,
  Heart,
  Home,
  LogOut,
  MessageSquare,
  Monitor,
  Settings,
  User,
} from "react-feather";
import DashboardHeader from "../Elements/DashboardHeader";
import { useRef, useState } from "react";
import user from "../../../assets/media/images/Dashboard/avatar.png";
import Dashboard from "./DashBoard/Dashboard";
import Profile from "./Profile/Profile";
import Availability from "./Availability/Availability";
import Appointments from "../ScholarDashboard/Appointments/Appointments";
import Community from "../ScholarDashboard/Community/Community";
import Transactions from "../ScholarDashboard/Transactions/Transactions";
import Reviews from "../ScholarDashboard/Reviews/Reviews";
import SettingsTab from "../ScholarDashboard/Settings/Settings";
import BankAccounts from "./BankAccounts/BankAccounts";
import Footer from "../../Navigation/Footer";

const ConsultantDashboard = () => {
  const divRef = useRef(null);
  const [activeTab, setActiveTab] = useState("DashBoardTab");

  const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      <DashboardHeader role={"consultant"} />
      <div className="px-10 md:px-40 flex">
        {/* SideBar */}
        <div className="w-[280px] mr-5 border-r-[1.5px] border-[#E2E5F1] py-10">
          {/* User image and info */}
          <div className="h-[200px] flex flex-col justify-center items-center gap-2">
            <img src={user} alt="User" className="w-[130px]" />
            <h6 className="text-BrandGray900 font-ManropeBold text-[20px]">
              John Doe
            </h6>
            <span className="text-white bg-[#22C55E] rounded-md px-3 py-1 font-ManropeRegular shadow-md text-[14px]">
              Boost Profile
            </span>
          </div>

          {/* Dashboard Main Tabs */}
          <div className="py-10">
            {/* DashBoardTab */}
            <div
              className={`flex items-center gap-3 px-3 mb-5 cursor-pointer ${
                activeTab === "DashBoardTab"
                  ? "bg-BrandPrimary text-white mr-4 py-3 rounded-lg shadow-md"
                  : ""
              }`}
              onClick={() => {
                toTop();
                setActiveTab("DashBoardTab");
              }}
            >
              <span>
                <Monitor
                  className={`${
                    activeTab === "DashBoardTab"
                      ? "text-white"
                      : "text-BrandGray600"
                  }`}
                />
              </span>
              <span
                className={`text-[16px] font-ManropeRegular ${
                  activeTab === "DashBoardTab"
                    ? "text-white"
                    : "text-BrandGray800"
                }`}
              >
                Dashboard
              </span>
            </div>

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

            {/* AvailabilityTab */}
            <div
              className={`flex items-center gap-3 px-3 mb-5 cursor-pointer ${
                activeTab === "AvailabilityTab"
                  ? "bg-BrandPrimary text-white mr-4 py-3 rounded-lg shadow-md"
                  : ""
              }`}
              onClick={() => {
                toTop();
                setActiveTab("AvailabilityTab");
              }}
            >
              <span>
                <Clock
                  className={`${
                    activeTab === "AvailabilityTab"
                      ? "text-white"
                      : "text-BrandGray600"
                  }`}
                />
              </span>
              <span
                className={`text-[16px] font-ManropeRegular ${
                  activeTab === "AvailabilityTab"
                    ? "text-white"
                    : "text-BrandGray800"
                }`}
              >
                Availability
              </span>
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

            {/* BankAccountsTab */}
            <div
              className={`flex items-center gap-3 px-3 mb-5 cursor-pointer ${
                activeTab === "BankAccountsTab"
                  ? "bg-BrandPrimary text-white mr-4 py-3 rounded-lg shadow-md"
                  : ""
              }`}
              onClick={() => {
                toTop();
                setActiveTab("BankAccountsTab");
              }}
            >
              <span>
                <Home
                  className={`${
                    activeTab === "BankAccountsTab"
                      ? "text-white"
                      : "text-BrandGray600"
                  }`}
                />
              </span>
              <span>Bank Accounts</span>
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
        <div ref={divRef} className="w-[700px]">
          {activeTab == "DashBoardTab" && <Dashboard />}
          {activeTab == "ProfileTab" && <Profile />}
          {activeTab == "AvailabilityTab" && <Availability />}
          {activeTab == "AppointmentsTab" && <Appointments />}
          {activeTab == "CommunityTab" && <Community />}
          {activeTab == "BankAccountsTab" && <BankAccounts />}
          {activeTab == "TransactionsTab" && <Transactions />}
          {activeTab == "ReviewsTab" && <Reviews />}
          {activeTab == "SettingsTab" && <SettingsTab />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConsultantDashboard;
