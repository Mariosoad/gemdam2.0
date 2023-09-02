import React from 'react'
import Image from 'next/image';

import './about.css';

export default function About(props) {

    const dataAbout = props.dataText;

    return (
        <div className='container-about'>
            <div className='back-tittle'><h2>{dataAbout.title}</h2></div>
            <div className='child-container-about'>
                <p className='subtittle-top'>{dataAbout.subtitle}</p>
                <h2 className='tittle-section'>{dataAbout.titleDescription}</h2>
                <div className='container-team'>
                    <h4 className='tittle-description'>{dataAbout.subtitleDescription}</h4>
                    <div className='container-text-team'>
                        {dataAbout.sections.map(item => {
                            return (
                                <div key={item}>
                                    <p className='text-description'>{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='container-img-team'>
                        {dataAbout.team.map(item => {
                            return (
                                <div key={item} className='child-img-team'>
                                    <div>
                                        <Image width={100} height={100} src={item.url} />
                                        <div className='container-team-tittle'>
                                            <h4>{item.name}</h4>
                                            <div className='sep-line-large'></div>
                                        </div>
                                        <h5>{item.role}</h5>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
