"use client";

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AutoScrollRowProps {
  children: ReactNode[];
  reverse?: boolean;
  speed?: number; // pixel/frame
  className?: string;
}

export default function AutoScrollRow({
  children,
  reverse = false,
  speed = 1,
  className,
}: AutoScrollRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    let frame: number;

    const loop = () => {
      if (!pausedRef.current) {
        offset += reverse ? -speed : speed;
        if (Math.abs(offset) >= track.scrollWidth / 2) offset = 0;
        track.style.transform = `translateX(${reverse ? offset : -offset}px)`;
      }
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [reverse, speed]);

  return (
    <div
      className={cn("relative w-full overflow-hidden select-none", className)}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div
        ref={trackRef}
        className="flex w-max gap-6 will-change-transform items-stretch"
      >
        {[...children, ...children].map((child, i) => (
          <div key={i} className="shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
