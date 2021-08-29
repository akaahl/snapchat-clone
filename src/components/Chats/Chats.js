import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Chats.css";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { db } from "../../firebase/firebase";
import Chat from "./Chat/Chat";

function Chats() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar className="chats__avatar" />

        <div className="chats__search">
          <SearchIcon />
          <input type="text" placeholder="Friends" />
        </div>

        <ChatBubbleIcon className="chats__chatIcon" />
      </div>

      <div className="chats__posts">
        {posts.map(
          ({
            id,
            data: { profilePic, username, timestamp, imageUrl, read },
          }) => (
            <Chat
              id={id}
              key={id}
              username={username}
              imageUrl={imageUrl}
              timestamp={timestamp}
              read={read}
              profilePic={profilePic}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Chats;
