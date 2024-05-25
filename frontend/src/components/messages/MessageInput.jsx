import {useState} from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

function MessageInput() {

  const [message, setMessages] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessages("");
  };


  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          value={message}
          onChange={(e) => setMessages(e.target.value)}
          type="text"
          className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Type a message..."
        />
        <button disabled={loading} type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
          <BsSend className="text-gray-300" />
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
