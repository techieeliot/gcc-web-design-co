"use client";

import { features } from "@/data";
import { motion } from "@/lib/animations";
import { componentStyles } from "@/lib/styles";
import { textStyles } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function FeaturesSection() {
  return (
    <div>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={cn(textStyles.h2, "mb-4")}>
          Cultivated Digital Solutions
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          We nurture each project with the dedicated care of a blueberry
          orchard—melding React expertise with creativity and a genuine
          commitment to our partners.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              componentStyles.card,
              "p-6",
              "hover:shadow-md transition-shadow",
            )}
          >
            <div className="rounded-full w-12 h-12 bg-sky/10 dark:bg-azure/10 flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-sky dark:text-azure" />
            </div>
            <h3 className={cn(textStyles.h3, "mb-2")}>{feature.title}</h3>
            <p className="text-slate-600 dark:text-slate-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
