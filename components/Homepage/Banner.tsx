"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#C3DC7A] to-[#F4F9CF] py-24 flex flex-col items-center text-center">
      {/* Hiệu ứng tròn lan tỏa */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />

      {/* Hai ảnh đan xen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mb-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/logo.png"
            alt="Bee speaking"
            width={200}
            height={200}
            className="drop-shadow-xl rotate-[6deg] translate-y-16"
          />
        </motion.div>
      </motion.div>

      {/* Tiêu đề chính */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-4xl md:text-6xl font-bold leading-tight text-[#264626]"
      >
        Nền tảng <span className="text-[#3E7A3E]">Học</span> <br />
        và <span className="text-[#79A85C]">Luyện thi</span> thông minh
      </motion.h1>

      {/* Nút CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-10"
      >
        <Button
          size="lg"
          className="cursor-pointer rounded-full px-8 py-6 text-lg font-semibold shadow-lg bg-white text-primary hover:bg-secondary-foreground/80 hover:text-white transition"
          onClick={() => {
            const section = document.querySelector("#feature-courses");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Khám phá ngay
        </Button>
      </motion.div>
    </section>
  );
}
