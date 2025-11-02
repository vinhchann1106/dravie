"use client";

import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ThumbsUp } from "lucide-react";
import { useMediaQuery } from "usehooks-ts"; // 👈 thêm lib này (npm i usehooks-ts)

export interface ReviewItem {
  id: number;
  name: string;
  avatar: string;
  likeCount: number;
  bodyContent: string;
}

interface ReviewCarouselProps {
  smallTitle?: string;
  title?: string;
  description?: string;
  reviews: ReviewItem[];
  colorFrom?: string; // e.g. "#06b6d4" or "rgba(59,130,246,1)" or "var(--primary)"
  colorTo?: string; // e.g. "#7c3aed" or "rgba(99,102,241,0.9)" or "var(--accent)"
}

export default function ReviewCarousel({
  smallTitle = "Sự tin tưởng",
  title = "Từ phía Học viên và phụ huynh",
  description = "Những tình cảm, niềm tin từ học viên chính là sự ghi nhận lớn nhất dành cho DraVie.",
  reviews,
  colorFrom = "#234C20", // slightly darker green
  colorTo = "#357F30", // slightly darker green
}: ReviewCarouselProps) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const [leftColumn, rightColumn] = useMemo(() => {
    const middle = Math.ceil(reviews.length / 2);
    return [reviews.slice(0, middle), reviews.slice(middle)];
  }, [reviews]);

  return (
    <section
      className="w-full py-16 px-6 rounded-3xl text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center">
        <div>
          <p className="uppercase text-sm tracking-widest font-semibold text-white/80">
            {smallTitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
          <p className="mt-3 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* ✅ Responsive cột scroll */}
        <div className="mt-12 relative w-full h-[600px]">
          {isMobile ? (
            // Mobile chỉ 1 cột
            <AutoScrollColumn direction="up" reviews={reviews} />
          ) : (
            // Desktop chia 2 cột
            <div className="grid grid-cols-2 gap-8 h-full">
              <AutoScrollColumn direction="up" reviews={leftColumn} />
              <AutoScrollColumn direction="down" reviews={rightColumn} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function AutoScrollColumn({
  direction,
  reviews,
}: {
  direction: "up" | "down";
  reviews: ReviewItem[];
}) {
  const duration = 300;
  const scrollVariants: any = {
    animate: {
      y: direction === "up" ? ["0%", "-100%"] : ["-100%", "0%"],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex flex-col gap-6"
        variants={scrollVariants}
        animate="animate"
      >
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={`${r.id}-${i}`} item={r} />
        ))}
      </motion.div>
    </div>
  );
}

function ReviewCard({ item }: { item: ReviewItem }) {
  return (
    <Card className="rounded-2xl bg-white text-gray-800 shadow-md w-full max-w-sm mx-auto hover:shadow-xl transition-all">
      <CardContent className="p-5 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Image
            src={item.avatar}
            alt={item.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <p className="font-semibold">{item.name}</p>
        </div>

        <div
          className="text-sm text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: item.bodyContent }}
        />

        <div className="flex items-center gap-3 mt-2 text-base text-gray-500 font-medium">
          <div className="flex items-center gap-x-1 text-yellow-500">
            <Star size={14} />
            <span>5</span>
          </div>
          <div className="flex items-center gap-x-1 text-blue-500">
            <ThumbsUp size={14} />
            <span>{item.likeCount}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
