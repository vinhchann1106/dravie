"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bot, NotebookPen, PhoneCall, Send } from "lucide-react";
import { NativeSelect, NativeSelectOption } from "./ui/native-select";
import { Textarea } from "./ui/textarea";

type Msg = { id: number; sender: "bot" | "user"; text: string };

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  const [messages, setMessages] = useState<Msg[]>([
    {
      id: 1,
      sender: "bot",
      text: "Xin chào! Mình là DraVie AI — mình có thể giúp bạn tư vấn chương trình học hoặc trả lời thắc mắc nhanh. Bạn muốn bắt đầu từ vấn đề gì?",
    },
  ]);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(2);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // touch start Y for mobile touch handling
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, openChat]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Msg = { id: nextId, sender: "user", text };
    setNextId((n) => n + 1);
    setMessages((m) => [...m, userMsg]);
    setInput("");

    // Fake AI reply
    const replyId = nextId + 1;
    setNextId((n) => n + 1);
    setTimeout(() => {
      const botReply: Msg = {
        id: replyId,
        sender: "bot",
        text:
          'Mình đã nhận được câu hỏi của bạn: "' +
          (text.length > 80 ? text.slice(0, 77) + "..." : text) +
          '". Team DraVie sẽ liên hệ chi tiết hoặc bạn có thể gửi thêm thông tin nhé!',
      };
      setMessages((m) => [...m, botReply]);
    }, 800);
  };

  // Wheel handler: stop propagation when inner element can scroll in wheel direction
  const handleWheel = (e: React.WheelEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const delta = e.deltaY;
    const canScrollUp = scrollTop > 0;
    const canScrollDown = scrollTop + clientHeight < scrollHeight;
    if ((delta < 0 && canScrollUp) || (delta > 0 && canScrollDown)) {
      // allow inner scroll, prevent outer handlers (like Lenis) from capturing
      e.stopPropagation();
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0]?.clientY ?? null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const el = scrollRef.current;
    if (!el || touchStartY.current === null) return;
    const currentY = e.touches[0]?.clientY ?? 0;
    const delta = touchStartY.current - currentY; // >0 swipe up, <0 swipe down
    const { scrollTop, scrollHeight, clientHeight } = el;
    const canScrollUp = scrollTop > 0;
    const canScrollDown = scrollTop + clientHeight < scrollHeight;
    if ((delta < 0 && canScrollUp) || (delta > 0 && canScrollDown)) {
      // stop propagation so outer smooth scroll doesn't take over
      e.stopPropagation();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Các nút con hiển thị khi mở */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-3 flex flex-col items-end space-y-3"
          >
            {/* Nút Zalo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }}
            >
              <Link
                href="https://zalo.me/0326114365"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 rounded-full bg-white shadow-lg py-2 px-4 hover:bg-emerald-50 transition"
              >
                <Image
                  src="/cskh-icon/zalo.svg"
                  alt="Zalo"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Zalo
                </span>
              </Link>
            </motion.div>

            {/* Nút Đăng ký tư vấn */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <button
                onClick={() => setOpenForm(true)}
                className="cursor-pointer text-primary group flex items-center space-x-2 rounded-full bg-white shadow-lg py-2 px-4 hover:bg-emerald-50 transition"
              >
                <NotebookPen />
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Đăng ký tư vấn
                </span>
              </button>
            </motion.div>

            {/* Nút Gọi điện */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Link
                href="tel:0326114365"
                className="text-primary group flex items-center space-x-2 rounded-full bg-white shadow-lg py-2 px-4 hover:bg-emerald-50 transition"
              >
                <PhoneCall />
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Gọi Hotline <br /> <span className="text-xs">0326114365</span>
                </span>
              </Link>
            </motion.div>

            {/* Nút Chat (fake AI) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button
                onClick={() => setOpenChat(true)}
                className="text-primary cursor-pointer group flex items-center space-x-2 rounded-full bg-white shadow-lg py-2 px-4 hover:bg-emerald-50 transition"
              >
                <Bot />
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  AI Chatbot
                </span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-200"
        animate={{
          y: [0, -12, 0],
          rotate: [0, -16, 16, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/logo.png"
          alt="Contact Button"
          width={64}
          height={64}
          className="rounded-full"
        />
      </motion.button>

      {/* Chat UI (fake AI) */}
      <AnimatePresence>
        {openChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="mb-3 w-[320px] sm:w-[360px] rounded-xl bg-white shadow-xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-3 py-2 bg-primary/95 text-white">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Bot"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <div>
                  <div className="text-sm font-semibold">DraVie AI</div>
                  <div className="text-xs opacity-80">Trợ lý tư vấn nhanh</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setOpenChat(false);
                  }}
                  aria-label="Đóng chat"
                  className="text-white opacity-90 hover:opacity-100"
                >
                  ✕
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              onWheel={handleWheel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              // prevent scroll chaining and allow vertical pan on touch devices
              className="h-64 overflow-y-auto px-3 py-3 space-y-3 bg-gray-50 overscroll-contain"
              style={{ touchAction: "pan-y" }}
            >
              {messages.map((m) =>
                m.sender === "bot" ? (
                  <div key={m.id} className="flex items-start gap-2">
                    <Image
                      src="/logo.png"
                      alt="bot"
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                    <div className="bg-white text-sm text-gray-800 px-3 py-2 rounded-lg shadow-sm max-w-[80%]">
                      {m.text}
                    </div>
                  </div>
                ) : (
                  <div key={m.id} className="flex items-start justify-end">
                    <div className="bg-primary text-white text-sm px-3 py-2 rounded-lg shadow-sm max-w-[80%]">
                      {m.text}
                    </div>
                  </div>
                )
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 px-3 py-3 bg-white"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập tin nhắn..."
                className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Nhập tin nhắn"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary p-2 text-white hover:brightness-105"
                aria-label="Gửi"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dialog Form tư vấn */}
      <Dialog open={openForm} onOpenChange={setOpenForm}>
        <DialogContent className="sm:max-w-6xl bg-gray-100">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <div className="bg-primary/80 text-white rounded-[32px] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Left */}
            <div className="flex-1 flex flex-nowrap flex-row md:flex-col justify-center items-center w-full">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-2">
                  Tư vấn chương trình học
                </h2>
                <p className="text-sm opacity-90 text-balance">
                  Hãy để lại thông tin, DraVie sẽ liên hệ tư vấn cho mình ngay
                  nha!
                </p>
              </div>

              {/* larger logo on desktop */}
              <div className="mt-8 block">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
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

              <div className="col-span-1">
                <label htmlFor="course-care" className="sr-only">
                  Khóa học bạn quan tâm (*)
                </label>
                <NativeSelect id="course-care">
                  <NativeSelectOption value="">
                    Khóa học bạn quan tâm (*)
                  </NativeSelectOption>
                  <NativeSelectOption value="ielts">IELTS</NativeSelectOption>
                  <NativeSelectOption value="toeic">TOEIC</NativeSelectOption>
                  <NativeSelectOption value="jlpt">JLPT</NativeSelectOption>
                  <NativeSelectOption value="topik">TOPIK</NativeSelectOption>
                </NativeSelect>
              </div>
              <small className="col-span-1 md:col-span-2 leading-normal text-xs opacity-80">
                Bằng việc gửi đăng ký nhận tư vấn, bạn đã đồng ý với Chính sách
                bảo mật thông tin của DraVie.
              </small>
              {/* Footer */}
              <div className="col-span-1 md:col-span-2 flex justify-end mt-2 w-full">
                <Button
                  type="submit"
                  className="cursor-pointer text-white px-6 py-2 rounded-lg transition-all duration-200 w-full md:w-auto"
                >
                  Gửi đăng ký →
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
