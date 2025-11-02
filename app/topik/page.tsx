import TOPIKBanner from "./_components/TOPIKBanner";
import CourseCarousel from "@/components/CourseCarousel";
import SectionTitle from "@/components/common/SectionTitle";
import DraVieFaq from "@/components/DraVieFaq";
import ContactForm from "@/components/ContactForm";
import TeacherCard from "@/components/TeacherCard";
import ReviewCarousel from "@/components/Homepage/FeedBack/ReviewCarousel";
import { topikFeedback } from "@/mock/feedback/topikFeedback";
import { koreanTeachers } from "@/mock/teachers/koreanTeachers";
import { topikFaqs } from "@/mock/faqs/topikFaqs";
import { topikCourse } from "@/mock/course/topikCourse";

export default function Page() {
  return (
    <main>
      <div>
        <TOPIKBanner />
      </div>
      <main className="bg-gray-50">
        <section id="courses" className="mb-8">
          <SectionTitle
            color="#861919"
            title="Chinh phục lộ trình TOPIK"
            description="Lựa chọn khóa học phù hợp với trình độ và mục tiêu của bạn"
          />
          <div className="container px-4 mx-auto">
            <CourseCarousel courses={topikCourse} hexColor="#861919" />
          </div>
        </section>
        <section className="container px-2 mx-auto py-16">
          <SectionTitle
            color="#861919"
            title="Chất lượng từ đội ngũ giáo viên TOP đầu ngành"
            description="Lộ trình học được thiết kế bài bản, giúp bạn nắm chắc ngữ pháp – từ vựng – kỹ năng làm bài theo chuẩn đề thi thực tế."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {koreanTeachers.map((teacher, index) => (
              <TeacherCard key={teacher.id} teacher={teacher} index={index} />
            ))}
          </div>
        </section>
        <div className="container mx-auto">
          <ReviewCarousel
            smallTitle="Cảm nhận"
            title="Từ phía Học viên"
            description="Những tình cảm, niềm tin từ học viên chính là sự ghi nhận lớn nhất dành cho DraVie."
            reviews={topikFeedback}
            colorFrom="rgba(134,25,25,1)"
            colorTo="rgba(134,25,25,0.9)"
          />
        </div>
        <section className="container px-2 mx-auto max-w-7xl">
          <DraVieFaq
            faqs={topikFaqs}
            colorClass="text-[#861919]"
            buttonBgClass="bg-[rgba(134,25,25,1)]"
            className="text-[#861919]"
          />
        </section>
        <div className="container mx-auto max-w-7xl mb-16">
          <ContactForm color="bg-[#861919] text-white" />
        </div>
      </main>
    </main>
  );
}
