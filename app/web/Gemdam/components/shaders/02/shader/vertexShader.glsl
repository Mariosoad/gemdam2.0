const vertexShader = `
uniform float u_time;

varying vec2 vUv;

void main()
{

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(modelPosition.x * 8.0 + u_time * 0.5) * 0.4;
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  vUv = uv;

  // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  // vUv = uv;
}

`

export default vertexShader
