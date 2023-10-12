const fragmentShader = `
void main() {
  vec3 color = vec3(44.0 / 255.0, 221.0 / 255.0, 207.0 / 255.0);;
  gl_FragColor = vec4(color, 1.0);
}
`

export default fragmentShader
