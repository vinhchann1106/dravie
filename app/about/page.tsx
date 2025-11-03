"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import TeacherCard from "@/components/TeacherCard";
import { ieltsTeachers } from "@/mock/teachers/ieltsTeachers";
import { toeicTeachers } from "@/mock/teachers/toeicTeachers";
import { chineseTeachers } from "@/mock/teachers/chineseTeachers";
import { japaneseTeachers } from "@/mock/teachers/japaneseTeachers";
import { koreanTeachers } from "@/mock/teachers/koreanTeachers";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<any | null>(null);

  // Grouped teachers by course
  const groupedTeachers = [
    { id: "ielts", title: "IELTS", teachers: ieltsTeachers },
    { id: "toeic", title: "TOEIC", teachers: toeicTeachers },
    { id: "chinese", title: "Tiếng Trung", teachers: chineseTeachers },
    { id: "japanese", title: "Tiếng Nhật", teachers: japaneseTeachers },
    { id: "korean", title: "Tiếng Hàn", teachers: koreanTeachers },
  ];

  // flat list to compute indices for TeacherCard
  const allTeachersFlat = groupedTeachers.flatMap((g) => g.teachers);

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
              Công ty TNHH Giáo dục Rồng Việt, với nền tảng trực tuyến DraViE,
              định hướng trở thành nền tảng giáo dục trực tuyến hàng đầu tại
              Việt Nam, tiên phong trong việc kết nối tri thức, đổi mới phương
              pháp học tập và xây dựng cộng đồng học tập số toàn diện. Công ty
              hướng tới mục tiêu nâng cao năng lực con người Việt Nam trong kỷ
              nguyên số, nơi mỗi cá nhân có thể học tập suốt đời, tiếp cận tri
              thức mọi lúc, mọi nơi, thông qua các giải pháp giáo dục linh hoạt
              và ứng dụng công nghệ hiện đại.
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
              Công ty TNHH Giáo dục Rồng Việt mang trong mình sứ mệnh kết nối
              tri thức – nuôi dưỡng năng lực – lan tỏa giá trị thông qua việc
              xây dựng và vận hành nền tảng giáo dục trực tuyến DraViE hiện đại,
              thân thiện và hiệu quả.Chúng tôi cam kết mang đến cho người học
              môi trường học tập linh hoạt, chất lượng và công bằng, giúp mọi cá
              nhân có thể tiếp cận tri thức mọi lúc, mọi nơi, phát triển năng
              lực học tập suốt đời và sẵn sàng hội nhập trong thời đại số. Thông
              qua việc kết hợp công nghệ với phương pháp sư phạm tiên tiến, Rồng
              Việt hướng đến việc nâng cao năng lực đội ngũ giáo viên, tối ưu
              hiệu quả đào tạo của các tổ chức giáo dục, đồng thời kết nối cộng
              đồng học tập trong một hệ sinh thái giáo dục số toàn diện.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Giá trị cốt lõi */}
      <section className="py-24 bg-blue-50">
        <SectionTitle title="Giá Trị Cốt Lõi" align="center" />

        <div className="container mx-auto px-6 mt-10">
          {/* Top row: 3 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {coreValues.slice(0, 3).map((item, i) => (
              <motion.div
                key={item.title}
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

          {/* Bottom row: 2 columns on desktop, centered */}
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.slice(3).map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (i + 3) * 0.1 }}
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
          </div>
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

      {/* Teachers - grouped by course */}
      <section className="py-16 bg-white container px-4 mx-auto">
        <SectionTitle title="Đội Ngũ Giảng Viên" align="center" />

        {groupedTeachers.map((group) => {
          const counts: Record<string, string> = {
            ielts: "50+",
            toeic: "40+",
            chinese: "30+",
            japanese: "10+",
            korean: "10+",
          };

          return (
            <div
              key={group.id}
              className="mb-14 border-t border-gray-200 pt-8 first:border-t-0 first:pt-0"
            >
              {/* Center and limit max width */}
              <div className="max-w-6xl mx-auto px-4">
                {/* Header mỗi nhóm */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6">
                  <div className="flex items-center gap-x-4">
                    <h3 className="text-xl font-semibold text-gray-800 tracking-tight mb-2 sm:mb-0">
                      {group.title}
                    </h3>
                    <Badge className="text-sm px-3">
                      {counts[group.id] || "?"} giảng viên
                    </Badge>
                  </div>

                  {/* removed exact count, will show stylized circle later */}
                  <div className="text-sm text-gray-500 hidden sm:block">
                    {/* kept invisible placeholder to preserve spacing on small screens */}
                  </div>
                </div>

                {/* Nếu chưa có giảng viên */}
                {group.teachers.length === 0 ? (
                  <div className="text-sm text-gray-500 mb-4 italic">
                    Chưa có giảng viên cho khóa học này.
                  </div>
                ) : (
                  <div className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-6">
                      {group.teachers.map((teacher) => (
                        <button
                          key={teacher.id}
                          type="button"
                          onClick={() => {
                            setSelectedTeacher(teacher);
                            setDialogOpen(true);
                          }}
                          className="relative cursor-pointer flex flex-col items-stretch bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
                          title={`${teacher.name} — ${teacher.title ?? ""}`}
                          aria-label={`Xem thông tin giảng viên ${teacher.name}`}
                        >
                          {/* Top: full-width avatar */}
                          <div className="relative w-full h-[360px] bg-gray-100 overflow-hidden">
                            <Image
                              src={
                                teacher.avatar ??
                                "/assets/img/default-avatar.png"
                              }
                              alt={teacher.name}
                              fill
                              className="object-cover object-top"
                            />

                            {/* Slide-up overlay from bottom on hover/focus */}
                            <div
                              className="absolute inset-x-0 bottom-0 h-12 flex items-center justify-center
                 bg-gradient-to-t from-black/70 to-transparent text-white text-sm
                 transform translate-y-full group-hover:translate-y-0 group-focus:translate-y-0
                 transition-transform duration-200"
                              aria-hidden="true"
                            >
                              Xem thông tin giảng viên
                            </div>
                          </div>

                          {/* Content */}
                          <div className="px-4 py-3 text-center">
                            <div className="text-sm font-medium text-gray-900 leading-tight">
                              {teacher.name}
                            </div>
                            {teacher.title && (
                              <div className="text-xs text-gray-500 mt-1 line-clamp-1">
                                {teacher.title}
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Dialog hiển thị thông tin giảng viên */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-3xl w-full rounded-xl bg-white">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold text-gray-800">
                Thông tin giảng viên
              </DialogTitle>
            </DialogHeader>

            {selectedTeacher ? (
              <TeacherCard
                teacher={selectedTeacher}
                index={allTeachersFlat.findIndex(
                  (t) => t.id === selectedTeacher.id
                )}
                static={true}
              />
            ) : (
              <div className="py-10 text-center text-sm text-gray-500">
                Không có giảng viên được chọn.
              </div>
            )}

            <DialogClose className="sr-only">Đóng</DialogClose>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
}

const coreValues = [
  {
    icon: "/assets/img/about_page/connect.png",
    title: "Kết nối bền vững",
    desc: "DraViE là cầu nối giữa giáo viên, học sinh, chuyên gia và các đối tác học thuật, tạo nên hệ sinh thái giáo dục tương tác và hỗ trợ lẫn nhau. Chúng tôi tin rằng sức mạnh của sự kết nối sẽ cộng hưởng nguồn lực, lan tỏa tri thức và cùng kiến tạo giá trị dài hạn cho giáo dục.",
  },
  {
    icon: "/assets/img/about_page/flexible.png",
    title: "Công nghệ vì con người",
    desc: "Công nghệ là phương tiện, con người là trung tâm. Chúng tôi ứng dụng công nghệ hiện đại không phải để thay thế yếu tố con người, mà để nâng cao trải nghiệm học tập, cá nhân hóa nội dung giảng dạy và tạo ra sự kết nối có ý nghĩa giữa giáo viên và học sinh. Mọi giải pháp công nghệ của DraViE đều hướng đến mục tiêu phục vụ nhu cầu thực tiễn, nâng cao chất lượng cuộc sống và phần nào tạo điều kiện học tập, giảng dạy linh hoạt cho cả giáo viên và học viên.",
  },
  {
    icon: "/assets/img/about_page/practical.png",
    title: "Thực tiễn và khả thi",
    desc: "Mọi giải pháp được phát triển từ hiểu biết sâu sắc về thực tiễn vận hành giáo dục tại Việt Nam, đảm bảo khả năng triển khai thực tế và phù hợp với từng bối cảnh.",
  },
  {
    icon: "/assets/img/about_page/share.png",
    title: "Chất lượng và uy tín",
    desc: "Chất lượng giáo dục là nền tảng của mọi hoạt động. Chúng tôi cam kết cung cấp nội dung học tập được thiết kế bài bản, giảng viên có trình độ chuyên môn cao và quy trình đào tạo chuẩn hóa theo tiêu chuẩn quốc tế. Uy tín được xây dựng từ sự minh bạch, trách nhiệm và kết quả học tập thực tế mà người học đạt được thông qua nền tảng DraViE.",
  },
  {
    icon: "/assets/img/about_page/responsible.png",
    title: "Đổi mới sáng tạo",
    desc: "Trong bối cảnh giáo dục không ngừng thay đổi, chúng tôi luôn chủ động đổi mới phương pháp giảng dạy, cập nhật nội dung học tập và cải tiến trải nghiệm người dùng. DraViE khuyến khích tư duy chủ động, dám chia sẻ và liên tục học hỏi để hoàn thiện, nhằm mang lại giá trị vượt trội cho khách hàng và đối tác.",
  },
];

const audiences = [
  {
    title: "Học sinh – sinh viên",
    desc: "Cần học ngôn ngữ để phục vụ học tập, du học, và thi chứng chỉ.",
  },
  {
    title: "Phụ huynh – trẻ nhỏ",
    desc: "Có nhu cầu học sớm để rèn phản xạ ngôn ngữ.",
  },
  {
    title: "Người đi làm",
    desc: "Cần cải thiện ngoại ngữ phục vụ công việc, đặc biệt trong các lĩnh vực xuất nhập khẩu, du lịch, và dịch vụ.",
  },
];
