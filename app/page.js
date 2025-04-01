"use client"

import React, { useState, useEffect, useRef } from 'react';

import Navigation from './web/Gemdam/components/navigation/navigation';
import Gemdam from './web/Gemdam/web/gemdam/gemdam';
import Business from './web/Gemdam/web/business/business';
import Shader02 from './web/Gemdam/components/shaders/02/shader02';
import Companies from './web/Gemdam/web/companies/companies';
import About from './web/Gemdam/web/about/about';
import Contact from './web/Gemdam/web/contact/contact';
import Services from './web/Gemdam/web/services/services';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Mouse from './web/Gemdam/mouse';

import dataEN from './language/gemdam_en.json';
import dataES from './language/gemdam_es.json';

import "./globals.css"
// import { Canvas } from 'react-three-fiber';

// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Homepage() {

  // gsap.registerPlugin(ScrollTrigger);
  const mainRef = useRef(null);
  const sceneRef = useRef(null);

  const [currentLanguage, setCurrentLanguage] = useState('es');

  const handleChangeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  const dataLanguage = currentLanguage === 'es' ? dataES : dataEN;

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
      {dataLanguage &&<Navigation dataText={dataLanguage.navigation} currentLanguage={currentLanguage} onChangeLanguage={handleChangeLanguage} />}
      <main ref={mainRef} className="mains scroll">
        {dataLanguage && <Gemdam refModel={sceneRef}  dataText={dataLanguage.gemdam} />}
        {dataLanguage && <Business dataText={dataLanguage.business} />}
        <Shader02 />
        {dataLanguage && <Companies dataText={dataLanguage.companies} />}
        <Shader02 />
        {dataLanguage && <Services dataText={dataLanguage.services} />}
        <Shader02 />
        {dataLanguage && <About dataText={dataLanguage.about} />}
        <Shader02 />
        {dataLanguage && <Contact dataText={dataLanguage.contact} />}
      </main>
    </div>
  )
}
