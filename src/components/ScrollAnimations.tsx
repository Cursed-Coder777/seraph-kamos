"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

export default function ScrollAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const oneElement = document.querySelector<HTMLElement>(".one");
    const parentElement = oneElement?.parentNode as HTMLElement | null;
    const stepElements = [
      ...document.querySelectorAll<HTMLElement>("[data-step]"),
    ];

    if (!oneElement || !parentElement || stepElements.length === 0) return;

    let flipCtx: gsap.Context | null = null;

    const createFlipOnScrollAnimation = () => {
      flipCtx?.revert();

      flipCtx = gsap.context(() => {
        const states = stepElements.map((stepEl) =>
          Flip.getState(stepEl)
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: parentElement,
            start: "clamp(center center)",
            endTrigger: stepElements[stepElements.length - 1],
            end: "clamp(center center)",
            scrub: true,
            immediateRender: false,
          },
        });

        states.forEach((state, index) => {
          tl.add(
            Flip.fit(
              oneElement,
              state,
              index === 0
                ? { duration: 1, ease: "none" }
                : { duration: 1, ease: "sine.inOut" }
            ) as gsap.core.Tween,
            index ? "+=0.5" : 0
          );
        });
      });
    };

    const animateSpansOnScroll = () => {
      const spans = document.querySelectorAll<HTMLElement>(
        ".content__title > span"
      );

      spans.forEach((span, index) => {
        const direction = index % 2 === 0 ? -150 : 150;
        const triggerElement = span.closest(".content--center")
          ? (span.parentNode as HTMLElement)
          : span;

        gsap.from(span, {
          x: direction,
          duration: 1,
          ease: "sine",
          scrollTrigger: {
            trigger: triggerElement,
            start: "top bottom",
            end: "+=45%",
            scrub: true,
          },
        });
      });
    };

    const animateImagesOnScroll = () => {
      const images = document.querySelectorAll<HTMLElement>(
        ".content--lines .content__img:not([data-step]), .content--grid .content__img:not([data-step])"
      );

      images.forEach((image) => {
        gsap.fromTo(
          image,
          {
            scale: 0,
            autoAlpha: 0,
            filter: "brightness(180%) saturate(0%)",
          },
          {
            scale: 1,
            autoAlpha: 1,
            filter: "brightness(100%) saturate(100%)",
            duration: 1,
            ease: "sine",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "+=45%",
              scrub: true,
            },
          }
        );
      });
    };

    const addParallaxToText = () => {
      const firstTextElement = document.querySelector<HTMLElement>(
        ".content__text"
      );
      if (!firstTextElement) return;

      gsap.fromTo(
        firstTextElement,
        { y: 250 },
        {
          y: -250,
          ease: "sine",
          scrollTrigger: {
            trigger: firstTextElement,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    };

    const animateFilterOnFirstSwitch = () => {
      gsap.fromTo(
        oneElement,
        { filter: "brightness(80%)" },
        {
          filter: "brightness(100%)",
          ease: "sine",
          scrollTrigger: {
            trigger: parentElement,
            start: "clamp(top bottom)",
            end: "clamp(bottom top)",
            scrub: true,
          },
        }
      );
    };

    const addParallaxToColumnImages = () => {
      const columnImages = [
        ...document.querySelectorAll<HTMLElement>(
          ".content--column .content__img:not([data-step])"
        ),
      ];
      const totalImages = columnImages.length;
      const middleIndex = (totalImages - 1) / 2;

      columnImages.forEach((image, index) => {
        const intensity = Math.abs(index - middleIndex) * 75;

        gsap.fromTo(
          image,
          { y: intensity },
          {
            y: -intensity,
            ease: "sine",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    };

    const animateRelatedDemos = () => {
      const relatedSection = document.querySelector<HTMLElement>(".card-wrap");
      if (!relatedSection) return;

      const relatedDemos = [
        ...relatedSection.querySelectorAll<HTMLElement>(".card-wrap > .card"),
      ];

      gsap.from(relatedDemos, {
        scale: 0,
        ease: "sine",
        stagger: { each: 0.04, from: "center" },
        scrollTrigger: {
          trigger: relatedSection,
          start: "top bottom",
          end: "clamp(center center)",
          scrub: true,
        },
      });
    };

    createFlipOnScrollAnimation();
    animateSpansOnScroll();
    animateImagesOnScroll();
    addParallaxToText();
    addParallaxToColumnImages();
    animateFilterOnFirstSwitch();
    animateRelatedDemos();

    window.addEventListener("resize", createFlipOnScrollAnimation);

    return () => {
      window.removeEventListener("resize", createFlipOnScrollAnimation);
      flipCtx?.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
