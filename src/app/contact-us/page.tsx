// ContactUs.tsx
"use client";

import PageHeader from "@/ui/components/page-header";
import { PhoneCallIcon, Mail } from "lucide-react";
import ReadyToStart from "@/ui/components/ready-to-start";
import ContactUsForm from "@/ui/components/contact-us-form";

export default function ContactUs() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 lg:px-0">
      <PageHeader />
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Contact Info Section */}
        <div className="w-full flex flex-col sm:flex-row justify-center gap-8 py-6 sm:py-8">
          <ContactInfo
            icon={<PhoneCallIcon className="text-[#B01F55]" size={24} />}
            title="Call Us"
            content="+234 123 456 7890"
          />
          <div className="hidden sm:block h-14 w-px bg-[#A5A5A5] mx-4" />
          <ContactInfo
            icon={<Mail className="text-[#B01F55]" size={24} />}
            title="Email Us"
            content="thegermantutor@gmail.com"
            isEmail
          />
        </div>

        {/* Form Section */}
        <div className="w-full grid grid-cols-1 place-items-center py-8 sm:py-12">
          <ContactUsForm />
        </div>
      </div>
      <ReadyToStart />
    </div>
  );
}

const ContactInfo = ({
  icon,
  title,
  content,
  isEmail = false,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  isEmail?: boolean;
}) => (
  <div className="flex items-center gap-4 p-4 sm:p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
    <div className="rounded-full bg-[#F2EFDD] p-2.5 shrink-0">{icon}</div>
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-[#0F0F0F] mb-1">{title}</span>
      <span className={`text-sm text-[#525252] ${isEmail ? "break-all" : ""}`}>
        {content}
      </span>
    </div>
  </div>
);
