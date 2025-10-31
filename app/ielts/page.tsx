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

const teachers = [
  {
    id: "1",
    name: "TS. Linh Lê",
    title: "Cố Vấn Học Thuật",
    bio: "Học giả và cố vấn giáo dục với hơn 20 năm kinh nghiệm trong VET, TESOL và đổi mới chương trình đào tạo. Chị có chuyên môn về xây dựng chính sách, giáo dục người lớn, tích hợp công nghệ số và đảm bảo chất lượng, đồng thời đã dẫn dắt nhiều sáng kiến lớn về tuân thủ, phát triển nhân lực và năng lực số. Với cam kết về thiết kế toàn diện và lấy con người làm trung tâm, chị hỗ trợ các cơ sở giáo dục gắn kết chiến lược, sư phạm và công nghệ, đồng hành cùng DraVie trong việc xây dựng môi trường học tập sẵn sàng cho tương lai.",
    avatar:
      "https://vietedra.edu.vn/wp-content/uploads/2025/08/VE-Linh-Le-01-scaled.jpg",
  },
  {
    id: "2",
    name: "ThS. Lê Thị Thu Hiền",
    title: "Cố Vấn Học Thuật",
    bio: "Chuyên gia quản lý tuân thủ với nhiều kinh nghiệm trong lĩnh vực VET và Foundation Studies tại Úc. Am hiểu Khung Chất lượng VET, các quy định giáo dục Úc và yêu cầu hợp đồng tài trợ; thành thạo kiểm toán tuân thủ, thiết kế đào tạo và chuyển đổi số. Với bằng Master of TESOL (The University of Melbourne), kết hợp chuyên môn học thuật và kinh nghiệm thực tiễn, chị mang lại góc nhìn toàn cầu về đảm bảo chất lượng và đào tạo theo năng lực, để hỗ trợ các tổ chức giáo dục đạt tăng trưởng bền vững.",
    avatar: "https://vietedra.edu.vn/wp-content/uploads/2025/08/VE-AB-01.png",
  },
  {
    id: "3",
    name: "TS. Lương Thị Phương Nhi",
    title: "Cố Vấn Học Thuật",
    bio: "Nhà giáo dục và nghiên cứu giàu kinh nghiệm với hơn 20 năm trong giáo dục đại học và giảng dạy tiếng Anh, hiện là Giảng viên tiếng Anh tại Trường Đại học Ngoại thương, Việt Nam. Chị sở hữu bằng Thạc sĩ TESOL, Thạc sĩ Kinh doanh Quốc tế và Tiến sĩ Giáo dục. Nghiên cứu của chị tập trung vào giáo dục quốc tế, giá trị văn hoá, trách nhiệm xã hội, phát triển bền vững và đổi mới, với nhiều công bố liên quan đến phát triển chuyên môn, ứng dụng công nghệ trong ELT, quản lý du lịch, khách sạn, cũng như lãnh đạo và quản trị.",
    avatar:
      "https://vietedra.edu.vn/wp-content/uploads/2025/08/VE-Luong-Nhi-01-01-scaled.jpg",
  },
];
const faqs = [
  {
    title: "Thời gian sử dụng Lộ Trình học IELTS",
    content: `Mỗi Chặng học IELTS bạn được sử dụng lên tới 12 tháng kể từ ngày hoàn thành đăng ký học.
Thời gian sử dụng Lộ Trình IELTS của bạn bằng tổng thời gian của từng Chặng.
Ví dụ: Lộ trình bạn chọn có 3 chặng
➡ Tổng thời gian cả Lộ trình bạn được sử dụng lên tới 36 tháng.
➡ Bắt đầu học ngay để đạt mục tiêu sớm. Đã quyết tâm Đăng Ký, Hãy quyết tâm Học liền!`,
  },
  {
    title: "Học theo lộ trình như thế nào?",
    content: `1. Có nhất định phải theo lộ trình học DraVie đưa ra không?
Lộ trình học cùng Study plan chi tiết đến từng ngày là lộ trình học TỐI ƯU NHẤT, HIỆU QUẢ NHẤT giúp bạn chinh phục được đúng mục tiêu đã đề ra. Tuy nhiên, các bạn hoàn toàn có thể chủ động sắp xếp và thay đổi thời gian để có lộ trình học và luyện tập phù hợp với kế hoạch riêng.

2. Có cần dùng thêm tài liệu ngoài khi học DraVie không?
KHÔNG. Các bạn chỉ cần học tất cả trên một nền tảng Dravie.com theo lộ trình được xây dựng phù hợp với bạn bởi:

- Không cần sách vở, tài liệu bản cứng đi kèm.
- Sử dụng bài giảng quay dựng chi tiết, kèm minh họa trực quan sinh động, dễ hiểu.
- Hệ thống bài tập, bài thực hành, bài test được nghiên cứu kỹ lưỡng, đánh giá đúng năng lực theo từng giai đoạn học.
- Tài liệu tham khảo, bổ trợ, Tips luyện tập (có thể sử dụng nhưng không bắt buộc) đều trên cùng hệ thống Dravie.com giúp bạn dễ dàng quản lý và theo dõi mà không mất công tìm kiếm và lưu trữ.
- Ngoài học chương trình của từng khóa, bạn có thể sử dụng các gói dịch vụ để luyện tập thêm đầy đủ 4 kỹ năng: Listening, Speaking, Reading, Writing, luyện làm đề hiệu quả cùng trên một nền tảng Dravie.com.`,
  },
  {
    title: "Thời gian chấm chữa",
    content: `1. Bao lâu thì nhận được kết quả bài chấm từ giáo viên?
Thời gian chấm chữa được quy định là 3–5 ngày làm việc kể từ ngày học viên nộp bài, không kể Thứ 7, Chủ Nhật và ngày lễ. 
Các bạn gửi bài vào Thứ 6 thì sớm nhất Thứ 4 tuần kế tiếp sẽ nhận được kết quả. Hãy sắp xếp nộp bài đầu tuần để được chấm sớm hơn nhé.

Mỗi chặng học từ cơ bản đến chuyên sâu đều được giáo viên chấm chữa 8 bài Speaking, 8 bài Writing (riêng chặng chuyên sâu được thiết kế thêm bài Mock Test 4 kỹ năng chuyên sâu <=> thêm 2 bài chấm chữa Speaking + Writing, chi tiết xem trong từng chương trình học). 
Các bạn hãy tận dụng những bài được giáo viên chấm chữa chi tiết cùng Action Plan cụ thể để học thêm thật nhiều kinh nghiệm làm bài thi nhé.

2. Bao lâu thì nhận được kết quả do AI chấm?
Bài được chấm bởi AI có độ chính xác đến 80% và được nhận kết quả ngay khi bạn nộp bài.

Tất cả các bài tập, bài test của bạn sẽ được AI chấm, số lần được chấm sửa lên đến 3 lần/câu hỏi. 
Hãy chăm chỉ luyện tập để được chấm chữa thường xuyên, giúp bạn nhanh chóng nâng band điểm nhé!`,
  },
  {
    title: "Học online có được tương tác với giáo viên không?",
    content: `1. Ở trong bài học, học sinh có thể tương tác thông qua phần "Thắc mắc học thuật" để bộ phận học thuật giải đáp các câu hỏi cho bạn.

2. Ở trong bài chấm của giáo viên → Giáo viên chấm bài sẽ trả lời các thắc mắc của học sinh liên quan đến bài chấm và những chỗ bạn chưa rõ.

Thời gian trao đổi với giáo viên: 1 tháng kể từ ngày nhận được bài chấm.
Số lượt hỏi: 2 lần thuộc 2 mảng khác nhau. Trong trường hợp học sinh hỏi nhiều câu trong 1 lượt hỏi → giáo viên sẽ chỉ trả lời câu hỏi bao trùm nhất.

3. DraVie thường xuyên tổ chức các chương trình Workshop hàng tháng và trao đổi, hỗ trợ học viên trong group học thuật DraVie Community. 
Trở thành học viên tại DraVie, bạn sẽ được tham gia các chương trình và nhận được sự hỗ trợ giải đáp học thuật từ phía thầy cô.`,
  },
  {
    title: "Quy định về việc sử dụng tài khoản",
    content: `1. Có hạn chế số thiết bị đăng nhập tài khoản DraVie?
Có! Nhằm giúp bạn có thể học mọi lúc, mọi nơi, DraVie hỗ trợ đăng nhập và sử dụng tài khoản trên tối đa 3 thiết bị.

Để đảm bảo an toàn và bảo mật tài khoản, nếu DraVie phát hiện tài khoản đăng nhập quá số thiết bị hỗ trợ, hệ thống sẽ nhắc nhở và sau đó tự động khóa tài khoản nếu tiếp tục vi phạm.
Hãy luôn giữ bảo mật tài khoản học của mình để đảm bảo mọi quyền lợi, tuân thủ Điều kiện & Điều khoản giao dịch đã công bố trên website Dravie.com.

2. Dùng chung tài khoản DraVie có ảnh hưởng gì?
Theo Điều kiện & Điều khoản giao dịch được công bố trên website, DraVie nghiêm cấm mọi hành vi sang nhượng, dùng chung tài khoản học.
Những tài khoản dùng chung, sang nhượng sẽ bị hệ thống tự động khóa. Để đảm bảo quyền lợi, các bạn hãy giữ bảo mật thông tin đăng nhập.

Ngoài việc khóa tài khoản dùng chung, toàn bộ quyền lợi đặc biệt như chấm chữa Writing, Speaking và trao đổi với giáo viên sẽ không còn hiệu lực. 
Một tài khoản chỉ cá nhân hóa với một người học duy nhất, theo sát tiến độ học và phân tích sự tiến bộ riêng.

Các bạn hãy cảnh giác với hình thức mua bán, sang nhượng, dùng chung tài khoản để được hưởng trọn vẹn quyền lợi học tập tốt nhất mà DraVie mang tới.
Nếu bạn là nạn nhân của việc mua chung tài khoản mà chưa nắm được tác hại, hãy liên hệ DraVie để được hỗ trợ: 0931 42 8899.`,
  },
];

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
            {teachers.map((teacher, index) => (
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
              <span className="text-[#0f2f8d] text-4xl">100.000+</span> Học viên
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
          />
        </div>
        <section className="container px-2 mx-auto max-w-7xl">
          <DraVieFaq faqs={faqs} />
        </section>
        <section className="container mx-auto max-w-7xl mb-16">
          <ContactForm />
        </section>
      </main>
    </main>
  );
}
