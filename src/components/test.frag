varying vec2 v_texCoord;
varying vec4 v_color;   
uniform sampler2D children; 

// blindnessFilterData
const mat3 RGBtoOpponentMat = mat3(0.2814, -0.0971, -0.0930, 0.6938, 0.1458,-0.2529, 0.0638, -0.0250, 0.4665);
const mat3 OpponentToRGBMat = mat3(1.1677, 0.9014, 0.7214, -6.4315, 2.5970, 0.1257, -0.5044, 0.0159, 2.0517);

void main()           
{                    
  vec4 fragColor = texture2D(children, v_texCoord);
  fragColor *= v_color;                             

  // blindnessFilterCode +
  vec3 opponentColor = RGBtoOpponentMat * vec3(fragColor.r, fragColor.g, fragColor.b);
  opponentColor.x -= opponentColor.y * 1.5;

  vec3 rgbColor = OpponentToRGBMat * opponentColor;
  fragColor = vec4(rgbColor.r, rgbColor.g, rgbColor.b, fragColor.a);

  gl_FragColor = fragColor;
}                         