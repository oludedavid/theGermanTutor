"use client";

import Hero from "@/ui/components/hero";
import Competence from "@/ui/components/competence";
import MiniAbout from "@/ui/components/mini-about";
import CallToEnroll from "@/ui/components/call-to-enroll";
import CoursesSection from "@/ui/components/courses-section";
import WhyUs from "@/ui/components/why-us";
import ReadyToStart from "@/ui/components/ready-to-start";
import secureLocalStorage from "react-secure-storage";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !secureLocalStorage.getItem("cartItems")
    ) {
      secureLocalStorage.setItem("cartItems", JSON.stringify([]));
    }
  }, []);
  return (
    <section className="grid grid-cols-1">
      <Hero />
      <Competence />
      <MiniAbout />
      <CallToEnroll />
      <CoursesSection bgColor="bg-[#F2EFDD]" />
      <WhyUs />
      <ReadyToStart />
    </section>
  );
}
