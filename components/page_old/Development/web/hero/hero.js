import React from 'react'

import "./hero.css"

export default function Hero() {
  return (
    <div className='container-hero-dev'>
      <video className='video-hero-dev' poster="https://api.wezom.com/storage/settings/home_poster/big/dNGONezZ8EOsZvK7hv3adcVGOmAqGvRQfayeHYhQ.jpg?v=1672741772"
        playsInline autoPlay={true} loop muted>
        <source data-src="https://api.wezom.com/storage/settings/uLwkmTbOejgA1dvqiDM8puX50Cz275bEVMKBjKRs.webm" type="video/webm"
          src="https://api.wezom.com/storage/settings/uLwkmTbOejgA1dvqiDM8puX50Cz275bEVMKBjKRs.webm"></source>
        <source data-src="https://api.wezom.com/storage/settings/rubHdoO2Di6QqoTUwYIySpbKtzgUjtaXaB3DtGlT.mp4" type="video/mp4"
          src="https://api.wezom.com/storage/settings/rubHdoO2Di6QqoTUwYIySpbKtzgUjtaXaB3DtGlT.mp4"></source>
      </video>
      <div className='tittle-hero-dev'>
        <div className='child-tittle-hero'>
          <h1>Turning Digital Ideas into Powerful & Lucrative Realities</h1>
          <h3>GEMDAM OFFERS EFFICIENT AND CUSTOMIZED SOFTWARE SOLUTIONS FOR
            BUSINESSES OF ALL SIZES, FROM STARTUPS TO ENTERPRISES.</h3>
        </div>
      </div>
    </div>
  )
}
