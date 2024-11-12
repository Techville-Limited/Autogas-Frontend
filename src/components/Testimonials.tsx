"use client"
import React from 'react'
import { animateWithGsap } from '@/utils/animations';
import { useGSAP } from '@gsap/react';

const Testimonials = () => {


    useGSAP(() => {

    // animateWithGsap("#exploreVideo")
    animateWithGsap("#testimonials_title", {
      y: 0,
      opacity: 1,
    });
    animateWithGsap(
      ".g_grow",
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
    <section className='common-padding'>
        <div className='screen-max-width'>
             <div className="mb-12 w-full">
          <h1 id="testimonials_title" className="section-heading">
            Testimonials
          </h1>
          <h3 className='hiw-subtitle'>
What our clients are saying
          </h3>
        </div>
        </div></section>
  )
}

export default Testimonials