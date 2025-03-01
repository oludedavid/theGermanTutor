"use client";
import Image from "next/image";

type CompetenceProps = {
  image: string;
  title: string;
  discription: string;
};

const competenceData: CompetenceProps[] = [
  {
    image: "/competence.png",
    title: "100% Guaranteed",
    discription:
      "Master German with tailored strategies to ace exams like Goethe-Institut and TestDaF.",
  },
  {
    image: "/competence.png",
    title: "Professional Tutors",
    discription:
      "Learn from certified and experienced tutors who specialize in helping students excel from A1 to C2 levels.",
  },
  {
    image: "/competence.png",
    title: "Proven Track Record",
    discription:
      "Join 1,000+ students who achieved their language goals with our results-driven approach.",
  },
];

export default function Competence() {
  return (
    <section className="w-full py-8 md:py-0 md:h-[272px] bg-[#FFFFF7] flex items-center justify-center">
      <div className="w-full px-4 sm:px-6 md:w-4/5 lg:w-3/5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-8">
          {competenceData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start justify-center p-4 md:p-0"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <h3 className="text-lg font-bold text-center md:text-left text-[#1D1D1D] mt-4">
                {item.title}
              </h3>
              <p className="text-sm text-center md:text-left text-[#1D1D1D] mt-2">
                {item.discription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
