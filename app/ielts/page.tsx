import IELTSBanner from "./_components/IELTSBanner";
import { Course } from "@/types/course";
import { ieltsCourses } from "@/mock/course/ieltsCourses";
import CourseCarousel from "@/components/CourseCarousel";
import SectionTitle from "@/components/common/SectionTitle";

const courseData: Course = {
  id: "toeic-basic",
  title: "TOEIC L&R Listening & Reading",
  price: 989000,
  oldPrice: 1800000,
  discountPercent: 45,
  students: 36603,
  hours: 50,
  topics: 10,
  lessons: 188,
  exercises: 514,
  duration: "12 tháng",
  tag: "Ưu đãi đặc biệt tháng 10/2025",
  description: [
    "Dành cho mục tiêu TOEIC 450 - 650 - 800+",
    "Bộ 1200 từ vựng TOEIC trọng điểm",
    "20.000 câu hỏi trắc nghiệm chuẩn format 2024",
    "Giải thích chi tiết và phương pháp làm bài",
    "Tặng khóa Luyện nghe nói cùng Ted Talks trị giá 599k",
  ],
};

export default function Page() {
  return (
    <main>
      <div>
        <IELTSBanner />
      </div>
      <main className="bg-gray-50">
        <section id="courses" className="mb-8">
          <SectionTitle
            title="Chinh phục lộ trình IELTS"
            description="Lựa chọn khóa học phù hợp với trình độ và mục tiêu của bạn"
          />
          <div className="container px-4 mx-auto">
            <CourseCarousel courses={ieltsCourses} />
          </div>
        </section>
      </main>
    </main>
  );
}
