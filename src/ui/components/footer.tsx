import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";
import { PhoneCallIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center p-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 w-4/5 border-b-1 space-x-16">
        <div className="grid grid-cols-1 gap-3 pb-6">
          <Logo width={70} height={70} />
          <p className="text-xs mx-auto my-1 py-3 border-b-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
            Exercitationem similique culpa blanditiis vitae
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="rounded-full bg-[#F2EFDD] p-2">
              <PhoneCallIcon className="text-[#B01F55]" size={25} />
            </div>
            <div className="flex flex-col lg:flex-col items-center gap-2">
              <small className="font-semibold">Call Us</small>
              <small className="text-[#525252]"> +234 123 456 7890</small>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Links</h3>
          <ul className="flex flex-col space-y-3 py-2">
            <li>
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
              <Link className="text-sm" href="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Legal</h3>
          <ul className="flex flex-col space-y-3 py-2">
            <li>
              <Link className="text-sm" href="/terms">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="/privacy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Subscribe to our emails</h3>
          <form className="flex flex-col space-y-2 py-2 border-b-1">
            <input
              type="email"
              placeholder="Your Email Address"
              className="border-1 border-[#B01F55] p-2 rounded-md"
            />
            <button className="bg-[#B01F55] text-white p-2">Subscribe</button>
          </form>
          <div className="flex flex-col lg:flex-row items-center gap-4 py-2">
            <small className="font-semibold">Follow Us</small>
            <div className="flex items-center gap-4">
              <Link
                href={``}
                className="flex items-center gap-4 bg-[#910F3F] p-1 rounded-[3px]"
              >
                <Image
                  src="/facebook.png"
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href={``}
                className="flex items-center gap-4 bg-[#910F3F] p-1 rounded-[3px]"
              >
                <Image src="/x.png" alt="X twitter" width={20} height={20} />
              </Link>
              <Link
                href={``}
                className="flex items-center gap-4 bg-[#910F3F] p-1 rounded-[3px]"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>

              <Link
                href={``}
                className="flex items-center gap-4 bg-[#910F3F] p-1 rounded-[3px]"
              >
                <Image
                  src="/linkedIn.png"
                  alt="linkedin"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <small className="pb-10 pt-2">
        Copyright © 2025 thegermantutor. All Rights Reserved.
      </small>
    </footer>
  );
}
