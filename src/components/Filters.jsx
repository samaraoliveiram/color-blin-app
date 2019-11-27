import React from "react";
import { Square } from "./Square";
import { Typography } from "antd";

const { Text } = Typography;

export const Filters = ({ setValue, options }) => {
  return (
    <>
      {options.map(({ name, value }) => (
        <div key={value} onClick={() => setValue(value)}>
          <Square />
          <Text strong>{name}</Text>
        </div>
      ))}
    </>
  );
};
