import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectSelectedImage } from "../../../features/appSlice";
import "./ChatView.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function ChatView() {
  const selectedImage = useSelector(selectSelectedImage);
  const history = useHistory();

  const exit = () => {
    history.push("/chats");
  };

  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
  });

  return (
    <div className="chatView">
      <img src={selectedImage} alt="selected" onClick={exit} />

      <div className="chatView__timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={[
            ["#004777", 0.33],
            ["#f7b801", 0.33],
            ["#a30000", 0.33],
          ]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }

            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default ChatView;
