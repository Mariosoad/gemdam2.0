import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
// import { useFrame } from 'react-three/fiber';

export function ModelGemdam(props) {
  const { nodes, materials } = useGLTF('/gemdamlogo.glb')

  const modelRef = useRef();
  // useFrame(() => {
  //     if (modelRef.current) {
  //       modelRef.current.rotation.y += 0.005;
  //     }
  //   });

  return (
        <group ref={modelRef}  scale={[4,4,4]} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Line004.geometry}
                material={nodes.Line004.material}
                // position={[0.556, 0.338, 0]}
                position={[0.036, 0.338, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.025}
            >
                <meshStandardMaterial color={"#2cddcf"} wireframe/>
            </mesh>
        </group>
  )
}

useGLTF.preload('/gemdamlogo.glb')
