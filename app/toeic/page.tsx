import TOEICBanner from "./_components/ToeicBanner";
import { ieltsCourses } from "@/mock/course/ieltsCourses";
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
    title: "Thời gian sử dụng Lộ Trình học TOEIC",
    content: `
Mỗi Chặng học TOEIC bạn được sử dụng lên tới 12 tháng kể từ ngày hoàn thành đăng ký học. Thời gian sử dụng Lộ Trình TOEIC của bạn bằng tổng thời gian của từng Chặng.

Ví dụ: Lộ trình bạn chọn là TOEIC gồm có 3 chặng

➡ Tổng thời gian cả Lộ trình bạn được sử dụng lên tới 36 tháng.
➡ Bắt đầu học ngay để đạt mục tiêu sớm. Đã quyết tâm Đăng Ký, Hãy quyết tâm Học liền!`,
  },
  {
    title: "Thông tin thanh toán",
    content: `
1. **Thông tin của tôi có được bảo mật khi thanh toán online không?**  
Toàn bộ thông tin giao dịch, bao gồm thông tin thẻ ATM của bạn được bảo mật tuyệt đối bởi trung gian thanh toán online được Ngân hàng Nhà nước Việt Nam cấp phép.

2. **Tôi có thể thanh toán qua chuyển khoản ngân hàng không?**  
DraVie chấp nhận hình thức Chuyển khoản qua cổng thanh toán 9Pay, bạn chỉ cần làm theo các hướng dẫn chuyển khoản khi chọn hình thức thanh toán này. Nếu bạn chuyển khoản thành công qua cổng thanh toán 9Pay, chương trình sẽ được tự động thêm vào tài khoản của bạn.

Nếu gặp khó khăn trong thanh toán, bạn vui lòng liên hệ ngay với bộ phận chăm sóc khách hàng qua:  
📞 Hotline: 0907 04 88 99  
📧 Email: support@dravie.com  

3. **Cách thanh toán qua ATM Internet Banking/ thẻ VISA/ MasterCard/ Paypal?**  
Với các hình thức Internet Banking, Visa, Master, bạn vui lòng chọn cổng thanh toán OnePay khi thanh toán.  
Tất cả các thông tin thẻ của bạn được bảo mật tuyệt đối bởi OnePay - Trung gian giao dịch do Ngân hàng Nhà nước cấp phép.  

Nếu bạn muốn thanh toán bằng PayPal, vui lòng liên hệ với bộ phận chăm sóc khách hàng qua:  
📞 Hotline: 0907 04 88 99  
📧 Email: support@dravie.com  

4. **Cách thanh toán qua QR pay?**  
Quý khách có thể sử dụng ứng dụng Mobile Banking của gần 30 ngân hàng khách nhau hoặc các ứng dụng khác như VinID, VNPay, mPay để quét mã QR và tiến hành thanh toán nhanh chóng.

5. **Tôi có nhận được xác nhận thanh toán thành công không?**  
Sau khi thực hiện việc thanh toán, học viên sẽ nhận được thông báo thanh toán thành công và khóa học được đăng ký sẽ tự động mở khóa trên tài khoản tại dravie.com.`,
  },
  {
    title: "Hướng dẫn học hiệu quả",
    content: `
1. **Điều kiện lý tưởng để học DraVie là gì?**  
Để đảm bảo chất lượng học tập và chữa bài khi học các khóa học phát âm, DraVie khuyến khích học viên học trong điều kiện ít tiếng ồn, Internet ổn định và nên đeo tai nghe (nếu cần).  
Nếu bạn học trực tiếp trên web dravie.com, bạn nên sử dụng trình duyệt Chrome, trên Windows 10 trở lên hoặc MacOS.  
Nếu bạn học trên điện thoại, vui lòng tải app DraVie trên iOS hoặc Android.

2. **Tôi có thể học DraVie trên những thiết bị nào?**  
DraVie cung cấp khóa học trực tuyến trên nền tảng website dravie.com và ứng dụng di động trên App Store/ Google Play.  
Với nền tảng Website, DraVie đề xuất học viên dùng trình duyệt Google Chrome phiên bản mới nhất, hệ điều hành Windows 10 trở lên hoặc MacOS để có trải nghiệm tốt nhất.

3. **Ai sẽ giải quyết thắc mắc trong quá trình học cho tôi?**  
Học viên có thể liên hệ bộ phận Customer Support của DraVie qua:  
📞 Hotline: 0907 04 88 99  
📧 Email: support@dravie.com  
🌐 Fanpage: https://www.facebook.com/dravie.english

4. **Tôi có thể cập nhật những thông tin mới nhất và ưu đãi của DraVie qua kênh nào?**  
Các thông tin và ưu đãi sẽ được cập nhật thường xuyên qua Fanpage DraVie và website dravie.com, hoặc gửi tới email học viên từ bộ phận CSKH.

5. **Làm sao để theo dõi tiến bộ học tập của tôi tại DraVie?**  
Bạn có thể xem lại phần trăm hoàn thành bài test, điểm số Speaking & Writing được chấm trực tiếp trên hệ thống, và so sánh lại với các lần trước.  
Tất cả đều được lưu lại trong “lịch sử bài làm” để giúp bạn dễ dàng theo dõi tiến độ và sự tiến bộ của bản thân.`,
  },
  {
    title: "Quy định về việc sử dụng tài khoản",
    content: `
1. **Có hạn chế số thiết bị đăng nhập tài khoản DraVie không?**  
Có!  
DraVie cho phép đăng nhập và sử dụng tài khoản tối đa trên 3 thiết bị. Nếu phát hiện vượt quá giới hạn, hệ thống sẽ cảnh báo và khóa tài khoản để bảo vệ quyền lợi người học.  
Hãy giữ bảo mật tài khoản của bạn và tuân thủ Điều kiện, Điều khoản sử dụng trên website dravie.com.

2. **Dùng chung tài khoản DraVie có ảnh hưởng gì không?**  
Theo Điều khoản sử dụng, DraVie **nghiêm cấm mọi hành vi chia sẻ hoặc sang nhượng tài khoản học.**  
Những tài khoản bị phát hiện dùng chung sẽ bị khóa và mất toàn bộ quyền lợi như chấm chữa Writing, Speaking hay trao đổi với giáo viên.  
Một tài khoản chỉ dành riêng cho một người học duy nhất để đảm bảo theo dõi chính xác tiến độ và kết quả học tập.  

Nếu bạn là nạn nhân của việc mua chung tài khoản, vui lòng liên hệ DraVie để được hỗ trợ:  
📞 Hotline: 0931 42 8899.`,
  },
];

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
            <CourseCarousel courses={ieltsCourses} hexColor="#0A2A66" />
          </div>
        </section>
        <section className="container px-2 mx-auto py-16">
          <SectionTitle
            color="#0A2A66"
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
