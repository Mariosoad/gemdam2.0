"use client"

import React, { useState, useEffect, useRef } from 'react';

import Navigation from './web/Gemdam/components/navigation/navigation';
import Gemdam from './web/Gemdam/web/gemdam/gemdam';
import Business from './web/Gemdam/web/business/business';
import Shader02 from './web/Gemdam/components/shaders/02/shader02';
import Companies from './web/Gemdam/web/companies/companies';
import About from './web/Gemdam/web/about/about';
// import Shader03 from './web/Gemdam/components/shaders/03/shader03';
import Contact from './web/Gemdam/web/contact/contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Mouse from './web/Gemdam/mouse';

import dataEN from './language/gemdam_en.json';
import dataES from './language/gemdam_es.json';

import "./globals.css"
import LogoGemdam from './web/Gemdam/components/models/LogoGemdam/logoGemdam';
import { Canvas } from 'react-three-fiber';
import Services from './web/Gemdam/web/services/services';


export default function Homepage() {

  gsap.registerPlugin(ScrollTrigger);
  const mainRef = useRef(null);
  const sceneRef = useRef(null);

  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleChangeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  const dataLanguage = currentLanguage === 'en' ? dataEN : dataES;

  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger:{
  //       trigger: mainRef.current,
  //       start: 'top top',
  //       end: 'bottom bottom',
  //       scrub: 1,
  //       // onUpdate:  ()=>
  //       // {
  //       //   // const scroll = ScrollTrigger.getById('main');
  //       //   // sceneRef.current.position.y = -scroll.scroll();
  //       // }
  //     }
  //   })
  //   .to(sceneRef.current, {
  //     ease: 'none',
  //     x: '-50vw',
  //     y: '140vh',
  //   })
  //   .to(sceneRef.current, {
  //     ease: 'none',
  //     x: '50vw',
  //     y: '240vh',
  //   })
  //   .to(sceneRef.current, {
  //     ease: 'none',
  //     x: '-50vw',
  //     y: '340vh',
  //   })
  // }, []);

  return (
    <div className='gemdamstudio'>
      <Mouse />
      <Navigation dataText={dataLanguage.navigation} currentLanguage={currentLanguage} onChangeLanguage={handleChangeLanguage} />
      <main ref={mainRef} className="mains scroll">
        <Gemdam refModel={sceneRef} dataText={dataLanguage.gemdam} />
        <Business dataText={dataLanguage.business} />
        <Shader02 />
        <Companies dataText={dataLanguage.companies} />
        <Shader02 />
        <Services dataText={dataLanguage.services} />
        <Shader02 />
        <About dataText={dataLanguage.about} />
        <Shader02 />
        <Contact dataText={dataLanguage.contact} />
      </main>
    </div>
  )
}
