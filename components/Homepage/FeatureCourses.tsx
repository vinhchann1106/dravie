"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const courses = [
  {
    title: "IELTS",
    description:
      "Học toàn diện 4 kỹ năng, chấm chữa cặn kẽ cùng giáo viên, luyện tập thông minh với phòng ảo Prep AI.",
    color: "from-[#2EA6FF] to-[#015BFE]",
    link: "/ielts",
  },
  {
    title: "TOEIC",
    description:
      "Lộ trình học tinh gọn, bật mí bí kíp về đích nhanh chóng, dễ dàng đạt mục tiêu khi luyện đề cùng phòng ảo Prep AI.",
    color: "from-[#2488FF] to-[#0038FF]",
    link: "/toeic",
  },
  {
    title: "HSK",
    description:
      "Xây nền chắc chắn, chuẩn chỉnh từ sơ cấp. Luyện tập khẩu ngữ cùng AI, tiến bộ rõ nét qua từng bài.",
    color: "from-[#1AFF88] to-[#009736]",
    link: "/hsk",
  },
  {
    title: "JLPT English",
    description:
      "Giao tiếp linh hoạt với bộ chủ đề có tính ứng dụng cao, thực hành và chấm chữa liên tục trong đa hoạt cảnh cùng phòng ảo nhập vai Prep AI.",
    color: "from-[#FFD83A] to-[#FF8A00]",
    link: "/jlpt",
  },
  {
    title: "TOPIK",
    description: "Lorem",
    color: "from-[#FF4B2B] to-[#FF0000]",
    link: "/topik",
  },
];

export default function FeatureCourses() {
  return (
    <section className="bg-[#F6F9FF] py-24 px-4 md:px-12 text-center">
      <div className="max-w-8xl mx-auto">
        {/* --- HEADER --- */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary-foreground mb-4 leading-tight">
          Tinh thông mọi ngôn ngữ <br />
          <span className="text-secondary-foreground">
            với bộ chương trình đào tạo chất lượng cao
          </span>
        </h2>
        <p className="text-[#334155] text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          Học ngoại ngữ thật dễ dàng với lộ trình Học &amp; Luyện Thi toàn diện,
          được cá nhân hóa riêng biệt.
        </p>

        {/* --- COURSE GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`group relative rounded-[32px] bg-gradient-to-br ${course.color} text-white p-8 flex flex-col justify-between shadow-lg overflow-hidden`}
            >
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">{course.title}</h3>
                <p className="text-sm leading-relaxed">{course.description}</p>
              </div>

              {/* --- BOTTOM BUTTON / ICON --- */}
              <div className="mt-8 flex justify-end items-center relative h-10">
                {/* Icon khi chưa hover */}
                <Link
                  href={course.link}
                  className="absolute inset-0 flex items-center justify-end transition-opacity duration-300 group-hover:opacity-0"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 hover:bg-white/20 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </Link>

                {/* Nút hiện khi hover */}
                <Link
                  href={course.link}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <div className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold">
                    Khám phá khóa học <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
