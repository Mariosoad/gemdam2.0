import React from 'react'

import data from '../../components/gemdam.json'
import "./business.css"

export default function Business() {

    const dataBusiness = data.business;
    return (
        <div className='container-business'>
            <div className='back-tittle'><h2>{dataBusiness.title}</h2></div>
            <div className='child-container-business'>
                <p className='subtittle-top'>{dataBusiness.subtittle}</p>
                <h2 className='tittle-section'>{dataBusiness.titleDescription}</h2>
                <div className='container-description'>
                    <div className='description'>
                        <div>
                            <p className='number'>{dataBusiness.description.vr.number}</p>
                            <div className='sep-line-short'></div>
                            <h4 className='tittle-description'>{dataBusiness.description.vr.tittle}</h4>
                            <p className='text-description'>{dataBusiness.description.vr.text}</p>
                        </div>
                    </div>
                    <div className='description'>
                        <div>
                            <p className='number'>{dataBusiness.description.ar.number}</p>
                            <div className='sep-line-short'></div>
                            <h4 className='tittle-description'>{dataBusiness.description.ar.title}</h4>
                            <p className='text-description'>{dataBusiness.description.ar.text}</p>
                        </div>
                    </div>
                    <div className='description'>
                        <div>
                            <p className='number'>{dataBusiness.description.dev.number}</p>
                            <div className='sep-line-short'></div>
                            <h4 className='tittle-description'>{dataBusiness.description.dev.title}</h4>
                            <p className='text-description'>{dataBusiness.description.dev.text}</p>
                        </div>
                    </div>
                </div>
                <p className='subtittle-top'>BEST QUALITIES</p>
                <div className='container-qualities'>
                    <div className='child-container-qualities'>
                        <div className='qualities'>
                            <div className='child-qualities'>
                                <div>
                                    <h5>IMMERSION</h5>
                                </div>
                                <div className='qualities-left-line'>
                                    <h5>SIMULATION</h5>
                                </div>
                            </div>
                            <div className='child-qualities'>
                                <div>
                                    <h5></h5>
                                </div>
                                <div className='qualities-left-line'>
                                    <h5>EXPERIENCE</h5>
                                </div>
                            </div>
                        </div>
                        <div className='qualities'>
                            <div className='child-qualities'>
                                <div>
                                    <h5>INTERACTION</h5>
                                </div>
                                <div className='qualities-left-line'>
                                    <h5>ENHANCEMENT</h5>
                                </div>
                            </div>
                            <div className='child-qualities'>
                                <div>
                                    <h5></h5>
                                </div>
                                <div className='qualities-left-line'>
                                    <h5>INTEGRATION</h5>
                                </div>
                            </div>
                        </div>
                        <div className='qualities'>
                            <div className='child-qualities'>
                                <div>
                                    <h5>RESPONSIVE</h5>
                                </div>
                                <div className='qualities-left-line'>
                                    <h5>ACCESIBLE</h5>
                                </div>
                            </div>
                            <div className='child-qualities'>
                                <div>
                                    <h5></h5>
                                </div>
                                <div className='qualities-left-line'>
                                    <h5>EFFICIENT</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
