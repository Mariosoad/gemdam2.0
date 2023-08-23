'use client'

import React, { useState, useEffect } from 'react';
import Image from "next/image"

import "./navigation.css"
import Link from 'next/link';

export default function Navigation() {

    const [navOpen, setNavOpen] = useState(false);
    const [showGem, setShowGem] = useState(true);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setShowGem(true);
        } else {
            setShowGem(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div className="container-logo-gemdam">
                <div className="logo-gemdam logo-swap">
                    <div className={showGem ? 'cont-logo-swap' : 'swap'}>
                        <p className="tittle-gemdam">
                            <Image width={40} height={40}
                                src="https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/15e7ed8d-269a-4c28-45bb-26781fc1eb00/mobile" alt="Logo Gemdam Studio" />
                            GEMDAM</p>
                        <p className="tittle-gemdam">
                            <Image width={40} height={40}
                                src="https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/15e7ed8d-269a-4c28-45bb-26781fc1eb00/mobile" alt="Logo Gemdam Studio" />
                            <span>GEMDAM</span></p>
                    </div>
                </div>
            </div>

            <div className="container-menu">
                <div className="nav-container">
                    {/* MENU NAVBAR */}
                    <div className="navbar">
                        <Link href="/#Contact"><p>CONTACT</p></Link>
                        <p>MENU</p>
                        <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                                <span className={navOpen ? "lineMid spin" : "lineMid"}></span>
                                <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
                            </div>
                        </div>
                    </div>
                    {/* MENU OVERLAY */}
                    <div className="nav-overlay" style={{ top: navOpen ? "0" : "-100%", transitionDelay: navOpen ? "0s" : "0s" }}>
                        <p>Tu hermana</p>
                        <p>Tu hermana2</p>
                        <p>Tu hermana3</p>
                    </div>
                </div>
            </div>

            <div className="container-left-bottom">
                <p>STUDIO</p>
                <p>GEMDAM</p>
                <p>PRODUCTION</p>
            </div>

            <div className="container-right-bottom">
                <p>PORTFOLIO</p>
            </div>
        </>
    )
}
