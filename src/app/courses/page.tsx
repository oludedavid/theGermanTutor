"use client";
import PageHeader from "@/ui/components/page-header";
import CoursesSection from "@/ui/components/courses-section";

export default function Courses() {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader />
      <CoursesSection bgColor={"bg-[#FFFFF7]"} />
    </div>
  );
}
