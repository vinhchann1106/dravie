import JLPTBanner from "./_components/JLPTBanner";
import { ieltsCourses } from "@/mock/course/ieltsCourses";
import CourseCarousel from "@/components/CourseCarousel";
import SectionTitle from "@/components/common/SectionTitle";
import DraVieFaq from "@/components/DraVieFaq";
import ContactForm from "@/components/ContactForm";
import TeacherCard from "@/components/TeacherCard";
import ReviewCarousel from "@/components/Homepage/FeedBack/ReviewCarousel";
import { hskFeedback } from "@/mock/feedback/hskFeedback";
import { jlptFeedback } from "@/mock/feedback/jlptFeedback";

const teachers = [
  {
    id: "1",
    name: "Ms. Nguyễn Thanh Hà",
    title: "Giảng viên IELTS",
    bio: [
      "Thạc sĩ Giảng dạy Tiếng Anh – University of Melbourne",
      "Chứng chỉ IELTS 8.0 Overall (Listening 8.5 – Reading 8.5)",
      "7 năm kinh nghiệm luyện thi IELTS tại VUS và ILA Vietnam",
      "3 năm cố vấn kỹ năng Writing cho dự án “Write for Change” của Australian Aid",
      "Tác giả chuyên mục “IELTS Made Easy” cho tạp chí EdTalks Vietnam",
      "Phương châm: “Học IELTS không chỉ để thi – mà để viết và nói như người toàn cầu.”",
    ],
    avatar: "/teachers/nguyen-thanh-ha.png",
  },
  {
    id: "2",
    name: "Mr. Daniel",
    title: "Giảng viên Tiếng Anh",
    bio: [
      "Cử nhân Ngôn ngữ học – University of California",
      "Chứng chỉ giảng dạy quốc tế CELTA – Cambridge",
      "Hơn 8 năm kinh nghiệm giảng dạy tiếng Anh tại Mỹ, Thái Lan và Việt Nam",
      "Từng giảng dạy tại VUS, Apollo trước khi gia nhập DraViE",
      "Phong cách: vui vẻ, chú trọng “âm thanh tự nhiên” và phản xạ trong hội thoại thực tế.",
    ],
    avatar: "/teachers/daniel.png",
  },
  {
    id: "3",
    name: "Mr. Benjamin Taylor",
    title: "Giảng viên IELTS/TOEFL",
    bio: [
      "M.A. in Applied Linguistics – University of California, Los Angeles (UCLA)",
      "Chứng chỉ: TESOL, TOEFL iBT Trainer",
      "12 năm giảng dạy IELTS/TOEFL tại Mỹ, Nhật và Việt Nam",
      "Phụ trách hơn 1000 học viên đạt IELTS từ 6.5 lên 8.0+",
      "Giảng viên khách mời tại chương trình “AI in Language Teaching” – TESOL Asia 2023",
      "Phong cách: Dạy bằng phương pháp “Active Context” – học qua tình huống đời thực và mô phỏng phỏng vấn quốc tế.",
    ],
    avatar: "/teachers/benjamin-taylor.png",
  },
];

const faqs = [
  {
    title: "Học tiếng Nhật JLPT theo lộ trình như thế nào?",
    content: `1. Có nhất định phải theo lộ trình học DraVie đưa ra không?
Lộ trình học cùng Study plan chi tiết đến từng ngày là lộ trình học TỐI ƯU NHẤT, HIỆU QUẢ NHẤT giúp bạn chinh phục được đúng mục tiêu đã đề ra. Tuy nhiên, các bạn hoàn toàn có thể chủ động sắp xếp và thay đổi thời gian để có lộ trình học JLPT và luyện tập phù hợp với kế hoạch riêng.

2. Có cần dùng thêm tài liệu ngoài khi học JLPT cùng DraVie không?
KHÔNG. Các bạn chỉ cần học tất cả trên một nền tảng Dravie.com theo lộ trình được xây dựng phù hợp với bạn bởi:

- Không cần sách vở, tài liệu bản cứng đi kèm.
- Sử dụng bài giảng quay dựng chi tiết, kèm minh họa trực quan sinh động, dễ hiểu.
- Hệ thống bài tập, bài thực hành, bài test được nghiên cứu kỹ lưỡng, đánh giá đúng năng lực theo từng giai đoạn học.
- Tài liệu tham khảo, bổ trợ, Tips luyện tập (có thể sử dụng nhưng không bắt buộc) đều trên cùng hệ thống Dravie.com giúp bạn dễ dàng quản lý và theo dõi mà không mất công tìm kiếm và lưu trữ.
- Ngoài học chương trình của từng khóa, bạn có thể sử dụng các gói dịch vụ để luyện tập thêm đầy đủ 4 kỹ năng: Listening, Speaking, Reading, Writing — luyện làm đề hiệu quả cùng trên một nền tảng Dravie.com.`,
  },
  {
    title: "Thời gian sử dụng Lộ Trình học JLPT",
    content: `Mỗi Chặng học JLPT bạn được sử dụng lên tới 12 tháng kể từ ngày hoàn thành đăng ký học.
Thời gian sử dụng Lộ Trình học JLPT của bạn bằng tổng thời gian của từng Chặng.
Ví dụ: Lộ trình bạn chọn có 2 chặng
➡ Tổng thời gian cả Lộ trình bạn được sử dụng lên tới 24 tháng.
➡ Bắt đầu học ngay để đạt mục tiêu sớm. Đã quyết tâm Đăng Ký, Hãy quyết tâm Học liền!`,
  },
  {
    title: "Học JLPT online có được tương tác với giáo viên không?",
    content: `DraVie thường xuyên tổ chức các chương trình Workshop và trao đổi, hỗ trợ học viên trong group học thuật DraVie Community.
Trở thành học viên tại DraVie, bạn sẽ được tham gia các chương trình và nhận được sự hỗ trợ, giải đáp học thuật từ đội ngũ thầy cô và chuyên viên của DraVie.`,
  },
  {
    title: "Quy định về việc sử dụng tài khoản",
    content: `1. Có hạn chế số thiết bị đăng nhập tài khoản DraVie?
Có! Nhằm giúp bạn có thể học mọi lúc, mọi nơi, DraVie hỗ trợ bạn đăng nhập và sử dụng tài khoản trên tối đa 3 thiết bị.

Để đảm bảo an toàn và bảo mật tài khoản, nếu DraVie phát hiện tài khoản đăng nhập vượt quá số thiết bị hỗ trợ, hệ thống sẽ nhắc nhở và sau đó tự động khóa tài khoản nếu tiếp tục vi phạm.
Hãy lưu ý giữ bảo mật tài khoản học của chính mình để bảo toàn mọi quyền lợi. Tuân thủ Điều kiện & Điều khoản giao dịch đã công bố trên website Dravie.com.

2. Dùng chung tài khoản DraVie có ảnh hưởng gì?
Theo Điều kiện & Điều khoản giao dịch được công bố trên website, DraVie nghiêm cấm mọi hành vi sang nhượng hoặc dùng chung tài khoản học.
Những tài khoản dùng chung, sang nhượng sẽ bị hệ thống tự động khóa. Vì vậy, để đảm bảo quyền lợi của chính mình, các bạn hãy bảo mật thông tin tài khoản khi hệ thống phát hiện đăng nhập từ nhiều thiết bị.

Ngoài việc khóa tài khoản dùng chung, toàn bộ quyền lợi đặc biệt như chấm chữa Writing, Speaking và trao đổi với giáo viên sẽ không còn hiệu lực.
Một tài khoản chỉ được cá nhân hóa cho một người học duy nhất, theo sát tiến độ và phân tích sự tiến bộ riêng của người đó.

Các bạn hãy cảnh giác với hình thức mua bán, sang nhượng, dùng chung tài khoản để đảm bảo được hưởng trọn vẹn quyền lợi học tập tốt nhất mà DraVie mang tới.
Nếu bạn là nạn nhân của việc mua chung tài khoản mà chưa nắm được tác hại này, hãy liên hệ DraVie để được hỗ trợ: 0931 42 8899.`,
  },
];

export default function Page() {
  return (
    <main>
      <div>
        <JLPTBanner />
      </div>
      <main className="bg-gray-50">
        <section id="courses" className="mb-8">
          <SectionTitle
            color="#FFB22C"
            title="Chinh phục lộ trình JLPT"
            description="Lựa chọn khóa học phù hợp với trình độ và mục tiêu của bạn"
          />
          <div className="container px-4 mx-auto">
            <CourseCarousel courses={ieltsCourses} hexColor="#FFB22C" />
          </div>
        </section>
        <section className="container px-2 mx-auto py-16">
          <SectionTitle
            color="#FFB22C"
            title="Chất lượng từ đội ngũ giáo viên TOP đầu ngành"
            description="Hệ thống bài giảng chất lượng, bài chấm chữa chi tiết từ hội đồng học thuật gồm những giáo viên giỏi nhất Việt Nam "
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
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
          />
        </div>
        <section className="container px-2 mx-auto max-w-7xl">
          <DraVieFaq faqs={faqs} />
        </section>
        <div className="container mx-auto max-w-7xl mb-16">
          <ContactForm />
        </div>
      </main>
    </main>
  );
}
