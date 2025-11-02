import JLPTBanner from "./_components/JLPTBanner";
import CourseCarousel from "@/components/CourseCarousel";
import SectionTitle from "@/components/common/SectionTitle";
import DraVieFaq from "@/components/DraVieFaq";
import ContactForm from "@/components/ContactForm";
import TeacherCard from "@/components/TeacherCard";
import ReviewCarousel from "@/components/Homepage/FeedBack/ReviewCarousel";
import { jlptFeedback } from "@/mock/feedback/jlptFeedback";
import { japaneseTeachers } from "@/mock/teachers/japaneseTeachers";
import { jlptFaqs } from "@/mock/faqs/jlptFaqs";
import { jlptCourses } from "@/mock/course/jlptCourses";

export default function Page() {
  return (
    <main>
      <div>
        <JLPTBanner />
      </div>
      <main className="bg-gray-50">
        <section id="courses" className="mb-8">
          <SectionTitle
            color="#b96900"
            title="Chinh phục lộ trình JLPT"
            description="Lựa chọn khóa học phù hợp với trình độ và mục tiêu của bạn"
          />
          <div className="container px-4 mx-auto">
            <CourseCarousel courses={jlptCourses} hexColor="#b96900" />
          </div>
        </section>
        <section className="container px-2 mx-auto py-16">
          <SectionTitle
            color="#b96900"
            title="Chất lượng từ đội ngũ giáo viên TOP đầu ngành"
            description="Học với giáo viên có kinh nghiệm thực chiến, hiểu rõ cấu trúc đề thi và chiến lược đạt điểm cao cho từng cấp độ."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {japaneseTeachers.map((teacher, index) => (
              <TeacherCard key={teacher.id} teacher={teacher} index={index} />
            ))}
          </div>
        </section>
        <div className="container mx-auto">
          <ReviewCarousel
            smallTitle="Cảm nhận"
            title="Từ phía Học viên"
            description="Những tình cảm, niềm tin từ học viên chính là sự ghi nhận lớn nhất dành cho DraVie."
            reviews={jlptFeedback}
            colorFrom="rgba(185,105,0,1)"
            colorTo="rgba(185,105,0,0.9)"
          />
        </div>
        <section className="container px-2 mx-auto max-w-7xl">
          <DraVieFaq
            faqs={jlptFaqs}
            colorClass="text-[#b96900]"
            buttonBgClass="bg-[rgba(185,105,0,1)]"
            className="text-[#b96900]"
          />
        </section>
        <div className="container mx-auto max-w-7xl mb-16">
          <ContactForm color="bg-[#b96900] text-white" />
        </div>
      </main>
    </main>
  );
}
