import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function MiniAbout() {
  return (
    <section className="w-full py-16 flex justify-center items-center bg-[#F2EFDD]">
      <div className="w-full max-w-6xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Image grid */}
        <div className="w-full md:w-1/2 grid grid-cols-3 gap-3 h-96">
          {/* First image - tall vertical image */}
          <div className="col-span-1 row-span-2 rounded-lg overflow-hidden h-full">
            <Image
              src="/mini1.png"
              alt="German Tutor students"
              width={500}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second image - top right */}
          <div className="col-span-2 rounded-lg overflow-hidden h-full">
            <Image
              src="/mini2.png"
              alt="German language classroom"
              width={700}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third image - bottom right, same height as second */}
          <div className="col-span-2 rounded-lg overflow-hidden h-full">
            <Image
              src="/mini3.png"
              alt="German Tutor learning environment"
              width={700}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-2">
          <h3 className="text-2xl font-bold text-[#0F0F0F]">
            Empowering You to Achieve German Fluency
          </h3>

          <p className="text-[#525252] text-base ">
            Founded on the belief that language learning should be accessible
            and enjoyable, German Tutor has supported over 1,000 students in
            achieving their language dreams. Our approach combines traditional
            teaching methods with modern tools, creating a dynamic and engaging
            learning environment.
          </p>

          <p className="text-[#525252] text-base">
            At The German Tutor, we pride ourselves on our impressive student
            success rates. Our dedicated approach ensures that learners are
            well-prepared for their examinations.
          </p>

          <div className="w-full flex justify-start py-1">
            <div className="p-4 w-3/4">
              <h3 className="text-3xl font-bold text-gray-800">50+</h3>
              <small className="text-[#525252]">Mentors at German Tutor</small>
            </div>
            <div className="p-4 w-3/4">
              <h3 className="text-3xl font-bold text-gray-800">5K+</h3>
              <small className="text-[#525252]">Students Trust Us</small>
            </div>
            <div className="p-4 w-3/4">
              <h3 className="text-3xl font-bold text-gray-800">100+</h3>
              <small className="w-full text-[#525252]">
                Student Success Stories
              </small>
            </div>
          </div>

          <Button
            variant={"outline"}
            className="mt-1 px-6 py-2 border-b-1 border-red-800"
          >
            <Link className="text-red-800" href={`/courses`}>
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
