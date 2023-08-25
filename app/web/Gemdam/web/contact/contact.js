import React from 'react'

import "./contact.css"

export default function Contact() {
    return (
        <div id='Contact' className='container-contact'>
            <div className='back-tittle'><h2>CONTACT</h2></div>
            <div className='child-container-contact'>
                <p className='subtittle-top'>DOWN TO BUSINESS</p>
                <h2 className='tittle-section'>Lets create your ideal project</h2>
                <div className='container-request'>
                    <p>SEND A REQUEST</p>
                </div>
                <div className='container-call'>
                    <div>
                        <a className='child-container-call' href="tel:+542214370979" target='_blank'>
                            <div className='text-swap'>
                                <div className='cont-text-swap'>
                                    <p>+54 (221) 437 0979</p>
                                    <p>+54 (221) 437 0979</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a className='child-container-call' href="tel:+542214768804" target='_blank'>
                            <div className='text-swap'>
                                <div className='cont-text-swap'>
                                    <p>+54 (221) 476 8804</p>
                                    <p>+54 (221) 476 8804</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a className='child-container-call' href='mailto:info@gemdam.com'>
                            <div className='text-swap'>
                                <div className='cont-text-swap'>
                                    <p>INFO@GEMDAM.COM</p>
                                    <p>INFO@GEMDAM.COM</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='container-direction'>
                    <div><p>La Plata, Buenos Aires, Argentina</p></div>
                    <div><p>© 2023 Gemdam Studio</p></div>
                </div>
            </div>
        </div>
    )
}
