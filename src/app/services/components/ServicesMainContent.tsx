"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { textStyles } from "@/lib/styles";
import { ServiceCard } from "./ServiceCard";
import {
  fadeIn,
  imageVariant,
  motion,
  staggeredContainerTransition,
  listItemTransition,
} from "@/lib/animations";
import { serviceCategories } from "@/data";

export function ServicesMainContent() {
  const features = [
    {
      title: "Genuine Relationships",
      description:
        "Building trust through authentic connections and open communication",
    },
    {
      title: "Technical Excellence",
      description: "Delivering robust solutions with modern best practices",
    },
    {
      title: "Mississippi Values",
      description: "Bringing southern hospitality to every project interaction",
    },
  ];

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="lg:col-span-8 space-y-12"
    >
      {/* Hero Image Section */}
      <motion.div
        variants={imageVariant}
        className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg"
      >
        <Image
          src="/images/pic02.webp"
          alt="Modern development workspace"
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          priority
          className="object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-sky/40 to-azure/30 dark:from-sky/50 dark:to-azure/40 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={cn(textStyles.h1, "text-white mb-4 drop-shadow-lg")}
          >
            Cultivating Digital Excellence
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-white text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg"
          >
            Like a Mississippi blueberry farm, we nurture your projects with
            care, expertise, and down-to-earth values
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <motion.section
          key={category.category}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggeredContainerTransition}
          className="space-y-8"
        >
          <div className="space-y-2">
            <motion.h2 variants={fadeIn} className={cn(textStyles.h2)}>
              {category.category}
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className={cn(
                textStyles.body,
                "text-slate-600 dark:text-slate-300",
              )}
            >
              {category.description}
            </motion.p>
          </div>

          <div className="space-y-6">
            {category.services.map((service, serviceIndex) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={categoryIndex + serviceIndex}
              />
            ))}
          </div>
        </motion.section>
      ))}

      {/* Our Approach Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-white dark:bg-slate-800/50 p-8 sm:p-10 rounded-lg shadow-lg"
      >
        <motion.h2 variants={fadeIn} className={cn(textStyles.h2, "mb-4")}>
          Our Down-to-Earth Approach
        </motion.h2>

        <motion.div className="space-y-6">
          <motion.p
            variants={fadeIn}
            className={cn(
              textStyles.body,
              "text-slate-700 dark:text-slate-300",
            )}
          >
            At SanforDEV Consulting, we cultivate digital solutions with the
            same care and attention that goes into growing the perfect
            Mississippi blueberry. Each project is nurtured from the ground up,
            combining innovative technology with authentic, heartfelt service.
            Our team—bolstered by strong leadership and trusted
            subcontractors—focuses on delivering solutions that are both
            innovative and grounded.
          </motion.p>

          <motion.p
            variants={fadeIn}
            className={cn(
              textStyles.body,
              "text-slate-700 dark:text-slate-300",
            )}
          >
            From comprehensive Next.js applications to finely-tuned React
            components, we align cutting-edge technology with down-to-earth
            values. We're not just building code; we're growing a community of
            creative problem solvers dedicated to driving success for our
            clients.
          </motion.p>

          <motion.div
            variants={staggeredContainerTransition}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={listItemTransition}
                className="p-6 bg-sky/5 dark:bg-azure/5 rounded-lg hover:bg-sky/10 
                dark:hover:bg-azure/10 transition-colors"
              >
                <h3 className={cn(textStyles.h3, "mb-3")}>{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-8 p-6 bg-midnight/5 dark:bg-azure/5 rounded-lg"
          >
            <p className="italic text-slate-600 dark:text-slate-400">
              "Like the ripple effect of dropping a blueberry in a pond, our
              work creates waves of positive impact for your business.
              Experience technology that feels natural—like a sip of refreshing
              blueberry lemonade on a warm Mississippi day."
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}
