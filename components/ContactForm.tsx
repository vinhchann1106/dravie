"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="bg-primary text-white rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8"
    >
      {/* Left */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-2">
          Bạn còn <br /> câu hỏi khác?
        </h2>
        <p className="text-sm opacity-90">
          Hãy để lại thông tin, DraVie sẽ liên hệ và hỗ trợ xử lý mọi vướng mắc
          của bạn
        </p>

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

      {/* Right form */}
      <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 bg-white rounded-2xl p-6 text-black shadow-md">
        {/* Inputs */}
        <div className="col-span-2">
          <Input
            placeholder="Nhập họ và tên của bạn"
            className="bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#0046AF] focus:ring-[#0046AF]"
            required
          />
        </div>

        <div className="col-span-2">
          <Input
            placeholder="Nhập địa chỉ email của bạn"
            className="bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#0046AF] focus:ring-[#0046AF]"
          />
        </div>

        <Input
          placeholder="Nhập năm sinh"
          className="bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#0046AF] focus:ring-[#0046AF]"
        />

        <Input
          placeholder="Nhập số điện thoại của bạn"
          className="bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#0046AF] focus:ring-[#0046AF]"
          required
        />

        {/* Textarea */}
        <div className="col-span-2">
          <Textarea
            placeholder={`Bạn có câu hỏi gì?\n• Hãy cho DraVie biết trình độ hiện tại\n• Mục tiêu mong muốn`}
            className="bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#0046AF] focus:ring-[#0046AF] min-h-[100px]"
          />
        </div>

        {/* Footer */}
        <div className="col-span-2 flex justify-end md:justify-end mt-4 w-full">
          <Button className="cursor-pointer text-white px-6 py-2 rounded-lg transition-all duration-200 w-full md:w-auto">
            Gửi câu hỏi →
          </Button>
        </div>
      </form>
    </section>
  );
}
