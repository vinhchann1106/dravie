"use client";
import CourseCarousel from "@/components/CourseCarousel";
import Banner from "@/components/Homepage/Banner";
import FeatureCourses from "@/components/Homepage/FeatureCourses";
import FeaturedStudent from "@/components/Homepage/FeaturedStudent";
import SectionFeedbacks from "@/components/Homepage/FeedBack/SectionFeedbacks";
import AchievementsSection from "@/components/Homepage/ListLeaner/AchievementsSection";
import NewspaperSection from "@/components/Homepage/NewspaperSection";
import PartnerSection from "@/components/Homepage/PartnerSection";
import RecommendPrograms from "@/components/Homepage/RecommendPrograms";
import StickyStepsSection from "@/components/Homepage/StickyStepsSection";
import IeltsCard from "@/components/IeltsCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  const courses = [
    {
      id: 1,
      title: "TOEIC L&R LISTENING & READING",
      subtitle:
        "[Complete TOEIC] Chiến lược làm bài - Từ vựng - Ngữ pháp - Luyện nghe với Dictation [Tặng khoá TED Talks]",
      image: "/courses/toeic.jpg",
      rating: 4.5,
      students: 36603,
      tag: "Phần mềm online",
      price: 989000,
      oldPrice: 1800000,
      discount: 45,
    },
    {
      id: 2,
      title: "IELTS FUNDAMENTALS",
      subtitle: "[IELTS Fundamentals] Từ vựng và ngữ pháp cơ bản IELTS",
      image: "/courses/ielts-fundamentals.jpg",
      rating: 4.2,
      students: 16335,
      tag: "Phần mềm online",
      price: 699000,
      oldPrice: 899000,
      discount: 22,
    },
    {
      id: 3,
      title: "IELTS INTENSIVE LISTENING",
      subtitle:
        "[IELTS Intensive Listening] Chiến lược làm bài - Chữa đề - Luyện nghe theo phương pháp Dictation",
      image: "/courses/ielts-intensive.jpg",
      rating: 4.4,
      students: 30506,
      tag: "Phần mềm online",
      price: 699000,
      oldPrice: 899000,
      discount: 22,
    },
    {
      id: 4,
      title: "IELTS INTENSIVE LISTENING",
      subtitle:
        "[IELTS Intensive Listening] Chiến lược làm bài - Chữa đề - Luyện nghe theo phương pháp Dictation",
      image: "/courses/ielts-intensive.jpg",
      rating: 4.4,
      students: 30506,
      tag: "Phần mềm online",
      price: 699000,
      oldPrice: 899000,
      discount: 22,
    },
    {
      id: 5,
      title: "IELTS INTENSIVE LISTENING",
      subtitle:
        "[IELTS Intensive Listening] Chiến lược làm bài - Chữa đề - Luyện nghe theo phương pháp Dictation",
      image: "/courses/ielts-intensive.jpg",
      rating: 4.4,
      students: 30506,
      tag: "Phần mềm online",
      price: 699000,
      oldPrice: 899000,
      discount: 22,
    },
    {
      id: 6,
      title: "IELTS INTENSIVE LISTENING",
      subtitle:
        "[IELTS Intensive Listening] Chiến lược làm bài - Chữa đề - Luyện nghe theo phương pháp Dictation",
      image: "/courses/ielts-intensive.jpg",
      rating: 4.4,
      students: 30506,
      tag: "Phần mềm online",
      price: 699000,
      oldPrice: 899000,
      discount: 22,
    },
  ];
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <div className="bg-[#F7FAFC]">
          <FeatureCourses />
          <StickyStepsSection />
          <FeaturedStudent />
          <AchievementsSection />
          <SectionFeedbacks />
          <PartnerSection />
          <RecommendPrograms />
          <NewspaperSection />
          {/* <div className="p-6">
            <CourseCarousel courses={courses} />
          </div>
          <div className="p-8">
            <IeltsCard
              title="IELTS Simulation Listening test 3"
              duration="40 phút"
              participants={352095}
              comments={572}
              sections={4}
              questions={40}
              tags={["IELTS Academic", "Listening"]}
              onDetail={() => alert("Xem chi tiết")}
            />
          </div> */}
        </div>
      </main>
    </>
  );
}
