
import React, { useRef } from 'react';
import { useFrame, extend } from 'react-three-fiber';
import * as THREE from 'three';
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

const Constellation = () => {
    const materialRef = useRef();

    useFrame(({ clock }) => {
        materialRef.current.uniforms.time.value = clock.getElapsedTime();
    });

    const uniforms = useMemo(
        () => ({
            u_intensity: {
                value: 0.2,
            },
            u_time: {
                value: 0.0,
            },
        }),
        []
    );

    return (
        <points>
            <bufferGeometry>
                {/* Define las posiciones de las partículas aquí */}
                <bufferAttribute
                    attachObject={['attributes', 'position']}
                    count={}
                    array={[0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]}
                    itemSize={3}
                />
            </bufferGeometry>
            <shaderMaterial
                ref={materialRef}
                args={[ConstellationShader]}
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                transparent
            />
        </points>
    );
};

export default Constellation;