'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ServiceCard } from './ServiceCard';
import {
  fadeIn,
  imageVariant,
  staggeredContainerTransition,
  listItemTransition,
} from '@/lib/animations';
import { serviceCategories } from '@/data';
import {
  MotionSection,
  MotionDiv,
  MotionH1,
  MotionP,
  MotionH2,
} from '@/components/ui/motion-components';

export function ServicesMainContent() {
  const features = [
    {
      title: 'Genuine Relationships',
      description:
        'Building trust through authentic connections and open communication',
    },
    {
      title: 'Technical Excellence',
      description: 'Delivering robust solutions with modern best practices',
    },
    {
      title: 'Mississippi Values',
      description: 'Bringing southern hospitality to every project interaction',
    },
  ];

  return (
    <MotionSection
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="lg:col-span-8 space-y-12"
    >
      {/* Hero Image Section */}
      <MotionDiv
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
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-sky/40 to-azure/30 dark:from-sky/50 dark:to-azure/40 flex flex-col items-center justify-center text-center px-6"
        >
          <MotionH1
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-lg"
          >
            Cultivating Digital Excellence
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-lg text-white max-w-2xl mx-auto drop-shadow-lg"
          >
            In a manner that echoes the care of a well-tended garden, we nurture
            your projects with expertise and a grounded, relationship-focused
            approach.
          </MotionP>
        </MotionDiv>
      </MotionDiv>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <MotionSection
          key={category.category}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggeredContainerTransition}
          className="space-y-8"
        >
          <div className="space-y-2">
            <MotionH2 variants={fadeIn} className="text-section">
              {category.category}
            </MotionH2>
            <MotionP
              variants={fadeIn}
              className="text-body text-slate-600 dark:text-slate-300"
            >
              {category.description}
            </MotionP>
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
        </MotionSection>
      ))}

      {/* Our Approach Section */}
      <MotionSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-white dark:bg-slate-800/50 p-8 sm:p-10 rounded-lg shadow-lg"
      >
        <MotionH2 variants={fadeIn} className="text-section mb-4">
          Our Down-to-Earth Approach
        </MotionH2>

        <MotionDiv className="space-y-6">
          <MotionP
            variants={fadeIn}
            className={cn(
              'text-base leading-relaxed',
              'text-slate-700 dark:text-slate-300'
            )}
          >
            At SanforDEV Consulting, we cultivate digital solutions with the
            same attention to detail as tending a thoughtfully nurtured garden.
            Each project grows from a strong foundation, combining innovative
            technology with genuine, heartfelt service.
          </MotionP>

          <MotionP
            variants={fadeIn}
            className={cn(
              'text-base leading-relaxed',
              'text-slate-700 dark:text-slate-300'
            )}
          >
            From comprehensive Next.js applications to finely-tuned React
            components, we merge cutting-edge technology with down-to-earth
            values. We're not just building code; we're growing a community of
            creative problem solvers dedicated to driving success.
          </MotionP>

          <MotionDiv
            variants={staggeredContainerTransition}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature) => (
              <MotionDiv
                key={feature.title}
                variants={listItemTransition}
                className="p-6 bg-sky/5 dark:bg-azure/5 rounded-lg hover:bg-sky/10 
                dark:hover:bg-azure/10 transition-colors"
              >
                <h3 className="text-title mb-3">{feature.title}</h3>
                <p className="text-body text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>
      </MotionSection>
    </MotionSection>
  );
}
