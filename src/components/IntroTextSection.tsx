"use client"

import { animateWithGsap } from '@/utils/animations';
import { useGSAP } from '@gsap/react';
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

const IntroTextSection = () => {

     useGSAP(() => {
    // animateWithGsap("#exploreVideo")
    animateWithGsap("#features_title", {
      y: 0,
      opacity: 1,
    });
    animateWithGsap(
      ".g_text",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  });
  return (
  <section className="mt-8">
  <div className="screen-max-width">
    <p className="feature-text g_text text-center">
      <span className='g_text'>
        Autogas Nigeria, established in 2021, is focused on transforming Nigeria’s energy sector by promoting Compressed Natural Gas (CNG) as a cleaner and more cost-effective alternative to traditional fuels.
        </span> <br /> 
      <br /> 
      <span className='g_text'>
        The company provides vehicle conversion services, CNG refueling infrastructure, high-quality CNG equipment, and training. With a commitment to sustainability and innovation, Autogas Nigeria seeks to make CNG widely accessible for transportation, industry, and power generation, aiming to reduce reliance on petrol and diesel, lower carbon emissions, and drive economic growth through job creation.
        </span> 
      
      
    </p> 
  </div>
  <div className="flex justify-center w-full mt-8">
    <Button className='button align-middle' asChild>
      <Link href="/login">Learn More</Link>
    </Button>
  </div>
</section>

  )
}

export default IntroTextSection