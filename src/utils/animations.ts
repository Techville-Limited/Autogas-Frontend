import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MutableRefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

interface AnimationProps {
  duration?: number;
  opacity?: number;
  x?: number;
  y?: number;
  scale?: number;
  rotation?: number;
  [key: string]: any;
}

interface ScrollProps {
  trigger?: string | Element;
  toggleActions?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  [key: string]: any;
}

export const animateWithGsap = (
  target: gsap.TweenTarget,
  animationProps: AnimationProps,
  scrollProps?: ScrollProps
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target as gsap.DOMTarget, // Cast target to gsap.DOMTarget here
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  rotationRef: MutableRefObject<{ rotation: { y: number } }>,
  rotationState: number,
  firstTarget: gsap.TweenTarget,
  secondTarget: gsap.TweenTarget,
  animationProps: AnimationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
