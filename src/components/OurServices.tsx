"use client"
import { ourServices } from '@/constants';
import { animateWithGsap } from '@/utils/animations';
import { useGSAP } from '@gsap/react';
import React from 'react'
import ServiceCard from './ServiceCard';
import { Swiper, SwiperSlide } from "swiper/react";

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

    // Define the higher-order function to handle the button click
  const handleButtonClick = (serviceId: number): void => {
    console.log(`Service with ID ${serviceId} was clicked`);
    // Add your functionality here, for example, navigate or display more info
  };

  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
             <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Our Services
          </h1>
        </div>
          <div className="feature-text-container">
                {/* Swiper for smaller screens */}
      <div className="sm:hidden">
        <Swiper
          spaceBetween={10} // Space between slides
          slidesPerView={1} // One slide per view on mobile
          loop={true} // Enable loop for continuous scrolling
          autoplay={{ delay: 3000 }} // Autoplay for the carousel
        >
          {ourServices.map((service) => (
            <SwiperSlide key={service.serviceId}>
              <ServiceCard service={service} handleButtonClick={handleButtonClick} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Flex Row for larger screens */}
      <div className="hidden sm:flex flex-wrap justify-center gap-6">
        {ourServices.map((service) => (
          <div key={service.serviceId} className="w-full sm:w-1/3 lg:w-1/4">
            <ServiceCard service={service} handleButtonClick={handleButtonClick} />
          </div>
        ))}
      </div>
              </div>
        </div>
    </section>
  )
}

export default OurServices