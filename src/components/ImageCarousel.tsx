"use client";

import { hightlightsSlides } from "@/constants";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { replayImg, playImg, pauseImg } from "@/utils";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import ReusableFormDialog from "./ReusableFormDialog";

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
    const imageRef = useRef<HTMLImageElement | HTMLVideoElement>();
  const imageSpanRef = useRef<HTMLSpanElement[]>([]);
  const imageDivRef = useRef<HTMLSpanElement[]>([]);

  const [imageState, setImageState] = useState<ImageState>({
    isEnd: false,
    imageId: 0,
    isLastImage: false,
    isPlaying: true,
  });

  const { isEnd, isLastImage, imageId, isPlaying } = imageState;

  const [openConferenceForm, setOpenConferenceForm] = useState<boolean>(false);

  // Define dropdown options for specific fields
const genderOptions = ["Male", "Female", "Other"];
const stateOptions = ["Lagos", "Abuja", "Kano", "Rivers"];
const hearAboutOptions = ["Social Media", "Friend", "Advertisement", "Other"];

const fields = [
  { name: "firstName", label: "First Name", type: "text", placeholder: "Enter your first name", validation: z.string().min(1, "First name is required") },
  { name: "lastName", label: "Last Name", type: "text", placeholder: "Enter your last name", validation: z.string().min(1, "Last name is required") },
  { name: "email", label: "Email", type: "email", placeholder: "Enter your email", validation: z.string().email("Invalid email address") },
  { name: "occupation", label: "Occupation", type: "text", placeholder: "Enter your occupation" },
  { name: "gender", label: "Gender", type: "select", options: genderOptions },
  { name: "phoneNumber", label: "Phone Number", type: "text", placeholder: "Enter your phone number", validation: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits") },
  { name: "state", label: "State of Residence", type: "select", options: stateOptions },
  { name: "hearAboutUs", label: "How did you hear about us?", type: "select", options: hearAboutOptions },
];


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

  const handleSubmit = (values: any) => {
    console.log("form values", values);
  }

  // useEffect(() => {
  //   if (imageRef){//.current[imageId]) {
  //     // Zoom-in-and-out animation for the current image
  //     gsap.fromTo(
  //       imageRef,//.current[imageId],
  //       { scale: 1.2, filter: "blur(2px)" },
  //       { scale: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.inOut" }
  //     );
  //   }
  // }, [imageId]);

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

  const handleRegisterForm = () => {
    setOpenConferenceForm(true)
  }

  return (
    <>
      <div className="flex flex-1 items-center ">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-[80%] flex-center rounded-3xl overflow-hidden bg-black">
                {list.mediaType === "video" ? (
                <video
                  ref={imageRef as React.RefObject<HTMLVideoElement>}
                  src={list.media}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-500 ease-out"
                />
              ) : (
                <img
                  ref={imageRef as React.RefObject<HTMLImageElement>}
                  src={list.media}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover rounded-3xl filter blur-[1px] ease-out"
                />
              )}
              </div>
              
               {/* Header Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-white">
                <h2 className="md:text-5xl text-3xl font-medium">{list.headerText}</h2>
                <p className="md:text-lg text-base mt-2">{list.smallerText}</p>
                    {(list.contentType === "form" || list.contentType === "nav") && (
                <div className="mt-12 bottom-4 right-4">
                  <button className="bg-buttoncolor text-white py-2 px-4 rounded-lg shadow-md" onClick={handleRegisterForm}>
                    {list.buttonText}
                  </button>
                </div>
              )}
              </div>

              {/* Conditionally Render Button */}
           
              
          
            </div>
          </div>
        ))}
        
      </div>
       <div className="relative flex-center mt-4">
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
        
                 <Dialog open={openConferenceForm} onOpenChange={setOpenConferenceForm}>
        <DialogContent className="max-w-5xl p-6 bg-white">
          <DialogHeader>
            <DialogTitle className="font-bold text-textcolor text-3xl">Register For Conference</DialogTitle>
          </DialogHeader>
          <div className="screen-max-width">
            // @ts-ignore
<ReusableFormDialog title="Sign Up Form" fields={fields} onSubmit={handleSubmit} />
          </div>
                

          </DialogContent>
          </Dialog>
    </>
  );
};

export default ImageCarousel;
