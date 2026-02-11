"use client";
import React from "react";
import Container from "../Shared/Container";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  message: z.string().min(1, { message: "Message is required" }),
});

const ContactUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <section className="bg-white dark:bg-[#0B2826] py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[45%] h-[45%] bg-[#4FBCAA]/10 rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] bg-[#3BB7A3]/10 rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] bg-[#4FBCAA] w-[60px]"></div>
              <span className="text-xs font-black tracking-[0.3em] uppercase text-[#4FBCAA]">
                Get in touch
              </span>
            </div>

            <h2 className="text-[40px] lg:text-[76px] font-black text-[#1C4540] dark:text-white leading-[1.1] tracking-tight">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FBCAA] to-[#3BB7A3]">
                elevate
              </span>{" "}
              your business?
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl font-medium leading-relaxed max-w-lg">
              We are here to help you with your sales enablement and business
              growth needs. Let&apos;s build something extraordinary together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#4FBCAA]/10 -z-10 rounded-full" />
            <div className="bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/10 px-8 lg:px-12 py-12 lg:py-16 rounded-3xl relative">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#1C4540] dark:text-white text-xs font-black uppercase tracking-widest leading-none">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Carter"
                              className="h-[60px] bg-white dark:bg-white/5 rounded-2xl border-black/5 dark:border-white/10 focus:ring-2 focus:ring-[#4FBCAA]/50 transition-all font-medium text-lg"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#1C4540] dark:text-white text-xs font-black uppercase tracking-widest leading-none">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@hacyon.ai"
                              className="h-[60px] bg-white dark:bg-white/5 rounded-2xl border-black/5 dark:border-white/10 focus:ring-2 focus:ring-[#4FBCAA]/50 transition-all font-medium text-lg"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1C4540] dark:text-white text-xs font-black uppercase tracking-widest leading-none">
                          Phone
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+1 (555) 000-0000"
                            className="h-[60px] bg-white dark:bg-white/5 rounded-2xl border-black/5 dark:border-white/10 focus:ring-2 focus:ring-[#4FBCAA]/50 transition-all font-medium text-lg"
                            {...field}
                          />
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
                        <FormLabel className="text-[#1C4540] dark:text-white text-xs font-black uppercase tracking-widest leading-none">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="min-h-[160px] bg-white dark:bg-white/5 rounded-2xl border-black/5 dark:border-white/10 focus:ring-2 focus:ring-[#4FBCAA]/50 transition-all font-medium text-lg resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full bg-[#213B3C] cursor-pointer hover:bg-[#213B3C]/90 font-black tracking-[0.2em] uppercase h-[70px] text-white rounded-2xl transition-all"
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#4FBCAA]/20 rounded-full -z-10 animate-pulse" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
