import React, { useRef, useMemo } from 'react';
import { Center, Decal, GradientTexture, OrbitControls, SpotLight, Text3D } from "@react-three/drei";
import { Canvas, useFrame, useThree } from '@react-three/fiber';

import vertexShader from "./shader/vertexShader.glsl";
import fragmentShader from "./shader/fragmentShader.glsl";

const MovingPlane = () => {
  
  const mesh = useRef();

  return (
    <mesh ref={mesh} position={[0.1, 0, -0.5]} rotation={[1, Math.PI / 3.5, -0.8]} scale={0.6}>
      <Center rotation={[-0.4, 3.0, 0]}>
        <Text3D
          curveSegments={64}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={3.5}
          font="/Lexend_Bold.json">
          {`G`}
          <meshDepthMaterial
            // wireframe
            bevelEnabled
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
          // uniforms={uniforms}
          />
        </Text3D>
      </Center>
    </mesh>
  );
};

const ScriptShad = () => {
  return (
    <Canvas camera={{ position: [1.0, -0.1, 1.0] }}>
      <MovingPlane />
      {/* <OrbitControls /> */}
      <SpotLight
        distance={5}
        angle={1}
        attenuation={6}
        anglePower={5}
      />
    </Canvas>
  );
};

export default ScriptShad;
