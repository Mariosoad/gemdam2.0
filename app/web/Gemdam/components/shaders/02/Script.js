import React, { useRef, useMemo } from 'react';
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber';

import vertexShader from "./shader/vertexShader.glsl";
import fragmentShader from "./shader/fragmentShader.glsl";

const MovingPlane = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }), []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} rotation={[0, Math.PI / 4, -0.5]} scale={1.5}>
      <planeGeometry args={[10, 8, 7, 7]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe
      />
    </mesh>
  );
};

const ScriptShad = () => {
  return (
    <Canvas camera={{ position: [1.0, -0.1, 1.0] }}>
      <MovingPlane />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default ScriptShad;
