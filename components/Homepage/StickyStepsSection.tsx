import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionTitle from "../common/SectionTitle";

const steps = [
  {
    step: "Bước 1",
    title: "Thiết kế lộ trình học cá nhân hóa",
    desc: 'Lộ trình học được "may đo" theo "thông số riêng" của bạn và phù hợp với mục tiêu học tập.',
    img: "/homepage/step1.jpg",
  },
  {
    step: "Bước 2",
    title: "Học và theo dõi tiến bộ",
    desc: "Học tập, chấm chữa, theo dõi sự tiến bộ mỗi ngày và được hướng dẫn chi tiết.",
    img: "/homepage/step2.jpg",
  },
  {
    step: "Bước 3",
    title: "DraVie hỗ trợ đăng ký thi và vinh danh",
    desc: "Được hỗ trợ đăng ký thi, nhận quà và vinh danh học viên điểm cao.",
    img: "/homepage/step3.jpg",
  },
];

export default function StickyStepsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="">
      <SectionTitle
        title="Tối ưu hành trình Học & Luyện Thi với 3 bước dễ dàng"
        description='DraVie sẽ luôn đồng hành cùng bạn xuyên suốt hành trình khổ luyện cho đến ngày "hái quả ngọt"'
      />
      <div ref={containerRef} className="relative">
        {steps.map((step, i) => {
          const scale = useTransform(
            scrollYProgress,
            [i * 0.25, (i + 1) * 0.25],
            [0.95, 1]
          );
          const y = useTransform(
            scrollYProgress,
            [i * 0.25, (i + 1) * 0.25],
            [40, 0]
          );

          return (
            <motion.div
              key={i}
              style={{ scale, y, zIndex: steps.length - i }}
              className="sticky bottom-24 mx-auto mb-8 max-w-6xl rounded-3xl bg-linear-to-br from-primary to-accent-foreground p-8 flex flex-col lg:flex-row items-center gap-8 shadow-lg"
            >
              <div className="flex-1 text-white">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {step.step}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-base md:text-xl text-balance">{step.desc}</p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-full max-w-[320px] sm:max-w-[500px]">
                  <Image
                    src={step.img}
                    alt={step.title}
                    className="rounded-2xl object-contain w-full h-auto"
                    width={500}
                    height={300}
                    sizes="(max-width: 640px) 90vw, 500px"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
