"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '@/utils/animations';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const ConservationGraph = () => {

    const fullDataValues = {
    petrol: [8, 70, 3.5, 4, 6],
    cng: [10, 40, 2, 3, 4],
  };

      const [isInView, setIsInView] = useState(false);

     // Dummy data comparing petrol and CNG in different metrics
  const data = {
    labels: ["Fuel Efficiency", "CO₂ Emissions", "Fuel Cost", "Maintenance Cost", "Engine Wear"],
    datasets: [
      {
        label: "Petrol",
                data: isInView ? fullDataValues.petrol : Array(fullDataValues.petrol.length).fill(0),

        backgroundColor: "#2997FF", // Blue color
      },
      {
        label: "CNG",
        data: isInView ? fullDataValues.cng : Array(fullDataValues.cng.length).fill(0),
        backgroundColor: "#F53B01", // Red color
      },
    ],
  };

      useGSAP(() => {

    // animateWithGsap("#exploreVideo")
    animateWithGsap("#fvc_title", {
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


    const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            console.log("in view here");
            
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Comparison of Petrol vs CNG for Vehicle Use",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  

  return (
    <section className='mb-8'>
        <div className='screen-max-width'>
              <div className="mb-12 w-full">
          <h1 id="fvc_title" className="section-heading">
            Fueling the Future: CNG vs. Petrol
          </h1>
          <h3 className='hiw-subtitle'>
Comparing the Efficiency, Emissions, and Cost Savings of Compressed Natural Gas for Sustainable Transportation
          </h3>
        </div>
   <motion.div
    ref={ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% of item is visible
        >
          <Bar data={data} options={options} />
        </motion.div>
        </div>
    </section>
  )
}

export default ConservationGraph