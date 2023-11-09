'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image"

import "./navigation.css"

export default function Navigation({ onChangeLanguage, currentLanguage }) {

    const [isHovered, setIsHovered] = useState(false);
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

    const [isNavbarHidden, setIsNavbarHidden] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos > 100) {
                setIsNavbarHidden(currentScrollPos > prevScrollPos);
                setPrevScrollPos(currentScrollPos);
            } else {
                setIsNavbarHidden(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const dataLinks = [
        {
            id: "01",
            title: "Home",
            href: "hero",
        },
        {
            id: "02",
            title: "Business",
            href: "business",
        },
        {
            id: "03",
            title: "Clients",
            href: "clients",
        },
        {
            id: "04",
            title: "About",
            href: "about",
        },
        {
            id: "05",
            title: "Contact",
            href: "contact",
        },
    ]

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
        onChangeLanguage(newLanguage);
    };
    const handleClickScroll = (targetId) => {
        const element = document.getElementById(targetId);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`container-navigation ${isNavbarHidden ? 'hidden-navbar' : 'set-navbar'}`}>
            <div className="container-logo-gemdam">
                <div className="logo-gemdam logo-swap">
                    <div className={showGem ? 'cont-logo-swap' : 'swap'}>
                        <button onClick={(e) => handleClickScroll("hero")} style={{ height: '100%' }}>
                            <p className="tittle-gemdam">
                                <Image width={45} height={45}
                                    src="https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/15e7ed8d-269a-4c28-45bb-26781fc1eb00/mobile" alt="Logo Gemdam Studio" />
                            </p>
                            <p className="tittle-gemdam">
                                <Image width={45} height={45}
                                    src="https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/15e7ed8d-269a-4c28-45bb-26781fc1eb00/mobile" alt="Logo Gemdam Studio" />
                                <span></span>
                            </p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container-menu">
                <div className="nav-container">
                    {/* MENU NAVBAR */}
                    <div className="navbar">
                        <button onClick={(e) => handleClickScroll("contact")}>CONTACT</button>
                        <button onClick={() => setNavOpen(!navOpen)}>MENU</button>
                        <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                            <div className="hamBox">
                                <div>
                                    <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                                    <span className={navOpen ? "lineMid spin" : "lineMid"}></span>
                                    <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
                                </div>
                            </div>
                        </div>
                        <button className='btn-language' onClick={toggleLanguage}>
                            {currentLanguage === 'en' ? 'ES' : 'EN'}
                        </button>
                    </div>
                    {/* MENU OVERLAY */}
                    <div className={navOpen ? "nav-overlay dis" : "nav-overlay"} style={{ top: navOpen ? "0" : "-150%", transitionDelay: navOpen ? "0s" : "0s" }}>
                        <div className='container-overlay'>
                            <div className='tittle-menu'>
                                <h2>MENU</h2>
                            </div>
                            <div className='links-menu'>
                                {dataLinks.map(l => {
                                    return (
                                        <button key={l.href} onClick={(e) => (handleClickScroll(l.href), (setNavOpen(!navOpen)))}>
                                            <div className='child-link-menu'
                                                onMouseEnter={() => setIsHovered(true)}
                                                onMouseLeave={() => setIsHovered(false)}>
                                                <span className='quare'>{l.id}</span>
                                                <p>{l.title}</p>
                                            </div>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='lines'>
                            <div className='line-1'></div>
                            <div className='line-2'></div>
                            <div className='line-3'></div>
                            <div className='line-4'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-left-bottom">
                <div className='child-container-left-bottom'>
                    <p>STUDIO</p>
                    <p>GEMDAM</p>
                    <p>PRODUCTION</p>
                </div>
            </div>

            <div className="container-right-bottom">
                <p>PORTFOLIO</p>
            </div>
        </div>
    )
}
