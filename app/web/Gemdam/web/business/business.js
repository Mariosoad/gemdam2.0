import React from 'react'

import "./business.css"

export default function Business(props) {

    const dataBusiness = props.dataText;

    return (
        <div className='container-business'>
            <div className='back-tittle'><h2>{dataBusiness.title}</h2></div>
            <div className='child-container-business'>
                <p className='subtittle-top'>{dataBusiness.subtitle}</p>
                <h2 className='tittle-section'>{dataBusiness.titleDescription}</h2>
                <div className='container-description'>
                    {dataBusiness.description.map(item => {
                        return (
                            <div key={item} className='description'>
                                <div>
                                    <p className='number'>{item.number}</p>
                                    <div className='sep-line-short'></div>
                                    <h4 className='tittle-description'>{item.title}</h4>
                                    <p className='text-description'>{item.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <p className='subtittle-top'>{dataBusiness.qualities.title}</p>
                <div className='container-qualities'>
                    <div className='child-container-qualities'>
                        {dataBusiness.qualities.sections.map(item => {
                            return (
                                <div key={item} className='qualities'>
                                    <div className='child-qualities'>
                                        <div>
                                            <h5>{item.uno}</h5>
                                        </div>
                                        <div className='qualities-left-line'>
                                            <h5>{item.dos}</h5>
                                        </div>
                                    </div>
                                    <div className='child-qualities'>
                                        <div>
                                            <h5></h5>
                                        </div>
                                        <div className='qualities-left-line'>
                                            <h5>{item.tres}</h5>
                                        </div>
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
