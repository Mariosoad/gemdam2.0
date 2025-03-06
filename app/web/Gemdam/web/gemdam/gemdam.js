'use client'

import React, { useEffect, useRef, useState } from 'react'
import Shader01 from '../../components/shaders/01/shader01';
import LogoGemdam from '../../components/models/LogoGemdam/logoGemdam';
// import gsap from 'gsap';
import { Canvas } from '@react-three/fiber'
import { createXRStore, IfInSessionMode, noEvents, PointerEvents, useXRAnchor, useXRInputSourceEvent, useXRInputSourceState, useXRPlanes, XR, XRDomOverlay, XRPlaneModel, XRSpace } from '@react-three/xr'
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OrbitHandles, TransformHandles } from '@react-three/handle'
import { Mesh } from 'three';
import "./gemdam.css"

// gsap.registerPlugin(ScrollTrigger);
const store = createXRStore()

export default function Gemdam(props) {

    const ConsoleTextEffect = () => {
        const words = ['AR', 'VR', 'VR', 'WEB', 'WEB'];
        const [visible, setVisible] = useState(true);
        const [letterCount, setLetterCount] = useState(1);
        const [x, setX] = useState(1);
        const [waiting, setWaiting] = useState(false);
        const [currentWordIndex, setCurrentWordIndex] = useState(0);

        useEffect(() => {
            const interval1 = setInterval(() => {
                if (letterCount === 0 && !waiting) {
                    setWaiting(true);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                    setX(1);
                    setLetterCount(letterCount + x);
                    setWaiting(false);
                } else if (letterCount === words[0].length + 1 && !waiting) {
                    setWaiting(true);
                    setTimeout(() => {
                        setX(-1);
                        setLetterCount(letterCount + x);
                        setWaiting(false);
                    }, 800);
                } else if (!waiting) {
                    setLetterCount(letterCount + x);
                }
            }, 110);

            const interval2 = setInterval(() => {
                setVisible((prevVisible) => !prevVisible);
            }, 400);

            return () => {
                clearInterval(interval1);
                clearInterval(interval2);
            };
        }, [letterCount, waiting, x]);

        return (
            <div className="child-container-tittle">
                <h1 className="console-text" style={{ color: "#2cddcf" }}>
                    {words[currentWordIndex].substring(0, letterCount)}
                    <span className={`console-underscore ${visible ? '' : 'hidden'}`}>|</span>
                </h1>
            </div>
        );
    };
    const [red, setRed] = useState(false)
    const [bool, setBool] = useState(false)
    const [model, setModel] = useState(false)
    const isDraggingRef = useRef(false)
    const meshRef = useRef(null)
    const dataGemdam = props.dataText;

    function RedWalls() {
        const wallPlanes = useXRPlanes('wall')
        return (
          <>
            {wallPlanes.map((plane) => (
              <XRSpace space={plane.planeSpace}>
                <XRPlaneModel plane={plane}>
                  <meshBasicMaterial color="red" />
                </XRPlaneModel>
              </XRSpace>
       ))}
          </>
       )
      }
    function DraggableCube() {
        return (
          <mesh
            ref={meshRef}
            onPointerDown={(e) => {
              if (isDraggingRef.current) {
                return
       }
              isDraggingRef.current = true
              meshRef.position?.copy(e.point)
       }}
            onPointerMove={(e) => {
              if (!isDraggingRef.current) {
                return
       }
              meshRef.position?.copy(e.point)
       }}
            onPointerUp={(e) => (isDraggingRef.current = false)}
          >
            <boxGeometry />
          </mesh>
       )
      }
    function Anchor() {
        const [anchor, requestAnchor] = useXRAnchor()
        const controllerState = useXRInputSourceState('controller', 'right')
        const handState = useXRInputSourceState('hand', 'right')
        const inputSource = controllerState?.inputSource ?? handState?.inputSource
        useXRInputSourceEvent(
          inputSource,
          'select',
          async () => {
            if (inputSource == null) {
              return
            }
            requestAnchor({ relativeTo: 'space', space: inputSource.targetRaySpace })
          },
          [requestAnchor, inputSource],
        )
        if (anchor == null) {
          return null
        }
        return (
          <XRSpace space={anchor.anchorSpace}>
            <mesh scale={0.5}>
              <boxGeometry color={'red'} />
            </mesh>
          </XRSpace>
        )
      }
      

    return (
        <div id="hero" className='container-gemdam snapScroll'>
            <div className='child-container-gemdam'>
                <div className='container-tittle'>
                    <div className='child-container-tittle'>
                        <ConsoleTextEffect />
                        <h1>DEVELOP</h1>
                        <h1>MENT</h1>
                        <div className='container-subtittle'>
                            <div></div>
                            <p>{dataGemdam.subtitle}</p>

                            <br   />
                           
                            <button  onClick={() => store.enterAR()}> <p>ACTIVAR AR</p></button>
                        </div>
                    </div>
                </div>
                <div className='container-line'>
                    <div className="line-animation"></div>
                </div>
            </div>
            <div 
            // ref={props.refModel} 
            className='container-shader'>
                {/* <Shader01 /> */}
               {/* <Canvas>
                <LogoGemdam />
               </Canvas> */}

                {/* <button style={{color: 'white', fontWeight: 'bold'}} onClick={() => store.enterAR()}>Enter AR</button> */}
                <Canvas >      
                    <XR store={store}>
                        {/* <RedWalls /> */}
                        {/* <PointerEvents /> */}
                        {/* <OrbitHandles /> */}
                        {/* <DraggableCube /> */}
                        {/* <Anchor /> */}

                        <LogoGemdam />
                        {/* {!bool && <LogoGemdam /> } */}
                        
                        {/* <ambientLight />
                        <XRDomOverlay
                                    style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <div
                                    style={{ backgroundColor: bool ? 'red' : 'green', padding: '1rem 2rem' }}
                                    onClick={() => setBool((b) => !b)}
                                    >
                                    {`Este es el mesh: ${meshRef.current}`}
                                    {`Este es el isDraggingRef: ${isDraggingRef.current}`}
                                    </div>
                                </XRDomOverlay> */}
                    </XR>
                </Canvas>
            </div>
        </div>
    )
}
