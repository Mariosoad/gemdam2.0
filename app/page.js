import Navigation from './web/Gemdam/components/navigation/navigation'
import Gemdam from './web/Gemdam/web/gemdam/gemdam'
import Contact from './web/Gemdam/web/contact/contact'

import "./globals.css"

export default function Homepage() {
  return (
    <main className="main">
      <Navigation />
      <Gemdam />
      <Contact />

      <div className='lines'>
        <div className='line-1'></div>
        <div className='line-2'></div>
        <div className='line-3'></div>
        <div className='line-4'></div>
      </div>
    </main>
  )
}
