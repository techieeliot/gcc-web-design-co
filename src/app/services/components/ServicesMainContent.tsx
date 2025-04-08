'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ServiceCard } from './ServiceCard';

import { serviceCategories } from '@/data';

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
    <section className="lg:col-span-8 space-y-12">
      {/* Hero Image Section */}
      <div className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/pic09.webp"
          alt="Modern development workspace"
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky/40 to-azure/30 dark:from-sky/50 dark:to-azure/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
            Cultivating Digital Excellence
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-lg">
            In a manner that echoes the care of a well-tended garden, we nurture
            your projects with expertise and a grounded, relationship-focused
            approach.
          </p>
        </div>
      </div>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={category.category} className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-section">{category.category}</h2>
            <p className="text-body text-slate-600 dark:text-slate-300">
              {category.description}
            </p>
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
        </section>
      ))}

      {/* Our Approach Section */}
      <section className="bg-white dark:bg-slate-800/50 p-8 sm:p-10 rounded-lg shadow-lg">
        <h2 className="text-section mb-4">Our Down-to-Earth Approach</h2>

        <div className="space-y-6">
          <p
            className={cn(
              'text-base leading-relaxed',
              'text-slate-700 dark:text-slate-300'
            )}
          >
            At SanforDEV Consulting, we cultivate digital solutions with the
            same attention to detail as tending a thoughtfully nurtured garden.
            Each project grows from a strong foundation, combining innovative
            technology with genuine, heartfelt service.
          </p>

          <p
            className={cn(
              'text-base leading-relaxed',
              'text-slate-700 dark:text-slate-300'
            )}
          >
            From comprehensive Next.js applications to finely-tuned React
            components, we merge cutting-edge technology with down-to-earth
            values. We're not just building code; we're growing a community of
            creative problem solvers dedicated to driving success.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-sky/5 dark:bg-azure/5 rounded-lg hover:bg-sky/10 
                dark:hover:bg-azure/10 transition-colors"
              >
                <h3 className="text-title mb-3">{feature.title}</h3>
                <p className="text-body text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
