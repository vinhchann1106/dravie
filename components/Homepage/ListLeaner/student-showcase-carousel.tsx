"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Learner {
  name: string;
  score: string;
  img: string;
}

interface StudentShowcaseCarouselProps {
  learners: Learner[];
}

export default function StudentShowcaseCarousel({
  learners,
}: StudentShowcaseCarouselProps) {
  const topRow = learners.slice(0, Math.ceil(learners.length / 2));
  const bottomRow = learners.slice(Math.ceil(learners.length / 2));

  // increase speeds here (topRow, bottomRow)
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <ScrollingRow learners={topRow} reverse={false} speed={1.2} />
      <ScrollingRow learners={bottomRow} reverse={true} speed={1.2} />
    </div>
  );
}

function ScrollingRow({
  learners,
  reverse,
  speed = 2.4,
}: {
  learners: Learner[];
  reverse?: boolean;
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    // use provided speed (higher value => faster)
    const step = speed;
    let frame: number;

    const loop = () => {
      if (!pausedRef.current) {
        offset += reverse ? -step : step;
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
      className="relative w-full overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div
        ref={trackRef}
        className={cn("flex gap-4 w-max transition-transform duration-300")}
      >
        {[...learners, ...learners].map((s, i) => (
          <Card
            key={i}
            className="min-w-[180px] hover:scale-105 transition-transform cursor-pointer"
          >
            <CardContent className="p-2 flex flex-col items-center">
              <div className="w-24 h-24 rounded-xl overflow-hidden mb-2">
                <Image
                  src={s.img}
                  alt={s.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-sm font-medium text-center">{s.name}</p>
              <p className="text-xs bg-blue-100 px-4 py-0.5 rounded-full text-blue-600 font-semibold">
                {s.score}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
