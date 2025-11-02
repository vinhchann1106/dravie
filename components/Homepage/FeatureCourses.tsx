"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const courses = [
  {
    title: "IELTS",
    description:
      "Học toàn diện 4 kỹ năng, chấm chữa cặn kẽ cùng giáo viên, luyện tập thông minh với phòng ảo DraVie AI.",
    color: "from-[#2EA6FF] to-[#015BFE]",
    link: "/ielts",
  },
  {
    title: "TOEIC & CareerPath",
    description:
      "Lộ trình học tinh gọn, bật mí bí kíp về đích nhanh chóng, dễ dàng đạt mục tiêu khi luyện đề cùng phòng ảo DraVie AI.",
    color: "from-[#2488FF] to-[#0038FF]",
    link: "/toeic",
  },
  {
    title: "Tiếng Trung",
    description:
      "Xây nền chắc chắn, chuẩn chỉnh từ sơ cấp. Luyện tập khẩu ngữ cùng AI, tiến bộ rõ nét qua từng bài.",
    color: "from-[#1AFF88] to-[#009736]",
    link: "/hsk",
  },
  {
    title: "Tiếng Nhật",
    description:
      "Giao tiếp linh hoạt với bộ chủ đề có tính ứng dụng cao, thực hành và chấm chữa liên tục trong đa hoạt cảnh cùng phòng ảo nhập vai DraVie AI.",
    color: "from-[#FFD83A] to-[#FF8A00]",
    link: "/jlpt",
  },
  {
    title: "Tiếng Hàn",
    description:
      "Luyện thi TOPIK hiệu quả với lộ trình học tập bài bản, được cá nhân hóa theo từng cấp độ.",
    color: "from-[#FF4B2B] to-[#FF0000]",
    link: "/topik",
  },
];

export default function FeatureCourses() {
  return (
    <section
      id="feature-courses"
      className="bg-[#F6F9FF] py-24 px-4 md:px-12 text-center"
    >
      <div className="max-w-8xl mx-auto">
        <SectionTitle
          title="Tinh thông mọi ngôn ngữ với bộ chương trình đào tạo chất lượng cao"
          description="Học ngoại ngữ thật dễ dàng với lộ trình Học &amp; Luyện Thi toàn diện,
          được cá nhân hóa riêng biệt."
          animation="fade"
        />
        {/* --- COURSE GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`group relative rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] 
        bg-gradient-to-br ${course.color} text-white 
        p-5 sm:p-6 md:p-7 lg:p-8 
        flex flex-col justify-between 
        shadow-lg overflow-hidden`}
            >
              {/* --- Nội dung --- */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3">
                  {course.description}
                </p>
              </div>

              {/* --- BOTTOM BUTTON / ICON --- */}
              <div className="mt-6 sm:mt-8 flex justify-end items-center relative h-10">
                {/* Icon khi chưa hover */}
                <Link
                  href={course.link}
                  className="absolute inset-0 flex items-center justify-end transition-opacity duration-300 group-hover:opacity-0"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/40 hover:bg-white/20 transition-all">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </Link>

                {/* Nút hiện khi hover */}
                <Link
                  href={course.link}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <div
                    className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md 
            px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full 
            flex items-center gap-1.5 sm:gap-2 
            text-xs sm:text-sm font-semibold"
                  >
                    Khám phá{" "}
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
