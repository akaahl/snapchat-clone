import React, { useRef } from "react";
import Webcam from "react-webcam";
import "./WebcamCapture.css";

function WebcamCapture() {
  const webcamRef = useRef();

  const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
  };

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
    </div>
  );
}

export default WebcamCapture;
