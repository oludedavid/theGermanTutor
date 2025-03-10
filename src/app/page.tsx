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
import { useUser } from "@clerk/nextjs";
import { useUserStore } from "@/store/user-store";

export default function Home() {
  const { user } = useUser();
  const { setUser } = useUserStore((state) => state);
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !secureLocalStorage.getItem("cartItems")
    ) {
      secureLocalStorage.setItem("cartItems", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    if (user) {
      setUser({
        userId: user.id,
        fullName: user.fullName,
        email: user.emailAddresses[0].emailAddress,
      });
    }
  }, [user, setUser]);

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
