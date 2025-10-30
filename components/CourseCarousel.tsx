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
import { cn } from "@/lib/utils"; // nếu bạn có utils cn, để merge class tailwind

interface CourseCarouselProps {
  courses: Course[];
}

export default function CourseCarousel({ courses }: CourseCarouselProps) {
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
    <section className="w-full py-8">
      <Carousel
        setApi={setApi}
        className="container mx-auto"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {courses.map((course) => (
            <CarouselItem
              key={course.id}
              className="md:basis-1/3 sm:basis-1/2 basis-full px-2"
            >
              <CourseCard course={course} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Nút điều hướng */}
        <CarouselPrevious className="hidden sm:flex bg-white hover:bg-gray-100 border border-gray-200" />
        <CarouselNext className="hidden sm:flex bg-white hover:bg-gray-100 border border-gray-200" />

        {/* Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                current === index
                  ? "w-6 bg-blue-600"
                  : "w-2 bg-blue-300 hover:bg-blue-400"
              )}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
