import React from 'react'

// import Scene from './Script'
import Scene from './elipseShader/SceneElipse'
import './shader01.css'

export default function shader01() {
  return (
    <div className='container-shader01'>
      <Scene />
      {/* <div className='container-grad'></div> */}
    </div>
  )
}
