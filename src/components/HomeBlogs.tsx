"use client"
import { animateWithGsap } from '@/utils/animations';
import { useGSAP } from '@gsap/react';
import React from 'react'

const HomeBlogs = () => {

    useGSAP(() => {

    // animateWithGsap("#exploreVideo")
    animateWithGsap("#home_blogs_title", {
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
          <h1 id="home_blogs_title" className="section-heading">
            Recent Blogs and News
          </h1>
          <h3 className='hiw-subtitle'>
Latest from Autogas
          </h3>
        </div>
        </div>
    </section>
  )
}

export default HomeBlogs