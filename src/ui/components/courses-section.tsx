import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type CourseDataT = {
  id: number;
  title: string;
  description: string;
  level: string;
  price: number;
  imageUrl?: string;
  duration: string;
};
export const courseData: CourseDataT[] = [
  {
    id: 1,
    title: "A1 – Beginner Level (Grundstufe 1)",
    description:
      "Perfect for absolute beginners. Learn foundational German vocabulary and grammar.",
    level: "A1",
    price: 299,
    imageUrl: "/course1.png",
    duration: "8 weeks",
  },
  {
    id: 2,
    title: "A2 – Elementary Level (Grundstufe 2)",
    description:
      "Build on basic knowledge and develop simple conversation skills.",
    level: "A2",
    price: 349,
    imageUrl: "/course2.png",
    duration: "10 weeks",
  },
  {
    id: 3,
    title: "B1 - Intermediate Level (Mittelstufe 1)",
    description:
      "Achieve independent communication for work and daily life scenarios.",
    level: "B1",
    price: 399,
    imageUrl: "/course3.png",
    duration: "12 weeks",
  },
  {
    id: 4,
    title:
      "B2 – Upper Intermediate Business German (Mittelstufe 2: Berufssprache)",
    description:
      "Express yourself fluently and understand complex texts and discussions.",
    level: "B2",
    price: 449,
    imageUrl: "/course4.png",
    duration: "12 weeks",
  },
  {
    id: 5,
    title: "C1 – Advanced Level (Fortgeschrittene: Sprachliche Perfektion)",
    description:
      "Master complex language for academic and professional environments.",
    level: "C1",
    price: 499,
    imageUrl: "/course5.png",
    duration: "14 weeks",
  },
  {
    id: 6,
    title: "TestDaF Preparation",
    description:
      "Specialized training for the Test of German as a Foreign Language exam.",
    level: "B2-C1",
    price: 549,
    imageUrl: "/course6.png",
    duration: "8 weeks",
  },
];

export default function CoursesSection({ bgColor }: { bgColor: string }) {
  return (
    <div className={`w-full py-10 md:py-16 ${bgColor}`}>
      <div className="w-full px-4 sm:px-6 md:w-4/5 lg:w-3/5 mx-auto flex items-center justify-center flex-col space-y-4 md:space-y-6 mb-6 md:mb-10">
        <h3 className="text-[#0F0F0F] text-2xl sm:text-3xl md:text-[36px] font-extrabold text-center">
          Master German from A1 to C1 with Us
        </h3>
        <p className="w-full md:w-4/5 lg:w-3/4 text-[#525252] text-base sm:text-lg md:text-[18px] text-center font-normal">
          Our comprehensive courses cater to all levels, from beginners to
          advanced learners. Join us to enhance your language skills and prepare
          for examinations.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:w-4/5 lg:w-3/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {courseData.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-sm p-4 md:p-6"
          >
            <div className="h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
              {course.imageUrl ? (
                <Image
                  height={160}
                  width={160}
                  src={course.imageUrl}
                  alt={`${course.title} course`}
                  className="h-full w-full object-cover rounded-md"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="text-2xl font-bold text-[#910F3F]">
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-500">German Level</span>
                </div>
              )}
            </div>
            <h4 className="text-lg font-bold mb-2">{course.title}</h4>
            <p className="text-[#525252] text-sm mb-3">{course.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="font-semibold text-[#910F3F]">
                  €{course.price}
                </span>
                <span className="text-xs text-gray-500">{course.duration}</span>
              </div>
              <Button
                variant={"default"}
                className="bg-[#910F3F] text-white px-4 py-2 rounded-md text-sm hover:bg-[#7d0c36] transition-colors"
              >
                <Link href={`/courses/${course.id}`}>Enroll Now</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
