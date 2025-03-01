import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroCards({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string;
  title: string;
  description: string;
}) {
  return (
    <section className="w-full h-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-center py-5 lg:py-10 gap-5 px-4 lg:px-0">
      <div className="w-full space-y-3 lg:space-y-4 order-2 lg:order-1">
        <h3 className="w-full lg:w-4/5 mx-auto text-[#0F0F0F] text-xl sm:text-2xl lg:text-4xl font-extrabold text-center lg:text-left">
          {title}
        </h3>
        <p className="w-full lg:w-4/5 mx-auto text-base lg:text-lg font-normal text-[#525252] text-center lg:text-left">
          {description}
        </p>
        <div className="w-full lg:w-4/5 mx-auto mt-3 lg:mt-4 flex justify-center lg:justify-start">
          <Button
            className="border-red-800 bg-[#F2EFDD]"
            variant={"outline"}
            size={"default"}
          >
            <Link className="capitalize" href="/courses">
              Enroll Now
            </Link>
          </Button>
        </div>
      </div>
      <div className="order-1 lg:order-2 mb-4 lg:mb-0">
        <Image
          className="h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          src={imageUrl}
          width={900}
          height={900}
          alt="Hero Image"
          priority
        />
      </div>
    </section>
  );
}
