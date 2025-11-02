"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function IELTSBanner() {
  return (
    <div className="container mx-auto py-8">
      <section className="container flex flex-col md:flex-row items-center justify-between bg-[#E7F1FF] rounded-3xl px-10  md:px-16 py-16 overflow-hidden relative">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl z-10"
        >
          {/* <div className="text-sm font-semibold text-blue-600 bg-blue-200 w-fit px-4 py-1 rounded-full rounded-bl-none mb-4">
            KHÓA HỌC IELTS
          </div> */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1b2c57] mb-4">
            Lộ trình Học & Luyện <span className="text-[#1A73E8]">IELTS</span>{" "}
            toàn diện
          </h1>
          <p className="text-gray-700 mb-6 text-lg">
            Nền tảng tự học có cam kết đầu ra.
          </p>
          <Button
            size="lg"
            className="cursor-pointer flex cursor-pointer items-center gap-2 bg-[#1A73E8] hover:bg-[#155cc0] text-white px-6 py-3 rounded-full font-medium shadow-md transition-all"
            onClick={() => {
              const section = document.querySelector("#courses");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Xem các khóa học <ArrowDown size={18} />
          </Button>

          <div className="flex items-center gap-3 mt-6">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
              <Avatar>
                <AvatarImage
                  src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FNgo_Nhung_cd29e69cea.png&w=48&q=75"
                  alt="@shadcn"
                />
                <AvatarFallback>...</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FNguyen_Thi_Linh_2996884c26.png&w=48&q=75"
                  alt="@maxleiter"
                />
                <AvatarFallback>...</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FDao_Hong_Ngoc_1_1e282447c3.jpg&w=48&q=75"
                  alt="@evilrabbit"
                />
                <AvatarFallback>...</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">
                50.000+ học viên
              </p>
              <p className="text-sm text-gray-600">Đã học IELTS tại DraVie</p>
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
          <div className="bg-[#1A73E8] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent)]" />
            <Image
              src="/ieltspage/banner_student.webp"
              alt="Students IELTS"
              width={400}
              height={400}
              className="relative z-10"
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
