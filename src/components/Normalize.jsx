import React from "react";
import { Shaders, Node, GLSL } from "gl-react";

const shaders = Shaders.create({
  normalize: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D children, colorScale;
float greyscale (vec3 c) { return 0.2125 * c.r + 0.7154 * c.g + 0.0721 * c.b; }
void main() {
  vec4 original = texture2D(children, uv);
  vec4 newcolor = texture2D(colorScale, vec2(greyscale(original.rgb), 0.5));
  gl_FragColor = vec4(newcolor.rgb, original.a * newcolor.a);
}`
  }
});

export const Normalize = ({ children, colorScale, interpolation }) => (
  <Node
    shader={shaders.normalize}
    uniformsOptions={{ colorScale: { interpolation } }}
    uniforms={{ colorScale, children }}
  />
);
