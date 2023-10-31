import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export default function Modelito(props) {
    const { nodes } = useGLTF("/wooden_barrel_game_ready_asset.glb");

    // Usa el material de wireframe proporcionado por drei
    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, // Color del wireframe
        wireframe: true,
    });

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        geometry={nodes.defaultMaterial.geometry}
                        rotation={[-Math.PI, 0, -Math.PI]}
                        scale={[-1, 1, 1]}
                        material={wireframeMaterial} // Aplicar el material de wireframe
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/wooden_barrel_game_ready_asset.glb");
