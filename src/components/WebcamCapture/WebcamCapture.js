import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import "./WebcamCapture.css";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

function WebcamCapture() {
  const webcamRef = useRef();
  const [image, setImage] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    console.log(imageSrc);
  }, [webcamRef]);

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

      <RadioButtonUncheckedIcon
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />

      <img src={image} alt="ss" />
    </div>
  );
}

export default WebcamCapture;
