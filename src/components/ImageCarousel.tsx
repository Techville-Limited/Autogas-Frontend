"use client";

import { hightlightsSlides } from "@/constants";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { replayImg, playImg, pauseImg } from "@/utils";

type ImageState = {
  isEnd: boolean;
  imageId: number;
  isLastImage: boolean;
  isPlaying: boolean;
};

type HighlightSlide = {
  id: number;
  image: string;
  textLists: string[];
};

interface ImageCarouselProps {}

const ImageCarousel: React.FC<ImageCarouselProps> = () => {
  const imageSpanRef = useRef<HTMLSpanElement[]>([]);
  const imageDivRef = useRef<HTMLSpanElement[]>([]);

  const [imageState, setImageState] = useState<ImageState>({
    isEnd: false,
    imageId: 0,
    isLastImage: false,
    isPlaying: true,
  });

  const { isEnd, isLastImage, imageId, isPlaying } = imageState;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * imageId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });
     gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#hero_text",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
  }, [imageId]);

  useEffect(() => {
    let currentProgress = 0;
    let span = imageSpanRef.current;

    if (span[imageId]) {
      let anim = gsap.to(span[imageId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(imageDivRef.current[imageId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });
            gsap.to(span[imageId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(imageDivRef.current[imageId], {
              width: "12px",
            });
            gsap.to(span[imageId], {
              backgroundColor: "#afafaf",
            });
            handleProcess("image-end");
          }
        },
        duration: 5,
      });

      if (imageId === 0) {
        anim.restart();
      }
    }
  }, [imageId, isPlaying]);

  const handleProcess = (type: string) => {
    switch (type) {
      case "image-end":
        if (imageId < hightlightsSlides.length - 1) {
          setImageState((prevState) => ({
            ...prevState,
            imageId: prevState.imageId + 1,
            isLastImage: prevState.imageId === hightlightsSlides.length - 2,
          }));
        } else {
          setImageState((prevState) => ({
            ...prevState,
            isLastImage: true,
            isEnd: true,
            imageId: 0,
          }));
        }
        break;
      case "image-reset":
        setImageState((prevState) => ({
          ...prevState,
          isLastImage: false,
          imageId: 0,
        }));
        break;
      case "play":
        setImageState((prevState) => ({
          ...prevState,
          isPlaying: true,
        }));
        break;
      case "pause":
        setImageState((prevState) => ({
          ...prevState,
          isPlaying: false,
        }));
        break;
      default:
        return imageState;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <img
                  id="image"
                  src={list.video}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div id="hero_text" className="absolute inset-0 flex items-center justify-center z-10">
                {list.textLists.map((text) => (
                  <h2 key={text} className="md:text-5xl text-3xl font-medium">
                    {text}
                  </h2>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {hightlightsSlides.map((_, i) => (
            <span
              key={i}
              ref={(el) => {(imageDivRef.current[i] = el!)}}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => {(imageSpanRef.current[i] = el!)}}
              />
            </span>
          ))}
        </div>
        {/* <button className="control-btn">
          <img
            src={isLastImage ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastImage ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastImage
                ? () => handleProcess("image-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button> */}
      
      </div>
    </>
  );
};

export default ImageCarousel;
