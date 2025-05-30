"use client";

import Hero from "@/ui/components/hero";
import Competence from "@/ui/components/competence";
import MiniAbout from "@/ui/components/mini-about";
import CallToEnroll from "@/ui/components/call-to-enroll";
import CoursesSection from "@/ui/components/courses-section";
import WhyUs from "@/ui/components/why-us";
import ReadyToStart from "@/ui/components/ready-to-start";

export default function Home() {
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
