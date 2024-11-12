"use client"
import { whyChooseUs } from '@/constants';
import { logoImg, rectangleImg } from '@/utils';
import { animateWithGsap } from '@/utils/animations';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { FaCheckSquare } from "react-icons/fa"; // Using an icon for the filled checkbox
import { motion } from "framer-motion";



const WhyChooseUs = () => {

    useGSAP(() => {

       const timeline = gsap.timeline({
    repeat: -1, repeatDelay: 1, yoyo: true
  });

   gsap.to(".list-items", {
      x: 250,
      borderRadius: '100%',
      // stagger: 0.2,
      stagger: {
        amount: 1.5,
        grid: [1, 1],
        axis: 'x',
        ease: "circ.inOut",
        from: 'center'
      }
      
    });

    // animateWithGsap("#exploreVideo")
    animateWithGsap("#wcu_title", {
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
          <h1 id="wcu_title" className="section-heading">
            Why Choose Us
          </h1>
          <h2 className='hiw-subtitle'>
Why CNG is the future of Energy in Nigeria
          </h2>
        </div>
         <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 p-6 rounded-lg">

      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img src={rectangleImg} alt={'whyChooseUs'} className="rounded-lg shadow-lg w-full h-auto" />
      </div>

      {/* Text and Checkbox List Section */}
      <div className="w-full md:w-1/2 space-y-4">
        {whyChooseUs.map((feature, index) => (
             <motion.div
          key={index}
          className="flex items-center justify-center align-middle list-items"
          initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
          whileInView={{ x: 0, opacity: 1 }} // Animate to original position when in view
          transition={{
            delay: index * 0.2, // Add delay for each item to create a staggered effect
            duration: 0.5, // Duration of the slide-in animation
            type: "spring",
            stiffness: 50,
          }}
          viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% of item is visible
        >
          {/* Checkbox Icon */}
          <FaCheckSquare size={36} color="red" className="text-blue-500 mr-3 mt-1" />

          {/* Feature Text */}
          <p className="text-textcolor">{feature}</p>
        </motion.div>
        ))}
      </div>
    </div>
        </div>
        </section>
  )
}

export default WhyChooseUs