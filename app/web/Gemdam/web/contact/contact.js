import React from 'react'

import "./contact.css"

export default function Contact(props) {

    const dataContact = props.dataText;

    return (
        <div id='Contact' className='container-contact snapScroll'>
            <div className='back-tittle'><h2>{dataContact.title}</h2></div>
            <div className='child-container-contact'>
                <div className='subtittle-top mark-tittle'>
                    <div className='sep-line-large'></div>
                    <p>{dataContact.subtitle}</p>
                </div>
                <h2 className='tittle-section'>{dataContact.titleDescription}</h2>
                <div className='container-request mark-tittle'>
                    <div className='sep-line-large'></div>
                    <p>{dataContact.subtitleDescription}</p>
                </div>
                <div className='container-call'>
                    {dataContact.call.map((item, index) => {
                        return (
                            <div key={index}>
                                <a className='child-container-call' href={item.href} target='_blank'>
                                    <div className='text-swap'>
                                        <div className='cont-text-swap'>
                                            <p>{item.tel}</p>
                                            <p>{item.tel}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
                <div className='container-direction'>
                    <div><p>{dataContact.location}</p></div>
                    <div><p>{dataContact.copyright}</p></div>
                </div>
            </div>
        </div>
    )
}
