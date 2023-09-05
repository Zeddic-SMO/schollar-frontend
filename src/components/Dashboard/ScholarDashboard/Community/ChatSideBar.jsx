const ChatSideBar = (prop) => {
  const { chat, setConversation } = prop;

  return (
    <div
      className="flex justify-between items-center h-[70px] border-b border-BrandGray400 px-5 cursor-pointer hover:bg-white"
      onClick={() => setConversation(chat)}
    >
      <div className="flex items-center gap-3">
        <figure>
          <img
            src={chat.userAvatar}
            alt="user"
            className="w-[40px] h-[40px] rounded-full"
          />
        </figure>
        <div>
          <h5 className="font-ManropeBold text-[14px]">{chat.userName}</h5>
          <p className="font-ManropeRegular text-[12px]">
            {chat.messages[0].text}
          </p>
        </div>
      </div>
      <div className="text-[12px] font-ManropeSemiBold">Date</div>
    </div>
  );
};

export default ChatSideBar;
