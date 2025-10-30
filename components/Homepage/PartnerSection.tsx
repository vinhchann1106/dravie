"use client";

import AutoScrollRow from "@/components/common/AutoScrollRow";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";

const partners = [
  { id: 1, logo: "/partners/idp.webp", name: "IDP" },
  { id: 2, logo: "/partners/british-council.webp", name: "British Council" },
  { id: 3, logo: "/partners/ipp.webp", name: "IPP IELTS" },
  { id: 4, logo: "/partners/idp.webp", name: "IDP" },
  { id: 5, logo: "/partners/british-council.webp", name: "British Council" },
  { id: 6, logo: "/partners/ipp.webp", name: "IPP IELTS" },
];

export default function PartnerSection() {
  return (
    <section className="w-full py-16 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Được đồng hành bởi những đơn vị giáo dục uy tín hàng đầu Việt Nam" />
        <AutoScrollRow speed={1} className="py-2">
          {partners.map((p) => (
            <Card
              key={p.id}
              className="min-w-[180px] md:min-w-[200px] bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center justify-center"
            >
              <CardContent className="p-4 flex items-center justify-center">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-[40px] w-auto"
                />
              </CardContent>
            </Card>
          ))}
        </AutoScrollRow>
      </div>
    </section>
  );
}
