import { PrettyChatWindow } from "react-chat-engine-pretty";
import { useEffect, useState } from "react";

const ChatsPage = (props) => {
  const [chatConfig, setChatConfig] = useState(null);

  useEffect(() => {
    if (props.user) {
      const config = {
        projectID: "", // Replace with your Chat Engine project ID
        userName: props.user.username,
        userSecret: props.user.secret,
      };

      setChatConfig(config);
    }
  }, [props.user]);

  return (
    <div className="background">
      {chatConfig && (
        <PrettyChatWindow
          {...chatConfig}
          onChatCreated={(chat) => console.log("Chat created:", chat)}
        />
      )}
    </div>
  );
};

export default ChatsPage;
