import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function WhyUs() {
  return (
    <div className="w-full py-8 md:py-12">
      <div className="w-full md:w-11/12 lg:w-4/5 xl:w-3/5 mx-auto bg-[#FFFFF7] px-4 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3 mb-10 md:mb-16">
          <h3 className="text-[#0F0F0F] text-3xl md:text-4xl font-extrabold w-full md:w-2/3 mx-auto text-center md:text-left">
            Why Learn German with Us?
          </h3>
          <div className="w-full md:w-2/3 mx-auto space-y-3">
            <p className="text-base lowercase font-normal text-[#525252] text-center md:text-left">
              Experience Expert Guidance, Flexible Learning, and Guaranteed
              Success with Our Personalized Approach.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                variant={`outline`}
                className="bg-[#FFFFF7] border-[#910F3F] text-black hover:bg-[#e5e2d0] transition-colors mt-2 md:mt-3"
              >
                <Link
                  className="uppercase text-sm md:text-base"
                  href="/courses"
                >
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          <div className="flex flex-col space-y-3 border-b pb-6 sm:pb-0 sm:border-b-0 sm:border-r sm:border-gray-200 sm:pr-4 md:pr-6">
            <figure className="w-10 h-10 rounded-full bg-[#F2EFDD] p-2 flex items-center justify-center">
              <Image
                src="/frame1.png"
                alt="Certified Tutors"
                width={20}
                height={20}
              />
            </figure>
            <h5 className="text-[18px] text-[#0F0F0F] font-extrabold">
              Certified Tutors
            </h5>
            <p className="text-sm text-[#525252]">
              Our team comprises experienced and certified tutors passionate
              about teaching German effectively.
            </p>
          </div>

          <div className="flex flex-col space-y-3 border-b pb-6 sm:pb-0 sm:border-b-0 lg:border-r lg:border-gray-200 lg:pr-4">
            <figure className="w-10 h-10 rounded-full bg-[#F2EFDD] p-2 flex items-center justify-center">
              <Image
                src="/frame2.png"
                alt="Flexible Learning"
                width={24}
                height={24}
              />
            </figure>
            <h5 className="text-[18px] text-[#0F0F0F] font-extrabold">
              Flexible Learning Options
            </h5>
            <p className="text-sm text-[#525252]">
              We offer both online and in-person classes to fit your schedule.
            </p>
          </div>
          <div className="flex flex-col space-y-3 border-b pb-6 sm:pb-0 sm:border-b-0 sm:border-r sm:border-gray-200 sm:pr-4 md:pr-6">
            <figure className="w-10 h-10 rounded-full bg-[#F2EFDD] p-2 flex items-center justify-center">
              <Image
                src="/frame3.png"
                alt="Exam Success"
                width={24}
                height={24}
              />
            </figure>
            <h5 className="text-[18px] text-[#0F0F0F] font-extrabold">
              Exam Success Guarantee
            </h5>
            <p className="text-sm text-[#525252]">
              From Goethe-Institut certifications to TestDaF, we help you
              prepare for and excel in key language exams.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <figure className="w-10 h-10 rounded-full bg-[#F2EFDD] p-2 flex items-center justify-center">
              <Image
                src="/frame4.png"
                alt="Custom Learning"
                width={24}
                height={24}
              />
            </figure>
            <h5 className="text-[18px] text-[#0F0F0F] font-extrabold">
              Custom-Tailored Learning Paths
            </h5>
            <p className="text-sm text-[#525252]">
              With personalized lesson plans and real-time progress tracking,
              every student gets a unique learning experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
