"use client";
import { motion } from "framer-motion";

type AnimationType = "slide" | "fade" | "blur" | "bounce";

export default function SectionTitle({
  title,
  description,
  align = "center",
  animation = "slide",
}: {
  title: string;
  description?: string;
  align?: string;
  animation?: AnimationType;
}) {
  const isCenter = align === "center" ? "text-center" : "text-left";

  // Container cho toàn bộ câu
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.15 * i,
      },
    }),
  };

  // Các kiểu animation cho từng từ
  const animations: Record<AnimationType, any> = {
    slide: {
      hidden: { opacity: 0, y: 25 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
      },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    },
    blur: {
      hidden: { opacity: 0, filter: "blur(8px)" },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
    bounce: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: [20, -6, 0],
        transition: { duration: 0.5, ease: "easeOut" },
      },
    },
  };

  const word = animations[animation];

  // Chia theo từ, giữ nguyên khoảng trắng thật
  const words = title.split(/(\s+)/).filter((w) => w.length > 0);

  return (
    <div className="container mx-auto">
      <div className="max-w-screen-3xl 3xl:px-[252px] md:px-3 lg:px-12 2xl:px-[112px]">
        <div className={`relative w-full ${isCenter} mb-16 overflow-hidden`}>
          {/* Hiệu ứng từng từ */}
          <motion.h2
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-secondary-foreground mb-4 leading-tight"
          >
            {words.map((wordText, index) =>
              wordText.trim() === "" ? (
                " "
              ) : (
                <span
                  key={index}
                  className="-my-2 inline-block overflow-hidden py-2 align-top"
                >
                  <motion.span
                    variants={word}
                    className="inline-block will-change-transform"
                  >
                    {wordText}
                  </motion.span>
                </span>
              )
            )}
          </motion.h2>

          {/* Mô tả */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-[#334155] text-lg md:text-xl max-w-3xl mx-auto mt-6"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
