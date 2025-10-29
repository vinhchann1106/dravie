"use client";

import AutoScrollRow from "@/components/common/AutoScrollRow";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const partners = [
  {
    id: 1,
    logo: "/newspaper/24h.webp",
    name: "24h",
    desc: 'Giải mã "cơn sốt" trải nghiệm phòng Speaking ảo tại IELTS Fair 2024',
  },
  {
    id: 2,
    logo: "/newspaper/kenh14.webp",
    name: "Kenh14",
    desc: "Luyện viết IELTS band 7.0+ không còn khó khăn nếu bạn biết trợ thủ đắc lực DraVie",
  },
  {
    id: 3,
    logo: "/newspaper/dantri.webp",
    name: "Dantri",
    desc: "Bộ đôi phòng ảo thông minh giúp nâng cao điểm số IELTS Speaking và Writing",
  },
  {
    id: 4,
    logo: "/newspaper/vnexpress.webp",
    name: "VNExpress",
    desc: "DraVie nhận 7 triệu USD vòng gọi vốn Series A",
  },
  {
    id: 5,
    logo: "/newspaper/24h.webp",
    name: "24h",
    desc: 'Giải mã "cơn sốt" trải nghiệm phòng Speaking ảo tại IELTS Fair 2024',
  },
  {
    id: 6,
    logo: "/newspaper/kenh14.webp",
    name: "Kenh14",
    desc: "Luyện viết IELTS band 7.0+ không còn khó khăn nếu bạn biết trợ thủ đắc lực DraVie",
  },
  {
    id: 7,
    logo: "/newspaper/dantri.webp",
    name: "Dantri",
    desc: "Bộ đôi phòng ảo thông minh giúp nâng cao điểm số IELTS Speaking và Writing",
  },
  {
    id: 8,
    logo: "/newspaper/vnexpress.webp",
    name: "VNExpress",
    desc: "DraVie nhận 7 triệu USD vòng gọi vốn Series A",
  },
];

export default function NewspaperSection() {
  return (
    <section className="w-full py-16 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary-foreground mb-4 leading-tight">
          Được báo chí 'gọi tên' với hàng trăm ưu điểm nổi bật
        </h2>
        <AutoScrollRow speed={1} className="py-2">
          {partners.map((p) => (
            <Card
              key={p.id}
              className="min-w-[180px] md:min-w-[200px] bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center justify-center"
            >
              <CardContent className="p-4 flex flex-col gap-2 max-w-[384px] items-center justify-center min-h-[120px]">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={200}
                  height={60}
                  className="object-contain w-auto"
                />
                <p className="text-sm font-semibold text-accent-foreground">
                  {p.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </AutoScrollRow>
      </div>
    </section>
  );
}
