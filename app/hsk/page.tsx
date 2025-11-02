import TOEICBanner from "./_components/HSKBanner";
import CourseCarousel from "@/components/CourseCarousel";
import SectionTitle from "@/components/common/SectionTitle";
import DraVieFaq from "@/components/DraVieFaq";
import ContactForm from "@/components/ContactForm";
import TeacherCard from "@/components/TeacherCard";
import ReviewCarousel from "@/components/Homepage/FeedBack/ReviewCarousel";
import { hskFeedback } from "@/mock/feedback/hskFeedback";
import { chineseTeachers } from "@/mock/teachers/chineseTeachers";
import { hskFaqs } from "@/mock/faqs/hskFaqs";
import { hskCourses } from "@/mock/course/hskCourses";

export default function Page() {
  return (
    <main>
      <div>
        <TOEICBanner />
      </div>
      <main className="bg-gray-50">
        <section id="courses" className="mb-8">
          <SectionTitle
            color="#207029"
            title="Chinh phục lộ trình HSK"
            description="Lựa chọn khóa học phù hợp với trình độ và mục tiêu của bạn"
          />
          <div className="container px-4 mx-auto">
            <CourseCarousel courses={hskCourses} hexColor="#207029" />
          </div>
        </section>
        <section className="container px-2 mx-auto py-16">
          <SectionTitle
            color="#207029"
            title="Chất lượng từ đội ngũ giáo viên TOP đầu ngành"
            description="Giảng viên DraViE đều am hiểu khó khăn của người Việt khi học tiếng Trung.
Lộ trình luyện HSK được thiết kế rõ ràng, giúp bạn tiến bộ từng cấp độ từ HSK1 đến HSK6."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {chineseTeachers.map((teacher, index) => (
              <TeacherCard key={teacher.id} teacher={teacher} index={index} />
            ))}
          </div>
        </section>
        <div className="container mx-auto">
          <ReviewCarousel
            smallTitle="Cảm nhận"
            title="Từ phía Học viên"
            description="Những tình cảm, niềm tin từ học viên chính là sự ghi nhận lớn nhất dành cho DraVie."
            reviews={hskFeedback}
          />
        </div>
        <section className="container px-2 mx-auto max-w-7xl">
          <DraVieFaq faqs={hskFaqs} />
        </section>
        <div className="container mx-auto max-w-7xl mb-16">
          <ContactForm />
        </div>
      </main>
    </main>
  );
}
