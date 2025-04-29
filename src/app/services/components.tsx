'use client';

import { cn } from '@/lib/utils';

import { Icon } from '@ui/icon';
import Image from '@/components/image';
import { serviceCategories, implementations, downToEarthValues } from '@/data';
import {
  Card,
  CardActions,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from '@/components/ui/link';
import { ServiceCardProps } from './types';

export function ServicesMainContent() {
  return (
    <section className="lg:col-span-8 space-y-12">
      {/* Hero Image Section */}
      <div className="relative min-h-96 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/pic09.webp"
          alt="Modern development workspace"
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky/40 to-indigo/30 dark:from-sky/50 dark:to-indigo/40 flex flex-col items-center justify-center text-center px-6">
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

      <section className="py-6">
        <h2 className="text-section mb-4">Our Down-to-Earth Approach</h2>

        <div className="space-y-6">
          <p
            className={cn(
              'text-base leading-relaxed',
              'text-slate-700 dark:text-slate-300'
            )}
          >
            At SANFORDEV Consulting, we cultivate digital solutions with the
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

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {downToEarthValues.map(({ title, description }) => (
              <Card key={title}>
                <CardHeader className="space-y-2">
                  <CardTitle>
                    <h3 className="text-xl">{title}</h3>
                  </CardTitle>
                  <p className="text-body">{description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card>
      <CardHeader>
        {/* Icons section */}
        <div className="flex gap-4 mb-6">
          {service.icons.map((icon, iconIndex) => (
            <div
              key={iconIndex}
              className="relative group cursor-pointer"
              role="img"
              aria-label={`${service.title} icon ${iconIndex + 1}`}
            >
              <Icon
                name={icon}
                className="w-12 h-12 text-night dark:text-sky transition-colors group-hover:text-indigo dark:group-hover:text-indigo"
                strokeWidth={1.5}
              />
            </div>
          ))}
        </div>
        <CardTitle>
          <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
        </CardTitle>
        <p className="text-base text-slate-600 dark:text-slate-300 mb-6">
          {service.description}
        </p>
      </CardHeader>

      <CardContent>
        {/* Features list */}
        <ul className="space-y-3">
          {service.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start gap-3 group">
              <Icon
                name="ArrowUpRight"
                className="w-5 h-5 text-sky dark:text-indigo flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-1"
              />
              <span className="text-sm text-slate-600 dark:text-slate-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export const ServicesSidebar = () => {
  return (
    <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start">
      {implementations.map((section, index) => (
        <Card key={index}>
          <CardHeader className="flex items-center gap-3 mb-4">
            <div>
              <Icon
                name={section.icon}
                className="w-10 h-10 text-night dark:text-sky"
              />
            </div>
            <CardTitle>
              <h3 className="text-2xl font-bold">{section.title}</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                >
                  <Icon
                    name="ArrowUpRight"
                    className="w-4 h-4 text-sky dark:text-indigo"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
      <Card className="border-l-8 border-l-sky">
        <CardHeader>
          <CardTitle>
            <h3 className="text-2xl font-bold">Ready to get started?</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Let us help you bring your vision to life. Contact us today to
            discuss your project and how we can assist you.
          </p>
        </CardContent>
        <CardFooter>
          <CardActions>
            <Link href="/contact" variant="primary">
              Get in Touch
            </Link>
          </CardActions>
        </CardFooter>
      </Card>
    </aside>
  );
};
