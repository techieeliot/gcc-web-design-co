'use client';

import { Suspense } from 'react';
import { benefits, features } from '@/data';
import { Icon } from '@ui/icon';
import { Link } from '@ui/link';
import { defaultImageSizes, generateBlurPlaceholder } from '@/lib/image';
import { Shimmer } from '@ui/shimmer';
import { CldImage } from 'next-cloudinary';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardMediaContent,
  CardTitle,
} from '@/components/ui/card';
import { Pill } from '@/components/Pill';

export const HeroSection = () => (
  <section data-testid="hero-section">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="order-2 lg:order-1">
        <Pill className="gap-2 px-4 py-2 mb-4">
          <Icon name="Code" className="w-4 h-4" />
          <span className="text-sm">React & Next.js Specialists</span>
        </Pill>

        <h1 className="text-display font-display text-foreground max-w-lg mb-6">
          Digital Solutions You Can Grow With
        </h1>

        <p className="text-lg max-w-lg mb-8">
          At SANFORDEV, we view tech solutions as if we're carefully and
          methodically nurturing a well-tended garden. We combine modern React
          expertise with a grounded, relationship-focused approach—helping your
          digital ideas grow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            variant="cta"
            size="lg"
            aria-label="Get Started with SANFORDEV"
          >
            Get Started
            <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/portfolio"
            variant="outline"
            size="lg"
            aria-label="View SANFORDEV's Case Studies"
          >
            View Our Case Studies
          </Link>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/20" />
          <Suspense fallback={<Shimmer height="full" />}>
            <CldImage
              src="https://res.cloudinary.com/dsj2nt26p/image/upload/v1744268233/emblem.png"
              alt="Emblem"
              className="object-cover"
              placeholder="blur"
              blurDataURL={generateBlurPlaceholder(400, 300)}
              loading="eager"
              priority
              fill
              gradientFade
              sizes={defaultImageSizes}
            />
          </Suspense>
        </div>
      </div>
    </div>
  </section>
);

export const FeaturesSection = () => (
  <section data-testid="features-section">
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-title text-foreground mb-4">
          Cultivated Digital Solutions
        </h2>
        <p className="text-lg  max-w-3xl mx-auto">
          We nurture each project with the dedicated care of a well-tended
          orchard—melding React expertise with creativity and a genuine
          commitment to our partners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
        {features.map((feature) => (
          <Card key={feature.title} className="w-full pb-6">
            <CardHeader>
              <CardTitle>
                <div className="rounded-full w-12 h-12 bg-sky-100 dark:bg-indigo/10 flex items-center justify-center mb-4">
                  <Icon
                    name={feature.icon}
                    className="w-6 h-6 text-sky dark:text-indigo"
                  />
                </div>
                <h3 className="text-navy dark:text-body">{feature.title}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export const ShowcaseSection = () => (
  <section data-testid="showcase-section">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
      <div className="lg:col-span-7 w-full">
        <ValueProposition />
      </div>
      <div className="lg:col-span-5 w-full">
        <ProjectShowcase />
      </div>
    </div>
  </section>
);

export const CallToActionSection = () => (
  <section data-testid="cta-section">
    <div className="rounded-xl p-12 text-foreground relative flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl font-title mb-4">
        Ready to transform your digital presence?
      </h2>
      <p className="text-lg max-w-2xl">
        Whether you're looking to launch a new product or enhance an existing
        one, we have the expertise to help you succeed.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/contact"
          size="lg"
          variant="primary"
          aria-label='"Get Started with SANFORDEV">'
        >
          Get in Touch
        </Link>
        <Link
          href="/portfolio"
          variant="outline"
          size="lg"
          aria-label="View SANFORDEV's Case Studies"
        >
          View Our Case Studies
        </Link>
      </div>
    </div>
  </section>
);

export function ProjectShowcase() {
  return (
    <Card className="sticky top-24 w-full border-none shadow-none backdrop-blur-none bg-transparent">
      <CardHeader className="mb-4">
        <CardTitle>
          <h3 className="text-subtitle font-subtitle text-foreground mb-2">
            Our Crafted Stories
          </h3>
        </CardTitle>
        <CardDescription>
          <p className="mb-4">
            Discover projects where care meets code—a fusion of React expertise
            and a down-to-earth approach.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ImageCard
          title="Fourth Party"
          description="An innovative platform designed to simplify mediation with clarity and purpose."
          image="/images/pic13.webp"
          tags={['React', 'Modern UI', 'CRM']}
          link="/portfolio/fourth-party"
        />
        <ImageCard
          title="Room in the Inn Memphis"
          description="A complete redesign crafted to uplift community impact through empathy and user-first design."
          image="/images/pic10.webp"
          tags={['CMS', 'JavaScript']}
          link="/portfolio/room-in-the-inn-memphis"
        />
      </CardContent>
    </Card>
  );
}

const ImageCard = ({
  title,
  description,
  image,
  tags,
  link,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}) => {
  return (
    <Card className="overflow-hidden">
      <CardMediaContent className="h-36">
        <CardMedia
          src={image}
          alt={title}
          sizes="(max-width: 768px) 100vw, 400px"
          placeholder="blur"
          blurDataURL={generateBlurPlaceholder(400, 225)}
          loading="lazy"
        />
      </CardMediaContent>

      <CardHeader>
        <h4>{title}</h4>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-5">
        <p>{description}</p>
        {tags.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </CardContent>

      <CardFooter>
        <Link
          href={link}
          variant="standaloneLink"
          size="xl"
          className="flex justify-center w-full"
          aria-label={`View ${title} Project`}
        >
          See More
          <Icon name="ChevronRight" size={16} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export function ValueProposition() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-title text-foreground mb-4">
          Why SANFORDEV?
        </h2>

        <p className="text-lg mb-8">
          Imagine the care and commitment of a meticulously nurtured
          garden—every component grown with patience, passion, and precision. At
          SANFORDEV, we bring that ethos to digital work, crafting solutions in
          a carefully cultivated partnership between innovation and genuine
          collaboration. Let's grow digital greatness together.
        </p>
      </div>

      <ul className="space-y-4">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-3">
            <Icon name="CheckCircle" className="w-5 h-5  flex-shrink-0" />
            <span className="text-body text-foreground">{benefit}</span>
          </li>
        ))}
      </ul>

      <Card>
        <CardHeader>
          <h3>Our Approach</h3>
        </CardHeader>
        <CardContent>
          <p className="text-body">
            We focus on truly understanding your business goals. Our process is
            about connecting on a personal level—the same way you'd tend a
            fruitful blueberry orchard. By blending hands-on React expertise
            with meticulous design and back-end precision, we create digital
            solutions that feel naturally right.
          </p>
        </CardContent>
        <CardFooter>
          <Link
            href="/services"
            variant="inlineLink"
            aria-label="Discover SANFORDEV's Process"
          >
            Discover our process
          </Link>
        </CardFooter>
      </Card>

      <Card className="border-l-8 border-l-sky">
        <CardContent className="py-6 flex flex-col items-end gap-8">
          <blockquote className="text-slate-700 dark:text-slate-200 italic">
            "SANFORDEV helped us create a platform from ideation that not only
            looks great but also helped us earn our first revenue generating
            clients. Their attention to detail and commitment to our vision made
            all the difference."
          </blockquote>

          <cite
            className="flex flex-col sm:flex-row items-center gap-2 text-primary"
            aria-label="Melissa Brogdan, Co-Owner of Fourth Party"
          >
            <span className="font-medium">Melissa Brogdan</span>
            <span className="hidden sm:block">|</span>
            <span className="text-sm">Co-Owner, Fourth Party</span>
          </cite>
        </CardContent>
      </Card>
    </div>
  );
}

export const BlogHighlightSection = () => (
  <section data-testid="blog-highlight-section">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
      <div className="lg:col-span-5 w-full">
        <div className="sticky top-24">
          <Card>
            <CardMediaContent className="h-64 mb-6">
              <CardMedia
                src="/images/pic16.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                placeholder="blur"
                blurDataURL={generateBlurPlaceholder(400, 225)}
                loading="lazy"
              />
            </CardMediaContent>
            <CardHeader>
              <CardTitle>
                <h2 className="text-2xl">Fresh Insights & Stories</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Dive into our carefully cultivated collection of articles—where
                we share practical wisdom, emerging trends, and real experiences
                from our journey in modern web development. Like tending to a
                garden, we nurture each article with careful attention and
                genuine care.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/blog"
                size="lg"
                className="inline-flex items-center w-full"
                aria-label="Explore SANFORDEV's Blog"
              >
                Explore Our Blog
                <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="lg:col-span-7 w-full flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ImageCard
              title="Framer Motion Animations"
              description="Learn how we create smooth, performant animations that enhance user experience without compromising load times."
              image="/blog/framer-motion-animations.webp"
              tags={['Performance', 'Animation', 'React']}
              link="/blog/framer-motion-animations"
            />
          </div>

          <div>
            <ImageCard
              title="Tailwind Best Practices"
              description="Discover our approach to building maintainable, scalable CSS with Tailwind in modern React applications."
              image="/blog/tailwind-best-practices.webp"
              tags={['CSS', 'Design', 'Tailwind']}
              link="/blog/tailwind-best-practices"
            />
          </div>
        </div>

        <Card className="border-l-8 border-l-sky">
          <CardHeader>
            <h3>Why Read Our Blog?</h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Icon
                  name="CheckCircle"
                  className="w-5 h-5 text-sky dark:text-indigo"
                />
                <span>Practical insights from real-world React projects</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon
                  name="CheckCircle"
                  className="w-5 h-5 text-sky dark:text-indigo"
                />
                <span>
                  Performance optimization techniques & best practices
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Icon
                  name="CheckCircle"
                  className="w-5 h-5 text-sky dark:text-indigo"
                />
                <span>Modern development approaches & emerging trends</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
