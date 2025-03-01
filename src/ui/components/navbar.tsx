import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import Logo from "./logo";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav
      className={`flex justify-between md:justify-between border-b-[0.5px] border-b-[#] lg:border-none lg:justify-around items-center p-2`}
    >
      <Logo width={120} height={70} />
      <ul className="hidden lg:flex md:hidden justify-around items-center space-x-10">
        <li className="text-[#0F0F0F]">
          <Link className="text-sm" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-sm" href="/courses">
            Courses
          </Link>
        </li>
        <li>
          <Link className="relative text-sm" href="/cart">
            <small className="absolute -top-2 -right-1 font-bold text-xs text-red-400">
              1
            </small>
            <ShoppingBasket size={25} />
          </Link>
        </li>
        <li>
          <Button
            style={{
              fontFamily: "'Fustat', sans-serif",
            }}
            className="bg-red-800 uppercase text-white w-36 flex justify-center items-center"
            variant="default"
          >
            <Link className="text-[16px] w-full" href="/contact-us">
              Contact Us
            </Link>
          </Button>
        </li>
      </ul>
      <section className="block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetClose />
            </SheetHeader>
            <SheetTitle className="text-center">
              <figure className="flex justify-center items-center">
                <Logo width={70} height={70} />
              </figure>
            </SheetTitle>
            <SheetDescription className="flex flex-col items-center space-y-20 py-10">
              <Link href="/">Home</Link>
              <Link href="/courses">Courses</Link>
              <Link className="relative text-sm" href="/cart">
                <small className="absolute -top-2 -right-1 font-bold text-xs text-red-400">
                  1
                </small>
                <ShoppingBasket size={25} />
              </Link>
              <Button
                style={{
                  fontFamily: "'Fustat', sans-serif",
                }}
                className="bg-red-800 uppercase text-white w-36 flex justify-center items-center"
                variant="default"
              >
                <Link className="text-[16px] w-full" href="/contact-us">
                  Contact Us
                </Link>
              </Button>
            </SheetDescription>
            <SheetFooter>
              <div className="flex items-center">
                <small className="pb-10 pt-2">
                  Copyright © 2025 thegermantutor. All Rights Reserved.
                </small>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </section>
    </nav>
  );
}
