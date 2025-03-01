"use client";
import PageHeader from "@/ui/components/page-header";
export default function Cart() {
  return (
    <div className="h-screen w-full flex flex-col items-center">
      <PageHeader />
      <div className="w-3/5 h-1/2">
        <p> Cart </p>
      </div>
    </div>
  );
}
