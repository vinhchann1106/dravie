"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: "ielts",
    name: "IELTS",
    tests: [
      { id: "ielts-full", title: "IELTS Full Test 4 Skills", time: "02:00:00" },
      { id: "ielts-mini", title: "IELTS Practice Mini Test", time: "00:45:00" },
    ],
  },
  {
    id: "toeic",
    name: "TOEIC",
    tests: [
      {
        id: "toeic-full",
        title: "TOEIC Full Test (Listening + Reading)",
        time: "02:00:00",
      },
      {
        id: "toeic-quick",
        title: "TOEIC Quick Test (Listening + Reading)",
        time: "00:30:00",
      },
      { id: "toeic-entry", title: "TOEIC Entry test 4 KN", time: "00:30:00" },
    ],
  },
];

export default function FreeEntryTest() {
  const [selectedCourse, setSelectedCourse] = useState("toeic");
  const [selectedTest, setSelectedTest] = useState("");

  const currentCourse = courses.find((c) => c.id === selectedCourse);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto mt-8 gap-6">
      {/* LEFT: Courses */}
      <div className="flex flex-col w-full md:w-1/3 gap-2">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="flex items-center justify-center rounded-full size-5 text-xs bg-primary text-white font-semibold"
          >
            1
          </span>
          <h2 className="text-lg font-semibold">Chọn khóa học</h2>
        </div>

        {courses.map((course) => (
          <button
            key={course.id}
            onClick={() => {
              setSelectedCourse(course.id);
              setSelectedTest("");
            }}
            className={`cursor-pointer w-full rounded-lg border px-4 py-3 text-left transition-all
        ${
          selectedCourse === course.id
            ? "border-primary bg-primary/10 text-primary font-semibold"
            : "border-gray-200 hover:border-primary/50"
        }`}
          >
            {course.name}
          </button>
        ))}
      </div>

      {/* Responsive separator: horizontal on small screens, vertical on md+ */}
      <div aria-hidden className="md:hidden h-px bg-gray-200 w-full my-2" />
      <div aria-hidden className="hidden md:block w-px bg-gray-200 mx-4" />

      {/* RIGHT: Tests */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="flex items-center justify-center rounded-full size-5 text-xs bg-primary text-white font-semibold"
          >
            2
          </span>
          <h2 className="text-lg font-semibold">Chọn bài kiểm tra</h2>
        </div>

        <RadioGroup
          value={selectedTest}
          onValueChange={setSelectedTest}
          className="space-y-1"
        >
          {currentCourse?.tests.map((test) => (
            <div
              key={test.id}
              // items-start để radio và 2 dòng text bắt đầu từ cùng 1 trục
              className={`flex items-start gap-3 rounded-lg border px-4 py-3 transition-all cursor-pointer
      ${
        selectedTest === test.id
          ? "border-primary bg-primary/5"
          : "border-gray-200 hover:border-primary/40"
      }`}
              onClick={() => setSelectedTest(test.id)}
            >
              {/* Radio nhỏ, mt-1 để hơi dịch xuống cho khớp với dòng tiêu đề */}
              <RadioGroupItem
                value={test.id}
                id={test.id}
                className="h-5 w-5 mt-1 shrink-0 border-primary text-primary  data-[state=checked]:border-primary"
              />

              {/* label flex-1 để chiếm toàn bộ phần còn lại, flex-col cho 2 dòng */}
              <div className="flex-1">
                <label htmlFor={test.id} className="cursor-pointer select-none">
                  <div className="font-medium text-base leading-tight">
                    {test.title}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Thời gian làm bài: {test.time}
                  </div>
                </label>
              </div>
            </div>
          ))}
        </RadioGroup>

        {selectedTest && (
          <Button className="cursor-pointer mt-3 w-fit bg-primary hover:bg-primary/90 text-white">
            Bắt đầu làm bài
          </Button>
        )}
      </div>
    </div>
  );
}
