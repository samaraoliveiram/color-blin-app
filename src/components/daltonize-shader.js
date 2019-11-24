import { GLSL } from "gl-react";

export const frag = GLSL`
precision mediump float;

varying vec2 uv;

uniform sampler2D children;
uniform int cbtype;
uniform float intensity;

void main(void) {
  // LMS to RGB matrix operation
  const mat3 LMSRGB = mat3(     
    0.0809444479, -0.130504409, 0.116721066, 
    -0.0102485335, 0.0540193266, -0.113614708, 
    -0.000365296938, -0.00412161469, 0.693511405 
  );

  // RGB to LMS matrix conversion
  const mat3 RGBLMS = mat3(  
    17.8824, 43.5161, 4.11935, 
    3.45565, 27.1554, 3.86714, 
    0.0299566, 0.184309, 1.46709 
  );


  vec4 color = texture2D(children, uv);
  vec3 LMS = color.rgb * RGBLMS;

  //No change, skip the rest
  if (cbtype == 0) {
    gl_FragColor = color;
    return;
  }

  mat3 def_lms = mat3(
		1.0    , 0.0    , 0.0  ,
		0.0    , 1.0    , 0.0  ,
		0.0    , 0.0    , 1.0
	);

 //Protanope
  if (cbtype == 1) {
    def_lms = mat3(
      0, 2.02344, -2.52581,
      0, 1, 0,
      0, 0, 1
    );
  }

  // //Deuteranope
  // if (cbtype == 2) {
  //   def_lms = vec3(      
  //     LMS.r, 
  //     (0.494207 * LMS.r) + (1.24827 * LMS.b), 
  //     LMS.b 
  //   );
  // }

  // //Tritanope
  // if (cbtype == 3) {
  //   def_lms = vec3(      
  //     LMS.r, 
  //     LMS.g, 
  //     (-0.395913 * LMS.r) + (0.801109 * LMS.g) 
  //   );
  // }


  vec3 original_lms = color.rgb * RGBLMS;
  vec3 sim_lms = original_lms *  def_lms;
  vec3 sim_rgb = sim_lms * LMSRGB;

  mat3 err2mod = mat3(
    0, 0, 0,
    0.7, 1, 0,
    0.7, 0, 1
  );

  // rgb - sim_rgb contains the color information that dichromats
  // cannot see. err2mod rotates this to a part of the spectrum that
  // they can see.
  vec3 ratio = vec3(intensity, intensity, intensity);
  vec3 color_diff = color.rgb - sim_rgb;
  vec3 err = color_diff * err2mod;
  vec3 daltonize = (err * ratio + color.rgb);

  //Output
  gl_FragColor = vec4(daltonize, 1);
} 
`;
