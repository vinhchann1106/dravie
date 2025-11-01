"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import TeacherCard from "@/components/TeacherCard";

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
export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">
            Hành Trình Kiến Tạo Hệ Sinh Thái Giáo Dục Mới
          </h1>
          <p className="text-lg md:text-xl text-gray-900 leading-relaxed">
            Dravie hướng đến việc đổi mới giáo dục bằng công nghệ, nội dung và
            cộng đồng – tạo nên tác động tích cực và bền vững cho xã hội học tập
            Việt Nam.
          </p>
        </motion.div>
      </section>

      {/* Sứ mệnh */}
      <section className="py-20 bg-white">
        <SectionTitle
          title="Điều Gì Tạo Nên Dravie?"
          description="Dravie được hình thành với tầm nhìn xây dựng hệ sinh thái giáo dục hiện đại – kết hợp công nghệ, đào tạo và tư vấn chiến lược nhằm nâng cao năng lực giáo viên, quản lý và tổ chức."
          align="center"
        />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 mt-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              Với đội ngũ am hiểu sâu sắc thị trường và tư duy toàn cầu, Dravie
              đồng hành cùng các tổ chức, trường học và doanh nghiệp giáo dục
              nhằm triển khai chiến lược phát triển bền vững và đổi mới liên
              tục.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              Chúng tôi kết nối các giải pháp đào tạo, công nghệ và cộng đồng
              học tập nhằm thúc đẩy năng lực con người và lan tỏa tri thức trong
              kỷ nguyên giáo dục số.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src="/assets/img/about_page/building.avif"
              alt="Dravie Building"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-gradient-to-r from-muted-foreground to-secondary-foreground text-white text-center">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-xl italic leading-relaxed px-6"
        >
          “Chúng tôi tin rằng sự thay đổi giáo dục bắt đầu từ hệ sinh thái tích
          hợp – nơi chiến lược, công nghệ và cộng đồng cùng hội tụ để trao quyền
          cho con người và tạo ra tác động bền vững.”
        </motion.blockquote>
      </section>

      {/* Tầm nhìn - Sứ mệnh */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <Image
              src="/assets/img/about_page/vision.png"
              alt="Vision"
              width={64}
              height={64}
              className="mx-auto md:mx-0 mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-700 mb-3">Tầm nhìn</h3>
            <p className="text-gray-600 leading-relaxed">
              Trở thành nền tảng kết nối giáo dục hàng đầu Việt Nam, nơi kết hợp
              chặt chẽ giữa phát triển năng lực nghề nghiệp, công nghệ giáo dục
              hiện đại và cộng đồng học tập năng động.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <Image
              src="/assets/img/about_page/mission.png"
              alt="Mission"
              width={64}
              height={64}
              className="mx-auto md:mx-0 mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-700 mb-3">Sứ mệnh</h3>
            <p className="text-gray-600 leading-relaxed">
              Dravie tư vấn, đào tạo và lan tỏa tri thức thông qua một hệ sinh
              thái tích hợp nhằm nâng cao năng lực quản lý, giảng dạy và vận
              hành giáo dục một cách bài bản và bền vững.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Giá trị cốt lõi */}
      <section className="py-24 bg-blue-50">
        <SectionTitle title="Giá Trị Cốt Lõi" align="center" />

        <div className="container mx-auto px-6 grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
          {coreValues.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full text-center shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                  <h4 className="text-lg font-semibold text-blue-700 mt-3 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Đối tượng phục vụ */}
      <section className="py-20 bg-white">
        <SectionTitle title="Đối Tượng Phục Vụ" align="center" />
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 mt-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-8 text-gray-700">
              {audiences.map((a, i) => (
                <div key={i}>
                  <h5 className="text-blue-700 font-semibold text-lg mb-2">
                    {a.title}
                  </h5>
                  <p className="text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/assets/img/about_page/team.jpg"
              alt="Dravie Team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-20 bg-white container px-2 mx-auto">
        <SectionTitle title="Đội Ngũ Giảng Viên" align="center" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <TeacherCard key={teacher.id} teacher={teacher} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

const coreValues = [
  {
    icon: "/assets/img/about_page/connect.png",
    title: "Kết nối bền vững",
    desc: "Liên kết giữa nhà trường, giáo viên, chuyên gia và đối tác để cùng kiến tạo giá trị dài hạn.",
  },
  {
    icon: "/assets/img/about_page/practical.png",
    title: "Thực tiễn & khả thi",
    desc: "Phát triển từ hiểu biết sâu sắc và thực tiễn giáo dục Việt Nam, đảm bảo khả năng triển khai hiệu quả.",
  },
  {
    icon: "/assets/img/about_page/flexible.png",
    title: "Đổi mới & linh hoạt",
    desc: "Tiên phong trong ứng dụng công nghệ và tư duy mở để thích ứng với thay đổi của giáo dục hiện đại.",
  },
  {
    icon: "/assets/img/about_page/share.png",
    title: "Lan tỏa tri thức",
    desc: "Chia sẻ kiến thức, dữ liệu và kinh nghiệm nhằm thúc đẩy cộng đồng học tập phát triển.",
  },
  {
    icon: "/assets/img/about_page/responsible.png",
    title: "Đồng hành có trách nhiệm",
    desc: "Đặt lợi ích giáo dục và sự phát triển bền vững của cộng đồng lên hàng đầu.",
  },
];

const audiences = [
  {
    title: "Giáo viên",
    desc: "Tìm kiếm mô hình giảng dạy hiện đại, nội dung số và cơ hội phát triển chuyên môn.",
  },
  {
    title: "Lãnh đạo / Quản lý",
    desc: "Nâng cao chất lượng đào tạo, chuyển đổi số và tối ưu hiệu quả vận hành tổ chức giáo dục.",
  },
  {
    title: "Tổ chức",
    desc: "Các đơn vị EdTech, nhà xuất bản hoặc trung tâm học liệu muốn hợp tác chiến lược.",
  },
  {
    title: "Chuyên gia",
    desc: "Nhà nghiên cứu, chuyên gia giáo dục mong muốn lan tỏa tri thức và kết nối học thuật.",
  },
];
