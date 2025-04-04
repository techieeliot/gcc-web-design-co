"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { textStyles } from "@/lib/styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { FormField } from "./FormField";
import { fadeInAnimation, motion } from "@/lib/animations";
import {
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Send,
  Rocket,
} from "@/lib/icons";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .refine((name) => name.split(" ").length >= 2, {
      message: "Please enter your full name",
    }),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters")
    .refine((message) => message.trim() !== "", {
      message: "Message cannot be empty",
    })
    .refine((message) => !message.toLowerCase().includes("<script>"), {
      message: "Message contains invalid content",
    }),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the privacy policy" }),
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      // privacy field starts unchecked by default
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Send to Formspree
      const response = await fetch("https://formspree.io/f/myynedwg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form. Please try again later.");
      }

      setSubmitSuccess(true);
      reset(); // Reset form fields after successful submission
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "An unexpected error occurred",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = cn(
    // Base styles
    "w-full px-4 py-2 rounded-lg transition-colors",
    // Background
    "bg-white dark:bg-slate-800",
    // Border
    "border border-slate-300 dark:border-slate-700",
    // Text
    "text-slate-900 dark:text-powder",
    // Placeholder
    "placeholder:text-slate-500 dark:placeholder:text-slate-400",
    // Focus states
    "focus:ring-2 focus:ring-sky/50 focus:border-sky/50",
    "dark:focus:ring-azure/50 dark:focus:border-azure/50",
  );

  const errorClasses = "text-red-500 dark:text-red-400 text-sm font-medium";

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={fadeInAnimation}
      className={cn(
        "backdrop-blur-md rounded-xl p-8 shadow-lg",
        "bg-white dark:bg-slate-900",
        "border border-slate-200 dark:border-slate-800",
      )}
    >
      <motion.div
        className="text-center"
        variants={fadeInAnimation}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <h2 className={cn(textStyles.h2, "mb-6")}>Let's Ignite Your Vision</h2>

        <p className={cn(textStyles.body, "mb-6 max-w-2xl mx-auto")}>
          Whether you're looking for innovative technical consulting, expertly
          crafted web development, or quick, attentive support, our team is here
          to help bring your vision to life. We genuinely care about your
          goals—and yes, our coffee is always strong ☕.
        </p>

        {submitSuccess ? (
          <div className="py-8 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <CheckCircle className="w-16 h-16 text-green-500 dark:text-green-400" />
            </motion.div>
            <h3 className={cn(textStyles.h3, "mb-2")}>Message Delivered!</h3>
            <p className={cn(textStyles.body, "mb-6")}>
              We received your message. Expect to hear thoughtful feedback and
              next steps soon.
            </p>
            <Button
              onClick={() => setSubmitSuccess(false)}
              variant="outline"
              className="mx-auto"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 text-left"
            noValidate
          >
            {submitError && (
              <div className="p-4 mb-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-300">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  <p className="font-medium">{submitError}</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Full Name *"
                id="name"
                error={errors.name?.message}
              >
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={cn(
                    inputClasses,
                    errors.name && "border-red-500 dark:border-red-500",
                  )}
                />
              </FormField>

              <FormField
                label="Email Address *"
                id="email"
                error={errors.email?.message}
              >
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={cn(
                    inputClasses,
                    errors.email && "border-red-500 dark:border-red-500",
                  )}
                />
              </FormField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Company Name"
                id="company"
                description="Optional—but it helps us tailor our approach."
              >
                <input
                  type="text"
                  id="company"
                  {...register("company")}
                  className={inputClasses}
                />
              </FormField>

              <FormField
                label="Subject *"
                id="subject"
                error={errors.subject?.message}
                description="Choose the subject that best captures your needs."
              >
                <select
                  id="subject"
                  {...register("subject")}
                  className={cn(
                    inputClasses,
                    errors.subject && "border-red-500 dark:border-red-500",
                  )}
                  defaultValue=""
                >
                  <option
                    value=""
                    disabled
                    className="text-slate-500 dark:text-slate-400"
                  >
                    Please select a subject
                  </option>
                  <option value="Technical Consulting">
                    Technical Consulting
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Emergency Support">Emergency Support</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </FormField>
            </div>

            <FormField
              label="Message *"
              id="message"
              error={errors.message?.message}
              description={
                <>
                  Share the details of your project or question. The more you
                  tell us now, the more context we bring to your solution.
                  <br />
                  <span className="text-slate-500 dark:text-powder/80">
                    (e.g., project scope, timeline, budget, etc.)
                  </span>
                </>
              }
            >
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className={cn(
                  inputClasses,
                  errors.message && "border-red-500 dark:border-red-500",
                )}
              ></textarea>
            </FormField>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="privacy"
                {...register("privacy")}
                className={cn(
                  "mt-1 rounded border-slate-300 dark:border-slate-700 text-sky dark:text-azure focus:ring-sky dark:focus:ring-azure/50",
                  errors.privacy && "border-red-500 dark:border-red-500",
                )}
              />
              <div className="flex flex-col">
                <label
                  htmlFor="privacy"
                  className="text-sm text-slate-600 dark:text-powder/80"
                >
                  I agree to the{" "}
                  <Link
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="inlineLink"
                    className="text-sm"
                  >
                    privacy policy
                  </Link>
                </label>
                {/* Error container for checkbox with icon */}
                <div className="min-h-[20px] flex items-center gap-1.5">
                  {errors.privacy && (
                    <>
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-red-500 dark:text-red-400" />
                      <p className={errorClasses}>{errors.privacy.message}</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                tabIndex={-1}
              >
                <Button
                  type="submit"
                  size="xl"
                  disabled={isSubmitting || !isDirty}
                  className="w-full sm:w-auto bg-sky hover:bg-sky/90 dark:bg-azure dark:hover:bg-azure/90 relative overflow-hidden group"
                >
                  <span className="flex items-center relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <span className="ml-2">
                      {isSubmitting ? (
                        <ArrowRight className="w-4 h-4 animate-pulse" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-sky via-azure to-sky dark:from-azure dark:via-sky dark:to-azure"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1 }}
                  />
                </Button>
              </motion.div>

              {isSubmitting && (
                <p className="mt-2 text-sky dark:text-azure flex items-center">
                  <Rocket className="inline mr-2 animate-pulse" />
                  Igniting your message...
                </p>
              )}
            </div>
          </form>
        )}
      </motion.div>
    </motion.article>
  );
}
