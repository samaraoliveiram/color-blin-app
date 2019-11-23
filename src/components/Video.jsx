import React, { useEffect, useRef } from "react";
import raf from "raf";

export const VideoContext = React.createContext();

export const Video = ({ onFrame, ...rest }) => {
  const video = useRef();

  useEffect(() => {
    let handle;
    let lastTime;

    const loop = () => {
      handle = raf(loop);
      if (!video.current) return;
      const currentTime = video.current.currentTime;
      // Optimization that only call onFrame if time changes
      if (currentTime !== lastTime) {
        lastTime = currentTime;
        onFrame(currentTime);
      }
    };
    handle = raf(loop);

    return () => raf.cancel(handle);
  }, [onFrame]);

  return (
    <VideoContext.Provider value={video}>
      <video {...rest} ref={video} />
    </VideoContext.Provider>
  );
};
