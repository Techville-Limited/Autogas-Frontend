// BlogCard.tsx
import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

interface BlogCardProps {
  coverImage: string;
  title: string;
  readDuration: string;
  datePublished: string;
  snippet: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  coverImage,
  title,
  readDuration,
  datePublished,
  snippet,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 1.1,
          duration: 0.5,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-sky-100 p-4 rounded-lg shadow-lg">
      <div className="overflow-hidden rounded-lg">
        <img
          ref={imageRef}
          src={coverImage}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 ease-out"
        />
      </div>
      <div className="mt-2 text-sm text-gray-500">{readDuration}</div>
      <h3 className="mt-2 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-gray-600">
        {snippet}
      </p>
      <div className="mt-3 flex justify-start items-center cursor-pointer text-blue-600 font-semibold">
        <span className="text-buttoncolor">Read More</span>
        <FaChevronRight className="ml-2 text-buttoncolor" />
      </div>
    </div>
  );
};

export default BlogCard;
