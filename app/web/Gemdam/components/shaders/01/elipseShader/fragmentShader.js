const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity;
    vec3 identityColor = vec3(44.0 / 255.0, 221.0 / 255.0, 207.0 / 255.0);
    vec3 color = identityColor + (vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0) * (1.0 - identityColor));
  
    gl_FragColor = vec4(color, 1.0);
}
`
export default fragmentShader;