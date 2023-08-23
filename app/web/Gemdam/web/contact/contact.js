import React from 'react'

import "./contact.css"
import Link from 'next/link'

export default function Contact() {
    return (
        <div id='Contact' className='container-contact'>
            <div className='back-tittle'><h2>CONTACT</h2></div>
            <div className='child-container-contact'>
                <p className='subtittle-contact'>DOWN TO BUSINESS</p>
                <h2 className='tittle-section'>Lets create your ideal project</h2>
                <div className='container-request'>
                    <p>SEND A REQUEST</p>
                </div>
                <div className='container-call'>
                    <div>
                        <Link href="tel:+542214370979" target='_blank'>
                            <div className='text-swap'>
                                <div className='cont-text-swap'>
                                    <p>+54 (221) 437 0979</p>
                                    <p>+54 (221) 437 0979</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div><Link href="tel:+542214768804" target='_blank'>
                        <div className='text-swap'>
                            <div className='cont-text-swap'>
                                <p>+54 (221) 476 8804</p>
                                <p>+54 (221) 476 8804</p>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div>
                        <Link href='mailto:info@gemdam.com'>
                            <div className='text-swap'>
                                <div className='cont-text-swap'>
                                    <p>INFO@GEMDAM.COM</p>
                                    <p>INFO@GEMDAM.COM</p>
                                </div>
                            </div>
                        </Link>
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
