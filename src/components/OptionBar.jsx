import React from "react";
import { Icon } from "antd";

export const OptionBar = ({ setOption, options, children }) => {
  return (
    <>
      {children}
      {options.map(({ value, icon }) => (
        <Icon
          key={value}
          type={icon}
          onClick={() => setOption(value)}
          style={{ fontSize: "36px", color: "#08c" }}
        />
      ))}
    </>
  );
};
