import IELTSBanner from "./_components/IELTSBanner";
import { ieltsCourses } from "@/mock/course/ieltsCourses";
import CourseCarousel from "@/components/CourseCarousel";
import SectionTitle from "@/components/common/SectionTitle";
import BestIELTSLearnerCard from "@/components/featured-student/BestIELTSLearnerCard";
import TeacherCard from "@/components/TeacherCard";
import StudentShowcaseCarousel from "@/components/common/Student/student-showcase-carousel";
import { topIELTSStudents } from "@/mock/student/topIELTS";
import ContactForm from "@/components/ContactForm";
import DraVieFaq from "@/components/DraVieFaq";
import ReviewCarousel from "@/components/Homepage/FeedBack/ReviewCarousel";
import { ieltsFeedback } from "@/mock/feedback/ieltsFeedback";
import { ieltsTeachers } from "@/mock/teachers/ieltsTeachers";
import { ieltsFaqs } from "@/mock/faqs/ieltsFaqs";

export default function Page() {
  return (
    <main>
      <div>
        <IELTSBanner />
      </div>
      <main className="bg-gray-50">
        <section id="courses" className="mb-8">
          <SectionTitle
            color="#1447e6"
            title="Chinh phục lộ trình IELTS"
            description="Lựa chọn khóa học phù hợp với trình độ và mục tiêu của bạn"
          />
          <div className="container px-4 mx-auto mb-8">
            <CourseCarousel courses={ieltsCourses} hexColor="#4975d3" />
          </div>
        </section>
        <section className="container px-2 mx-auto py-16">
          <SectionTitle
            color="#1447e6"
            title="Chất lượng từ đội ngũ giáo viên TOP đầu ngành"
            description="Hệ thống bài giảng chất lượng, bài chấm chữa chi tiết từ hội đồng học thuật gồm những giáo viên giỏi nhất Việt Nam "
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {ieltsTeachers.map((teacher, index) => (
              <TeacherCard key={teacher.id} teacher={teacher} index={index} />
            ))}
          </div>
        </section>
        <section className="mb-8 container mx-auto max-w-4xl text-center">
          <SectionTitle
            color="#1447e6"
            title="Thành tích cao từ các học viên xuất sắc"
          />
          <BestIELTSLearnerCard bgColor="#4975d3" />
        </section>
        <section className="mx-auto py-12 mt-12">
          <div className="text-center text-balance">
            <h2 className="text-3xl font-extrabold text-[#1447e6]">
              <span className="text-[#0f2f8d] text-4xl">40.000+</span> Học viên
            </h2>
            <p className="text-[#334155] text-lg md:text-xl mb-6 max-w-3xl mx-auto">
              đạt <strong>thành tích cao</strong> sau khi học tại DraVie
            </p>
          </div>
          <StudentShowcaseCarousel learners={topIELTSStudents} type="IELTS" />
        </section>
        <div className="container mx-auto">
          <ReviewCarousel
            smallTitle="Cảm nhận"
            title="Từ phía Học viên"
            description="Những tình cảm, niềm tin từ học viên chính là sự ghi nhận lớn nhất dành cho DraVie."
            reviews={ieltsFeedback}
            colorFrom="rgba(59,130,246,1)"
            colorTo="rgba(59,133,255,0.9)"
          />
        </div>
        <section className="container px-2 mx-auto max-w-7xl">
          <DraVieFaq
            faqs={ieltsFaqs}
            colorClass="text-[#1447e6]"
            buttonBgClass="bg-[rgba(59,130,246,1)]"
            className="text-[#1447e6]"
          />
        </section>
        <section className="container mx-auto max-w-7xl mb-16">
          <ContactForm color="bg-[#0046AF] text-white" />
        </section>
      </main>
    </main>
  );
}
