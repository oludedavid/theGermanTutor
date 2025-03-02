"use client";
import { courseData } from "@/data/courses";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHeader({
  customHeading,
}: {
  customHeading?: string;
}) {
  const pathname = usePathname();
  const getHeading = () => {
    if (pathname === "/") return "Home";
    if (pathname === "/courses") return "Courses";
    if (pathname === "/contact-us") return "Contact Us";
    if (pathname === "/cart") return "Cart";

    if (pathname.startsWith("/courses/")) {
      const courseId = pathname.split("/")[2];
      const course = courseData.find((c) => c.id.toString() === courseId);
      return course ? course.title : "Course Details";
    }

    return customHeading || "Page Not Found";
  };

  const heading = getHeading();

  return (
    <div className="w-full bg-[#F2EFDD] flex justify-center items-center px-4 sm:px-6">
      <div className="w-full max-w-6xl flex flex-col py-4 sm:py-6 gap-4 sm:gap-8">
        <div className="flex text-sm sm:text-base justify-start items-center gap-1 sm:gap-2 flex-wrap">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <ChevronRight size={12} className="flex-shrink-0" />
          {pathname.startsWith("/courses/") && (
            <>
              <Link href="/courses" className="hover:underline">
                Courses
              </Link>
              <ChevronRight size={12} className="flex-shrink-0" />
            </>
          )}
          <span className="font-medium truncate">{heading}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {heading}
        </h1>
      </div>
    </div>
  );
}
