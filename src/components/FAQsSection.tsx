'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { animateWithGsap } from '@/utils/animations';
import { useGSAP } from '@gsap/react';

export default function FAQs () {
  // State to manage which FAQ is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Sample FAQs data
  const faqs = [
    {
        question: 'Is CNG safe to use??',
        answer: "Yes, CNG is generally considered safe to use in vehicles. The storage tanks are designed with multiple safety features, including pressure relief valves and reinforced materials. CNG is also less likely to ignite than gasoline or diesel because it has a higher ignition temperature and dissipates quickly into the air if a leak occurs, reducing the risk of fire or explosion.",
    },
    {
        question: 'What are the benefits of using CNG as a fuel?',
        answer: 'Signs that you might benefit from therapy include feeling overwhelmed, persistent sadness or anxiety, difficulty coping with life changes, relationship challenges, or a lack of interest in activities you once enjoyed. If you find it hard to manage daily life or your emotions, seeking help from a therapist can be a positive step.',
    },
    {
        question: 'How far can a CNG vehicle travel on a full tank?',
        answer: 'You can schedule an appointment by visiting our website and using the online booking system, or you can call our office directly. Our team is here to assist you in finding a convenient time for your session.',
    },
    {
        question: 'Can CNG be used in all vehicles?',
        answer: 'No, therapy is beneficial for everyone, regardless of the severity of their mental health concerns. It can help with everyday stress, relationship issues, personal growth, and coping with life transitions, not just severe mental health issues.',
    },
    {
        question: 'How is CNG refueled?',
        answer: "It's not uncommon to feel stuck at times in therapy. Progress can be slow and may not always be linear. It's important to communicate with your therapist about your concerns, as they can help adjust your goals and approaches to better suit your needs.",
    },
];


      useGSAP(() => {

    // animateWithGsap("#exploreVideo")
    animateWithGsap("#faq_title", {
      y: 0,
      opacity: 1,
    });
   
  });


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="common-padding">
      <div className='screen-max-width'>
            {/* Section Title */}
              <div className="mb-12 w-full">
          <h1 id="faq_title" className="section-heading">
            Frequently Asked Questions
          </h1>
        </div>


   {/* Accordion */}
<div className="max-w-2xl mx-auto px-4"> {/* Added padding for smaller screens */}
  {faqs.map((faq, index) => (
    <motion.div
      key={index}
      className="border-b border-gray-300 mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className="flex justify-between items-center cursor-pointer py-4"
        onClick={() => toggleFAQ(index)}
      >
        <h5  className={`font-medium md:text-lg ${
      openIndex === index ? 'text-red-500' : 'text-textcolor'
    }`}> {/* Responsive text size */}
          {faq.question}
        </h5>
        {openIndex === index ? (
          <FaMinus className="text-l text-buttoncolor" />
        ) : (
          <FaPlus className="text-l text-textcolor" />
        )}
      </div>
      {openIndex === index && (
        <motion.div
          className="overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-textcolor text-sm md:text-base opacity-1 w-full text-justify"> {/* Responsive text size */}
            {faq.answer}
          </p>
        </motion.div>
      )}
    </motion.div>
  ))}
</div>
      </div>

    </section>
  );
};

