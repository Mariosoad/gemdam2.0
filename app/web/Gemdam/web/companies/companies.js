import React from 'react'

import './companies.css';
import Image from 'next/image';

const dataCompanies = [
    {
        id: "01",
        tittle: "STIMULUS VR",
        url: "https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/cf2ca22d-24f1-47c5-ad00-7f8f7a030100/mobile",
    },
    {
        id: "02",
        tittle: "URUS",
        url: "https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/cf2ca22d-24f1-47c5-ad00-7f8f7a030100/mobile",
    },
    {
        id: "03",
        tittle: "RADIOANDINA",
        url: "https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/cf2ca22d-24f1-47c5-ad00-7f8f7a030100/mobile",
    },
    {
        id: "04",
        tittle: "BRIPTRAVEL",
        url: "https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/cf2ca22d-24f1-47c5-ad00-7f8f7a030100/mobile",
    },
    {
        id: "05",
        tittle: "MAXIVIAJES",
        url: "https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/cf2ca22d-24f1-47c5-ad00-7f8f7a030100/mobile",
    },
    {
        id: "06",
        tittle: "RADIOFEST",
        url: "https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/cf2ca22d-24f1-47c5-ad00-7f8f7a030100/mobile",
    },
]

export default function Companies() {
    return (
        <div className='container-companies'>
            <div className='back-tittle'><h2>CLIENTS</h2></div>
            <div className='child-container-companies'>
                <p className='subtittle-top'>LEAVE IT TO US</p>
                <h2 className='tittle-section'>Companies that trust our work process</h2>
                <div className='container-logos'>
                    {dataCompanies.map(l => {
                        return (
                            <div className='logo' key={l.id}>
                                <h4 className='tittle-description'>{l.tittle}</h4>
                                <div className='container-logo-img'>
                                    <Image width={100} height={35} src={l.url} alt={l.tittle} />
                                </div>
                                <div className='sep-line-mid'></div>
                                <div className='container-logo-number'>
                                    <p>{l.id}</p>
                                    <div className='sep-line-mid'></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
