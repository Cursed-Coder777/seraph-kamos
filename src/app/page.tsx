"use client";

import { useEffect, useRef } from "react";
import Frame from "@/components/Frame";
import SmoothScroll from "@/components/SmoothScroll";
import HeroSection from "@/components/HeroSection";
import CenterSection from "@/components/CenterSection";
import ColumnSection from "@/components/ColumnSection";
import LinesSection from "@/components/LinesSection";
import SidesSection from "@/components/SidesSection";
import CenterTallSection from "@/components/CenterTallSection";
import GridSection from "@/components/GridSection";
import OutroSection from "@/components/OutroSection";
import ScrollAnimations from "@/components/ScrollAnimations";
import { preloadImages } from "@/lib/utils";

export default function Home() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    document.documentElement.classList.remove("no-js");
    preloadImages(".one").then(() => {
      document.body.classList.remove("loading");
    });
  }, []);

  return (
    <>
      <SmoothScroll />
      <main>
        <Frame />
        <HeroSection />
        <CenterSection />
        <ColumnSection />
        <LinesSection />
        <SidesSection />
        <CenterTallSection />
        <GridSection />
        <OutroSection />
        <p className="credits font-alt">
          <a href="https://tympanus.net/codrops/demos">Browse all demos</a>
        </p>
        <p className="credits font-alt">
          Made by <a href="https://x.com/codrops">@codrops</a>
        </p>
      </main>
      <ScrollAnimations />
    </>
  );
}
