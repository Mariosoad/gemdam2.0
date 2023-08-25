import React from 'react'

import "./business.css"

export default function Business() {
    return (
        <div className='container-business'>
            <div className='back-tittle'><h2>BUSINESS</h2></div>
            <div className='child-container-business'>
                <p className='subtittle-top'>NOW ABOUT BUSINESS</p>
                <h2 className='tittle-section'>We offer a wide variety of solutions</h2>
                <div className='container-description'>
                    <div className='description'>
                        <div>
                            <p className='number'>01</p>
                            <div className='sep-line-short'></div>
                            <h4 className='tittle-description'>VIRTUAL REALITY</h4>
                            <p className='text-description'>Inmersive technology ideal to provide unique interactive experiences
                                and optimize channels of communications reducing time and cost</p>
                        </div>
                    </div>
                    <div className='description'>
                        <div>
                            <p className='number'>02</p>
                            <div className='sep-line-short'></div>
                            <h4 className='tittle-description'>AUGMENTED REALITY</h4>
                            <p className='text-description'>An ideal resource for mixed reality experiences than will enchance your
                                projects with the combined interaction of spatiality and digital objects.</p>
                        </div>
                    </div>
                    <div className='description'>
                        <div>
                            <p className='number'>03</p>
                            <div className='sep-line-short'></div>
                            <h4 className='tittle-description'>WEB DEVELOPMENT</h4>
                            <p className='text-description'>Adjusted solutions for any type of client seeking to step up improving
                                their projects in terms of design, functionality and comunication.</p>
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
