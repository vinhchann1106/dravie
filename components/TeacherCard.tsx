"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type Teacher = {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
};

type Props = {
  teacher: Teacher;
  index?: number;
};

export default function TeacherCard({ teacher, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        y: -6,
        scale: 1.03,
        transition: { type: "spring", stiffness: 200, damping: 12 },
      }}
      className="h-full"
    >
      <Card className="h-full flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white border border-gray-100">
        <CardContent className="flex-1 p-6 flex flex-col items-center text-center space-y-3">
          {/* Avatar */}
          <motion.div
            className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-100"
            whileHover={{ rotate: 2 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <Image
              src={teacher.avatar}
              alt={teacher.name}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {teacher.name}
            </h3>
            <p className="text-sm text-blue-600 font-medium">{teacher.title}</p>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-600 leading-relaxed text-balance">
            {teacher.bio}
          </p>

          {/* Optional: spacer để căn đều */}
          <div className="flex-1" />
        </CardContent>
      </Card>
    </motion.div>
  );
}
