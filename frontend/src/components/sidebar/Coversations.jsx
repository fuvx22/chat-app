import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";

const Coversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((converstaion, idx) => (
        <Conversation
          key={converstaion._id}
          conversation={converstaion}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading && <span className="loading loading-spinner"></span>}
    </div>
  );
};

export default Coversations;
