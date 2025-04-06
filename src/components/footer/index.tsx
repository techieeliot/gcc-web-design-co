"use client";

import { cn } from "@/lib/utils";
import { motion } from "@/lib/animations";
import {
  CompanyInfo,
  Contact,
  QuickLinks,
  FooterBackground,
  Copyright,
} from "./components";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      className={cn(
        "w-full relative overflow-hidden",
        "bg-card dark:bg-card",
        "text-slate-700 dark:text-powder",
        "border-t border-border",
      )}
    >
      <FooterBackground />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 py-12">
          <CompanyInfo />
          <QuickLinks />
          <Contact />
        </div>

        <Copyright currentYear={currentYear} />
      </div>
    </motion.div>
  );
}
