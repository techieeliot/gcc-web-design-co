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

export const AboutMainContent = () => {
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

      <motion.div variants={fadeIn} className="mb-12 lg:mb-16">
        <motion.h3 variants={fadeIn} className={cn(textStyles.h3, 'mb-4')}>
          Our Story
        </motion.h3>
        <motion.p
          variants={fadeIn}
          className={cn(textStyles.body, 'text-slate-700 dark:text-slate-300')}
        >
          Founded in 2018, devSouth Consulting emerged from a passion for
          transforming innovative ideas into successful digital products. Our
          journey began with a focus on helping pre-revenue startups build
          scalable MVPs, and has since evolved into partnerships with enterprise
          clients while maintaining our commitment to startup innovation. In
          2025, we rebranded from devSouth to Sanford Dev Consulting.
        </motion.p>
      </motion.div>

      <motion.div variants={fadeIn} className="mb-12 lg:mb-16">
        <motion.h3 variants={fadeIn} className={cn(textStyles.h3, 'mb-4')}>
          Our Mission
        </motion.h3>
        <motion.div
          variants={imageVariant}
          className="relative h-48 sm:h-56 md:h-64 mb-6 lg:mb-8 rounded-lg overflow-hidden"
        >
          <Image
            src="/images/pic04.webp"
            alt="Building remarkable applications"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 75vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-azure/40 to-sky/30 dark:from-azure/50 dark:to-sky/40 flex items-center justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-azure/40 to-sky/30 dark:from-azure/50 dark:to-sky/40 flex items-center justify-center gap-6">
                <PaintBucket
                  className="w-10 h-10 text-white drop-shadow-lg"
                  strokeWidth={1.5}
                />
                <Heart
                  className="w-10 h-10 text-white drop-shadow-lg"
                  strokeWidth={1.5}
                />
                <User2
                  className="w-10 h-10 text-white drop-shadow-lg"
                  strokeWidth={1.5}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          variants={fadeIn}
          className={cn(textStyles.body, 'text-slate-700 dark:text-slate-300')}
        >
          Our mission is to build remarkable applications that empower people
          through technology. We are dedicated to creating innovative solutions
          that enhance user experiences and drive business success. Our focus on
          performance, accessibility, and scalability ensures that our products
          meet the needs of our clients and their users.
        </motion.p>

        <motion.blockquote className="text-slate-900 dark:text-white">
          <p className="text-lg font-semibold">
            "Building remarkable applications that empower people through
            technology."
          </p>
          <cite className="text-sm text-slate-600 dark:text-slate-300">
            - Eliot Sanford, Founder & Lead Engineer
          </cite>
        </motion.blockquote>

        <motion.p
          variants={fadeIn}
          className={cn(textStyles.body, 'text-slate-700 dark:text-slate-300')}
        >
          <Quote
            className="w-8 h-8 text-sky dark:text-azure mb-2"
            strokeWidth={1.5}
          />
          <span className="text-slate-900 dark:text-white">
            Our mission is to:
          </span>
          <br />
          <span className="text-slate-900 dark:text-white">
            <strong>Build remarkable applications.</strong>
            <br />
            <strong>Empower people through technology.</strong>
            <br />
            <strong>Foster innovation and growth.</strong>
            <br />
            <strong>Support our community.</strong>
            <br />
          </span>
        </motion.p>
        <motion.p>
          <strong>
            Delight the people who use our applications with a focus on creating
            a remarkable user experience enabling them to achieve their purpose.
          </strong>
        </motion.p>
        <motion.p
          variants={fadeIn}
          className={cn(textStyles.body, 'text-slate-700 dark:text-slate-300')}
        >
          We strive to build applications that are not only functional but also
          aesthetically pleasing and easy to use.
        </motion.p>
        <motion.p
          variants={fadeIn}
          className={cn(textStyles.body, 'text-slate-700 dark:text-slate-300')}
        >
          We believe that technology should enhance the user experience, making
          it more intuitive and enjoyable.
        </motion.p>
        <motion.p
          variants={fadeIn}
          className={cn(textStyles.body, 'text-slate-700 dark:text-slate-300')}
        >
          We are dedicated to continuous learning and innovation, always
          striving to stay ahead of the curve in the ever-evolving tech
          landscape. Our goal is to create a positive impact in the communities
          we serve, fostering growth and development through technology.
        </motion.p>
        <motion.p
          variants={fadeIn}
          className={cn(textStyles.body, 'text-slate-700 dark:text-slate-300')}
        >
          We are committed to building a diverse and inclusive team, where
          everyone feels valued and empowered to contribute their unique
          perspectives. We believe that diversity drives innovation and leads to
          better solutions for our clients.
        </motion.p>
      </motion.div>
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
          className={cn(textStyles.body, 'text-slate-700 dark:text-slate-300')}
        >
          We believe in building not just applications, but partnerships. Our
          approach combines technical expertise with business acumen, ensuring
          that every line of code contributes to your business objectives. We
          emphasize:
        </motion.p>

        <motion.ul
          variants={staggerContainer}
          className={cn('mt-6 space-y-3', textStyles.body)}
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

      <motion.div variants={fadeIn} className="mb-12 lg:mb-16">
        <motion.h3 variants={fadeIn} className={cn(textStyles.h3, 'mb-4')}>
          Community Involvement
        </motion.h3>

        <motion.div
          variants={imageVariant}
          className="relative h-48 sm:h-56 md:h-64 mb-6 lg:mb-8 rounded-lg overflow-hidden"
        >
          <Image
            src="/images/pic01.webp"
            alt="Community and education"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 75vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-azure/40 to-sky/30 dark:from-azure/50 dark:to-sky/40 flex items-center justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring' }}
            >
              <Heart
                className="w-10 h-10 text-white drop-shadow-lg"
                strokeWidth={1.5}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring' }}
            >
              <GraduationCap
                className="w-10 h-10 text-white drop-shadow-lg"
                strokeWidth={1.5}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          variants={fadeIn}
          className={cn(textStyles.body, 'text-slate-700 dark:text-slate-300')}
        >
          Beyond our client work, we're deeply committed to fostering tech
          education and community growth. Our involvement includes:
        </motion.p>

        <motion.ul
          variants={staggerContainer}
          className={cn('mt-6 space-y-3', textStyles.body)}
        >
          {[
            'Founding and organizing freeCodeCamp Jackson, Mississippi',
            'Mentoring at Base Camp Coding Academy',
            'Teaching web development to underrepresented youth',
            'Contributing to open source education (University of Helsinki)',
            'Supporting nonprofits through GiveCamp Memphis',
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

      <motion.div variants={fadeIn} className="mb-8">
        <motion.h3 variants={fadeIn} className={cn(textStyles.h3, 'mb-4')}>
          Leadership
        </motion.h3>

        <motion.div
          variants={fadeIn}
          className="flex flex-col sm:flex-row items-start gap-6"
        >
          <div className="flex-1">
            <motion.div
              variants={fadeIn}
              className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4 rounded-full overflow-hidden"
            >
              <Image
                src="/authors/eliot.webp"
                alt="Eliot Sanford"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </motion.div>
            <motion.h4 variants={fadeIn} className={cn(textStyles.h4, 'mb-2')}>
              Eliot Sanford
            </motion.h4>
            <motion.p
              variants={fadeIn}
              className={cn(
                textStyles.body,
                'mt-2 text-sky dark:text-azure font-medium'
              )}
            >
              Founder & Lead Engineer
            </motion.p>

            <motion.p
              variants={fadeIn}
              className={cn(
                textStyles.body,
                'mt-4 text-slate-700 dark:text-slate-300'
              )}
            >
              With over 6 years of specialized experience in the React
              ecosystem, Eliot has led development initiatives for startups and
              enterprise clients alike. His focus on performance, accessibility,
              and scalable architecture has helped numerous organizations
              achieve their digital transformation goals.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
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
