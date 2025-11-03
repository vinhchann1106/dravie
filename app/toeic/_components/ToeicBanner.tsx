"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function TOEICBanner() {
  return (
    <div className="container mx-auto py-8">
      <section className="flex flex-col md:flex-row items-center justify-between bg-[#0A2A66] rounded-3xl px-8 md:px-16 py-16 overflow-hidden relative text-white">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl z-10"
        >
          <div className="text-sm font-semibold bg-[#174EA6]/20 text-[#8BB8FF] w-fit px-4 py-1 rounded-full rounded-bl-none mb-4">
            KHÓA HỌC TOEIC
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Luyện Thi <span className="text-[#4F9EFF]">TOEIC</span> <br />
            Hiệu Quả!
          </h1>

          <p className="text-blue-100 mb-6 text-lg">
            Nền tảng tự học có cam kết đầu ra.
          </p>

          <Button
            size="lg"
            className="cursor-pointer flex items-center gap-2 bg-[#174EA6] hover:bg-[#1E63D0] text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all"
            onClick={() => {
              const section = document.querySelector("#courses");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Xem các khóa học <ArrowDown size={18} />
          </Button>

          {/* Avatars + Stats */}
          <div className="flex items-center gap-3 mt-6">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
              <Avatar>
                <AvatarImage
                  src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FPhan_Tran_My_Linh_ca26465fdf.png&w=48&q=75"
                  alt="hocvien1"
                />
                <AvatarFallback>...</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FPham_Tra_My_3fce5d1abf.png&w=48&q=75"
                  alt="hocvien2"
                />
                <AvatarFallback>...</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FHo_Thi_Chinh_d41e5b3d80.png&w=48&q=75"
                  alt="hocvien3"
                />
                <AvatarFallback>...</AvatarFallback>
              </Avatar>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                30.000+ học viên
              </p>
              <p className="text-sm text-blue-200">Đã học TOEIC tại DraVie</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center mt-10 md:mt-0"
        >
          <div className="bg-[#174EA6] rounded-3xl px-8 pb-8 pt-14 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]" />
            <Image
              src="/toeicpage/banner_student.jpg"
              alt="Students TOEIC"
              width={400}
              height={400}
              className="relative z-10 rounded-lg"
              priority
            />
            <div className="absolute top-4 left-4 bg-white/20 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm">
              👋 Welcome
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
