"use client"
import React from 'react'
import { animateWithGsap } from '@/utils/animations';
import { useGSAP } from '@gsap/react';
import { testimonials } from '@/constants';
import TestimonialCard from './TestimonialCard';
import Slider from 'react-slick';

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

      const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

     // Define the higher-order function to handle the button click
  const handleButtonClick = (serviceId: number): void => {
    console.log(`Service with ID ${serviceId} was clicked`);
    // Add your functionality here, for example, navigate or display more info
  };



  return (
    <section className='mb-8'>
        <div className='screen-max-width'>
             <div className="mb-12 w-full">
          <h1 id="testimonials_title" className="section-heading">
            Testimonials
          </h1>
          <h3 className='hiw-subtitle'>
What our clients are saying
          </h3>
        </div>
          {/* Display blogs in a grid on large screens and in a slider on small screens */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
        </div>
        <div className="lg:hidden">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
               <TestimonialCard key={index} {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
        </div></section>
  )
}

export default Testimonials