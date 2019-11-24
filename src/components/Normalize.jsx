import React from "react";
import { Shaders, Node } from "gl-react";
import { frag } from "./daltonize-shader";

const shaders = Shaders.create({
  normalize: { frag }
});

const Modes = {
  NORMAL: 0,
  PROTANOPE: 1,
  DEUTERANOPE: 2,
  TRITANOPE: 3
};

export const Normalize = ({ children, intensity }) => (
  <Node
    shader={shaders.normalize}
    uniforms={{ children, cbtype: Modes.PROTANOPE, intensity }}
  />
);
