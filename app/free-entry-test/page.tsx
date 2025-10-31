"use client";
import SectionTitle from "@/components/common/SectionTitle";
import FreeEntryTest from "@/components/FreeEntryTest";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="container px-4 mx-auto">
      <section className="my-12">
        <SectionTitle
          title="Kiểm tra đầu vào"
          description="Miễn phí kiểm tra trình độ đầu vào ngay hôm nay để nhận lộ trình học tập phù hợp nhất!"
        />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FreeEntryTest />
        </motion.div>
      </section>
    </div>
  );
}
