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
    const mesh1 = useRef();

    const hover = useRef(false);
    const isMobile = useMediaQuery({ query: '(max-width: 980px)' });

    const uniforms1 = useMemo(
        () => ({
            u_intensity: {
                value: 0.1,
            },
            u_time: {
                value: 0.0,
            },
        }),
        []
    );

    const uniforms2 = useMemo(
        () => ({
            u_intensity: {
                value: 0.1, // Valor inicial diferente si lo deseas
            },
            u_time: {
                value: 0.0, // Valor inicial diferente si lo deseas
            },
        }),
        []
    );

    useFrame((state) => {
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

        !isMobile ? (uniforms1.u_intensity.value = MathUtils.lerp(mesh.current.material.uniforms.u_intensity.value, 2.2, 0.5)) : (uniforms1.u_intensity.value = MathUtils.lerp(mesh.current.material.uniforms.u_intensity.value, hover.current ? 0.45 : 0.85, 0.02));
    });

    // ... similar configuración para mesh1 usando uniforms2

    useFrame((state) => {
        const { clock } = state;
        // Accede a los uniforms de shaderMaterial, no de mesh.current.material
        uniforms2.u_time.value = 0.4 * clock.getElapsedTime();

        !isMobile ? (uniforms2.u_intensity.value = MathUtils.lerp(uniforms2.u_intensity.value, 1.5, 0.5)) : (uniforms2.u_intensity.value = MathUtils.lerp(uniforms2.u_intensity.value, hover.current ? 0.45 : 0.85, 0.02));
    });

    return (
        <>
            <group

            >
                <mesh ref={mesh} position={[-1, 1, 0]} scale={0.5} >
                    <tetrahedronGeometry receiveShadow args={[2, 1, 4]} />
                    <shaderMaterial
                        color={"#2cddcf"}
                        fragmentShader={fragmentShader}
                        vertexShader={vertexShader}
                        uniforms={uniforms1} // Usa uniforms1 para el primer mesh
                        wireframe={false}
                    />
                </mesh>
                <mesh ref={mesh} rotation-y={0.72} rotation-x={-0.35} position={[-3, 3, 0]} scale={0.5} >
                    <tetrahedronGeometry receiveShadow args={[2, 1, 4]} />
                    <shaderMaterial
                        color={"#2cddcf"}
                        fragmentShader={fragmentShader}
                        vertexShader={vertexShader}
                        uniforms={uniforms1} // Usa uniforms1 para el primer mesh
                        wireframe={false}
                    />
                </mesh>
                <mesh ref={mesh} rotation-y={4.72} rotation-x={-6.35} position={[0, 3, 0]} scale={0.5} >
                    <tetrahedronGeometry receiveShadow args={[2, 1, 4]} />
                    <shaderMaterial
                        color={"#2cddcf"}
                        fragmentShader={fragmentShader}
                        vertexShader={vertexShader}
                        uniforms={uniforms1} // Usa uniforms1 para el primer mesh
                        wireframe={false}
                    />
                </mesh>

                
                <mesh
                    ref={mesh}
                    rotation-y={1.7} rotation-x={-2.35}
                    position={[1, -1, 0]}
                    scale={1.2}
                    roughness={0.1}
                    metalness={0.1}
                    castShadow receiveShadow
                >
                    <tetrahedronGeometry receiveShadow args={[2, 1, 4]} />
                    <shaderMaterial
                        color={"#2cddcf"}
                        fragmentShader={fragmentShader}
                        vertexShader={vertexShader}
                        uniforms={uniforms1} // Usa uniforms1 para el primer mesh
                        wireframe={true}
                    />
                </mesh>
                <mesh
                    ref={mesh1}
                    rotation-y={-2.5} rotation-x={3.7}
                >
                    <tetrahedronGeometry args={[4, 1, 3]} />
                    <shaderMaterial
                        color={"#2cddcf"}
                        fragmentShader={fragmentShader}
                        vertexShader={vertexShader}
                        uniforms={uniforms2} // Usa uniforms2 para el segundo mesh
                        wireframe={true}
                    />
                </mesh>
            </group>
        </>
    );
};

const Scene = () => {
    return (
        <Canvas camera={{ position: [0.0, 0.0, 9.0] }}
            colorManagement
            shadowMap
        >
            <Blob />
            <OrbitControls />
        </Canvas>
    );
};

export default Scene;
