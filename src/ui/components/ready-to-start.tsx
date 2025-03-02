import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export default function ReadyToStart() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 md:py-12 lg:py-16 bg-[#B01F55] gap-3 md:gap-5 px-4 md:px-8">
      <h1 className="text-xl md:text-2xl lg:text-[32px] font-bold text-[#F2EFDD] text-center max-w-4xl">
        Ready to Start Your German Journey?
      </h1>
      <p className="text-sm md:text-base text-[#F2EFDD] text-center max-w-2xl">
        Unlock fluency with our expertly designed courses tailored to your
        learning needs. Start your journey to mastering German today and achieve
        your language goals with confidence!
      </p>
      <Button
        variant={`default`}
        className="bg-[#F2EFDD] text-black hover:bg-[#e5e2d0] transition-colors mt-2 md:mt-3"
      >
        <Link className="uppercase text-sm md:text-base flex" href="/courses">
          <span> Enroll Now</span>
          <ArrowUpRight size={10} />
        </Link>
      </Button>
    </div>
  );
}
