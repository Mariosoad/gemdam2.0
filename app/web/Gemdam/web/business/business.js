"use client"

import React, { useState } from 'react'
import Link from 'next/link';

import "./business.css"

export default function Business(props) {

    const dataBusiness = props.dataText;

    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isMiddleHovered, setIsMiddleHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);

    return (
        <div id="business" className='container-business snapScroll'>
            <div className='back-tittle'><h2>{dataBusiness.title}</h2></div>
            <div className='child-container-business'>
                <div className='subtittle-top mark-tittle top-position'>
                    <div className='sep-line-large'></div>
                    <p>{dataBusiness.subtitle}</p>
                </div>
                <h2 className='tittle-section'>{dataBusiness.titleDescription}</h2>
                <div className='container-description'>
                    {dataBusiness.description.map((item, index) => {
                        return (
                            <div key={index} className='description'>
                                <div>
                                    <p className='number'>{item.number}</p>
                                    <div className='sep-line-short'></div>
                                    <h4 className='tittle-description'>{item.title}</h4>
                                    <p className='text-description'>{item.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='subtittle-top mark-tittle'>
                    <div className='sep-line-large'></div>
                    <p>{dataBusiness.qualities.tittle}</p>
                </div>
                <div className='container-qualities'>
                    <div className='child-container-qualities'>
                        {dataBusiness.qualities.sections.map((item, index) => {
                            return (
                                <div key={index} className='qualities'>
                                    <div className='child-qualities'>
                                        <div>
                                            <h5>{item.uno}</h5>
                                        </div>
                                        <div className='qualities-left-line'>
                                            <h5>{item.dos}</h5>
                                        </div>
                                    </div>
                                    <div className='child-qualities'>
                                        <div>
                                            <a href='https://www.google.com' target='_blank' className="dontPlus"></a>
                                        </div>
                                        <div className='qualities-left-line'>
                                            <h5>{item.tres}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='lines'>
                <div className='line-1'></div>
                <div className='line-2'></div>
                <div className='line-3'></div>
                <div className='line-4'></div>
            </div>
            {/* Hover Cross */}
            <div className='lines z-cross'>
                <div className='hover-cross'>
                    <div className="left" onMouseEnter={() => setIsLeftHovered(true)}
                        onMouseLeave={() => setIsLeftHovered(false)}>
                        <div className='child-qualities'>
                            <div className={isLeftHovered ? "cross-select container-plus" : "cross-select"}>
                                <div>
                                    <Link href='/Development' className={isLeftHovered ? "plus" : ""}></Link>
                                    {/* <a href='https://www.google.com' target='_blank' className={isLeftHovered ? "plus" : ""}></a> */}
                                </div>
                            </div>
                            <div>
                                <h5></h5>
                            </div>
                        </div></div>
                    <div className="middle" onMouseEnter={() => setIsMiddleHovered(true)}
                        onMouseLeave={() => setIsMiddleHovered(false)}>
                        <div className='child-qualities'>
                            <div className={isMiddleHovered ? "cross-select container-plus" : "cross-select"}>
                                <div><a href='https://www.google.com' target='_blank' className={isMiddleHovered ? "plus" : ""}></a></div>
                            </div>
                            <div>
                                <h5></h5>
                            </div>
                        </div></div>
                    <div className="right" onMouseEnter={() => setIsRightHovered(true)}
                        onMouseLeave={() => setIsRightHovered(false)}>
                        <div className='child-qualities'>
                            <div className={isRightHovered ? "cross-select container-plus" : "cross-select"}>
                                <div><a href='https://www.google.com' target='_blank' className={isRightHovered ? "plus" : ""}></a></div>
                            </div>
                            <div>
                                <h5></h5>
                            </div>
                        </div></div>
                </div>
            </div>
        </div>
    )
}
