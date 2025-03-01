import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToEnroll() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 md:py-12 lg:py-16 bg-[#B01F55] gap-3 md:gap-5 px-4 md:px-8">
      <h1 className="text-xl md:text-2xl lg:text-[32px] font-bold text-[#F2EFDD] text-center max-w-4xl">
        Trust Our Record-Setting Success Rates for Learning German.
      </h1>
      <p className="text-sm md:text-base text-[#F2EFDD] text-center max-w-2xl">
        Trust Our Record-Setting Success Rates for Learning German.
      </p>
      <Button
        variant={`default`}
        className="bg-[#F2EFDD] text-black hover:bg-[#e5e2d0] transition-colors mt-2 md:mt-3"
      >
        <Link className="uppercase text-sm md:text-base" href="/courses">
          Enroll Now
        </Link>
      </Button>
    </div>
  );
}
