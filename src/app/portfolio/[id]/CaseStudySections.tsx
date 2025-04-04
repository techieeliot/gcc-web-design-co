"use client";

import { motion } from "@/lib/animations";
import { componentStyles } from "@/lib/styles";
import { lucideIcons } from "@/lib/icons";
import { textStyles } from "@/lib/styles";
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
          className={cn(
            componentStyles.featureCard,
            "p-4 sm:p-6",
            "hover:scale-102 transition-transform",
          )}
        >
          <div className="flex items-center gap-3 mb-3">
            {IconComponent &&
              React.createElement(IconComponent, {
                className: componentStyles.icon.primary,
              })}
            <h4 className={textStyles.h4}>{title}</h4>
          </div>
          <p className={textStyles.body}>{description}</p>
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
          className={cn(
            componentStyles.statCard,
            "p-4 sm:p-6",
            "hover:scale-102 transition-transform",
          )}
        >
          {IconComponent &&
            React.createElement(IconComponent, {
              className: componentStyles.icon.stats,
            })}
          <motion.div
            className={cn(textStyles.h3, "mb-2")}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            {value}
          </motion.div>
          <div className={textStyles["body-small"]}>{label}</div>
        </motion.div>
      );
    })}
  </div>
);

export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <motion.h3
    className={cn(textStyles.h3, "mb-4 sm:mb-6")}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.h3>
);
