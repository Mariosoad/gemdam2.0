import React from 'react'

import ScriptShad from './Script'
import './shader03.css'

export default function shader03() {
  return (
    <div className='container-shader03'>
      <ScriptShad />
      <div className='container-grad'></div>
      <div className='lines' style={{ opacity: 0.1 }}>
        <div className='line-1'></div>
        <div className='line-2'></div>
        <div className='line-2'></div>
        <div className='line-2'></div>
        <div className='line-2'></div>
        <div className='line-3'></div>
        <div className='line-4'></div>
      </div>
    </div>
  )
}
