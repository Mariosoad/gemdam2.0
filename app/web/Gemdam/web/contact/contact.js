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
                    <div className='text-swap'>
                        <Link className='cont-text-swap' href="tel:+542214370979" target='_blank'>
                            <p>+54 (221) 437 0979</p>
                            <p>+54 (221) 437 0979</p>
                        </Link>
                    </div>
                    <div><Link href="tel:+542214768804" target='_blank'><p>+54 (221) 476 8804</p></Link></div>
                    <div><Link href='mailto:info@gemdam.com'><p>INFO@GEMDAM.COM</p></Link></div>
                </div>
                <div className='container-direction'>
                    <div><p>La Plata, Buenos Aires, Argentina</p></div>
                    <button className='text-swap'>
                        <div className='cont-text-swap'>
                            <p>©2023 GEMDAM </p>
                            <p>©2023 GEMDAM STUDIO</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
