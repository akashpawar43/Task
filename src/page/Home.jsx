import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Addon from '../components/Addon'
import Testimonials from '../components/Testimonials'
import Getstarted from '../components/Getstarted'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <>
      <div className='vh-100'>
        <Navbar />
        <main>
          <Hero />
          <Feature />
          <Addon />
          <Testimonials />
          <Getstarted />
        </main>
        <Footer />
      </div>
    </>
  )
}
