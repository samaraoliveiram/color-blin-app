import React, { useState, useEffect, useRef } from "react";

const Camera = () => {
  //const [cameras, setCameras] = useState([]);
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    (async () => {
      const devices = await window.navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices
        .filter(device => device.kind === "videoinput")
        .map((device, index) => ({
          id: device.deviceId,
          label: device.label || "Video" + index + 1
        }));

      const hasOnlyOneCamera = videoDevices.length === 1;
      const hasOlderSpec = !("getSettings" in MediaStreamTrack.prototype);

      let constraints;

      if (hasOnlyOneCamera || hasOlderSpec) {
        constraints = {
          deviceId: {
            exact: videoDevices[0].id
          }
        };
      } else {
        constraints = {
          facingMode: {
            exact: "environment"
          }
        };
      }

      let stream = await navigator.mediaDevices.getUserMedia({
        video: constraints
      });
      setStream(stream);
    })();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (stream && video.srcObject !== stream) {
      video.srcObject = stream;
      video.onloadedmetadata = function(e) {
        video.play();
      };
    }
  }, [stream]);

  return <video playsInline ref={videoRef} />;
};

export default Camera;
