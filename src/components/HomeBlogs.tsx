"use client"
import { animateWithGsap } from '@/utils/animations';
import { useGSAP } from '@gsap/react';
import React from 'react'
import BlogCard from './BlogCard';
import { blogs } from '@/constants';
import Slider from "react-slick";
import { getSnippet } from '@/utils/getSnippet';


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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };


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
          {/* Display blogs in a grid on large screens and in a slider on small screens */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
             <BlogCard
              key={index}
              coverImage={blog.coverImage}
              title={blog.title}
              readDuration={blog.readDuration}
              datePublished={blog.datePublished}
              snippet={getSnippet(blog.content, 20)} // 20 words as snippet
            />
          ))}
        </div>
        <div className="lg:hidden">
          <Slider {...sliderSettings}>
            {blogs.map((blog, index) => (
              <div key={index} className="px-4">
                <BlogCard
                  coverImage={blog.coverImage}
                  title={blog.title}
                  readDuration={blog.readDuration}
                  datePublished={blog.datePublished}
                  snippet={getSnippet(blog.content, 20)} // 20 words as snippet
                />
              </div>
            ))}
          </Slider>
        </div>
        </div>
    </section>
  )
}

export default HomeBlogs