import { useState } from "react";
import Forum from "./Forum";
import Messages from "./Messages";

const Community = () => {
  const [activeTab, setActiveTab] = useState("Forum");
  return (
    <div>
      <div className="py-5 my-5 flex items-center gap-14 font-ManropeSemiBold border-b">
        <span
          className={`cursor-pointer ${
            activeTab == "Forum"
              ? "text-BrandPrimary font-ManropeExtraBold text-[22px]"
              : ""
          }`}
          onClick={() => setActiveTab("Forum")}
        >
          Forum
        </span>
        <span
          className={`cursor-pointer ${
            activeTab == "Messages"
              ? "text-BrandPrimary font-ManropeExtraBold text-[22px]"
              : ""
          }`}
          onClick={() => setActiveTab("Messages")}
        >
          Messages
        </span>
      </div>
      {activeTab == "Forum" && <Forum />}
      {activeTab == "Messages" && <Messages />}
    </div>
  );
};

export default Community;
