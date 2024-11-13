"use client"
import { ourServices } from '@/constants';
import { animateWithGsap } from '@/utils/animations';
import { useGSAP } from '@gsap/react';
import React from 'react'
import ServiceCard from './ServiceCard';
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from 'react-slick';

const OurServices = () => {
      useGSAP(() => {

    // animateWithGsap("#exploreVideo")
    animateWithGsap("#features_title", {
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
          <h1 id="features_title" className="section-heading">
            Our Services
          </h1>
        </div>
          {/* Display blogs in a grid on large screens and in a slider on small screens */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {ourServices.map((service, index) => (
             <ServiceCard service={service} handleButtonClick={handleButtonClick} />
          ))}
        </div>
        <div className="lg:hidden">
          <Slider {...sliderSettings}>
            {ourServices.map((service, index) => (
              <div key={index} className="px-4">
               <ServiceCard service={service} handleButtonClick={handleButtonClick} />
              </div>
            ))}
          </Slider>
        </div>
         
        </div>
    </section>
  )
}

export default OurServices