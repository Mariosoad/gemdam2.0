import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'lil-gui';
import { ShaderMaterial, Color, PlaneGeometry, BufferAttribute, TextureLoader } from 'three';

// Extend React Three Fiber to include OrbitControls
extend({ OrbitControls });

const Scene = () => {
  const canvasRef = useRef();

  // Debug
  const gui = new dat.GUI();

  // Textures
  const textureLoader = new TextureLoader();
  const flagTexture = textureLoader.load('/textures/flag-french.jpg');

  // Geometry
  const geometry = new PlaneGeometry(1, 1, 32, 32);

  const count = geometry.attributes.position.count;
  const randoms = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    randoms[i] = Math.random();
  }

  geometry.setAttribute('aRandom', new BufferAttribute(randoms, 1));

  // Material
  const material = new ShaderMaterial({
    vertexShader: testVertexShader, // Make sure to import your shaders
    fragmentShader: testFragmentShader,
    uniforms: {
      uFrequency: { value: new THREE.Vector2(10, 5) },
      uTime: { value: 0 },
      uColor: { value: new Color('orange') },
      uTexture: { value: flagTexture },
    },
  });

  gui.add(material.uniforms.uFrequency.value, 'x').min(0).max(20).step(0.01).name('frequencyX');
  gui.add(material.uniforms.uFrequency.value, 'y').min(0).max(20).step(0.01).name('frequencyY');

  // Animation logic
  useFrame((state, delta) => {
    // Update material
    material.uniforms.uTime.value += delta;

    // Render
    state.gl.render(state.scene, state.camera);
  });

  return (
    <>
      <mesh geometry={geometry} material={material} scale={[1, 2 / 3, 1]} />
      <orbitControls args={[state.camera, canvasRef.current]} enableDamping />
    </>
  );
};

const scriptShad = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default scriptShad;
