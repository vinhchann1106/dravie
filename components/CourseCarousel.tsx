"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Course } from "@/types/course";
import CourseCard from "./CourseCard";
import type { CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default function CourseCarousel({
  courses,
  hexColor,
}: {
  courses: Course[];
  hexColor: string;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect((): any => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);
    onSelect();
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <section className="w-full py-8 overflow-hidden">
      {" "}
      {/* ✅ fix scroll ngang */}
      <div className="max-w-6xl mx-auto">
        {" "}
        {/* ✅ giới hạn width hợp lý */}
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {/* ✅ offset padding px-2 trong item */}
            {courses.map((course) => (
              <CarouselItem
                key={course.id}
                className="md:basis-1/3 sm:basis-1/2 basis-full pl-2"
              >
                <CourseCard course={course} color={hexColor} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Nút điều hướng */}
          <CarouselPrevious className="hidden sm:flex bg-white hover:bg-gray-100 border border-gray-200" />
          <CarouselNext className="hidden sm:flex bg-white hover:bg-gray-100 border border-gray-200" />

          {/* Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: count }).map((_, index) => {
              const isActive = current === index;

              return (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  style={{
                    width: isActive ? "1.5rem" : "0.5rem", // 6 hoặc 2
                    height: "0.5rem",
                    borderRadius: "9999px",
                    backgroundColor: isActive ? hexColor : `${hexColor}55`, // màu nhạt hơn khi chưa active
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (
                        e.currentTarget as HTMLElement
                      ).style.backgroundColor = `${hexColor}88`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (
                        e.currentTarget as HTMLElement
                      ).style.backgroundColor = `${hexColor}55`;
                    }
                  }}
                />
              );
            })}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
