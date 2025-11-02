"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const programs = [
  {
    title: "IELTS",
    link: "/ielts",
    colorIcon: "bg-blue-500",
    color: "text-blue-500 border-blue-400 hover:bg-blue-600/25",
  },
  {
    title: "TOEIC & CareerPath",
    link: "/toeic",
    colorIcon: "bg-blue-500",
    color: "text-blue-500 border-blue-400 hover:bg-blue-600/25",
  },
  {
    title: "Tiếng Trung",
    link: "/hsk",
    colorIcon: "bg-green-500",
    color: "text-green-500 border-green-400 hover:bg-green-600/25",
  },
  {
    title: "Tiếng Nhật",
    link: "/jlpt",
    colorIcon: "bg-amber-500",
    color: "text-amber-500 border-amber-400 hover:bg-amber-600/25",
  },
  {
    title: "Tiếng Hàn",
    link: "/topik",
    colorIcon: "bg-red-500",
    color: "text-red-500 border-red-400 hover:bg-red-600/25",
  },
];

export default function RecommendPrograms() {
  // Container animation
  const container: any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  // Child fade-up
  const item: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Letter animation for title
  const letter: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="container mx-auto mt-20 px-6 relative">
      {/* Bee Image */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 z-10"
      >
        <Image
          src="/logo.png"
          alt="Bee mascot"
          width={180}
          height={180}
          className="w-[139px] md:w-[174px]"
        />
      </motion.div>

      {/* Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="min-h-[445px] bg-linear-to-b from-accent-foreground/90 to-primary rounded-[40px] text-white py-16 px-6 text-center overflow-hidden"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-extrabold leading-snug mt-16 text-center"
        >
          Những chương trình học <br />
          có thể phù hợp với bạn
        </motion.h2>

        {/* Buttons animation */}
        <motion.div
          variants={container}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {programs.map((p, idx) => (
            <motion.div key={idx} variants={item}>
              <Link
                href={p.link}
                className={`group flex items-center gap-3 border ${p.color} bg-white/5 rounded-full px-6 py-3 transition-all duration-200`}
              >
                <span
                  className={`flex items-center justify-center ${p.colorIcon} text-white rounded-full p-2`}
                >
                  <Star
                    className={`${p.color.replace("text-", "fill-")} w-4 h-4`}
                  />
                </span>
                <span className="font-semibold text-white">{p.title}</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
