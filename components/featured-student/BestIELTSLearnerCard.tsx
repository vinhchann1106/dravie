"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function BestIELTSLearnerCard({
  bgColor = "#357E3E",
}: {
  bgColor?: string;
}) {
  const s = {
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
              <span className="text-sm font-semibold"> IELTS Overall</span>
            </p>
            <div className="flex flex-wrap gap-x-3 text-sm">
              <span>
                <b className="text-xl">{s.scores.listening}</b> Listening
              </span>
              <span>
                <b className="text-xl">{s.scores.reading}</b> Reading
              </span>
              <span>
                <b className="text-xl">{s.scores.speaking}</b> Speaking
              </span>
              <span>
                <b className="text-xl">{s.scores.writing}</b> Writing
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
