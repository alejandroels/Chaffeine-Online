"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  activeOnMount?: boolean;
  from?: "up" | "left" | "right";
};

export function Reveal({
  children,
  className = "",
  delay,
  activeOnMount = false,
  from = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (activeOnMount) {
      element.classList.add("active");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [activeOnMount]);

  return (
    <div
      ref={ref}
      className={`reveal reveal-from-${from} ${activeOnMount ? "active" : ""} ${className}`.trim()}
      style={delay !== undefined ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
