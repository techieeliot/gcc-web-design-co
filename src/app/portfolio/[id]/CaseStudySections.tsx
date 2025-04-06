"use client";

import { motion } from "@/lib/animations";
import { lucideIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import React from "react";

interface FeatureItem {
  iconName: string;
  title: string;
  description: string;
}

interface StatItem {
  iconName: string;
  value: string;
  label: string;
}

export const FeatureGrid = ({ features }: { features: FeatureItem[] }) => (
  <div
    className={cn("grid grid-cols-1 sm:grid-cols-2", "gap-4 sm:gap-6 lg:gap-8")}
  >
    {features.map(({ iconName, title, description }, index) => {
      const IconComponent = lucideIcons[
        iconName as keyof typeof lucideIcons
      ] as LucideIcon;

      return (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4 sm:p-6 hover:scale-102 transition-transform"
        >
          <div className="flex items-center gap-3 mb-3">
            {IconComponent &&
              React.createElement(IconComponent, {
                className: "w-5 h-5 text-sky dark:text-azure",
              })}
            <h4 className="text-xl md:text-2xl font-semibold">{title}</h4>
          </div>
          <p className="text-base leading-relaxed">{description}</p>
        </motion.div>
      );
    })}
  </div>
);

export const StatsGrid = ({ stats }: { stats: StatItem[] }) => (
  <div
    className={cn(
      "grid grid-cols-1 sm:grid-cols-3",
      "gap-4 sm:gap-6",
      "mt-4 sm:mt-6",
    )}
  >
    {stats.map(({ iconName, value, label }, index) => {
      // Properly type the icon component
      const IconComponent = lucideIcons[
        iconName as keyof typeof lucideIcons
      ] as LucideIcon;

      return (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-sky/5 dark:bg-azure/5 rounded-lg shadow-sm p-4 sm:p-6 hover:scale-102 transition-transform"
        >
          {IconComponent &&
            React.createElement(IconComponent, {
              className: "w-6 h-6 text-sky dark:text-azure mb-2",
            })}
          <motion.div
            className="text-2xl md:text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            {value}
          </motion.div>
          <div className="text-sm leading-relaxed">{label}</div>
        </motion.div>
      );
    })}
  </div>
);

export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <motion.h3
    className="text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.h3>
);
