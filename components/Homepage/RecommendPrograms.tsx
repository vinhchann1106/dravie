"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import BeeSpeaking from "@/assets/img/bee_speaking.webp";

const programs = [
  {
    title: "IELTS",
    colorIcon: "bg-blue-500",
    color: "text-blue-500 border-blue-400 hover:bg-blue-600/25",
  },
  {
    title: "TOEIC",
    colorIcon: "bg-blue-500",
    color: "text-blue-500 border-blue-400 hover:bg-blue-600/25",
  },
  {
    title: "HSK",
    colorIcon: "bg-green-500",
    color: "text-green-500 border-green-400 hover:bg-green-600/25",
  },
  {
    title: "JLPT English",
    colorIcon: "bg-amber-500",
    color: "text-amber-500 border-amber-400 hover:bg-amber-600/25",
  },
  {
    title: "TOPIK",
    colorIcon: "bg-red-500",
    color: "text-red-500 border-red-400 hover:bg-red-600/25",
  }, // item thứ 5
];

export default function RecommendPrograms() {
  return (
    <div className="container mx-auto mt-20 px-6 relative">
      {/* Bee Image */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-10">
        <Image
          src={BeeSpeaking}
          alt="Bee mascot"
          width={180}
          height={180}
          className="w-[139px] md:w-[174px]"
        />
      </div>
      <section className=" min-h-[445px] bg-linear-to-b from-accent-foreground/90 to-primary rounded-[40px] text-white py-16 px-6 text-center overflow-hidden">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-extrabold leading-snug mt-16">
          Những chương trình học <br />
          có thể phù hợp với bạn
        </h2>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {programs.map((p) => (
            <Link
              key={p.title}
              href="#"
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
          ))}
        </div>
      </section>
    </div>
  );
}
