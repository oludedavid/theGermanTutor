import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";
import { courseData } from "@/data/courses";
import { SOCIAL_LINKS } from "@/socials/social";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 py-12 px-4 mt-auto">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-b border-gray-200 pb-8">
          {/* Company Info Section */}
          <div className="lg:col-span-1 space-y-6">
            <Logo width={80} height={80} />
            <p className="text-gray-600 text-sm leading-relaxed">
              Learn German with confidence through our expert-led courses and
              personalized tutoring. From beginner to advanced levels, we make
              German accessible and enjoyable.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-sm text-gray-600 hover:text-[#B01F55] transition-colors duration-200"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-600 hover:text-[#B01F55] transition-colors duration-200"
                  href="/courses"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-600 hover:text-[#B01F55] transition-colors duration-200"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-600 hover:text-[#B01F55] transition-colors duration-200"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-600 hover:text-[#B01F55] transition-colors duration-200"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses Section - Dynamic */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800">Our Courses</h3>
            <ul className="space-y-3">
              {courseData.slice(0, 5).map((course) => (
                <li key={course.id}>
                  <Link
                    className="text-sm text-gray-600 hover:text-[#B01F55] transition-colors duration-200 flex items-center justify-between group"
                    href={`/courses/${course.id}`}
                  >
                    <span className="truncate">
                      {course.level} - {course.title.split("(")[0].trim()}
                    </span>
                    <span className="text-xs text-[#B01F55] font-medium ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      €{course.price}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  className="text-sm text-[#B01F55] font-medium hover:text-[#910F3F] transition-colors duration-200"
                  href="/courses"
                >
                  View All Courses →
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Follow Us
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  {
                    name: "facebook",
                    label: "Facebook",
                    url: SOCIAL_LINKS.FACEBOOK,
                  },
                  { name: "x", label: "Twitter", url: SOCIAL_LINKS.TIKTOK },
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
                    className="flex items-center justify-center bg-[#910F3F] p-2.5 rounded-lg hover:bg-[#B01F55] transition-colors duration-200 group"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Image
                      src={`/${social.name}.png`}
                      alt={`${social.label} icon`}
                      width={20}
                      height={20}
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Hours */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat - Sun:</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center">
          <div className="text-sm text-gray-600">
            Copyright © {new Date().getFullYear()} The German Tutor. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
