"use client"

import React, { useState } from 'react';

import Navigation from './web/Gemdam/components/navigation/navigation';
import Gemdam from './web/Gemdam/web/gemdam/gemdam';
import Business from './web/Gemdam/web/business/business';
import Shader02 from './web/Gemdam/components/shaders/02/shader02';
import Companies from './web/Gemdam/web/companies/companies';
import About from './web/Gemdam/web/about/about';
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
    <main className="main">
      <Navigation currentLanguage={currentLanguage} onChangeLanguage={handleChangeLanguage} />
      <Gemdam dataText={dataLanguage.gemdam} />
      <Business dataText={dataLanguage.business} />
      <Shader02 />
      <Companies dataText={dataLanguage.companies} />
      <About dataText={dataLanguage.about} />
      <Contact dataText={dataLanguage.contact} />

      <div className='lines'>
        <div className='line-1'></div>
        <div className='line-2'></div>
        <div className='line-3'></div>
        <div className='line-4'></div>
      </div>
    </main>
  )
}
