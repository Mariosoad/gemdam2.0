const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 1.0 * vDisplacement * u_intensity;
    vec3 white = vec3(1.0, 1.0, 1.0); // Color blanco
    vec3 black = vec3(0.0 / 255.0, 0.0 / 255.0, 0.0 / 255.0); // Color turquesa
    vec3 turquesa = vec3(44.0 / 255.0, 221.0 / 255.0, 207.0 / 255.0); // Color turquesa
    vec3 color = mix(white, turquesa, 1.0); // Mezcla de blanco y turquesa (ajusta el valor 0.5 según prefieras más blanco o turquesa)

    color += (vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0) * (1.0 - white));
  
    gl_FragColor = vec4(color, 0.55);
}
`
export default fragmentShader;