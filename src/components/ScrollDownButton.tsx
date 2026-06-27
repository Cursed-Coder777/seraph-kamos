"use client";

import { useEffect, useState } from "react";

export default function ScrollDownButton() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollDown = () => {
    const hero = document.querySelector(".content--inital");
    if (hero) {
      hero.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="pointer-events-none fixed bottom-8 left-0 z-[5000] flex w-full justify-center"
      style={{ opacity: hidden ? 0 : 1, transition: "opacity 0.7s" }}
    >
      <div
        onClick={scrollDown}
        onKeyDown={(e) => e.key === "Enter" && scrollDown()}
        role="button"
        tabIndex={0}
        className="scroll-down-btn pointer-events-auto flex w-[200px] cursor-pointer flex-col items-center justify-center gap-1 border-none bg-transparent text-white outline-none"
        style={{ height: "75px" }}
      >
        <svg
          className="scroll-down-arrow"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
        <span className="text-[clamp(0.65rem,1.5vw,0.8rem)] uppercase tracking-[0.2em]">
          scroll down
        </span>
      </div>
    </div>
  );
}
