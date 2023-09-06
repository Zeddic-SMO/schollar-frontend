import { opportunitiesItems } from "./OpportunitiesData";
import tag from "../../assets/media/images/opportunities/tag.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const MainSection = () => {
  const [loginUser, setLoginUser] = useState(false);

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
    <div className="w-[75%]">
      <h1 className="font-ManropeExtraBold text-[30px] md:text-[40px] py-5">
        List View with Sidebar
      </h1>
      <div>
        {opportunitiesItems?.map((item) => {
          return (
            <div key={item.id}>
              <div className="flex gap-5">
                <div className="w-[45%] relative">
                  <img src={tag} alt="Tag" className="absolute right-2 top-2" />
                  <img src={item.img} alt={item.title} className="rounded-md" />
                </div>
                <div className="w-[50%]">
                  <span
                    className={
                      "border py-1 px-2 rounded-md " +
                      `${tagDecoration(item.tag)}`
                    }
                  >
                    {item.tag}
                  </span>
                  <h4 className="font-ManropeExtraBold text-[20px] text-BrandGray800 py-2">
                    {item.title}
                  </h4>
                  <p className="font-ManropeRegular text-[15px] text-BrandGray700 pb-5">
                    {item.text}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-ManropeRegular text-[13px]">
                      {item.date}
                    </span>
                    <Link to={loginUser ? "/" : "/signin"}>
                      <button className="bg-BrandGray800 text-white px-2 py-1 rounded-lg shadow-md text-[14px] hover:bg-BrandGray600 hover:text-BrandGray900">
                        See More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-BrandGray100 p-5 my-5 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <span
                    className={
                      "border py-1 px-2 rounded-md " +
                      `${tagDecoration(item.tag2)}`
                    }
                  >
                    {item.tag2}
                  </span>
                  <span className="shadow-md rounded-full">
                    <img src={tag} alt="Tag" />
                  </span>
                </div>
                <h4 className="font-ManropeExtraBold text-[20px] text-BrandGray800 py-2">
                  {item.title2}
                </h4>
                <p className="font-ManropeRegular text-[15px] text-BrandGray700">
                  {item.text2}
                </p>
                <div className="flex justify-between items-center">
                  <span>{item.date2}</span>
                  <Link to={loginUser ? "/" : "/signin"}>
                    <button className="bg-BrandGray800 text-white px-2 py-1 rounded-lg shadow-md text-[14px] hover:bg-BrandGray600 hover:text-BrandGray900">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainSection;
