"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHeader({
  customHeading,
}: {
  customHeading?: string;
}) {
  const pathname = usePathname();
  let heading;
  if (pathname === "/") {
    heading = "Home";
  } else if (pathname === "/courses") {
    heading = "Courses";
  } else if (pathname === "/contact-us") {
    heading = "Contact Us";
  } else if (pathname === "/cart") {
    heading = "Cart";
  } else {
    heading = customHeading;
  }

  return (
    <div className="w-full bg-[#F2EFDD] flex justify-center items-center">
      <div className="w-3/5 flex flex-col py-6 gap-8">
        <div className="flex text-base justify-start items-center gap-2">
          <Link className="" href="/">
            Home
          </Link>
          <ChevronRight size={15} />
          <Link className="" href={pathname}>
            {heading}
          </Link>
        </div>
        <h4 className="text-4xl">{heading}</h4>
      </div>
    </div>
  );
}
