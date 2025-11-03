"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const container: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

const item: any = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Banner() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative overflow-hidden bg-gradient-to-b from-[#bef872] to-[#F7FDF0] py-24 flex flex-col items-center text-center px-6"
    >
      {/* Soft radial glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -left-32 top-10 w-[420px] h-[420px] bg-gradient-to-br from-[#CFF1A8] to-transparent rounded-full opacity-60 blur-3xl" />
        <div className="absolute -right-32 bottom-8 w-[360px] h-[360px] bg-gradient-to-tr from-[#D7F7E6] to-transparent rounded-full opacity-50 blur-2xl" />
      </div>

      {/* Logo / Illustration */}
      <motion.div
        variants={item}
        className="relative mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          whileHover={{ rotate: 3, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Image
            src="/logo.png"
            alt="DraViE logo (high-res)"
            // increase intrinsic size so Next/Image serves a higher-res image
            width={800}
            height={800}
            priority
            quality={100}
            // display at desired CSS size while keeping a high-res source
            className="drop-shadow-2xl rotate-[6deg] translate-y-12 w-48 h-48 object-contain"
            // subtle contrast/saturation boost to look crisper
            style={{ filter: "contrast(1.03) saturate(1.06)" }}
          />
        </motion.div>
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={item}
        className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl text-[#163D1E]"
        aria-label="Học Ngôn ngữ – Mở Tầm Tri Thức"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block bg-clip-text text-transparent bg-gradient-to-r from-[#1F7A2F] via-[#3EA84A] to-[#8BF59A]"
        >
          Học Ngôn ngữ — Mở Tầm Tri Thức
        </motion.span>

        <motion.span
          variants={item}
          className="block mt-3 text-lg md:text-2xl font-semibold text-[#274A2A]"
        >
          DraViE — Nền tảng học thông minh, kết nối tri thức Việt Nam với thế
          giới.
        </motion.span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={item}
        className="mt-4 text-sm md:text-base max-w-3xl text-muted-foreground italic"
      >
        Lộ trình học cá nhân hóa với AI — học nhiều ngôn ngữ: Anh, Trung, Hàn,
        Nhật.
      </motion.p>

      {/* Avatars + Stats */}
      <motion.div
        variants={item}
        className="flex items-center gap-4 mt-6 text-start"
      >
        <div className="flex -space-x-3 items-center">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            <Avatar>
              <AvatarImage
                src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FPham_Thu_Thao_5b16272f6c.png&w=48&q=75"
                alt="hocvien1"
              />
              <AvatarFallback>PT</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            <Avatar>
              <AvatarImage
                src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FLe_Hieu_Nhi_e1a5628f4f.png&w=48&q=75"
                alt="hocvien2"
              />
              <AvatarFallback>LN</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            <Avatar>
              <AvatarImage
                src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FLe_Thanh_Linh_Thoai_7a764c7c38.png&w=48&q=75"
                alt="hocvien3"
              />
              <AvatarFallback>LT</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            <Avatar>
              <AvatarImage
                src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FNgo_Nhung_cd29e69cea.png&w=48&q=75"
                alt="hocvien4"
              />
              <AvatarFallback>...</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            <Avatar>
              <AvatarImage
                src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FNguyen_Thi_Linh_2996884c26.png&w=48&q=75"
                alt="hocvien5"
              />
              <AvatarFallback>...</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
            <Avatar>
              <AvatarImage
                src="https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FDao_Hong_Ngoc_1_1e282447c3.jpg&w=48&q=75"
                alt="hocvien63"
              />
              <AvatarFallback>...</AvatarFallback>
            </Avatar>
          </motion.div>
        </div>

        <div>
          <p className="text-sm font-extrabold text-[#2F4F2F]">
            <span className="text-emerald-700">100.000+</span> học viên
          </p>
          <p className="text-sm text-muted-foreground">
            Đã và đang học tập trên DraViE.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div variants={item} className="mt-10">
        <motion.div
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            size="lg"
            className="cursor-pointer rounded-full px-8 py-4 text-lg font-semibold shadow-lg bg-white text-primary hover:bg-emerald-600 hover:text-white transition"
            onClick={() => {
              const section = document.querySelector("#feature-courses");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Khám phá ngay"
          >
            Khám phá ngay
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
