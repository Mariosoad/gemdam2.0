import React from 'react'

import "./contact.css"

export default function Contact() {
    return (
        <div className='container-contact'>
            <div className='back-tittle'><h2>CONTACT</h2></div>
            <div className='child-container-contact'>
                <p className='subtittle-contact'>DOWN TO BUSINESS</p>
                <h2 className='tittle-section'>Lets create your ideal project</h2>
                <div className='container-request'>
                    <p>SEND A REQUEST</p>
                </div>
                <div className='container-call'>
                    <div><p>+54 (221) 437 0979</p></div>
                    <div><p>+54 (221) 476 8804</p></div>
                    <div><p>INFO@GEMDAM.COM</p></div>
                </div>
                <div className='container-direction'>
                    <div><p>La Plata, Buenos Aires, Argentina</p></div>
                    <div><p>Capital Federal, Buenos Aires, Argentina</p></div>
                </div>
            </div>
        </div>
    )
}
