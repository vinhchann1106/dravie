"use client";
import { motion } from "framer-motion";

type AnimationType = "slide" | "fade" | "blur" | "bounce";

export default function SectionTitle({
  title,
  description,
  align = "center",
  animation = "slide",
  color,
}: {
  title: string;
  description?: string;
  align?: "center" | "left" | "right";
  animation?: AnimationType;
  color?: string; // <--- Thêm prop này
}) {
  const isCenter =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  // Container animation
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

  // Animation từng từ
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
  const words = title.split(/(\s+)/).filter((w) => w.length > 0);

  // Style cho màu tiêu đề
  const titleStyle = color
    ? {
        color:
          color.startsWith("#") || color.startsWith("rgb") ? color : undefined,
      }
    : undefined;

  // Nếu là class Tailwind như "text-blue-600"
  const titleColorClass =
    color && !(color.startsWith("#") || color.startsWith("rgb"))
      ? color
      : "text-secondary-foreground";

  return (
    <div className="container mx-auto">
      <div className="max-w-screen-3xl 3xl:px-[252px] md:px-3 lg:px-12 2xl:px-[112px]">
        <div className={`relative w-full ${isCenter} mb-8`}>
          {/* Tiêu đề từng chữ */}
          <motion.h2
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className={`text-4xl md:text-5xl font-extrabold mb-4 leading-tight ${titleColorClass}`}
            style={titleStyle}
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
