import "./landing.css";
import React from "react";

import { Button, Typography } from "antd";

const { Paragraph } = Typography;
const Callout = () => (
  <Paragraph className="callout__text">
    Daltonismo é uma condição que afeta 6% da pessoas. Se você é daltônico, use
    esse app para evidenciar a diferenças entre cores que não enxergaFaça o
    teste de daltonismo, ou veja
  </Paragraph>
);

export default () => {
  return (
    <div className="callout">
      <div>
        <h1 className="callout__title">Color Blind App</h1>
        <Callout />
        <div className="callout__btns">
          <a href="/camera">
            <Button icon="camera" type="primary">
              Use a camera
            </Button>
          </a>
          <a href="/teste">
            <Button icon="form">Faça o teste</Button>
          </a>
        </div>
      </div>
      <img
        className="callout__img"
        alt="Floating girl illustration"
        src="/float.svg"
      />
    </div>
  );
};
