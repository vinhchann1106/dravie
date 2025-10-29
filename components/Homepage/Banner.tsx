"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BeeSpeakingImage from "@/assets/img/bee_speaking.webp";
export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#79A85C] via-[#C3DC7A] to-[#F4F9CF] py-32 flex flex-col items-center text-center">
      {/* Hiệu ứng tròn lan tỏa */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,transparent_70%)]" />

      {/* Emoji / mascot (nếu có) */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-4"
      >
        <Image
          src={BeeSpeakingImage.src}
          alt="Mascot học tập"
          width={100}
          height={100}
          className="drop-shadow-lg"
        />
      </motion.div>

      {/* Tiêu đề chính */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-[#264626] leading-tight"
      >
        Nền tảng <span className="text-[#3E7A3E]">Học</span> <br />
        và <span className="text-[#79A85C]">Luyện thi</span> thông minh
      </motion.h1>

      {/* Nút CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10"
      >
        <Button
          size="lg"
          className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg bg-[#3E7A3E] hover:bg-[#264626] text-[#F4F9CF]"
        >
          Khám phá ngay
        </Button>
      </motion.div>
    </section>
  );
}
