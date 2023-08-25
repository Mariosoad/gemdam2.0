import Navigation from './web/Gemdam/components/navigation/navigation';
import Gemdam from './web/Gemdam/web/gemdam/gemdam';
import Business from './web/Gemdam/web/business/business';
import Companies from './web/Gemdam/web/companies/companies';
import About from './web/Gemdam/web/about/about';
import Contact from './web/Gemdam/web/contact/contact';

import "./globals.css"

export default function Homepage() {
  return (
    <main className="main">
      <Navigation />
      <Gemdam />
      <Business />
      <Companies />
      <About />
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
