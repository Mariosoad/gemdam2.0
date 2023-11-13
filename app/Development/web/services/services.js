"use client"

import React from 'react'

import Accordion from 'react-bootstrap/Accordion';

import "./services.css"

export default function Services() {
  return (
    <div className='container-services'>
      <div className='child-container-services'>
        <div className='container-images'>
          <img alt="Custom Software" src="https://wezom.com/storage/services-groups/big/PGklPqxcp4CvzCjdJWQgwJVavg6T1zVa9DBbNiey.jpg.webp?v=1676384758" width="660" height="480" />
        </div>
        <div className='container-acordeon'>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p>01/</p>
                <h2>Evaluation & Design</h2>
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <div className='container-swappers'>
                    <div className='text-swap cont-swap'>
                      <div className='cont-text-swap'>
                        <p>RESEARCH & DEVELOPMENT</p>
                        <p>RESEARCH & DEVELOPMENT</p>
                      </div>
                    </div>
                    <div className='text-swap cont-swap'>
                      <div className='cont-text-swap'>
                        <p>SCOPING SESSION</p>
                        <p>SCOPING SESSION</p>
                      </div>
                    </div>
                    <div className='text-swap cont-swap'>
                      <div className='cont-text-swap'>
                        <p>UX REVIEW</p>
                        <p>UX REVIEW</p>
                      </div>
                    </div>
                    <div className='text-swap cont-swap'>
                      <div className='cont-text-swap'>
                        <p>UX/UI DESIGN</p>
                        <p>UX/UI DESIGN</p>
                      </div>
                    </div>
                    <div className='text-swap cont-swap'>
                      <div className='cont-text-swap'>
                        <p>BRANDING</p>
                        <p>BRANDING</p>
                      </div>
                    </div>
                  </div>
                  <p>Maximize your competitive edge in the marketplace by partnering with us to conduct
                    research and design tailored program evaluations.</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <p>02/</p>
                <h2>Custom Software</h2>
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <div className='container-swappers'>
                    <div className='text-swap cont-swap'>
                      <div className='cont-text-swap'>
                        <p>TMS, WMS</p>
                        <p>PRODUCT DEVELOPMENT</p>
                      </div>
                    </div>
                    <div className='text-swap cont-swap'>
                      <div className='cont-text-swap'>
                        <p>WEBAPP</p>
                        <p>WEBAPP</p>
                      </div>
                    </div>
                    <div className='text-swap cont-swap'>
                      <div className='cont-text-swap'>
                        <p>PRODUCT DEVELOPMENT</p>
                        <p>PRODUCT DEVELOPMENT</p>
                      </div>
                    </div>
                    <div className='text-swap cont-swap'>
                      <div className='cont-text-swap'>
                        <p>CRM DEVELOPMENT</p>
                        <p>CRM DEVELOPMENT</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p>Obtain custom business software if off-the-shelf options do not fit your requirements.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
