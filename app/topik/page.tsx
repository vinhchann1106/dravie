import TOPIKBanner from "./_components/TOPIKBanner";
import { ieltsCourses } from "@/mock/course/ieltsCourses";
import CourseCarousel from "@/components/CourseCarousel";
import SectionTitle from "@/components/common/SectionTitle";
import DraVieFaq from "@/components/DraVieFaq";
import ContactForm from "@/components/ContactForm";
import TeacherCard from "@/components/TeacherCard";
import ReviewCarousel from "@/components/Homepage/FeedBack/ReviewCarousel";
import { topikFeedback } from "@/mock/feedback/topikFeedback";

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
    title: "Học tiếng Trung TOPIK theo lộ trình như thế nào?",
    content: `1. Có nhất định phải theo lộ trình học DraVie đưa ra không?
Lộ trình học cùng Study plan chi tiết đến từng ngày là lộ trình học TỐI ƯU NHẤT, HIỆU QUẢ NHẤT giúp bạn chinh phục được đúng mục tiêu đã đề ra. Tuy nhiên, các bạn hoàn toàn có thể chủ động sắp xếp và thay đổi thời gian để có lộ trình học TOPIK và luyện tập phù hợp với kế hoạch riêng.

2. Có cần dùng thêm tài liệu ngoài khi học TOPIK cùng DraVie không?
KHÔNG. Các bạn chỉ cần học tất cả trên một nền tảng Dravie.com theo lộ trình được xây dựng phù hợp với bạn bởi:

- Không cần sách vở, tài liệu bản cứng đi kèm.
- Sử dụng bài giảng quay dựng chi tiết, kèm minh họa trực quan sinh động, dễ hiểu.
- Hệ thống bài tập, bài thực hành, bài test được nghiên cứu kỹ lưỡng, đánh giá đúng năng lực theo từng giai đoạn học.
- Tài liệu tham khảo, bổ trợ, Tips luyện tập (có thể sử dụng nhưng không bắt buộc) đều trên cùng hệ thống Dravie.com giúp bạn dễ dàng quản lý và theo dõi mà không mất công tìm kiếm và lưu trữ.
- Ngoài học chương trình của từng khóa, bạn có thể sử dụng các gói dịch vụ để luyện tập thêm đầy đủ 4 kỹ năng: Listening, Speaking, Reading, Writing — luyện làm đề hiệu quả cùng trên một nền tảng Dravie.com.`,
  },
  {
    title: "Thời gian sử dụng Lộ Trình học TOPIK",
    content: `Mỗi Chặng học TOPIK bạn được sử dụng lên tới 12 tháng kể từ ngày hoàn thành đăng ký học.
Thời gian sử dụng Lộ Trình học TOPIK của bạn bằng tổng thời gian của từng Chặng.
Ví dụ: Lộ trình bạn chọn có 2 chặng
➡ Tổng thời gian cả Lộ trình bạn được sử dụng lên tới 24 tháng.
➡ Bắt đầu học ngay để đạt mục tiêu sớm. Đã quyết tâm Đăng Ký, Hãy quyết tâm Học liền!`,
  },
  {
    title: "Học TOPIK online có được tương tác với giáo viên không?",
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
            <CourseCarousel courses={ieltsCourses} hexColor="#861919" />
          </div>
        </section>
        <section className="container px-2 mx-auto py-16">
          <SectionTitle
            color="#861919"
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
            reviews={topikFeedback}
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
