import React from "react";
import { Slider } from "antd";

export const Intensity = ({ value, setValue }) => {
  return (
    <Slider
      min={0}
      max={1}
      onChange={setValue}
      value={typeof value === "number" ? value : 0}
      step={0.01}
    />
  );
};
