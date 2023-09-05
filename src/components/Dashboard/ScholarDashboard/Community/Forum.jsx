import { Plus, Search } from "react-feather";
import { ForumData } from "./CommunityData";
import { useState } from "react";

const Forum = () => {
  const [Data, SetData] = useState(ForumData);
  const [activeTab, setActiveTab] = useState("AllTopics");

  const filterData = (tagName) => {
    const filteredData = ForumData.filter((item) => {
      return item.tag === tagName;
    });
    SetData(filteredData);

    if (tagName == "AllTopics") {
      SetData(ForumData);
    }
  };

  const tagDecoration = (tagName) => {
    if (tagName == "Travel") {
      return `bg-[#4C82F7] text-white`;
    } else if (tagName == "Admission") {
      return `bg-[#EF4444] text-white`;
    } else if (tagName == "Scholarship" || tagName == "Business") {
      return `bg-[#FFBA08] text-white`;
    } else if (tagName == "Visa") {
      return `bg-[#22C55E] text-white`;
    } else {
      return `bg-white`;
    }
  };
  return (
    <div className="rounded-md shadow-sm border border-gray-300 py-5 mb-10">
      <h1 className="border-b pt-5 font-ManropeBold text-[30px] px-5">Forum</h1>
      <div className="px-5">
        {/* Search Section */}
        <div className="flex items-center justify-between py-10">
          <div className="flex px-5 py-1 items-center shadow-md rounded-md w-2/3 border">
            <Search size={16} />
            <input type="text" className="outline-none w-[90%] p-1" />
          </div>
          <div className="bg-BrandPrimary rounded-md flex items-center p-2 text-white font-ManropeRegular">
            <Plus />
            <span>New Thread</span>
          </div>
        </div>

        {/* Headings */}
        <div className="font-ManropeBold flex items-center gap-10 pb-10">
          <span
            className={
              "p-2 rounded-md text-[12px] cursor-pointer shadow-md " +
              `${
                activeTab == "AllTopics"
                  ? "bg-BrandPrimary text-white"
                  : "bg-BrandGray200"
              }`
            }
            onClick={() => {
              filterData("AllTopics");
              setActiveTab("AllTopics");
            }}
          >
            All Topics
          </span>
          {ForumData?.map((item) => {
            return (
              <span
                key={item.id}
                style={
                  activeTab == item.tag
                    ? { backgroundColor: "#6366F1", color: "white" }
                    : { backgroundColor: "#EFF2FC" }
                }
                className="p-2 rounded-md text-[12px] cursor-pointer shadow-md"
                onClick={() => {
                  filterData(item.tag);
                  setActiveTab(item.tag);
                }}
              >
                {item.tag}
              </span>
            );
          })}
        </div>

        {/* Content */}
        <div className="font-ManropeRegular">
          {Data?.map((item) => {
            return (
              <div key={item.id} className="pb-5">
                <div className="flex items-center gap-3">
                  <img
                    src={item.author.img}
                    alt="author"
                    className="w-[40px] rounded-full"
                  />
                  <span className="font-ManropeBold text-[14px]">
                    {item.author.name}
                  </span>
                </div>
                <h2 className="py-1 font-ManropeBold text-BrandGray900 text-[20px]">
                  {item.title}
                </h2>
                <p className="text-[14px] text-BrandGray700">
                  {item.description}
                </p>
                <div>
                  <div className="text-[12px] py-3">
                    <span
                      className={
                        "py-1 px-2 rounded-md " + `${tagDecoration(item.tag)}`
                      }
                    >
                      {item.tag}
                    </span>{" "}
                    <span className="mx-3 border h-full bg-BrandGray700"></span>
                    <span className="text-BrandGray600">{item.Date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Forum;
