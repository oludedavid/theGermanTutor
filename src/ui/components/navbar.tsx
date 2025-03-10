"use client";
import { Menu, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { useCartStore } from "@/store/cart-store";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathName = usePathname();
  function isActive(url: string) {
    return pathName === url;
  }
  const { getTotalQuantityOfItemsInCart } = useCartStore((state) => state);
  return (
    <nav
      className={`flex justify-between md:justify-between border-b-[0.5px] border-b-[#] lg:border-none lg:justify-around items-center p-2`}
    >
      <Logo width={120} height={70} />
      <ul className="hidden lg:flex md:hidden justify-around items-center space-x-10">
        <li
          className={`${
            isActive("/") ? "text-[#910F3F]" : "text-[#0F0F0F]"
          } hover:text-[#910F3F] transition-colors duration-200`}
        >
          <Link className="text-sm" href="/">
            Home
          </Link>
        </li>
        <li
          className={`${
            isActive("/courses") ? "text-[#910F3F]" : "text-[#0F0F0F]"
          } hover:text-[#910F3F] transition-colors duration-200`}
        >
          <Link className="text-sm" href="/courses">
            Courses
          </Link>
        </li>
        <li
          className={`${
            isActive("/cart") ? "text-[#910F3F]" : "text-[#0F0F0F]"
          } hover:text-[#910F3F] transition-colors duration-200`}
        >
          <Link className="relative text-sm" href="/cart">
            <small className="absolute -top-2 -right-1 font-bold text-xs text-red-400">
              {getTotalQuantityOfItemsInCart()}
            </small>
            <ShoppingBasket size={25} />
          </Link>
        </li>
        <li>
          <Button
            style={{
              fontFamily: "'Fustat', sans-serif",
            }}
            className="bg-[#910F3F] hover:bg-[#7a0c34] uppercase text-white w-36 flex justify-center items-center transition-colors duration-200"
            variant="default"
          >
            <Link className="text-[16px] w-full" href="/contact-us">
              Contact Us
            </Link>
          </Button>
        </li>
        <li className="flex gap-5">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </li>
      </ul>
      <div className="flex items-center">
        <span
          className={`relative lg:hidden flex flex-row mr-4 ${
            isActive("/cart") ? "text-[#910F3F]" : "text-[#0F0F0F]"
          } hover:text-[#910F3F] transition-colors duration-200`}
        >
          <Link className="relative text-sm" href="/cart">
            <small className="absolute -top-2 -right-1 font-bold text-xs text-red-400">
              {getTotalQuantityOfItemsInCart()}
            </small>
            <ShoppingBasket size={25} />
          </Link>
        </span>
        <section className="block lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="p-1">
                <Menu size={24} className="text-[#910F3F]" />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-l-[#B01F55] bg-white">
              <SheetHeader className="border-b pb-4 mb-6">
                <div className="flex justify-between items-center">
                  <SheetTitle className="text-center text-[#910F3F]">
                    <figure className="flex justify-center items-center">
                      <Logo width={70} height={70} />
                    </figure>
                  </SheetTitle>
                </div>
              </SheetHeader>

              <div className="flex flex-col items-center space-y-6 py-6">
                <Link
                  href="/"
                  className={`${
                    isActive("/")
                      ? "text-[#910F3F] font-bold"
                      : "text-[#0F0F0F]"
                  } 
      text-lg py-2 px-4 w-full text-center hover:bg-[#f8f0f3] rounded-md transition-colors duration-200`}
                >
                  Home
                </Link>
                <Link
                  href="/courses"
                  className={`${
                    isActive("/courses")
                      ? "text-[#910F3F] font-bold"
                      : "text-[#0F0F0F]"
                  } 
      text-lg py-2 px-4 w-full text-center hover:bg-[#f8f0f3] rounded-md transition-colors duration-200`}
                >
                  Courses
                </Link>
                <Link
                  href="/cart"
                  className={`${
                    isActive("/cart")
                      ? "text-[#910F3F] font-bold"
                      : "text-[#0F0F0F]"
                  } 
      relative text-lg py-2 px-4 w-full text-center hover:bg-[#f8f0f3] rounded-md transition-colors duration-200 flex items-center justify-center`}
                >
                  <span className="mr-2">Cart</span>
                  <ShoppingBasket size={22} />
                  <small className="absolute top-0 right-1/3 font-bold text-xs bg-[#B01F55] text-white rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalQuantityOfItemsInCart()}
                  </small>
                </Link>
                <div className="w-full flex flex-col gap-3 items-center">
                  <SignedOut>
                    <Button
                      className="w-3/4 bg-[#910F3F] hover:bg-[#7a0c34]"
                      variant="default"
                    >
                      <SignInButton />
                    </Button>
                    <Button
                      className="w-3/4 bg-white text-[#910F3F] border border-[#910F3F] hover:bg-[#f8f0f3]"
                      variant="outline"
                    >
                      <SignUpButton />
                    </Button>
                  </SignedOut>
                  <SignedIn>
                    <div className="flex items-center justify-center w-full">
                      <UserButton />
                    </div>
                  </SignedIn>
                </div>

                <div className="pt-4 w-full">
                  <Button
                    style={{
                      fontFamily: "'Fustat', sans-serif",
                    }}
                    className="bg-[#910F3F] hover:bg-[#7a0c34] uppercase text-white w-full flex justify-center items-center py-6 px-4 transition-colors duration-200"
                    variant="default"
                  >
                    <Link
                      className="text-[16px] w-full text-center"
                      href="/contact-us"
                    >
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>

              <SheetFooter className="border-t mt-auto pt-4">
                <div className="flex flex-col items-center w-full">
                  <div className="flex space-x-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#B01F55] flex items-center justify-center">
                      <span className="text-white text-xs">FB</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#B01F55] flex items-center justify-center">
                      <span className="text-white text-xs">IG</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#B01F55] flex items-center justify-center">
                      <span className="text-white text-xs">TW</span>
                    </div>
                  </div>
                  <small className="text-center text-[#525252]">
                    Copyright © {new Date().getFullYear()} thegermantutor.
                    <br />
                    All Rights Reserved.
                  </small>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </section>
      </div>
    </nav>
  );
}
