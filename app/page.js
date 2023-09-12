"use client"

import React, { useState, useEffect, useRef } from 'react';

import Navigation from './web/Gemdam/components/navigation/navigation';
import Gemdam from './web/Gemdam/web/gemdam/gemdam';
import Business from './web/Gemdam/web/business/business';
import Shader02 from './web/Gemdam/components/shaders/02/shader02';
import Companies from './web/Gemdam/web/companies/companies';
import About from './web/Gemdam/web/about/about';
import Shader03 from './web/Gemdam/components/shaders/03/shader03';
import Contact from './web/Gemdam/web/contact/contact';

import dataEN from './language/gemdam_en.json';
import dataES from './language/gemdam_es.json';

import "./globals.css"

export default function Homepage() {

  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleChangeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  const dataLanguage = currentLanguage === 'en' ? dataEN : dataES;

  return (
    <div>

      <main className="main">
        <Navigation currentLanguage={currentLanguage} onChangeLanguage={handleChangeLanguage} />
        <Gemdam dataText={dataLanguage.gemdam} />
        <Business dataText={dataLanguage.business} />
        <Shader03 />
        <Companies dataText={dataLanguage.companies} />
        <About dataText={dataLanguage.about} />
        <Shader02 />
        <Contact dataText={dataLanguage.contact} />
      </main>
    </div>
  )
}
