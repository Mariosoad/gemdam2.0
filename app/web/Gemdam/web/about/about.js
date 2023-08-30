import React from 'react'
import Image from 'next/image';

import './about.css';

const dataTeam = [
    {
        tittle: "HINOSTROZA MARIO",
        subtittle: "CEO & CO-Founder | Lead Programmer",
        url: "https://res.cloudinary.com/deushkfkk/image/upload/v1674752608/GEMDAM/mario_vvix9l.png",
    },
    {
        tittle: "ISASMENDI RODRIGO",
        subtittle: "CO-Founder & 3D Artist",
        url: "https://res.cloudinary.com/deushkfkk/image/upload/v1674752609/GEMDAM/rori_mzbthw.jpg",
    }
]

export default function About() {
    return (
        <div className='container-about'>
            <div className='back-tittle'><h2>ABOUT US</h2></div>
            <div className='child-container-about'>
                <p className='subtittle-top'>OUR PHILOSOPHY</p>
                <h2 className='tittle-section'>Learn more about our dream team</h2>
                <div className='container-team'>
                    <h4 className='tittle-description'>WHO WE ARE</h4>
                    <div className='container-text-team'>
                        <div>
                            <p className='text-description'>We are company specialized in creating digital experiences thay ains to transform strategic
                                comunication within companies and in relation to their clients. To achieve this, we develop solutions
                                capable of enhancing the business outcomes of each brand and its relevance, through improved market
                                positioning and increased value growth throughout its lifecycle.
                            </p>
                        </div>
                        <div>
                            <p className='text-description'>Embracing diversity within an open and inclusive environment is is a fundamental
                                aspect of our company culture. We actively cultivate an atmosphere of trust and respect,
                                recognizing the unique value that each individual brings.
                                We commit to build this through robust ethical standards and ensuring transparent meaningful
                                and responsive communications.
                            </p>
                        </div>
                        <div>
                            <p className='text-description'>We develop every proyect since the beginning, starting from stages of consultation
                                and providing guidance and support throughout the whole process until the launching of the
                                final product. Our goal is to empower our clients to achieve sustained long-term sucess, solidifying
                                their position as influential companies capable of attaining lasting result.
                            </p>
                        </div>
                    </div>
                    <div className='container-img-team'>
                        {dataTeam.map(l => {
                            return (
                                <div className='child-img-team' key={l}>
                                    <div>
                                        <Image width={100} height={100} src={l.url} />
                                        <div className='container-team-tittle'>
                                            <h4>{l.tittle}</h4>
                                            <div className='sep-line-large'></div>
                                        </div>
                                        <h5>{l.subtittle}</h5>
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
