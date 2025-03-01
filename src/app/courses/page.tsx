"use client";
import PageHeader from "@/ui/components/page-header";

export default function Courses() {
  return (
    <div className="h-screen w-full flex flex-col items-center">
      <PageHeader />
      <div className="w-3/5">
        <div className="grid grid-cols-1 items-center py-12">
          <ul className="grid grid-cols-4 items-center">
            <li>Course 1</li>
            <li>Course 2</li>
            <li>Course 3</li>
            <li>Course 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
