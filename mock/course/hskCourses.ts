export interface CoursePackage {
  id: string;
  name: string;
  price: number;
  description: string;
  levels: [string, string]; // [từ, đến]
  type: "Tự học" | "Kèm giáo viên";
}

export const hskCourses: CoursePackage[] = [
  {
    id: "hsk1-2-self",
    name: "Tự học chủ động",
    price: 4000000,
    description: "Bao gồm toàn bộ tài liệu, video và bài luyện cho HSK 2.",
    levels: ["HSK 1", "HSK 2"],
    type: "Tự học",
  },
  {
    id: "hsk1-2-teacher",
    name: "Luyện thi cùng giáo viên",
    price: 6500000,
    description:
      "Lộ trình học HSK 1 → 2 kèm 1-1 với giáo viên, theo sát tiến độ.",
    levels: ["HSK 1", "HSK 2"],
    type: "Kèm giáo viên",
  },
  {
    id: "hsk4-5-self",
    name: "Tự học chủ động",
    price: 6000000,
    description:
      "Lộ trình chinh phục HSK từ 4 đến 5, phù hợp người đã có nền tảng.",
    levels: ["HSK 4", "HSK 5"],
    type: "Tự học",
  },
  {
    id: "hsk4-5-teacher",
    name: "Học cùng giáo viên 1-1",
    price: 8500000,
    description:
      "Giáo viên theo sát từng kỹ năng, hướng dẫn ôn luyện HSK 5 chi tiết.",
    levels: ["HSK 4", "HSK 5"],
    type: "Kèm giáo viên",
  },
  {
    id: "hsk2-3-self",
    name: "Khóa tự học tăng tốc",
    price: 4500000,
    description:
      "Khóa tự học HSK 2 → 3 giúp củng cố ngữ pháp và từ vựng nâng cao.",
    levels: ["HSK 2", "HSK 3"],
    type: "Tự học",
  },
  {
    id: "hsk2-3-teacher",
    name: "Lớp luyện HSK 3 cùng giáo viên",
    price: 7500000,
    description:
      "Khóa học HSK 2 → 3 có giáo viên hướng dẫn và chấm bài chi tiết.",
    levels: ["HSK 2", "HSK 3"],
    type: "Kèm giáo viên",
  },
];
