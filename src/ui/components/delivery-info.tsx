"use client";
import { isEqual } from "lodash-es";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useRef } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DeliveryInfoT } from "@/types";

type DeliveryInfoProps = {
  className?: string;
  deliveryInfo: DeliveryInfoT;
  onChange: (data: DeliveryInfoT) => void;
};

const formSchema = z.object({
  fullname: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid characters in name"),

  phoneNumber: z
    .string()
    .min(6, "Phone number must be at least 6 digits")
    .max(20, "Phone number cannot exceed 20 digits")
    .regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Invalid phone number format"
    ),

  email: z
    .string()
    .email("Invalid email address")
    .max(100, "Email cannot exceed 100 characters"),

  streetAddress: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(100, "Address cannot exceed 100 characters"),

  streetAddress2: z
    .string()
    .max(100, "Address line 2 cannot exceed 100 characters")
    .optional(),

  city: z
    .string()
    .min(2, "City must be at least 2 characters")
    .max(50, "City cannot exceed 50 characters"),

  country: z
    .string()
    .min(2, "Country must be at least 2 characters")
    .max(50, "Country cannot exceed 50 characters"),

  stateOrProvinceOrRegion: z
    .string()
    .min(2, "State/Province must be at least 2 characters")
    .max(50, "State/Province cannot exceed 50 characters"),
  postcode: z
    .string()
    .min(2, "Postcode must be at least 2 characters")
    .max(10, "Postcode cannot exceed 10 characters"),
});

export default function DeliveryInfo({
  className,
  deliveryInfo,
  onChange,
}: DeliveryInfoProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: deliveryInfo,
  });
  const watchFields = form.watch();
  const prevValuesRef = useRef<DeliveryInfoT>(deliveryInfo);

  useEffect(() => {
    if (!isEqual(watchFields, prevValuesRef.current)) {
      prevValuesRef.current = watchFields;
      onChange(watchFields);
    }
  }, [watchFields, onChange]);

  return (
    <Form {...form}>
      <form className={`space-y-4 sm:space-y-6 ${className}`}>
        <FormLabel className="border-b block pb-2">
          <h3 className="text-[#0F0F0F] text-lg sm:text-xl md:text-2xl font-bold capitalize">
            Delivery Info
          </h3>
        </FormLabel>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm md:text-base">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className="text-sm md:text-base"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm md:text-base">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="+1 234 567 890"
                    {...field}
                    type="tel"
                    className="text-sm md:text-base"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm md:text-base">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="john@example.com"
                  {...field}
                  type="email"
                  className="text-sm md:text-base"
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm md:text-base">
                Street Address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="123 Main St"
                  {...field}
                  className="text-sm md:text-base"
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Street Address 2 */}
          <FormField
            control={form.control}
            name="streetAddress2"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm md:text-base">
                  Apartment/Suite (optional)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Apt 4B"
                    {...field}
                    className="text-sm md:text-base"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* City */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm md:text-base">City</FormLabel>
                <FormControl>
                  <Input
                    placeholder="New York"
                    {...field}
                    className="text-sm md:text-base"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>

        {/* Country */}
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm md:text-base">Country</FormLabel>
              <FormControl>
                <Input
                  placeholder="United States"
                  {...field}
                  className="text-sm md:text-base"
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* State/Province/Region */}
          <FormField
            control={form.control}
            name="stateOrProvinceOrRegion"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm md:text-base">
                  State/Province/Region
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="California"
                    {...field}
                    className="text-sm md:text-base"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* postcode */}
          <FormField
            control={form.control}
            name="postcode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm md:text-base">Postcode</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    className="text-sm md:text-base"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
