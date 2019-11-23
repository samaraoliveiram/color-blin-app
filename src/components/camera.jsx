import React, { useEffect } from "react";
import { VideoContext } from "./Video";

const WebCamSourceR = ({ videoRef }) => {
  useEffect(() => {
    navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });
  }, [videoRef]);
  return null;
};

export const Camera = () => (
  <VideoContext.Consumer>
    {videoRef => <WebCamSourceR videoRef={videoRef} />}
  </VideoContext.Consumer>
);
