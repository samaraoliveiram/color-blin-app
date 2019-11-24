import React from "react";
import { Shaders, Node, GLSL } from "gl-react";

const shaders = Shaders.create({
  normalize: {
    frag: GLSL`
precision mediump float;

varying vec2 uv;

uniform sampler2D children;
uniform int cbtype;

void main(void) {
  vec4 color = texture2D(children, uv);

  //No change, skip the rest
  if (cbtype == 0) {
    gl_FragColor = color;
    return;
  }

  // RGB to LMS matrix conversion
  const mat3 RGBLMS = mat3(  
    17.8824, 43.5161, 4.11935, 
    3.45565, 27.1554, 3.86714, 
    0.0299566, 0.184309, 1.46709 
  );

  vec3 LMS = color.rgb * RGBLMS;
  vec3 lms = vec3(0.0,0.0,0.0);

  //Protanope
  if (cbtype == 1) {
    lms = vec3(      
      (2.02344 * LMS.g) + (-2.52581 * LMS.b), 
      LMS.g, 
      LMS.b 
    );
  }

  //Deuteranope
  if (cbtype == 2) {
    lms = vec3(      
      LMS.r, 
      (0.494207 * LMS.r) + (1.24827 * LMS.b), 
      LMS.b 
    );
  }

  //Tritanope
  if (cbtype == 3) {
    lms = vec3(      
      LMS.r, 
      LMS.g, 
      (-0.395913 * LMS.r) + (0.801109 * LMS.g) 
    );
  }

  // LMS to RGB matrix operation
  const mat3 LMSRGB = mat3(     
    0.0809444479, -0.130504409, 0.116721066, 
    -0.0102485335, 0.0540193266, -0.113614708, 
    -0.000365296938, -0.00412161469, 0.693511405 
  );

  vec3 RGB = lms * LMSRGB;

  // Colour shift
  // values may go over 1.0 but will get automatically clamped on output 
  RGB.rgb = color.rgb - RGB.rgb;
  RGB.g = 0.7*RGB.r + RGB.g;
  RGB.b = 0.7*RGB.r + RGB.b;
  color.rgb = color.rgb + RGB.rgb;

  //Output
  gl_FragColor = color;
}
`
  }
});

const Modes = {
  NORMAL: 0,
  PROTANOPE: 1,
  DEUTERANOPE: 2,
  TRITANOPE: 3
};

export const Normalize = ({ children }) => (
  <Node
    shader={shaders.normalize}
    uniforms={{ children, cbtype: Modes.TRITANOPE }}
  />
);

// shader van damme https://www.shadertoy.com/view/XdtyzM
