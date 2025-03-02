"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name must not exceed 50 characters")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid characters in first name")
    .nonempty("The field is required"),
  lastname: z
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .max(50, "Last name must not exceed 50 characters")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid characters in last name")
    .nonempty("The field is required"),
  email: z
    .string()
    .email("Invalid email format")
    .max(100, "Email must not exceed 100 characters")
    .nonempty("The field is required"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must not exceed 500 characters")
    .nonempty("The field is required"),
});

export default function ContactUsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-2xl space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Max" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here."
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full uppercase bg-[#910F3F] flex items-center justify-center"
          type="submit"
        >
          Send
        </Button>
      </form>
    </Form>
  );
}
