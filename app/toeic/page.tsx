import TOEICBanner from "./_components/ToeicBanner";
import CourseCarousel from "@/components/CourseCarousel";
import SectionTitle from "@/components/common/SectionTitle";
import DraVieFaq from "@/components/DraVieFaq";
import ContactForm from "@/components/ContactForm";
import StudentShowcaseCarousel from "@/components/common/Student/student-showcase-carousel";
import { topTOEICStudents } from "@/mock/student/topTOEIC";
import BestTOEICLearnerCard from "@/components/featured-student/BestTOEICLearnerCard";
import TeacherCard from "@/components/TeacherCard";
import ReviewCarousel from "@/components/Homepage/FeedBack/ReviewCarousel";
import { toeicFeedback } from "@/mock/feedback/toeicFeedback";
import { toeicTeachers } from "@/mock/teachers/toeicTeachers";
import { toeicFaqs } from "@/mock/faqs/toeicFaqs";
import { toeicCourses } from "@/mock/course/toeicCourses";

export default function Page() {
  return (
    <main>
      <div>
        <TOEICBanner />
      </div>
      <main className="bg-gray-50">
        <section id="courses" className="mb-8">
          <SectionTitle
            color="#0A2A66"
            title="Chinh phục lộ trình TOEIC"
            description="Lựa chọn khóa học phù hợp với trình độ và mục tiêu của bạn"
          />
          <div className="container px-4 mx-auto">
            <CourseCarousel courses={toeicCourses} hexColor="#0A2A66" />
          </div>
        </section>
        <section className="container px-2 mx-auto py-16">
          <SectionTitle
            color="#0A2A66"
            title="Chất lượng từ đội ngũ giáo viên TOP đầu ngành"
            description="Hệ thống bài giảng chất lượng, bài chấm chữa chi tiết từ hội đồng học thuật gồm những giáo viên giỏi nhất Việt Nam "
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {toeicTeachers.map((teacher, index) => (
              <TeacherCard key={teacher.id} teacher={teacher} index={index} />
            ))}
          </div>
        </section>
        <section className="mb-8 container mx-auto max-w-4xl text-center">
          <SectionTitle
            color="#0A2A66"
            title="Thành tích cao từ các học viên xuất sắc"
          />
          <BestTOEICLearnerCard bgColor="#4975d3" />
        </section>
        <section className="mx-auto py-12 mt-12">
          <div className="text-center text-balance">
            <h2 className="text-3xl font-extrabold text-[#0A2A66]">
              <span className="text-[#0f2f8d] text-4xl">3.000+</span> Học viên
            </h2>
            <p className="text-[#334155] text-lg md:text-xl mb-6 max-w-3xl mx-auto">
              đạt <strong>thành tích cao</strong> sau khi học tại DraVie
            </p>
          </div>
          <StudentShowcaseCarousel learners={topTOEICStudents} type="TOEIC" />
        </section>
        <div className="container mx-auto">
          <ReviewCarousel
            smallTitle="Sự tin tưởng"
            title="Từ phía Học viên và phụ huynh"
            description="Những tình cảm, niềm tin từ học viên chính là sự ghi nhận lớn nhất dành cho DraVie."
            reviews={toeicFeedback}
            // màu navy
            colorFrom="rgba(10,42,102,1)"
            colorTo="rgba(10,42,102,0.9)"
          />
        </div>
        <section className="container px-2 mx-auto max-w-7xl">
          <DraVieFaq
            faqs={toeicFaqs}
            colorClass="text-[rgba(10,42,102,1)]"
            buttonBgClass="bg-[rgba(10,42,102,1)]"
          />
        </section>
        <div className="container mx-auto max-w-7xl mb-16">
          <ContactForm color="bg-[rgba(10,42,102,1)] text-white" />
        </div>
      </main>
    </main>
  );
}
