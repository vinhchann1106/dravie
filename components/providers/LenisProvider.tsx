"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 0.6, // thời gian trễ của smooth (0.4–0.8 là đẹp)
      easing: (t) => 1 - Math.pow(1 - t, 3), // easing cubic dễ chịu
      orientation: "vertical", // hướng cuộn
      gestureOrientation: "vertical",
      smoothWheel: true, // mượt khi dùng chuột
      touchMultiplier: 1.5, // độ nhạy touch
    });

    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    document.body.classList.add("lenis-smooth");

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      document.body.classList.remove("lenis-smooth");
    };
  }, []);

  return null;
}
