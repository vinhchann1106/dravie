import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingContact from "@/components/FloatingContact";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "DraVie",
  description: "DraVie Học một ngôn ngữ - Mở một tầm nhìn",
  icons: {
    icon: "/favicon.ico", // hoặc .ico nếu bạn dùng ico
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#F7FAFC]`}>
        <div className="pb-[88px]">
          <Navbar />
        </div>
        {children}
        <Toaster richColors position="top-right" />
        <FloatingContact />
      </body>
    </html>
  );
}
