"use client";

import AutoScrollRow from "@/components/common/AutoScrollRow";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";

const partners = [
  { id: 1, logo: "/partners/idp.webp", name: "IDP" },
  { id: 2, logo: "/partners/british-council.webp", name: "British Council" },
  { id: 3, logo: "/partners/ipp.webp", name: "IPP IELTS" },
  { id: 4, logo: "/partners/ufm.jpg", name: "UFM" },
  { id: 5, logo: "/partners/ueh.jpg", name: "UEH" },
  { id: 6, logo: "/partners/sgu.jpg", name: "SGU" },
  { id: 7, logo: "/partners/ptit.jpg", name: "PTIT" },
  { id: 8, logo: "/partners/uel.jpg", name: "UEL" },
];

export default function PartnerSection() {
  return (
    <section className="w-full py-16 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Được đồng hành bởi những đơn vị giáo dục uy tín hàng đầu Việt Nam" />
        <AutoScrollRow speed={2} className="py-2">
          {partners.map((p) => (
            <Card
              key={p.id}
              className="min-w-[180px] md:min-w-[280px] h-32 md:h-44 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center justify-center"
            >
              <CardContent className="p-4 flex items-center justify-center h-full">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={180}
                  height={120}
                  className="object-contain max-h-full w-auto"
                />
              </CardContent>
            </Card>
          ))}
        </AutoScrollRow>
      </div>
    </section>
  );
}
