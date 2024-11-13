import React from 'react'
import ImageCarousel from './ImageCarousel'
import IntroTextSection from './IntroTextSection'

const Hero = () => {
  return (
    <section id="#highlights"
      className="w-screen overflow-hidden h-[80%] common-padding ">
        <ImageCarousel />
        <IntroTextSection />
        
        </section>
  )
}

export default Hero