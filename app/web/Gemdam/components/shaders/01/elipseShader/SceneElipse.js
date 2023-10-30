import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { MathUtils } from "three";

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

import { useMediaQuery } from 'react-responsive'

const Blob = () => {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    const hover = useRef(false);
    const isMobile = useMediaQuery({ query: '(max-width: 980px)' })

    const uniforms = useMemo(
        () => ({
            u_intensity: {
                value: 0.3,
            },
            u_time: {
                value: 0.0,
            },
        }),
        []
    );

    useFrame((state) => {
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

        !isMobile ? (mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(mesh.current.material.uniforms.u_intensity.value,
            hover.current ? 0.85 : 0.55,
            0.02
        )) : (mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
            mesh.current.material.uniforms.u_intensity.value,
            hover.current ? 0.45 : 0.85,
            0.02
        ))
    });

    return (
        <mesh
            ref={mesh}
            position={[0, 0, 0]}
            scale={1.5}
            onPointerOver={() => (hover.current = true)}
            onPointerOut={() => (hover.current = false)}
            roughness={0.1}
            metalness={0.1}
            castShadow receiveShadow
        >
            <icosahedronGeometry receiveShadow args={[isMobile ? 2.3 : 2.2, 40]} />
            <shaderMaterial
                color={"#2cddcf"}
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                wireframe={false}
            />
        </mesh>
    );
};

const Scene = () => {

    return (
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}
            colorManagement
            shadowMap
        >
            <Blob />
            <fog attach="fog" args={["black", 0, 40]} />
            <ambientLight color={"#2cddcf"} intensity={0.1} />
            <directionalLight
                color={"#2cddcf"}
                intensity={1}
                castShadow
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
            />
        </Canvas>
    );
};

export default Scene;
