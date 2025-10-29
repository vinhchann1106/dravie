"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const students = {
  TOEIC: {
    name: "Bảo Trân",
    image:
      "https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2FAnh_chup_Man_hinh_2024_08_08_luc_11_40_42_fbe554f7fb.png&w=375&q=95",
    quote:
      "Các đề trong Phòng Luyện ảo mình thấy sát với đề thực tế. Mình rất ưng phần chấm chữa chi tiết, phần này giải thích cho mình cả những lỗi sai lẫn câu đúng, từ đó mình cải thiện dần dần cả 2 kỹ năng Listening và Reading.",
    scores: {
      overall: "990",
      listening: "495",
      reading: "495",
    },
  },
  IELTS: {
    name: "Nguyễn Trần Ngân Giang",
    image:
      "https://prepedu.com/_next/image?url=https%3A%2F%2Fstatic-assets.prepcdn.com%2Fcontent-management-system%2Fe4cca935_ca8d_48e2_8942_adad36acb627_Ngan_Giang_1_3a0c84919d.jfif&w=375&q=95",
    quote:
      "Em thấy DraVie thiết kế bài giảng súc tích, nội dung dễ ghi nhớ, rất phù hợp với bạn mới học IELTS. Em có thể học mọi lúc mọi nơi, thậm chí chỉ cần điện thoại.",
    scores: {
      overall: "8.0",
      listening: "8.5",
      reading: "8.0",
      speaking: "7.5",
      writing: "7.0",
    },
  },
};

export default function FeaturedStudent() {
  const [activeTab, setActiveTab] = useState<"TOEIC" | "IELTS">("IELTS");
  const s = students[activeTab];

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-secondary-foreground mb-4 leading-tight">
        Chất lượng được minh chứng bởi
      </h2>
      <h2 className="text-2xl md:text-3xl font-extrabold text-accent mb-4 leading-tight">
        Hàng nghìn gương mặt xuất sắc
      </h2>

      {/* Tabs */}
      <div className="flex justify-center">
        {(["TOEIC", "IELTS"] as const).map((tab, idx) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-2 font-semibold rounded-b-none transition-all duration-300 
            ${
              idx === 0
                ? "rounded-l-lg rounded-r-none"
                : "rounded-r-lg rounded-l-none -ml-px"
            } 
            ${
              activeTab === tab
                ? "bg-primary/90 text-white"
                : "bg-gray-100 text-gray-500 hover:text-white hover:bg-primary/65"
            }`}
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Card */}
      <div className="bg-primary/90 text-white p-6 rounded-2xl relative shadow-lg">
        <h4 className="text-lg font-bold mb-4">
          Vinh danh học viên xuất sắc nhất tháng 10
        </h4>
        <div className="bg-white text-[#1b2b65] rounded-xl p-5 flex flex-col md:flex-row items-center md:items-start gap-5">
          <div className="shrink-0 relative w-40 h-40">
            <Image
              src={s.image}
              alt={s.name}
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent rounded-b-xl p-2 text-white font-semibold text-sm text-left">
              {s.name}
            </div>
          </div>
          <div className="text-left flex-1">
            <p className="mb-4 text-sm leading-relaxed">{s.quote}</p>
            <div className="grid items-center gap-3 text-[#1b2b65]">
              <p className="text-2xl font-extrabold">
                <span className="text-amber-400">{s.scores.overall}</span>
                {activeTab === "IELTS" ? (
                  <span className="text-sm font-semibold"> IELTS Overall</span>
                ) : (
                  <span className="text-sm font-semibold"> TOEIC</span>
                )}
              </p>
              {activeTab === "IELTS" ? (
                <div className="flex flex-wrap gap-x-3 text-sm">
                  <span>
                    <b>{s.scores.listening}</b> Listening
                  </span>
                  <span>
                    <b>{s.scores.reading}</b> Reading
                  </span>
                  <span>
                    <b>{(s.scores as any).speaking}</b> Speaking
                  </span>
                  <span>
                    <b>{(s.scores as any).writing}</b> Writing
                  </span>
                </div>
              ) : (
                <div className="text-sm">
                  <span>
                    <b>{s.scores.listening}</b> Listening -{" "}
                    <b>{s.scores.reading}</b> Reading
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
