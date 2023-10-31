import React from 'react'

// import Scene from './Script'
import Scene from './elipseShader/SceneElipse'
// import Scene from './elipseShader/SceneElipseCopy'
//  import ShaderParticles from './elipseShader/chatShader'
import './shader01.css'

export default function shader01() {
  return (
    <div className='container-shader01'>
      <Scene />
      {/* <ShaderParticles /> */}
      {/* <div className='container-grad'></div> */}
    </div>
  )
}
