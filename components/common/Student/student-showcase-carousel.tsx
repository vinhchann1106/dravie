"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Learner {
  name: string;
  overallScore: number | string;
  img: string;
  listeningScore?: string | number | null;
  readingScore?: string | number | null;
  speakingScore?: string | number | null;
  writingScore?: string | number | null;
}

interface StudentShowcaseCarouselProps {
  learners: Learner[];
  type: "IELTS" | "TOEIC";
}

export default function StudentShowcaseCarousel({
  learners,
  type,
}: StudentShowcaseCarouselProps) {
  const topRow = learners.slice(0, Math.ceil(learners.length / 2));
  const bottomRow = learners.slice(Math.ceil(learners.length / 2));

  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <ScrollingRow learners={topRow} type={type} reverse={false} speed={1.2} />
      <ScrollingRow
        learners={bottomRow}
        type={type}
        reverse={true}
        speed={1.2}
      />
    </div>
  );
}

function ScrollingRow({
  learners,
  type,
  reverse,
  speed = 2.4,
}: {
  learners: Learner[];
  type: "IELTS" | "TOEIC";
  reverse?: boolean;
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
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
            className="min-w-[250px] bg-white rounded-xl shadow-sm hover:shadow-md hover:scale-[1.03] transition-transform cursor-pointer"
          >
            <CardContent className="p-3 flex flex-col items-center">
              {/* Ảnh */}
              <div className="w-28 h-36 rounded-md overflow-hidden mb-2">
                <Image
                  src={s.img}
                  alt={s.name}
                  width={112}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Tên */}
              <p className="text-sm font-semibold text-center text-gray-800">
                {s.name}
              </p>

              {/* IELTS layout */}
              {type === "IELTS" ? (
                <>
                  {/* Subscores */}
                  <div className="text-xs  mt-1 flex gap-2 font-semibold">
                    <span>
                      L <b className="text-blue-700">{s.listeningScore}</b>
                    </span>
                    <span>
                      R <b className="text-blue-700">{s.readingScore}</b>
                    </span>
                    <span>
                      S <b className="text-blue-700">{s.speakingScore}</b>
                    </span>
                    <span>
                      W <b className="text-blue-700">{s.writingScore}</b>
                    </span>
                  </div>

                  {/* Overall */}
                  <div className="mt-1 flex items-center gap-1">
                    <span className="text-orange-500 font-bold text-2xl leading-none">
                      {Number(s.overallScore).toFixed(1)}
                    </span>
                    <div className="flex flex-col leading-none text-gray-500 font-semibold text-[10px]">
                      <span>IELTS</span>
                      <span>OVERALL</span>
                    </div>
                  </div>
                </>
              ) : (
                /* TOEIC layout */
                <>
                  <div className="text-xs text-blue-600 mt-1 flex gap-2 font-semibold">
                    <span>L {s.listeningScore}</span>
                    <span>R {s.readingScore}</span>
                  </div>

                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-blue-700 font-bold text-2xl leading-none">
                      {s.overallScore}
                    </span>
                    <span className="text-xs text-gray-500 font-semibold">
                      L&R
                    </span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
