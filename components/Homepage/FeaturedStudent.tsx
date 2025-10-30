"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import BestIELTSLearnerCard from "../featured-student/BestIELTSLearnerCard";
import BestTOEICLearnerCard from "../featured-student/BestTOEICLearnerCard";

export default function FeaturedStudent() {
  const [activeTab, setActiveTab] = useState<"TOEIC" | "IELTS">("IELTS");

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-secondary-foreground mb-2 leading-tight">
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

      {/* Render card theo tab */}
      {activeTab === "IELTS" ? (
        <BestIELTSLearnerCard />
      ) : (
        <BestTOEICLearnerCard />
      )}
    </div>
  );
}
