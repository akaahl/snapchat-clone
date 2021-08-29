import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Chats.css";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { auth, db } from "../../firebase/firebase";
import Chat from "./Chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/appSlice";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { useHistory } from "react-router";
import { resetCameraImage } from "../../features/cameraSlice";

function Chats() {
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const takeSnap = () => {
    dispatch(resetCameraImage());
    history.push("/");
  };

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
        <Avatar
          src={user.profilePic}
          className="chats__avatar"
          onClick={() => auth.signOut()}
        />

        <div className="chats__search">
          <SearchIcon className="chats__chatIcon" />
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

      <RadioButtonUncheckedIcon
        className="chats__takePicIcon"
        onClick={takeSnap}
        fontSize="large"
      />
    </div>
  );
}

export default Chats;
