"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const CHAR_DELAY_MS = 58;
const PAUSE_BETWEEN_LINES_MS = 500;

type MissionStoryProps = {
  id: string;
  eyebrow?: string;
  titleLines: readonly [string, string];
  stats?: readonly { value: string; label: string }[];
  image: { src: string; alt: string };
};

function TypewriterCursor() {
  return (
    <span className="ml-0.5 inline-block animate-pulse opacity-80">|</span>
  );
}

function TypewriterLines({
  line1,
  line2,
  fullLine1,
  fullLine2,
  variant,
}: {
  line1: string;
  line2: string;
  fullLine1: string;
  fullLine2: string;
  variant: "overlay" | "desktop";
}) {
  const isOverlay = variant === "overlay";
  const line1Typing = line1.length > 0 && line1.length < fullLine1.length;
  const line2Typing = line2.length > 0 && line2.length < fullLine2.length;

  const line1Class = isOverlay
    ? "font-display-lg text-[1.45rem] leading-[1.2] text-surface sm:text-[1.65rem]"
    : "font-display-lg text-[2rem] leading-[1.15] sm:text-[2.75rem] lg:text-display-lg";

  const line2Class = isOverlay
    ? "mt-3 max-w-[16rem] font-body-lg text-[0.95rem] leading-relaxed text-surface-container sm:max-w-xs sm:text-base"
    : "mt-4 font-body-lg text-base leading-relaxed text-surface-container sm:text-body-lg";

  return (
    <>
      <p className={line1Class}>
        {line1}
        {line1Typing ? <TypewriterCursor /> : null}
      </p>
      {line2.length > 0 ? (
        <p className={line2Class}>
          {line2}
          {line2Typing ? <TypewriterCursor /> : null}
        </p>
      ) : null}
    </>
  );
}

export function MissionStory({
  id,
  eyebrow,
  titleLines,
  stats,
  image,
}: MissionStoryProps) {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [isColor, setIsColor] = useState(false);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [fullLine1, fullLine2] = titleLines;

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setLine1(fullLine1);
      setLine2(fullLine2);
      setIsColor(true);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    let index = 0;

    const typeLine1 = () => {
      if (index < fullLine1.length) {
        setLine1(fullLine1.slice(0, index + 1));
        index += 1;
        timeoutId = setTimeout(typeLine1, CHAR_DELAY_MS);
        return;
      }

      timeoutId = setTimeout(typeLine2, PAUSE_BETWEEN_LINES_MS);
    };

    let line2Index = 0;

    const typeLine2 = () => {
      if (line2Index === 0) {
        setIsColor(true);
      }

      if (line2Index < fullLine2.length) {
        setLine2(fullLine2.slice(0, line2Index + 1));
        line2Index += 1;
        timeoutId = setTimeout(typeLine2, CHAR_DELAY_MS);
      }
    };

    typeLine1();

    return () => clearTimeout(timeoutId);
  }, [started, fullLine1, fullLine2]);

  return (
    <section
      id={id}
      ref={sectionRef}
      aria-label={`${fullLine1} ${fullLine2}`}
      className="overflow-hidden bg-on-surface py-12 text-surface sm:py-16 md:py-stack-lg"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:gap-10 sm:px-gutter-lg lg:grid-cols-2 lg:gap-gutter-lg">
        <Reveal className="order-2 md:order-1">
          {eyebrow ? (
            <span className="mb-4 block font-label-md text-label-md uppercase tracking-widest text-primary-container sm:mb-6">
              {eyebrow}
            </span>
          ) : null}

          <div className={`hidden sm:mb-8 md:block ${eyebrow ? "mb-6" : "mb-0"}`}>
            <TypewriterLines
              line1={line1}
              line2={line2}
              fullLine1={fullLine1}
              fullLine2={fullLine2}
              variant="desktop"
            />
          </div>

          {stats && stats.length > 0 ? (
            <div className="mt-8 grid grid-cols-2 gap-6 sm:mt-12 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="mb-1 font-headline-lg text-[1.75rem] text-primary-container sm:mb-2 sm:text-[2.5rem]">
                    {stat.value}
                  </p>
                  <p className="font-label-md text-[0.7rem] uppercase tracking-widest sm:text-label-md">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </Reveal>

        <Reveal className="relative order-1 w-full md:order-2" delay={200}>
          <div className="mission-image-wrap mx-auto w-full max-w-md border border-white/10 bg-white/5 p-3 backdrop-blur-sm sm:max-w-lg sm:p-4 lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={800}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                className={`mission-image-photo h-full w-full object-cover object-center ${
                  isColor ? "mission-image-photo--color" : ""
                }`}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-on-surface/50 px-6 text-center md:hidden">
                <TypewriterLines
                  line1={line1}
                  line2={line2}
                  fullLine1={fullLine1}
                  fullLine2={fullLine2}
                  variant="overlay"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
