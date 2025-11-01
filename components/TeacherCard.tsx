"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Teacher } from "@/types/teacher";

type Props = {
  teacher: Teacher;
  index?: number;
  static?: boolean; // 👈 prop mới để kiểm soát animation
};

export default function TeacherCard({
  teacher,
  index = 0,
  static: isStatic = false,
}: Props) {
  // chuẩn hoá bio thành mảng dòng
  const bioItems: string[] = Array.isArray(teacher.bio)
    ? teacher.bio
    : teacher.bio
        .split(/\r?\n|,|;/)
        .map((s) => s.trim())
        .filter(Boolean);

  // Nếu static = true → không dùng motion
  const Wrapper = isStatic ? "div" : motion.div;

  return (
    <Wrapper
      {...(!isStatic && {
        initial: { opacity: 0, y: 40, scale: 0.98 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        transition: {
          delay: index * 0.1,
          duration: 0.6,
          ease: "easeOut",
        },
        viewport: { once: true, amount: 0.3 },
        whileHover: {
          y: -6,
          scale: 1.03,
          transition: { type: "spring", stiffness: 200, damping: 12 },
        },
      })}
      className="h-full"
    >
      <Card className="h-full flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white border border-gray-100">
        <CardContent className="flex-1 p-6 flex flex-col items-center text-center space-y-3">
          {/* Avatar */}
          <div
            className={`relative w-28 h-28 rounded-full overflow-hidden ring-6 ring-blue-100 ${
              isStatic
                ? ""
                : "transform transition-transform duration-300 hover:rotate-2"
            }`}
          >
            <Image
              src={teacher.avatar}
              alt={teacher.name}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {teacher.name}
            </h3>
            <p className="text-sm text-blue-600 font-medium">{teacher.title}</p>
          </div>

          {/* Bio list */}
          <ul className="text-sm text-gray-600 leading-relaxed text-left list-disc list-inside space-y-1 w-full max-w-xs">
            {bioItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className="flex-1" />
        </CardContent>
      </Card>
    </Wrapper>
  );
}
