"use client";

import { motion } from "@/lib/animations";

import Image from "next/image";
import { Link } from "@/components/ui/link";
import { benefits, features } from "@/data";
import { Icon } from "@/components/ui/icon";

export function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-background pt-6 lg:pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10  font-medium rounded-full mb-4"
          >
            <Icon name="Code" className="w-4 h-4" />
            <span className="text-small">React & Next.js Specialists</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-display font-display text-foreground max-w-lg mb-6"
          >
            Digital Solutions You Can Grow With
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-large  max-w-lg mb-8"
          >
            At SanforDEV, we view tech solutions like we're carefully and
            methodically nurturing and cultivating a blueberry patch 🫐.
            Blending modern React expertise with a down-to-earth,
            relationship-focused approach.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2"
        >
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/20" />
            <Image
              src="/blueberry-atom.svg"
              alt="Web development illustration"
              fill
              className="object-contain object-center transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <motion.section
      className="w-full py-16 lg:py-24 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="w-full">
        <motion.div className="text-center mb-12">
          <h2 className="text-title font-title text-foreground mb-4">
            Cultivated Digital Solutions
          </h2>
          <p className="text-large  max-w-3xl mx-auto">
            We nurture each project with the dedicated care of a blueberry
            orchard—melding React expertise with creativity and a genuine
            commitment to our partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export function ShowcaseSection() {
  return (
    <motion.section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
        <motion.div className="lg:col-span-5 lg:order-2 w-full">
          <div className="rounded-xl bg-card text-card-foreground border border-border sticky top-24 w-full">
            <ProjectShowcase />
          </div>
        </motion.div>

        <motion.div className="lg:col-span-7 lg:order-1 w-full">
          <ValueProposition />
        </motion.div>
      </div>
    </motion.section>
  );
}

export function CallToActionSection() {
  return (
    <motion.section>
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
    </motion.section>
  );
}

export function ProjectShowcase() {
  return (
    <motion.div className="rounded-xl p-8 shadow-lg backdrop-blur-md bg-card text-card-foreground">
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
          tags={["React", "Modern UI", "CRM"]}
          link="/portfolio/fourth-party"
        />

        <ProjectCard
          title="Room in the Inn Memphis"
          description="A complete redesign crafted to uplift community impact through empathy and user-first design."
          image="/images/pic02.webp"
          tags={["CMS", "JavaScript"]}
          link="/portfolio/room-in-the-inn-memphis"
        />
      </div>
    </motion.div>
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
    <motion.div className="rounded-lg overflow-hidden border border-border bg-card">
      <div className="relative h-36">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
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
    </motion.div>
  );
};

export function ValueProposition() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 className="text-title font-title text-foreground mb-4">
          Why SanforDEV Consulting?
        </motion.h2>

        <motion.p className="text-large mb-8">
          Imagine the care and commitment of a blueberry farm—each berry
          nurtured with patience, passion, and precision. At SanforDEV, we
          channel that spirit into our digital work. We blend modern React
          innovation with an unwavering commitment to genuine collaboration.
          Every solution is a carefully cultivated partnership between our
          talented team, strong leadership, and trusted design and back-end
          experts. Let's harvest some digital greatness together 🫐.
        </motion.p>
      </motion.div>

      <motion.ul className="space-y-4">
        {benefits.map((benefit, index) => (
          <motion.li key={benefit} className="flex items-center gap-3">
            <Icon name="CheckCircle" className="w-5 h-5  flex-shrink-0" />
            <span className="text-body text-foreground">{benefit}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div className="bg-gradient-to-r from-sky/5 to-azure/5 dark:from-sky/10 dark:to-azure/10 p-6 rounded-lg ">
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
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
      </motion.div>
    </div>
  );
}
