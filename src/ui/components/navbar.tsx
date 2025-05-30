"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./logo";
import { SOCIAL_LINKS } from "@/socials/social";
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
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  function isActive(url: string) {
    return pathName === url;
  }

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Logo width={100} height={60} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-[#B01F55] ${
                      isActive(link.href)
                        ? "text-[#910F3F] font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <Button
              asChild
              className="bg-[#910F3F] hover:bg-[#7a0c34] text-white px-6 py-2 font-medium transition-all duration-200 hover:shadow-lg"
            >
              <Link
                href={SOCIAL_LINKS.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Contact Us via Whatsapp
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu size={24} className="text-[#910F3F]" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full sm:w-[400px] bg-white border-l border-gray-200"
              >
                <SheetHeader className="border-b border-gray-100 pb-6 mb-6">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="flex justify-center">
                    <Logo width={80} height={60} />
                  </div>
                </SheetHeader>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-1 mb-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`text-lg py-3 px-4 rounded-lg transition-all duration-200 ${
                        isActive(link.href)
                          ? "text-[#910F3F] bg-[#f8f0f3] font-semibold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#910F3F]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile Contact Button */}
                <div className="mb-8">
                  <Button
                    asChild
                    className="w-full bg-[#910F3F] hover:bg-[#7a0c34] text-white py-4 text-lg font-medium transition-colors duration-200"
                  >
                    <Link
                      href={SOCIAL_LINKS.WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                    >
                      Contact Us on WhatsApp
                    </Link>
                  </Button>
                </div>

                {/* Mobile Footer */}
                <SheetFooter className="border-t border-gray-100 pt-6 mt-auto">
                  <div className="flex flex-col items-center w-full space-y-4">
                    {/* Social Media Links */}
                    <div className="flex items-center gap-3">
                      {[
                        {
                          name: "facebook",
                          label: "Facebook",
                          url: SOCIAL_LINKS.FACEBOOK,
                        },
                        {
                          name: "x",
                          label: "TikTok",
                          url: SOCIAL_LINKS.TIKTOK,
                        },
                        {
                          name: "instagram",
                          label: "Instagram",
                          url: SOCIAL_LINKS.INSTAGRAM,
                        },
                        {
                          name: "linkedIn",
                          label: "LinkedIn",
                          url: SOCIAL_LINKS.LINKEDIN,
                        },
                      ].map((social) => (
                        <Link
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleLinkClick}
                          className="flex items-center justify-center bg-[#910F3F] p-2.5 rounded-lg hover:bg-[#B01F55] transition-all duration-200 group hover:scale-105"
                          aria-label={`Follow us on ${social.label}`}
                        >
                          <Image
                            src={`/${social.name}.png`}
                            alt={`${social.label} icon`}
                            width={18}
                            height={18}
                            className="group-hover:scale-110 transition-transform duration-200"
                          />
                        </Link>
                      ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-sm text-gray-500">
                      <p>© {new Date().getFullYear()} The German Tutor</p>
                      <p>All Rights Reserved</p>
                    </div>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
