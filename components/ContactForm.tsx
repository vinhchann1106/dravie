"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { NativeSelect, NativeSelectOption } from "./ui/native-select";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  // ví dụ: "bg-blue-600 text-white" hoặc "bg-[#0046AF] text-white"
  color?: string;
}

export default function ContactForm({
  color = "bg-primary text-white",
}: ContactFormProps) {
  return (
    <section
      id="contact-form"
      className={`${color} rounded-[32px] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-5xl mx-auto`}
    >
      {/* Left */}
      <div className="flex-1 flex flex-col justify-center w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-2">
          Bạn còn <br /> câu hỏi khác?
        </h2>
        <p className="text-sm opacity-90">
          Hãy để lại thông tin, DraVie sẽ liên hệ và hỗ trợ xử lý mọi vướng mắc
          của bạn
        </p>

        {/* small logo on mobile */}
        <div className="block md:hidden mt-4 mb-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        {/* larger logo on desktop */}
        <div className="mt-8 hidden md:block">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>

      {/* Right form (view only) */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-3 bg-white rounded-2xl p-4 sm:p-6 text-black shadow-md"
        aria-label="Contact form"
      >
        {/* Full width name */}
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="name" className="sr-only">
            Họ và tên
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Nhập họ và tên của bạn"
            className="w-full bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#0046AF] focus:ring-[#0046AF]"
            required
          />
        </div>

        {/* Email full width on mobile, half on md */}
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Nhập địa chỉ email của bạn"
            className="w-full bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#0046AF] focus:ring-[#0046AF]"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="phone" className="sr-only">
            Số điện thoại
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Nhập số điện thoại của bạn"
            className="w-full bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#0046AF] focus:ring-[#0046AF]"
            required
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="birthYear" className="sr-only">
            Năm sinh
          </label>
          <Input
            id="birthYear"
            name="birthYear"
            type="number"
            min={1900}
            max={new Date().getFullYear()}
            placeholder="Nhập năm sinh"
            className="w-full bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#0046AF] focus:ring-[#0046AF]"
          />
        </div>
        {/* Textarea */}
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="message" className="sr-only">
            Tin nhắn
          </label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder={`Bạn có câu hỏi gì?\n• Hãy cho DraVie biết trình độ hiện tại\n• Mục tiêu mong muốn`}
            className="w-full bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#0046AF] focus:ring-[#0046AF] min-h-[100px]"
          />
        </div>

        {/* Footer */}
        <div className="col-span-1 md:col-span-2 flex justify-end mt-2 w-full">
          <Button
            type="submit"
            className={cn(
              "cursor-pointer text-white px-6 py-2 rounded-lg transition-all duration-200 w-full md:w-auto",
              color,
              `hover:${color} hover:opacity-80` // override hover: giữ cùng màu background
            )}
          >
            Gửi câu hỏi →
          </Button>
        </div>
      </form>
    </section>
  );
}
