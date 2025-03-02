"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CartItems({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <div>
        <h1 className="text-xl sm:text-2xl text-[#0F0F0F] font-bold border-b pb-3">
          Cart
        </h1>
        <div className="flex flex-col gap-2 px-3 sm:px-6 border-b py-6">
          <h6 className="text-sm sm:text-base font-bold text-[#0F0F0F]">
            A1 – Beginner Level (Grundstufe 1)
          </h6>
          <h3 className="text-xl sm:text-2xl font-bold text-[#910F3F]">
            €300,00 EUR
          </h3>
        </div>
        <div className="flex flex-row justify-between py-6">
          <p className="text-lg sm:text-xl md:text-2xl text-[#525252] font-semibold">
            Total
          </p>
          <h3 className="text-lg sm:text-xl md:text-2xl text-[#0F0F0F] font-semibold">
            €300,00 EUR
          </h3>
        </div>
        <div className="w-full py-4 sm:py-6">
          <Button
            variant={"default"}
            className="w-full uppercase bg-[#910F3F] py-3 sm:py-4 text-sm sm:text-base"
          >
            Buy Now
          </Button>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Checkbox id="terms" className="border-[#910F3F]" />
          <Label
            htmlFor="terms"
            className="text-xs sm:text-sm text-[#525252] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I accept the terms and conditions
          </Label>
        </div>
      </div>
    </div>
  );
}
