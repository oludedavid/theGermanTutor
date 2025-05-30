"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isEqual } from "lodash-es";
import { useEffect, useRef } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { PaymentMethodT } from "@/types";

type PaymentMethodProps = {
  className?: string;
  paymentMethod: PaymentMethodT;
  onChange: (data: PaymentMethodT) => void;
};

const FormSchema = z.object({
  paymentMethod: z.enum(["paypal", "paystack", "flutterwave"], {
    required_error: "Please select a payment method",
  }),
});

export default function PaymentMethod({
  className,
  onChange,
  paymentMethod,
}: PaymentMethodProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const watchFields = form.watch();

  const prevValuesRef = useRef<PaymentMethodT>(paymentMethod);

  useEffect(() => {
    if (!isEqual(watchFields, prevValuesRef.current)) {
      prevValuesRef.current = watchFields;
      onChange({ paymentMethod: watchFields.paymentMethod });
    }
  }, [watchFields, onChange]);

  return (
    <Form {...form}>
      <form className={`${className}`}>
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="border-b block pb-2 mb-4">
                <h3 className="text-[#0F0F0F] text-lg sm:text-xl md:text-2xl font-bold">
                  Payment Method
                </h3>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-3"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        className="border-[#910F3F]"
                        value="paypal"
                      />
                    </FormControl>
                    <div className="w-full h-10 flex justify-between border rounded-sm px-2 sm:px-3 py-2">
                      <FormLabel className="text-[#525252] text-xs sm:text-sm cursor-pointer">
                        Paypal
                      </FormLabel>
                      <Image
                        src="/paypal.png"
                        alt="paypal"
                        width={24}
                        height={24}
                      />
                    </div>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        className="border-[#910F3F]"
                        value="paystack"
                      />
                    </FormControl>
                    <div className="w-full h-10 flex justify-between border rounded-sm px-2 sm:px-3 py-2">
                      <FormLabel className="text-[#525252] text-xs sm:text-sm cursor-pointer">
                        PayStack
                      </FormLabel>
                      <Image
                        src="/money.png"
                        alt="paystack"
                        width={24}
                        height={24}
                      />
                    </div>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        className="border-[#910F3F]"
                        value="flutterwave"
                      />
                    </FormControl>
                    <div className="w-full h-10 flex justify-between border rounded-sm px-2 sm:px-3 py-2">
                      <FormLabel className="text-[#525252] text-xs sm:text-sm cursor-pointer">
                        Flutterwave
                      </FormLabel>
                      <Image
                        src="/money2.png"
                        alt="flutterwave"
                        width={24}
                        height={24}
                      />
                    </div>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage className="text-xs mt-2" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
