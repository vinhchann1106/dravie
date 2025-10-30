"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function BestTOEICLearnerCard({
  bgColor = "#357E3E",
}: {
  bgColor?: string;
}) {
  const s = {
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
  };

  return (
    <div
      className={"text-white p-6 rounded-2xl relative shadow-lg"}
      style={{ backgroundColor: bgColor }}
    >
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
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl p-2 text-white font-semibold text-sm text-left">
            {s.name}
          </div>
        </div>
        <div className="text-left flex-1">
          <p className="mb-4 text-sm leading-relaxed">{s.quote}</p>
          <div className="grid items-center gap-3 text-[#1b2b65]">
            <p className="text-2xl font-extrabold">
              <span className="text-amber-500">{s.scores.overall}</span>
              <span className="text-sm font-semibold"> TOEIC</span>
            </p>
            <div className="text-sm">
              <span>
                <b className="text-xl">{s.scores.listening}</b> Listening -{" "}
                <b className="text-xl">{s.scores.reading}</b> Reading
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
