import React from 'react'

import "./business.css"

export default function Business() {
    return (
        <div className='container-business'>
            <div className='back-tittle'><h2>BUSINESS</h2></div>
            <div className='child-container-business'>
                <p className='subtittle-contact'>NOW ABOUT BUSINESS</p>
                <h2 className='tittle-section'>We offer a wide variety of solutions</h2>
                <div className='container-description'>
                    <div className='description'>
                        <div>
                            <p className='number'>01</p>
                            <div className='sep-line'></div>
                            <h4>VIRTUAL REALITY</h4>
                            <p className='text-description'>Inmersive technology ideal to provide unique interactive experiences
                                and optimize channels of communications reducing time and cost</p>
                        </div>
                    </div>
                    <div className='description'>
                        <div>
                            <p className='number'>02</p>
                            <div className='sep-line'></div>
                            <h4>AUGMENTED REALITY</h4>
                            <p className='text-description'>Inmersive technology ideal to provide unique interactive experiences
                                and optimize channels of communications reducing time and cost</p>
                        </div>
                    </div>
                    <div className='description'>
                        <div>
                            <p className='number'>03</p>
                            <div className='sep-line'></div>
                            <h4>WEB DEVELOPMENT</h4>
                            <p className='text-description'>Inmersive technology ideal to provide unique interactive experiences
                                and optimize channels of communications reducing time and cost</p>
                        </div>
                    </div>
                </div>
                <p className='bottom-subtittle'>BEST QUALITIES</p>
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
