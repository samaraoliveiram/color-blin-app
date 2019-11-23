precision mediump float;
uniform sampler2D tex;
uniform int index = 0;
void main(void) { vec4 c = texture2D(tex, gl_TexCoord[0].st);
mat3 m[9] = 
{
	// normal
	mat3(
		1.0    , 0.0    , 0.0  ,
		0.0    , 1.0    , 0.0  ,
		0.0    , 0.0    , 1.0
	),
	// protanopia
	mat3(
		0.56667, 0.43333, 0.0    ,
		0.55833, 0.44167, 0.0    ,
		0.0    , 0.24167, 0.75833
	),
	// protanomaly
	mat3(
		0.81667, 0.18333, 0.0    ,
		0.33333, 0.66667, 0.0    ,
		0.0    , 0.125  , 0.875
	),
	// deuteranopia
	mat3(
		0.625  , 0.375  , 0.0    ,
		0.7    , 0.3    , 0.0    ,
		0.0    , 0.3    , 0.7
	),
	// deuteranomaly
	mat3(
		0.8    , 0.2    , 0.0    ,
		0.25833, 0.74167, 0.0    ,
		0.0    , 0.14167, 0.85833
	),
	// tritanopia
	mat3(
		0.95   , 0.05   , 0.0    ,
		0.0    , 0.43333, 0.56667,
		0.0    , 0.475  , 0.525
	),
	// tritanomaly
	mat3(
		0.96667, 0.03333, 0.0    ,
		0.0    , 0.73333, 0.26667,
		0.0    , 0.18333, 0.81667
	),
	// achromatopsia
	mat3(
		0.299  , 0.587  , 0.114  ,
		0.299  , 0.587  , 0.114  ,
		0.299  , 0.587  , 0.114
	),
	// achromatomaly
	mat3(
		0.618  , 0.320  , 0.062  ,
		0.163  , 0.775  , 0.062  ,
		0.163  , 0.320  , 0.516
	)
};
vec3 c2 = {c.r, c.g, c.b};
c2 *= m[index];
gl_FragColor = vec4( c2.x , c2.y, c2.z, 1.0 );
}