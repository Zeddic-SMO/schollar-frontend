import { Search, Trash } from "react-feather";
import { conversationData } from "./CommunityData";
import ChatSideBar from "./ChatSideBar";
import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { MdOutlineAttachment } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";

const Messages = () => {
  const [conversation, setConversation] = useState(null);
  const [activeChat, setActiveChat] = useState(null);
  return (
    <div className="flex border rounded-lg border-BrandGray400">
      {/* Chat Sidebar */}
      <div className="bg-BrandGray100 pt-10 pb-1 w-[250px] rounded-tl-lg rounded-bl-lg">
        <h3 className="text-[28px] text-BrandGray900 font-ManropeBold mb-2 px-5">
          Messages
        </h3>

        {/* Search Bar */}
        <div className="px-5 mb-5">
          <div className="bg-white flex justify-between px-2 items-center border border-BrandGray400 rounded-md">
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent w-3/4 p-2 font-ManropeRegular"
            />
            <Search size={18} />
          </div>
        </div>

        {/* SideBar Chat Tabs*/}
        {conversationData &&
          conversationData.map((chat) => {
            return (
              <div key={chat.userId}>
                <ChatSideBar
                  chat={chat}
                  setConversation={setConversation}
                  setActiveChat={setActiveChat}
                  activeChat={activeChat}
                />
              </div>
            );
          })}
      </div>

      {/* Message Section */}
      <div className="relative">
        {/* Header */}
        <div className="w-[450px] pt-10 px-4 flex justify-between border-b border-BrandGray400 pb-3">
          {/* user avatar */}
          <div className="flex items-center gap-3 font-ManropeSemiBold text-[14px]">
            {conversation && (
              <img
                src={conversation?.userAvatar}
                alt="userAvatar"
                className="w-[40px] h-[40px] rounded-full"
              />
            )}
            <span>{conversation?.userName}</span>
            {conversation && (
              <span className="w-[5px] h-[5px] bg-green-600 rounded-full"></span>
            )}
          </div>

          {/* Header Buttons */}
          <div className="flex gap-5 h-[35px]">
            <div className="text-BrandPrimary flex items-center border border-BrandPrimary gap-1 px-2 rounded-lg font-ManropeRegular text-[14px] shadow-md cursor-pointer">
              <span className="w-[5px] h-[5px] bg-BrandPrimary rounded-full"></span>
              <span className="w-[5px] h-[5px] bg-BrandPrimary rounded-full"></span>
              <span className="w-[5px] h-[5px] bg-BrandPrimary rounded-full"></span>
              <span>More</span>
            </div>
            <button className="text-red-500 border border-red-500 flex items-center gap-2 rounded-lg font-ManropeRegular text-[14px] px-2 shadow-md">
              <Trash size={16} />
              <span>Clear chat</span>
            </button>
          </div>
        </div>
        {/* chats */}
        {conversation &&
          conversation.messages.map((chat) => {
            return (
              <div key={chat.id} className="flex gap-3 my-5 px-4">
                <img
                  src={conversation?.userAvatar}
                  alt="userAvatar"
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div>
                  <p className="bg-BrandGray100 text-[15px] text-BrandGray700 p-2 rounded-lg">
                    {chat.text}
                  </p>
                  <p className="font-ManropeRegular text-[12px] py-1 text-BrandGray600">
                    9:00am
                  </p>
                </div>
              </div>
            );
          })}

        {/* input box */}
        <div className="px-5 flex items-center h-[42px] justify-between absolute w-full bottom-5">
          <div className="border border-BrandGray400 p-2 rounded-lg w-[85%] flex justify-between items-center">
            <input
              type="text"
              placeholder="Write your message"
              className="outline-none font-ManropeRegular text-[14px] text-BrandGray800 w-[90%]"
            />
            <div className="flex gap-2 items-center cursor-pointer">
              <MdOutlineAttachment />
              <BsEmojiSmile />
            </div>
          </div>
          <span className="bg-BrandPrimary text-white rounded-lg h-full flex justify-center items-center px-3">
            <BiSend />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Messages;
