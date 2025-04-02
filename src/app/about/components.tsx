'use client'

import { componentStyles } from '@/lib/component-styles'
import { textStyles } from '@/lib/text-styles'
import { cn } from '@/lib/utils'
import { Link } from 'components/ui/link'
import {
  ExternalLinkIcon,
  Rocket,
  Code2,
  Users,
  Brain,
  Laptop,
  Heart,
  GraduationCap,
  Github,
  LinkedinIcon,
  PaintBucket,
  User2,
  Quote,
  Workflow,
  Plus,
  View,
  VenetianMaskIcon,
  Goal,
  Hammer,
  Pin,
  Smile,
  ArrowsUpFromLine,
  Globe,
  Mail,
} from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
}

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
}
export const AboutSection = () => {
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={cn(
        componentStyles.card,
        'prose lg:prose-lg max-w-none',
        'p-6 sm:p-8 lg:p-10'
      )}
    >
      {/* Hero section with image and icons */}
      <motion.div
        variants={imageVariant}
        className="relative h-64 sm:h-72 md:h-80 lg:h-96 mb-8 lg:mb-12 rounded-lg overflow-hidden"
      >
        <Image
          src="/images/pic03.webp"
          alt="Modern development workspace"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 75vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-azure/40 to-sky/30 dark:from-azure/50 dark:to-sky/40 flex items-center justify-center gap-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring' }}
          >
            <Code2
              className="w-12 h-12 text-white drop-shadow-lg"
              strokeWidth={1.5}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: 'spring' }}
          >
            <Brain
              className="w-12 h-12 text-white drop-shadow-lg"
              strokeWidth={1.5}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring' }}
          >
            <Rocket
              className="w-12 h-12 text-white drop-shadow-lg"
              strokeWidth={1.5}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.h2
        variants={fadeIn}
        className={cn(textStyles.h2, 'mb-6 lg:mb-8')}
      >
        About devSouth
      </motion.h2>

      {/* Our Story - More concise */}
      <motion.div variants={fadeIn} className="mb-10 lg:mb-14">
        <motion.h3 variants={fadeIn} className={cn(textStyles.h3, 'mb-4')}>
          Our Story
        </motion.h3>
        <motion.p
          variants={fadeIn}
          className={cn(textStyles.body, 'text-slate-700 dark:text-slate-300')}
        >
          Founded in 2018, Sanford Dev Consulting (formerly devSouth) emerged
          from a passion for transforming innovative ideas into digital
          products. We began by helping startups build scalable MVPs and have
          since expanded to enterprise partnerships while maintaining our
          commitment to startup innovation.
        </motion.p>
      </motion.div>

      {/* Mission Statement - Redesigned to stand out */}
      <motion.div variants={fadeIn} className="mb-12 lg:mb-16">
        <motion.h3 variants={fadeIn} className={cn(textStyles.h3, 'mb-4')}>
          Our Mission
        </motion.h3>

        {/* Quote Card with Artistic Iconography */}
        <motion.div
          variants={imageVariant}
          className="relative bg-gradient-to-r from-sky/5 to-azure/5 dark:from-sky/10 dark:to-azure/10 rounded-lg p-8 mb-8 overflow-hidden"
        >
          {/* Decorative Quote Marks */}
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-10">
            <Quote
              className="w-32 h-32 text-sky dark:text-azure"
              strokeWidth={1}
            />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10">
            <Quote
              className="w-32 h-32 text-sky dark:text-azure rotate-180"
              strokeWidth={1}
            />
          </div>

          {/* Subtle Decorative Icons */}
          <div className="absolute top-1/2 left-2 -translate-y-1/2 opacity-10">
            <Rocket
              className="w-16 h-16 text-azure dark:text-sky"
              strokeWidth={1}
            />
          </div>
          <div className="absolute top-1/2 right-2 -translate-y-1/2 opacity-10">
            <Code2
              className="w-16 h-16 text-azure dark:text-sky"
              strokeWidth={1}
            />
          </div>

          {/* Main Quote Content */}
          <div className="relative z-10 text-center">
            {/* Removed the large centered quote icon */}
            <motion.div className="flex justify-center items-start relative mb-6">
              <Quote
                className="w-6 h-6 text-sky dark:text-azure absolute -left-2 -top-3 rotate-180 opacity-90"
                strokeWidth={2}
              />
              <motion.p
                className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white leading-tight px-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Building remarkable applications that empower people through
                technology
                <Quote
                  className="w-6 h-6 text-sky dark:text-azure inline-block ml-6 transform translate-y-1 opacity-90"
                  strokeWidth={2}
                />
              </motion.p>
            </motion.div>

            <cite className="block text-sm text-slate-600 dark:text-slate-300 mt-2">
              — Eliot Sanford, Founder & Lead Engineer
            </cite>
          </div>
        </motion.div>

        {/* Mission Points - More structured and concise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            variants={fadeIn}
            className="bg-white dark:bg-slate-800/50 p-5 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <Hammer
                className="w-6 h-6 text-sky dark:text-azure flex-shrink-0"
                strokeWidth={1.5}
              />
              <h4 className="font-semibold text-slate-900 dark:text-white">
                Build
              </h4>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Create remarkable applications that prioritize performance,
              accessibility, and user experience.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-white dark:bg-slate-800/50 p-5 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <Users
                className="w-6 h-6 text-sky dark:text-azure flex-shrink-0"
                strokeWidth={1.5}
              />
              <h4 className="font-semibold text-slate-900 dark:text-white">
                Empower
              </h4>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Enable people to achieve more through intuitive, powerful
              technology solutions.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-white dark:bg-slate-800/50 p-5 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <Goal
                className="w-6 h-6 text-sky dark:text-azure flex-shrink-0"
                strokeWidth={1.5}
              />
              <h4 className="font-semibold text-slate-900 dark:text-white">
                Innovate
              </h4>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Foster continuous innovation and learning to stay ahead in the
              evolving tech landscape.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-white dark:bg-slate-800/50 p-5 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <Heart
                className="w-6 h-6 text-sky dark:text-azure flex-shrink-0"
                strokeWidth={1.5}
              />
              <h4 className="font-semibold text-slate-900 dark:text-white">
                Support
              </h4>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Contribute to our community and build a diverse, inclusive team
              dedicated to positive impact.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Our Approach - Streamlined */}
      <motion.div variants={fadeIn} className="mb-12 lg:mb-16">
        <motion.h3 variants={fadeIn} className={cn(textStyles.h3, 'mb-4')}>
          Our Approach
        </motion.h3>

        <motion.div
          variants={imageVariant}
          className="relative h-48 sm:h-56 md:h-64 mb-6 lg:mb-8 rounded-lg overflow-hidden"
        >
          <Image
            src="/images/pic02.webp"
            alt="Collaborative development"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 75vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-azure/40 to-sky/30 dark:from-azure/50 dark:to-sky/40 flex items-center justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring' }}
            >
              <Laptop
                className="w-10 h-10 text-white drop-shadow-lg"
                strokeWidth={1.5}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring' }}
            >
              <Users
                className="w-10 h-10 text-white drop-shadow-lg"
                strokeWidth={1.5}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          variants={fadeIn}
          className={cn(
            textStyles.body,
            'text-slate-700 dark:text-slate-300 mb-4'
          )}
        >
          We build partnerships, not just applications. Our approach combines
          technical expertise with business acumen to ensure every line of code
          contributes to your objectives:
        </motion.p>

        <motion.ul
          variants={staggerContainer}
          className={cn('space-y-2', textStyles.body)}
        >
          {[
            'Performance-first development methodology',
            'Accessibility as a core requirement',
            'Scalable, maintainable architecture',
            'Data-driven decision making',
            'Continuous innovation and learning',
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={listItem}
              className="flex items-start gap-3"
            >
              <span className="text-sky dark:text-azure">•</span>
              <span className="text-slate-700 dark:text-slate-300">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Combined Community and Leadership Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Community Section */}
        <motion.div variants={fadeIn}>
          <motion.h3 variants={fadeIn} className={cn(textStyles.h3, 'mb-4')}>
            Community Involvement
          </motion.h3>

          <motion.p
            variants={fadeIn}
            className={cn(
              textStyles.body,
              'text-slate-700 dark:text-slate-300 mb-4'
            )}
          >
            Beyond client work, we foster tech education and community growth:
          </motion.p>

          <motion.ul
            variants={staggerContainer}
            className={cn('space-y-2 mb-4', textStyles.body)}
          >
            {[
              'Founding freeCodeCamp Jackson, MS',
              'Mentoring at Base Camp Coding Academy',
              'Teaching web development to underrepresented youth',
              'Contributing to open source education',
              'Supporting nonprofits through GiveCamp',
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={listItem}
                className="flex items-start gap-3"
              >
                <span className="text-sky dark:text-azure">•</span>
                <span className="text-slate-700 dark:text-slate-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Leadership Section */}
        <motion.div variants={fadeIn}>
          <motion.h3 variants={fadeIn} className={cn(textStyles.h3, 'mb-4')}>
            Leadership
          </motion.h3>

          <motion.div
            variants={fadeIn}
            className="bg-white/50 dark:bg-slate-800/30 rounded-xl p-6 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row gap-6 mb-4">
              <motion.div
                variants={fadeIn}
                className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:mx-0"
              >
                <Image
                  src="/authors/eliot.webp"
                  alt="Eliot Sanford"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div>
                <motion.h4
                  variants={fadeIn}
                  className={cn(textStyles.h4, 'mb-1 text-center sm:text-left')}
                >
                  Eliot Sanford
                </motion.h4>
                <motion.p
                  variants={fadeIn}
                  className={cn(
                    'text-sky dark:text-azure font-medium mb-2 text-center sm:text-left'
                  )}
                >
                  Founder & Lead Engineer
                </motion.p>
                <motion.p
                  variants={fadeIn}
                  className="text-sm text-slate-700 dark:text-slate-300 mb-4"
                >
                  With 6+ years of React ecosystem experience, Eliot has led
                  development for startups and enterprise clients, focusing on
                  performance, accessibility, and scalable architecture.
                </motion.p>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-4">
                  <Link
                    href="https://www.techieeliot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-sky/10 dark:bg-azure/10 text-sky dark:text-azure hover:bg-sky/20 dark:hover:bg-azure/20 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Website</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/techieeliot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-sky/10 dark:bg-azure/10 text-sky dark:text-azure hover:bg-sky/20 dark:hover:bg-azure/20 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </Link>
                  <Link
                    href="https://github.com/techieeliot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-sky/10 dark:bg-azure/10 text-sky dark:text-azure hover:bg-sky/20 dark:hover:bg-azure/20 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href="mailto:techieEliot@gmail.com"
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-sky/10 dark:bg-azure/10 text-sky dark:text-azure hover:bg-sky/20 dark:hover:bg-azure/20 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.article>
  )
}

export const CompanyFacts = () => {
  const facts = [
    { label: 'Founded', value: 'December 2018', icon: Rocket },
    {
      label: 'Location',
      value: 'Clinton, Mississippi (Remote-first)',
      icon: Laptop,
    },
    { label: 'Focus', value: 'React Ecosystem Development', icon: Code2 },
    { label: 'Clients Served', value: 'Startups to Enterprise', icon: Users },
  ]

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={cn(componentStyles.container, 'p-6 sm:p-8', 'rounded-xl')}
    >
      <motion.h3 variants={fadeIn} className={cn(textStyles.h3, 'mb-6')}>
        Company Facts
      </motion.h3>

      <motion.ul variants={staggerContainer} className="space-y-5">
        {facts.map(({ label, value, icon: Icon }) => (
          <motion.li
            key={label}
            variants={listItem}
            whileHover={{ x: 5 }}
            className="flex items-start gap-3"
          >
            <Icon className="w-5 h-5 text-sky dark:text-azure mt-1 flex-shrink-0" />
            <div
              className={cn(
                textStyles.body,
                'text-slate-700 dark:text-slate-300'
              )}
            >
              <strong className="text-slate-900 dark:text-white">
                {label}:
              </strong>
              <br />
              {value}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  )
}

export const ConnectWithUs = () => {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/company/devsouth-consulting-llc/',
      label: 'LinkedIn',
      icon: LinkedinIcon,
    },
    {
      href: 'https://github.com/techieeliot/gcc-web-design-co',
      label: 'GitHub',
      icon: Github,
    },
  ]

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={cn(componentStyles.container, 'p-6 sm:p-8', 'rounded-xl')}
    >
      <motion.h3 variants={fadeIn} className={cn(textStyles.h3, 'mb-6')}>
        Connect With Us
      </motion.h3>

      <motion.div variants={staggerContainer} className="space-y-5">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <motion.div
            key={href}
            variants={listItem}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            tabIndex={-1}
          >
            <Link
              href={href}
              className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Icon className="w-5 h-5 flex-shrink-0 text-sky dark:text-azure" />
              <span className="flex-grow text-left">{label}</span>
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <ExternalLinkIcon className="w-4 h-4 flex-shrink-0" />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
