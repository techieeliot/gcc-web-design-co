'use client';

import { useInView } from 'react-intersection-observer';
import { Suspense } from 'react';
import atom from 'public/blueberry-atom.svg';

import Image from 'next/image';
import { Link } from '@/components/ui/link';
import { benefits, features } from '@/data';
import { Icon } from '@/components/ui/icon';
import { LoadingFallback } from '@/components/ui/loading-fallback';
import {
  MotionSection,
  MotionDiv,
  MotionSpan,
  MotionH1,
  MotionP,
  MotionH2,
  MotionUl,
  MotionLi,
} from '@/components/ui/motion-components';
import { generateBlurPlaceholder } from '@/lib/image';

export function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MotionSection
      ref={ref}
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      animate={inView ? { opacity: 1, transform: 'translateY(0px)' } : {}}
      transition={{ duration: 0.6 }}
      className="hero-section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <MotionDiv
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <MotionSpan
            initial={{ opacity: 0, transform: 'translateX(-20px)' }}
            animate={{ opacity: 1, transform: 'translateX(0px)' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10  font-medium rounded-full mb-4"
          >
            <Icon name="Code" className="w-4 h-4" />
            <span className="text-small">React & Next.js Specialists</span>
          </MotionSpan>

          <MotionH1
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-display font-display text-foreground max-w-lg mb-6"
          >
            Digital Solutions You Can Grow With
          </MotionH1>

          <MotionP
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-large max-w-lg mb-8"
          >
            At SanforDEV, we view tech solutions as if we're carefully and
            methodically nurturing a well-tended garden. We combine modern React
            expertise with a grounded, relationship-focused approach—helping
            your digital ideas grow.
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact" variant="cta" size="lg">
              Get Started
              <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/portfolio" variant="outline" size="lg">
              View Our Work
            </Link>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          className="order-1 lg:order-2"
          initial={{ opacity: 0, transform: 'scale(0.95)' }}
          animate={{ opacity: 1, transform: 'scale(1)' }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/20" />
            <Suspense fallback={<LoadingFallback height="full" />}>
              <Image
                src={atom}
                alt="Web development illustration"
                fill
                className="object-contain object-center transition-transform duration-500 hover:scale-105 opacity-0"
                sizes="(max-width: 768px) 100vw, 400px"
                onLoad={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.classList.remove('opacity-0');
                  img.classList.add('opacity-100');
                }}
                loading="eager"
                priority
              />
            </Suspense>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

export function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MotionSection
      ref={ref}
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      animate={inView ? { opacity: 1, transform: 'translateY(0px)' } : {}}
      transition={{ duration: 0.6 }}
      className="features-section"
    >
      <div className="w-full">
        <MotionDiv className="text-center mb-12">
          <h2 className="text-title font-title text-foreground mb-4">
            Cultivated Digital Solutions
          </h2>
          <p className="text-large  max-w-3xl mx-auto">
            We nurture each project with the dedicated care of a well-tended
            orchard—melding React expertise with creativity and a genuine
            commitment to our partners.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {features.map((feature, index) => (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, transform: 'translateY(20px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                willChange: 'transform',
              }}
              className="rounded-xl p-6 shadow-lg backdrop-blur-md bg-card text-card-foreground w-full"
            >
              <div className="rounded-full w-12 h-12 bg-sky/10 dark:bg-azure/10 flex items-center justify-center mb-4">
                <Icon
                  name={feature.icon}
                  className="w-6 h-6 text-sky dark:text-azure"
                />
              </div>
              <h3 className="text-subtitle font-subtitle text-blueberry dark:text-body mb-2">
                {feature.title}
              </h3>
              <p className="text-slate">{feature.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

export function ShowcaseSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MotionSection
      ref={ref}
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      animate={inView ? { opacity: 1, transform: 'translateY(0px)' } : {}}
      transition={{ duration: 0.6 }}
      className="showcase-section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
        <MotionDiv className="lg:col-span-7 w-full">
          <ValueProposition />
        </MotionDiv>
        <MotionDiv className="lg:col-span-5 w-full">
          <div className="rounded-xl bg-card text-card-foreground border border-border sticky top-24 w-full">
            <ProjectShowcase />
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

export function CallToActionSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MotionSection
      ref={ref}
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      animate={inView ? { opacity: 1, transform: 'translateY(0px)' } : {}}
      transition={{ duration: 0.6 }}
      className="call-to-action-section"
    >
      <div className="rounded-xl p-12 text-foreground relative flex flex-col justify-center items-center gap-4">
        <h2 className="text-title font-title mb-4">
          Ready to transform your digital presence?
        </h2>
        <p className="text-large max-w-2xl">
          Whether you're looking to launch a new product or enhance an existing
          one, we have the expertise to help you succeed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" variant="cta" size="lg">
            Get in Touch
          </Link>
          <Link href="/portfolio" variant="outline" size="lg">
            View Our Work
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}

export function ProjectShowcase() {
  return (
    <MotionDiv className="rounded-xl p-8 shadow-lg backdrop-blur-md bg-card text-card-foreground">
      <div className="mb-4">
        <h3 className="text-subtitle font-subtitle text-foreground mb-2">
          Our Crafted Stories
        </h3>
        <p className="text-slate dark:text-offwhite mb-4">
          Discover projects where care meets code—a fusion of React expertise
          and a down-to-earth approach.
        </p>
      </div>

      <div className="space-y-6">
        <ProjectCard
          title="Fourth Party"
          description="An innovative platform designed to simplify mediation with clarity and purpose."
          image="/images/pic03.webp"
          tags={['React', 'Modern UI', 'CRM']}
          link="/portfolio/fourth-party"
        />

        <ProjectCard
          title="Room in the Inn Memphis"
          description="A complete redesign crafted to uplift community impact through empathy and user-first design."
          image="/images/pic02.webp"
          tags={['CMS', 'JavaScript']}
          link="/portfolio/room-in-the-inn-memphis"
        />
      </div>
    </MotionDiv>
  );
}

const ProjectCard = ({
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
    <MotionDiv
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-lg overflow-hidden border border-border bg-card"
    >
      <div className="relative h-36">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          placeholder="blur"
          blurDataURL={generateBlurPlaceholder(400, 225)}
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h4 className="text-subtitle font-subtitle text-midnight dark:text-white mb-1">
          {title}
        </h4>

        <p className="text-slate dark:text-offwhite mb-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-small text-midnight dark:text-white px-2 py-1 bg-muted rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={link}
          variant="standaloneLink"
          size="xl"
          className="flex justify-center"
        >
          See More
          <Icon name="ChevronRight" size={16} />
        </Link>
      </div>
    </MotionDiv>
  );
};

export function ValueProposition() {
  return (
    <div className="space-y-8">
      <MotionDiv
        initial={{ opacity: 0, transform: 'translateY(20px)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <MotionH2 className="text-title font-title text-foreground mb-4">
          Why SanforDEV Consulting?
        </MotionH2>

        <MotionP className="text-large mb-8">
          Imagine the care and commitment of a meticulously nurtured
          garden—every component grown with patience, passion, and precision. At
          SanforDEV, we bring that ethos to digital work, crafting solutions in
          a carefully cultivated partnership between innovation and genuine
          collaboration. Let's grow digital greatness together.
        </MotionP>
      </MotionDiv>

      <MotionUl className="space-y-4">
        {benefits.map((benefit) => (
          <MotionLi key={benefit} className="flex items-center gap-3">
            <Icon name="CheckCircle" className="w-5 h-5  flex-shrink-0" />
            <span className="text-body text-foreground">{benefit}</span>
          </MotionLi>
        ))}
      </MotionUl>

      <MotionDiv className="bg-gradient-to-r from-sky/5 to-azure/5 dark:from-sky/10 dark:to-azure/10 p-6 rounded-lg ">
        <h3 className="text-subtitle font-subtitle text-foreground mb-3">
          Our Approach
        </h3>

        <p className="text-body  mb-4">
          We focus on truly understanding your business goals. Our process is
          about connecting on a personal level—the same way you'd tend a
          fruitful blueberry orchard. By blending hands-on React expertise with
          meticulous design and back-end precision, we create digital solutions
          that feel naturally right.
        </p>

        <Link
          href="/services"
          variant="standaloneLink"
          className="inline-flex items-center"
        >
          Discover our process
          <Icon
            name="ChevronRight"
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, transform: 'translateY(20px)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-sky/10 dark:bg-azure/10 p-6 rounded-lg border border-sky/20 dark:border-azure/20"
      >
        <p className="text-slate-700 dark:text-slate-200 italic mb-4">
          "SanforDEV turned our digital challenges into a harvest of
          opportunities, merging modern tech with sincere, hands-on care."
        </p>

        <div className="flex items-center gap-2 text-sky dark:text-azure">
          <span className="font-medium">Melissa Brogdan</span>
          <span className="text-slate-400">|</span>
          <span className="text-sm">Co-Owner, Fourth Party</span>
        </div>
      </MotionDiv>
    </div>
  );
}

export function BlogHighlightSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MotionSection
      ref={ref}
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      animate={inView ? { opacity: 1, transform: 'translateY(0px)' } : {}}
      transition={{ duration: 0.6 }}
      className="blog-highlight-section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
        <MotionDiv className="lg:col-span-5 w-full">
          <div className="sticky top-24">
            <MotionDiv className="rounded-xl p-8 bg-card text-card-foreground border border-border">
              <h2 className="text-title font-title text-foreground mb-4">
                Fresh Insights & Stories
              </h2>
              <p className="text-large mb-6">
                Dive into our carefully cultivated collection of articles—where
                we share practical wisdom, emerging trends, and real experiences
                from our journey in modern web development. Like tending to a
                garden, we nurture each article with careful attention and
                genuine care.
              </p>
              <Link
                href="/blog"
                variant="cta"
                size="lg"
                className="inline-flex items-center"
              >
                Explore Our Blog
                <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
              </Link>
            </MotionDiv>
          </div>
        </MotionDiv>

        <MotionDiv className="lg:col-span-7 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MotionDiv
              initial={{ opacity: 0, transform: 'translateY(20px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ProjectCard
                title="Framer Motion Animations"
                description="Learn how we create smooth, performant animations that enhance user experience without compromising load times."
                image="/blog/framer-motion-animations.webp"
                tags={['Performance', 'Animation', 'React']}
                link="/blog/framer-motion-animations"
              />
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, transform: 'translateY(20px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ProjectCard
                title="Tailwind Best Practices"
                description="Discover our approach to building maintainable, scalable CSS with Tailwind in modern React applications."
                image="/blog/tailwind-best-practices.webp"
                tags={['CSS', 'Design', 'Tailwind']}
                link="/blog/tailwind-best-practices"
              />
            </MotionDiv>
          </div>

          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 p-6 bg-gradient-to-r from-sky/5 to-azure/5 dark:from-sky/10 dark:to-azure/10 rounded-lg"
          >
            <h3 className="text-subtitle font-subtitle text-foreground mb-3">
              Why Read Our Blog?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Icon
                  name="CheckCircle"
                  className="w-5 h-5 text-sky dark:text-azure"
                />
                <span>Practical insights from real-world React projects</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon
                  name="CheckCircle"
                  className="w-5 h-5 text-sky dark:text-azure"
                />
                <span>
                  Performance optimization techniques & best practices
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Icon
                  name="CheckCircle"
                  className="w-5 h-5 text-sky dark:text-azure"
                />
                <span>Modern development approaches & emerging trends</span>
              </li>
            </ul>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
