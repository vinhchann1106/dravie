"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Check,
  Clock,
  PencilLine,
  PlayCircle,
  Users,
} from "lucide-react";
import { Course } from "@/types/course";
import useCart from "@/hooks/useCart";
import { toast } from "sonner"; // 👈 Dùng sonner mới

export default function CourseCard({
  course,
  color = "#2563eb",
}: {
  course: Course;
  color?: string;
}) {
  const { cart, handleAdd } = useCart();

  const addCourse = () => {
    const alreadyInCart = cart.some((c) => c.id === course.id);

    if (alreadyInCart) {
      toast.warning("Khóa học đã có trong giỏ hàng 🛒", {
        description: course.title,
      });
      return;
    }

    handleAdd(course);
    toast.success("Đã thêm vào giỏ hàng!", {
      description: course.title,
    });
  };

  return (
    <Card
      className="flex flex-col h-full border shadow-md hover:shadow-lg transition-all rounded-2xl"
      style={{
        borderColor: color + "33",
        background: `linear-gradient(to bottom right, ${color}10, #fff)`,
      }}
    >
      {/* Header */}
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-semibold" style={{ color }}>
            {course.title}
          </CardTitle>
          {course.discountPercent && (
            <Badge
              variant="secondary"
              style={{
                backgroundColor: color,
                color: "#fff",
              }}
            >
              -{course.discountPercent}%
            </Badge>
          )}
        </div>
        {course.tag && (
          <p className="text-sm text-gray-500 mt-1">{course.tag}</p>
        )}
      </CardHeader>

      {/* Content */}
      <CardContent className="flex-1 space-y-3">
        <div className="text-2xl font-bold" style={{ color }}>
          {course.price.toLocaleString()}đ
          {course.oldPrice && (
            <span className="text-sm line-through text-gray-400 ml-2">
              {course.oldPrice.toLocaleString()}đ
            </span>
          )}
        </div>

        {/* Thông tin chi tiết */}
        <ul className="space-y-1 text-gray-700 text-sm">
          {course.students && (
            <li className="flex items-center gap-2">
              <Users className="w-4 h-4" style={{ color }} />
              {course.students.toLocaleString()} học viên đã đăng ký
            </li>
          )}
          {course.hours && (
            <li className="flex items-center gap-2">
              <PlayCircle className="w-4 h-4" style={{ color }} />
              {course.hours} giờ bài học
            </li>
          )}
          {(course.topics || course.lessons) && (
            <li className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" style={{ color }} />
              {course.topics} chủ đề, {course.lessons} bài học
            </li>
          )}
          {course.exercises && (
            <li className="flex items-center gap-2">
              <PencilLine className="w-4 h-4" style={{ color }} />
              {course.exercises} bài tập thực hành
            </li>
          )}
          {course.duration && (
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4" style={{ color }} />
              Khóa học có giá trị trong {course.duration}.
            </li>
          )}
        </ul>

        {/* Mô tả khóa học */}
        {course.description && (
          <ul className="space-y-1 mt-3 border-t pt-2">
            {course.description.map((desc, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-gray-700 leading-relaxed"
              >
                <Check
                  className="min-w-4 min-h-4 w-4 h-4 shrink-0"
                  style={{ color: "#16a34a" }}
                />
                <span className="flex-1">{desc}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      {/* Footer */}
      <CardFooter className="mt-auto">
        <Button
          onClick={addCourse}
          className="w-full text-white hover:-translate-y-1 hover:drop-shadow-xl ease-out duration-300 cursor-pointer"
          style={{
            backgroundColor: color,
            boxShadow: `0 2px 6px ${color}55`,
          }}
        >
          Thêm vào giỏ
        </Button>
      </CardFooter>
    </Card>
  );
}
