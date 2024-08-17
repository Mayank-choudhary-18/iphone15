// import React from 'react'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Navbar from './components/Navbar';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import * as Sentry from '@sentry/react'
// import Loadera from './components/Loadera';
import Loadera from './components/Loadera';

const App = () => {


  return (
    <main className="bg-black ">
     <Loadera/>
    <Navbar /> 
    <Hero />
    <Highlights />
    <Model/>
    <Features />
    <HowItWorks />
    <Footer/>

   </main>
    
  )
}

export default Sentry.withProfiler(App)
