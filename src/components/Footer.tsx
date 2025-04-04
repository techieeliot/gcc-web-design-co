"use client";

import QuickLinks from "./QuickLinks";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "./ui/link";
import { footerFadeIn, motion } from "@/lib/animations";
import {
  ExternalLink,
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "@/lib/icons";
import { companySocialLinks } from "@/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      className={cn(
        "w-full relative overflow-hidden",
        "bg-gradient-primary dark:bg-gradient-primary-dark", // Match the body background
        "text-slate-700 dark:text-powder",
        "border-t border-slate-200 dark:border-slate-800",
      )}
    >
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky/5 dark:bg-azure/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-32 w-96 h-96 bg-sky/5 dark:bg-azure/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Add container here to match header */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 py-12">
          {/* Column 1: Company Info */}
          <motion.div
            custom={0}
            variants={footerFadeIn}
            className="text-center sm:text-left lg:col-span-4"
          >
            <h3 className="text-slate-800 dark:text-powder text-xl font-semibold mb-4">
              About SanforDEV
            </h3>

            <div className="flex items-center justify-center sm:justify-start mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="relative"
                transformTemplate={(props, transform) =>
                  `translateZ(0) ${transform}`
                }
              >
                <div className="rounded-full bg-slate p-3 inline-flex items-center justify-center">
                  <Image
                    src="/blueberry-atom.svg"
                    alt="SanforDEV Logo"
                    width={36}
                    height={36}
                    className="w-8 h-8"
                  />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0px rgba(56, 189, 248, 0)",
                      "0 0 0 8px rgba(56, 189, 248, 0.1)",
                      "0 0 0 0px rgba(56, 189, 248, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              </motion.div>
            </div>

            <p className="text-slate-600 dark:text-powder/80 mb-4">
              React ecosystem web development consultancy specializing in
              building modern web applications with Next.js and the React
              ecosystem.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center sm:justify-start gap-3 mt-5">
              {companySocialLinks.map(
                ({ href, icon: Icon, label, color }, index) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (index + 3) }}
                    whileHover={{ y: -3 }}
                    transformTemplate={(props, transform) =>
                      `translateZ(0) ${transform}`
                    }
                  >
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center justify-center",
                        "w-10 h-10 rounded-full",
                        "transition-all duration-300",
                        color,
                        "dark:text-powder/90",
                      )}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.section
            custom={1}
            variants={footerFadeIn}
            className="widget links lg:col-span-3"
          >
            <h3 className="text-slate-800 dark:text-powder text-xl font-semibold mb-4 text-center sm:text-left">
              Quick Links
            </h3>
            <QuickLinks showHeading={false} />
          </motion.section>

          {/* Column 3: Contact Info */}
          <motion.section
            custom={2}
            variants={footerFadeIn}
            className="widget contact text-center sm:text-left lg:col-span-5"
          >
            <h3 className="text-slate-800 dark:text-powder text-xl font-semibold mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                transformTemplate={(props, transform) =>
                  `translateZ(0) ${transform}`
                }
                className="flex items-center justify-start gap-3 md:gap-4 lg:gap-5 max-w-[300px] mx-auto sm:mx-0"
              >
                <div className="p-2 rounded-full bg-sky/10 dark:bg-azure/10 shrink-0">
                  <Mail className="w-5 h-5 text-sky dark:text-azure" />
                </div>
                <Link
                  href="mailto:devsouth.us@gmail.com"
                  variant="nav"
                  className={cn(
                    "text-slate-600 dark:text-powder/80",
                    "hover:text-sky dark:hover:text-azure",
                    "group flex items-center gap-1",
                  )}
                >
                  devsouth.us@gmail.com
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                transformTemplate={(props, transform) =>
                  `translateZ(0) ${transform}`
                }
                className="flex items-center justify-start gap-3 md:gap-4 lg:gap-5 max-w-[300px] mx-auto sm:mx-0"
              >
                <div className="p-2 rounded-full bg-sky/10 dark:bg-azure/10 shrink-0">
                  <Phone className="w-5 h-5 text-sky dark:text-azure" />
                </div>
                <Link
                  href="tel:+16623126815"
                  variant="nav"
                  className={cn(
                    "text-slate-600 dark:text-powder/80",
                    "hover:text-sky dark:hover:text-azure",
                    "group flex items-center gap-1",
                  )}
                >
                  +1 (662) 312-6815
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                transformTemplate={(props, transform) =>
                  `translateZ(0) ${transform}`
                }
                className="flex items-start justify-start gap-3 md:gap-4 lg:gap-5 max-w-[300px] mx-auto sm:mx-0"
              >
                <div className="p-2 rounded-full bg-sky/10 dark:bg-azure/10 shrink-0">
                  <MapPin className="w-5 h-5 text-sky dark:text-azure" />
                </div>
                {/* Linke to google maps */}
                <Link
                  href="https://www.google.com/maps/place/110+Lake+Forest+Ln,+Clinton,+MS+39056/@32.3441705,-90.3549285,15z/data=!3m1!4b1!4m6!3m5!1s0x86284b257dbb01fb:0xa0a8d380d4abecd9!8m2!3d32.3441709!4d-90.3446502!16s%2Fg%2F11c5jtsybd?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D"
                  className={cn(
                    "text-slate-600 dark:text-powder/80",
                    "hover:text-sky dark:hover:text-azure",
                    "group flex items-center gap-1",
                  )}
                >
                  <address className="text-slate-600 dark:text-powder/80 not-italic">
                    110 Lake Forest Ln
                    <br />
                    Clinton, MS 39056
                  </address>
                </Link>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={cn(
            "border-t border-slate-200 dark:border-slate-800",
            "mt-12 pt-8 pb-8",
          )}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600 dark:text-powder/80 flex items-center">
              &copy; {currentYear} SanforDEV Consulting. All rights reserved.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-sm text-slate-500 dark:text-powder/70 flex items-center"
            >
              Made with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                transformTemplate={(props, transform) =>
                  `translateZ(0) ${transform}`
                }
                className="inline-block mx-1 text-red-500"
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.span>
              in Mississippi
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
