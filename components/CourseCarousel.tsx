"use client";

import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Course } from "@/types/course";
import CourseCard from "./CourseCard";

interface CourseCarouselProps {
  courses: Course[];
}

export default function CourseCarousel({ courses }: CourseCarouselProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // 🩵 FIX: re-init carousel sau khi mount
  useEffect(() => {
    setTimeout(() => {
      if (carouselRef.current) {
        window.dispatchEvent(new Event("resize"));
      }
    }, 200);
  }, []);

  return (
    <section className="w-full">
      <Carousel className="container mx-auto" ref={carouselRef}>
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

        <CarouselPrevious className="hidden sm:flex bg-white hover:bg-gray-200" />
        <CarouselNext className="hidden sm:flex bg-white hover:bg-gray-200" />
      </Carousel>
    </section>
  );
}
