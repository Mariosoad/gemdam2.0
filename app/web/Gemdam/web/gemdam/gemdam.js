'use client'

import React, { useEffect, useState } from 'react'

import "./gemdam.css"

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
    
    const dataGemdam = props.dataText;

    return (
        <div className='container-gemdam'>
            <div className='child-container-gemdam'>
                <div className='container-tittle'>
                    <div className='child-container-tittle'>
                        <ConsoleTextEffect />
                        <h1>DEVELOP</h1>
                        <h1>MENT</h1>
                        <div className='container-subtittle'>
                            <div></div>
                            <p>{dataGemdam.subtitle}</p>
                        </div>
                    </div>
                </div>
                <div className='container-shader'>
                    {/* <p>shader</p> */}
                </div>
            </div>
        </div>
    )
}
