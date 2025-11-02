"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function HSKBanner() {
  return (
    <div className="container mx-auto py-8">
      <section className="flex flex-col md:flex-row items-center justify-between bg-[#E6F5E8] rounded-3xl px-8 md:px-16 py-16 overflow-hidden relative text-white">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl z-10"
        >
          <div className="text-sm font-semibold bg-[#C3E7C7] text-primary uppercase w-fit px-4 py-1 rounded-full rounded-bl-none mb-4">
            Học Tiếng Trung Online
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-primary/80">
            Học Tiếng Trung & Luyện Thi HSK
            <span className="text-secondary-foreground"> Dễ Dàng</span>
          </h1>

          <p className="text-accent font-normal mb-6 text-lg">
            Học tiếng Trung từ số 0 - DraVie đồng hành rèn khẩu ngữ
          </p>

          <Button
            size="lg"
            className="cursor-pointer flex items-center gap-2 bg-primary hover:bg-secondary-foreground text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all"
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
                  src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FPham_Thu_Thao_5b16272f6c.png&w=48&q=75"
                  alt="hocvien1"
                />
                <AvatarFallback>...</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FLe_Hieu_Nhi_e1a5628f4f.png&w=48&q=75"
                  alt="hocvien2"
                />
                <AvatarFallback>...</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FLe_Thanh_Linh_Thoai_7a764c7c38.png&w=48&q=75"
                  alt="hocvien3"
                />
                <AvatarFallback>...</AvatarFallback>
              </Avatar>
            </div>

            <div>
              <p className="text-sm font-semibold text-primary">
                <b>10.000+</b> học viên
              </p>
              <p className="text-sm text-primary/60">Đã học HSK tại DraVie</p>
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
          <div className="bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]" />
            <Image
              src="/hskpage/banner_student.webp"
              alt="Students HSK"
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
