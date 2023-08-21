'use client'

import React, { useState } from "react";
import Image from "next/image"

import "./navigation.css"

export default function Navigation() {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <div className="container-logo-gemdam">
                <div className="logo-gemdam">
                    <Image width={50} height={50}
                        src="https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/15e7ed8d-269a-4c28-45bb-26781fc1eb00/mobile" alt="Logo" />
                    <p>GEMDAM</p>
                </div>
            </div>

            <div className="container-menu">
                <div className="nav-container">
                    <div className="navbar">
                        <p>CONTACT</p>
                        <p>MENU</p>
                        <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                                <span className={navOpen ? "lineMid spin" : "lineMid"}></span>
                                <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
                            </div>
                        </div>
                    </div>
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
