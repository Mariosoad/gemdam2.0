'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import "./gemdam.css";

export default function Gemdam(props) {
    const modelRef = useRef(null);
    const dataGemdam = props.dataText;
    const [isDragging, setIsDragging] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const AR_THRESHOLD = 12;

    function showInstructionsAndLaunchAR() {
        const instructions = document.getElementById('instructions');
        instructions.style.display = 'block';
    
        // Esperamos unos segundos para que el usuario lea, luego lanzamos AR
        setTimeout(() => {
          document.getElementById('myModel').activateAR();
          instructions.style.display = 'none'; // Ocultamos el cartel
        }, 3000);
      }

    useEffect(() => {
        const modelViewer = modelRef.current;
        if (!modelViewer) return;

        const handlePointerDown = (event) => {
            setTouchStart(event.clientX || event.touches?.[0]?.clientX);
            setIsDragging(false);
        };

        const handlePointerMove = (event) => {
            const currentX = event.clientX || event.touches?.[0]?.clientX;
            if (Math.abs(currentX - touchStart) > AR_THRESHOLD) {
                setIsDragging(true);
            }
        };

        const handlePointerUp = () => {
            if (!isDragging) {
                showInstructionsAndLaunchAR()
                modelViewer.activateAR();
            }
        };

        modelViewer.addEventListener("pointerdown", handlePointerDown);
        modelViewer.addEventListener("pointermove", handlePointerMove);
        modelViewer.addEventListener("pointerup", handlePointerUp);

        return () => {
            modelViewer.removeEventListener("pointerdown", handlePointerDown);
            modelViewer.removeEventListener("pointermove", handlePointerMove);
            modelViewer.removeEventListener("pointerup", handlePointerUp);
        };
    }, [isDragging, touchStart]);

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

    useEffect(() => {
      const modelViewer = modelRef.current;
      if (!modelViewer) return;
  
      modelViewer.addEventListener('load', () => {
          const materials = modelViewer.model.materials;
  
          materials.forEach((material) => {
              material.pbrMetallicRoughness.setBaseColorFactor([44 / 255, 221 / 255, 207 / 255, 1]); // Color #2cddcf
              material.wireframe = true;
          });
      });
    }, []);

    // <!-- Cartel flotante con instrucciones -->
        <div id="instructions" style="position: absolute; top: 20px; left: 20px; background: white; padding: 10px; border-radius: 8px; display: none;">
        🔄 Usa tus dedos para mover, rotar y redimensionar el modelo en AR.
        </div>

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
                            <br />
                        </div>
                    </div>
                </div>
                <div className='container-line'>
                    <div className="line-animation"></div>
                </div>
            </div>
            <div className='container-shader'>
                <model-viewer
                    ref={modelRef}
                    style={{ width: '100%', height: '100%' }}
                    ar
                    ar-modes="scene-viewer webxr quick-look"
                    alt="3D Model"
                    loading="lazy"
                    src="/Logo_Gemdam.glb"
                    poster="/gemdam_poster_1.webp"
                    auto-rotate
                    shadow-intensity="0"
                    camera-controls
                    disable-zoom
                    disable-tap
                    camera-orbit="10deg 80deg auto"    
                    min-camera-orbit="-Infinity 80deg auto" // 🔹 Mantiene fija la rotación vertical en 90 grados
                    max-camera-orbit="Infinity 80deg auto"  // 🔹 Restringe el eje vertical
                    orbit-sensitivity="1" 
                    quality="medium"
                    dpr="2"
                    tone-mapping="neutral" 
                    exposure="1.5"
                    render-scale="2"
                    powerPreference="high-performance"
                >
                </model-viewer>
            </div>
        </div>
    );
}