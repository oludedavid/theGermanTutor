import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";
import { PhoneCallIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b pb-6">
          {/* Logo and Contact Section */}
          <div className="flex flex-col space-y-4">
            <Logo width={70} height={70} />
            <p className="text-xs py-3 border-b">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
              Exercitationem similique culpa blanditiis vitae
            </p>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#F2EFDD] p-2 flex-shrink-0">
                <PhoneCallIcon className="text-[#B01F55]" size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm">Call Us</span>
                <span className="text-[#525252] text-sm">
                  +234 123 456 7890
                </span>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-bold">Links</h3>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  className="text-sm hover:text-[#B01F55] transition-colors"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm hover:text-[#B01F55] transition-colors"
                  href="/courses"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm hover:text-[#B01F55] transition-colors"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  className="text-sm hover:text-[#B01F55] transition-colors"
                  href="/terms"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm hover:text-[#B01F55] transition-colors"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold">Subscribe to our emails</h3>
            <div className="flex flex-col space-y-4 border-b pb-4">
              <div className="flex flex-col sm:flex-row border border-[#B01F55] rounded-md overflow-hidden">
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  className="border-0 focus-visible:ring-0 flex-grow"
                />
                <Button className="bg-[#B01F55] text-white rounded-none hover:bg-[#910F3F]">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="font-semibold text-sm">Follow Us</span>
              <div className="flex items-center gap-2">
                {["facebook", "x", "instagram", "linkedIn"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="flex items-center justify-center bg-[#910F3F] p-1.5 rounded-md hover:bg-[#B01F55] transition-colors"
                  >
                    <Image
                      src={`/${social}.png`}
                      alt={social}
                      width={18}
                      height={18}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 text-center">
          <small>
            Copyright © {new Date().getFullYear()} thegermantutor. All Rights
            Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
