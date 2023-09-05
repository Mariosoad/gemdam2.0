import React from 'react'
import Image from 'next/image';

import './companies.css';

export default function Companies(props) {

    const dataCompanies = props.dataText;

    return (
        <div className='container-companies'>
            <div className='back-tittle'><h2>{dataCompanies.title}</h2></div>
            <div className='child-container-companies'>
                <div className='subtittle-top mark-tittle'>
                    <div className='sep-line-large'></div>
                    <p>{dataCompanies.subtitle}</p>
                </div>
                <h2 className='tittle-section'>{dataCompanies.titleDescription}</h2>
                <div className='container-logos'>
                    {dataCompanies.clients.map(l => {
                        return (
                            <div key={l.id} className='logo'>
                                <h4 className='tittle-description'>{l.tittle}</h4>
                                <div className='container-logo-img'>
                                    <Image width={100} height={35} src={l.url} alt={l.tittle} />
                                </div>
                                <div className='sep-line-mid one-line'></div>
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
