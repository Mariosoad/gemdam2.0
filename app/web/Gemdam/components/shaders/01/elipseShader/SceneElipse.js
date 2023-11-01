import { OrbitControls, Text3D, Tube } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { MathUtils, TubeGeometry } from "three";

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
            hover.current ? 0.85 : 0.4,
            0.02
        )) : (mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
            mesh.current.material.uniforms.u_intensity.value,
            hover.current ? 0.35 : 0.05,
            0.02
        ))
    });

    return (
        <group
            rotation-x={0.15}
            rotation-y={0.0}
        >
            <mesh
                ref={mesh}
                position={[isMobile ? -1.5 : 0, 1, -1]}
                rotation-y={0.78}
                rotation-x={0.0}
                rotation-z={0.0}
                scale={1.5}
                onPointerOver={() => (hover.current = true)}
                onPointerOut={() => (hover.current = false)}
                castShadow receiveShadow
            >
                <tetrahedronGeometry receiveShadow args={[isMobile ? 2.2 : 2.3, 1, 1]} />
                <shaderMaterial
                    color={"#2cddcf"}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                    wireframe={true}
                />
            </mesh>

            <mesh
                ref={mesh}
                position={[isMobile ? -1.5 : 0, -0.5, 0]}
                rotation-y={0.78}
                rotation-x={0.0}
                rotation-z={0.0}
                scale={1.5}
                onPointerOver={() => (hover.current = true)}
                onPointerOut={() => (hover.current = false)}
                castShadow receiveShadow
            >
                <tetrahedronGeometry receiveShadow args={[isMobile ? 2.2 : 2.3, 1, 1]} />
                <shaderMaterial
                    color={"#2cddcf"}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                    wireframe={true}
                />
            </mesh>

            <mesh
                ref={mesh}
                position={[isMobile ? -1.5 : 0, 0, 0.5]}
                rotation-y={0.78}
                rotation-x={0.0}
                rotation-z={0.0}
                scale={1.5}
                onPointerOver={() => (hover.current = true)}
                onPointerOut={() => (hover.current = false)}
                castShadow receiveShadow
            >
                <tetrahedronGeometry receiveShadow args={[isMobile ? 2.2 : 2.3, 1, 1]} />
                <shaderMaterial
                    color={"#2cddcf"}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                    wireframe={true}
                />
            </mesh>
            <mesh
                ref={mesh}
                position={[isMobile ? -1.5 : 0, 0.5, 1]}
                rotation-y={0.78}
                rotation-x={0.0}
                rotation-z={0.0}
                scale={1.5}
                onPointerOver={() => (hover.current = true)}
                onPointerOut={() => (hover.current = false)}
                castShadow receiveShadow
            >
                <tetrahedronGeometry receiveShadow args={[isMobile ? 2.2 : 2.3, 1, 1]} />
                <shaderMaterial
                    color={"#2cddcf"}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                    wireframe={true}
                />
            </mesh>

            <mesh
                ref={mesh}
                position={[isMobile ? -1.5 : 0, 1, -14]}
                rotation-y={0.78}
                rotation-x={0.0}
                rotation-z={0.0}
                scale={1.5}
                onPointerOver={() => (hover.current = true)}
                onPointerOut={() => (hover.current = false)}
                castShadow receiveShadow
            >
                <tetrahedronGeometry receiveShadow args={[isMobile ? 2.2 : 1.0, 1, 1]} />
                <shaderMaterial
                    color={"#2cddcf"}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                    wireframe={false}
                />
            </mesh>






            {/* <mesh
                ref={mesh}
                position={isMobile ? [1.8, 2.0, 1.4] : [2.4, 2.2, 2.4]}
                scale={1.0}
                rotation-y={0.5}
                rotation-x={0.6}
                rotation-z={0.2}
            >
                <tetrahedronGeometry receiveShadow args={[isMobile ? 2.3 : 0.8, 1, 2]} />
                <shaderMaterial
                    color={"#2cddcf"}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                    wireframe={true}
                />
            </mesh>
            <mesh
                ref={mesh}
                position={isMobile ? [1.8, -2.0, 1.2] : [3.4, -1.5, 1.2]}
                scale={1.0}
                rotation-y={0.1}
                rotation-x={0.5}
                rotation-z={0.5}
            >
                <tetrahedronGeometry receiveShadow args={[isMobile ? 2.3 : 0.6, 1, 2]} />
                <shaderMaterial
                    color={"#2cddcf"}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                    wireframe={true}
                />
            </mesh> */}
        </group>
    );
};

const Scene = () => {

    return (
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}
            colorManagement
            shadowMap
        >
            {/* <OrbitControls /> */}
            <Blob />
            <fog attach="fog" args={["black", 0, 40]} />
            <ambientLight color={"#2cddcf"} intensity={1.0} />
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
