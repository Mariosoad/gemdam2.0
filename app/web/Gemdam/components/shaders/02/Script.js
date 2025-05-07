import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { vertexShader, fragmentShader } from "./shader/shaders";


const MovingPlane = () => {
  const mesh = useRef();
  const uniforms = useRef({ u_time: { value: 0.0 } });

  useFrame((state) => {
    uniforms.current.u_time.value = state.clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} rotation={[0, Math.PI / 4, -0.5]} scale={4.5}>
      <planeGeometry args={[8, 8, 60, 60]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms.current}
        wireframe
      />
    </mesh>
  );
};

const ScriptShad = () => {
  return (
    <Canvas camera={{ position: [1.0, -0.1, 1.0] }}>
      <MovingPlane />
    </Canvas>
  );
};

export default ScriptShad;
