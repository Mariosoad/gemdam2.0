// import { useRef } from "react";
// import { useFrame } from "react-three-fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { ModelGemdam } from "./model";
gsap.registerPlugin(ScrollTrigger);

const LogoGemdam = () => {

    return (
        <>
            <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                minPolarAngle={Math.PI / 2} 
                maxPolarAngle={Math.PI / 2}
            />
            <PerspectiveCamera fov={45} near={.1} far={10000} makeDefault position={[0, 0, 10]} />
            <Environment preset="city" />
            {/* <axesHelper args={[500]} /> */}
            <ModelGemdam />
      </>
    );
}

export default LogoGemdam