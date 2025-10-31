"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./common/Logo";
import { Button } from "./ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openCourse, setOpenCourse] = useState(false);

  const courseItems = [
    { label: "IELTS", href: "/ielts" },
    { label: "TOEIC", href: "/toeic" },
    { label: "HSK", href: "/hsk" },
    { label: "JLPT", href: "/jlpt" },
    { label: "TOPIK", href: "/topik" },
  ];

  const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Khóa học", href: "#", isDropdown: true },
    { label: "Kiểm tra đầu vào", href: "/free-entry-test" },
    { label: "Luyện đề", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Tin tức", href: "#" },
  ];

  const handleLinkClick = () => {
    setOpen(false);
    setOpenCourse(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium relative">
          {menuItems.map((item) =>
            item.isDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenCourse(true)}
                onMouseLeave={() => setOpenCourse(false)}
              >
                <button
                  className={`flex items-center gap-1 transition text-gray-700 hover:text-primary`}
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 mt-[1px]" />
                </button>

                {/* Cầu nối */}
                {openCourse && (
                  <div
                    className="absolute left-0 top-full w-full h-3 bg-transparent"
                    aria-hidden
                  />
                )}

                {/* Dropdown */}
                {openCourse && (
                  <div
                    className="absolute left-0 top-[calc(100%+8px)] w-64 bg-white text-gray-700 rounded-lg border border-border shadow-lg py-3 animate-in fade-in duration-150"
                    onMouseEnter={() => setOpenCourse(true)}
                    onMouseLeave={() => setOpenCourse(false)}
                  >
                    {courseItems.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        onClick={handleLinkClick}
                        className="block px-4 py-2 hover:text-primary hover:ml-2 transition-all"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className={`transition text-gray-700 hover:text-primary`}
              >
                {item.label}
              </Link>
            )
          )}

          <Button className="ml-4 px-4 py-1.5 text-sm font-medium rounded-full cursor-pointer transition">
            Đăng nhập
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 text-gray-700`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-[88px] left-0 w-full bg-white border-t shadow-lg flex flex-col items-center gap-3 py-4 text-gray-700 text-sm animate-in slide-in-from-top duration-200 md:hidden z-40">
          {menuItems.map((item) =>
            item.isDropdown ? (
              <div key={item.label} className="w-full text-center">
                <button
                  onClick={() => setOpenCourse(!openCourse)}
                  className="font-semibold flex justify-center items-center gap-1 text-gray-700 hover:text-primary w-full"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openCourse ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openCourse && (
                  <div className="flex flex-col mt-1">
                    {courseItems.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        onClick={handleLinkClick}
                        className="py-1 text-gray-600 hover:text-primary transition"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className="py-1 text-gray-700 hover:text-primary transition"
              >
                {item.label}
              </Link>
            )
          )}
          <Button
            onClick={handleLinkClick}
            className="mt-2 py-2 w-10/12 font-medium rounded-full transition"
          >
            Đăng nhập
          </Button>
        </div>
      )}
    </nav>
  );
}
