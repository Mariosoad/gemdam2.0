import React from 'react'
import Image from 'next/image';

import './about.css';

export default function About(props) {

    const dataAbout = props.dataText;

    return (
        <div id="about" className='container-about snapScroll'>
            <div className='back-tittle'><h2>{dataAbout.title}</h2></div>
            <div className='child-container-about'>
                <div className='subtittle-top top-position mark-tittle'>
                    <div className='sep-line-large'></div>
                    <p>{dataAbout.subtitle}</p>
                </div>
                <h2 className='tittle-section'>{dataAbout.titleDescription}</h2>
                <div className='container-team'>
                    <div className='subtittle-top mark-tittle'>
                        <div className='sep-line-large'></div>
                        <p>{dataAbout.subtitleDescription}</p>
                    </div>
                    <div className='container-text-team'>
                        {dataAbout.sections.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p className='text-description'>{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='container-img-team'>
                        {dataAbout.team.map((item, index) => {
                            return (
                                <div key={index} className='child-img-team'>
                                    <div>
                                        <Image width={100} height={100} src={item.url} alt={item.name} />
                                        <div className='container-team-tittle'>
                                            <h4>{item.name}</h4>
                                            <div className='sep-line-large'></div>
                                        </div>
                                        <h4>{item.role}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='lines'>
                <div className='line-1'></div>
                <div className='line-2'></div>
                <div className='line-3'></div>
                <div className='line-4'></div>
            </div>
        </div>
    )
}
