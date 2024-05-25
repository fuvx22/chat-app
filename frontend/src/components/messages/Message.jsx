import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime"

function Message({ message }) {
  const {authUser} = useAuthContext();
  const { selectedConversation } = useConversation();
  const formMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = formMe ? "chat-end" : "chat-start";
  const profilePic = formMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = formMe ? "bg-blue-500" : "";
    
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={profilePic}
            alt=""
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
      <div className="chat-footer text-white opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
}

export default Message;
