"use client";
import FloatingContact from "../FloatingContact";
import Navbar from "../Navbar";
import { Toaster } from "../ui/sonner";
import LenisProvider from "../providers/LenisProvider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LenisProvider />
      <div className="pb-[88px]">
        <Navbar />
      </div>
      {children}
      <Toaster richColors position="top-center" />
      <FloatingContact />
    </>
  );
}
