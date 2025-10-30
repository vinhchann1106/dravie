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

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <Card className="flex flex-col h-full border border-blue-200 shadow-md hover:shadow-lg transition-all rounded-2xl bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-semibold text-blue-700">
            {course.title}
          </CardTitle>
          {course.discountPercent && (
            <Badge variant="secondary" className="bg-blue-600 text-white">
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
        <div className="text-2xl font-bold text-blue-700">
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
              <Users className="w-4 h-4 text-blue-600" />
              {course.students.toLocaleString()} học viên đã đăng ký
            </li>
          )}
          {course.hours && (
            <li className="flex items-center gap-2">
              <PlayCircle className="w-4 h-4 text-blue-600" />
              {course.hours} giờ bài học
            </li>
          )}
          {(course.topics || course.lessons) && (
            <li className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              {course.topics} chủ đề, {course.lessons} bài học
            </li>
          )}
          {course.exercises && (
            <li className="flex items-center gap-2">
              <PencilLine className="w-4 h-4 text-blue-600" />
              {course.exercises} bài tập thực hành
            </li>
          )}
          {course.duration && (
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
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
                <Check className="min-w-4 min-h-4 w-4 h-4 text-green-600 shrink-0" />
                <span className="flex-1">{desc}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      {/* Footer */}
      <CardFooter className="mt-auto">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Đăng ký học ngay
        </Button>
      </CardFooter>
    </Card>
  );
}
