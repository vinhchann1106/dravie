"use client";

import { Clock, Users, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface IeltsCardProps {
  title: string;
  duration: string;
  participants: number;
  comments: number;
  sections: number;
  questions: number;
  tags: string[];
  onDetail?: () => void;
}

export default function IeltsCard({
  title,
  duration,
  participants,
  comments,
  sections,
  questions,
  tags,
  onDetail,
}: IeltsCardProps) {
  return (
    <Card className="w-64 rounded-2xl border p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition">
      <CardContent className="p-0">
        <h3 className="font-semibold text-base mb-2">{title}</h3>
        <div className="text-sm text-gray-600 flex items-center gap-2 mb-1">
          <Clock className="w-4 h-4" /> {duration}
          <span className="flex items-center gap-1 ml-3">
            <Users className="w-4 h-4" /> {participants.toLocaleString()}
          </span>
          <span className="flex items-center gap-1 ml-3">
            <MessageSquare className="w-4 h-4" /> {comments}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          {sections} phần thi | {questions} câu hỏi
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>

      <Button
        onClick={onDetail}
        className="w-full bg-white border text-blue-600 hover:bg-blue-50"
      >
        Chi tiết
      </Button>
    </Card>
  );
}
