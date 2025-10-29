"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Course {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  rating: number;
  students: number;
  tag: string;
  price: number;
  oldPrice: number;
  discount: number;
}

interface CourseCarouselProps {
  courses: Course[];
}

export default function CourseCarousel({ courses }: CourseCarouselProps) {
  return (
    <section className="w-full py-8">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Khóa học online nổi bật
      </h2>

      <Carousel className="max-w-6xl mx-auto">
        <CarouselContent>
          {courses.map((course) => (
            <CarouselItem
              key={course.id}
              className="md:basis-1/3 sm:basis-1/2 basis-full px-2"
            >
              <Card className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <CardContent className="p-0">
                  <div className="relative w-full h-36">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                      STUDY4
                    </p>
                    <h3 className="font-bold text-sm text-gray-800 leading-snug mb-2">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {course.subtitle}
                    </p>

                    {/* Rating + học viên */}
                    <div className="flex items-center gap-1 text-yellow-500 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={
                            i < Math.round(course.rating) ? "#facc15" : "none"
                          }
                        />
                      ))}
                      <span className="text-gray-600 text-xs ml-1">
                        ({course.rating}){" "}
                        <span className="text-gray-500">
                          {course.students.toLocaleString()} Học viên
                        </span>
                      </span>
                    </div>

                    {/* Tag */}
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-md inline-block mb-2">
                      #{course.tag}
                    </span>

                    {/* Giá */}
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-semibold text-sm">
                        {course.price.toLocaleString()}đ
                      </span>
                      <span className="line-through text-gray-400 text-xs">
                        {course.oldPrice.toLocaleString()}đ
                      </span>
                      <span className="text-xs text-red-600 font-semibold">
                        -{course.discount}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Nút điều hướng */}
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}
