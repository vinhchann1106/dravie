"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FaqItem {
  title: string;
  content: string; // chỉ nhận chuỗi thuần
}

interface DraVieFaqProps {
  title?: string;
  buttonText?: string;
  faqs: FaqItem[];
  defaultOpenIndex?: number;
  onButtonClick?: () => void;
  className?: string;
}

export default function DraVieFaq({
  title = "DraVie giúp bạn tháo gỡ mọi thắc mắc",
  buttonText = "Đặt thêm câu hỏi",
  faqs,
  defaultOpenIndex = 0,
  onButtonClick,
  className,
}: DraVieFaqProps) {
  // helper: loại bỏ **markdown bold**
  const cleanMarkdown = (text: string) => text.replace(/\*\*/g, "");

  return (
    <section
      className={cn(
        "w-full py-12 md:py-20 bg-[#F9FBFF] rounded-3xl",
        className
      )}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-snug mb-6 text-balance">
            {title.split(" ").map((word, i) =>
              i === 1 ? (
                <span key={i} className="text-secondary-foreground">
                  {" " + word}
                </span>
              ) : (
                " " + word
              )
            )}
          </h2>
          <Button
            size="lg"
            className="cursor-pointer bg-secondary-foreground/90 text-white font-semibold transition-colors rounded-xl px-6 py-5"
            onClick={() => {
              const section = document.querySelector("#contact-form");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {buttonText}
          </Button>
        </div>

        {/* Right */}
        <div className="space-y-3">
          <Accordion
            type="single"
            collapsible
            defaultValue={faqs[defaultOpenIndex]?.title || ""}
            className="space-y-2"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={faq.title}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-base font-medium text-gray-800 hover:bg-gray-50">
                  {faq.title}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  <div className="max-h-[300px] overflow-y-auto pr-2">
                    {cleanMarkdown(faq.content)}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
