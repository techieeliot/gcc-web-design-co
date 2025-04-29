'use client';

import Image from '@/components/image';
import { Link } from '@ui/link';
import { cn } from '@/lib/utils';
import { Icon } from '@ui/icon';
import {
  companyValues,
  facts,
  missionStatement,
  socialLinks,
  volunteerActivities,
} from '@/data';
import LogoEmblem from '@/components/logo-emblem';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DescriptionCard } from '@/components/DescriptionCard';

export const AboutSection = () => {
  return (
    <article
      className={cn(
        'lg:col-span-8 space-y-12',
        'bg-white dark:bg-slate-800 rounded-xl',
        'p-0 sm:p-8 lg:p-10'
      )}
    >
      {/* Hero section with image and icons */}
      <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden">
        <Image
          src={'/images/pic03.webp'}
          alt="Modern development workspace"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 75vw"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center gap-6">
          <div>
            <Icon
              name="Code2"
              className="w-12 h-12 text-white drop-shadow-lg"
              strokeWidth={1.5}
            />
          </div>
          <div>
            <Icon
              name="Brain"
              className="w-12 h-12 text-white drop-shadow-lg"
              strokeWidth={1.5}
            />
          </div>
          <div>
            <Icon
              name="Rocket"
              className="w-12 h-12 text-white drop-shadow-lg"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>

      <div className="mb-10 lg:mb-14">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">📖 Our Story</h3>
        <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
          Since 2018, SANFORDEV has been on a journey of transforming big ideas
          into breakthrough digital solutions. We started out partnering with
          passionate startups and today we collaborate with enterprise
          leaders—all while keeping our innovative spirit alive.
        </p>
      </div>

      <section className="mb-12 lg:mb-16 flex flex-col gap-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>

        {/* Quote Card with Artistic Iconography */}
        <Card
          className="relative bg-gradient-to-r from-sky/5 to-indigo/5 dark:from-sky/10 dark:to-indigo/10 overflow-hidden"
          aria-label={`"${missionStatement.quote}" - ${missionStatement.person}, ${missionStatement.title}`}
        >
          {/* Decorative Quote Marks */}
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-10 pt-8 pl-8">
            <Icon
              name="Quote"
              className="w-32 h-32 text-sky dark:text-indigo"
              strokeWidth={1}
            />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10 pb-8 pr-8">
            <Icon
              name="Quote"
              className="w-32 h-32 text-sky dark:text-indigo rotate-180"
              strokeWidth={1}
            />
          </div>

          {/* Subtle Decorative Icons */}
          <div className="absolute top-1/2 left-2 -translate-y-1/2 opacity-10 pt-16 pl-24">
            <Icon
              name="Rocket"
              className="w-16 h-16 text-indigo dark:text-sky"
              strokeWidth={1}
            />
          </div>
          <div className="absolute top-1/2 right-2 -translate-y-1/2 opacity-10 pb-16 pr-24">
            <Icon
              name="Code2"
              className="w-16 h-16 text-indigo dark:text-sky"
              strokeWidth={1}
            />
          </div>

          {/* Main Quote Content */}
          <CardContent className="relative z-10 text-center">
            <div className="flex justify-center items-start relative mb-6">
              <Icon
                name="Quote"
                className="w-6 h-6 text-sky dark:text-indigo absolute -left-2 top-3 rotate-180 opacity-90 hidden md:inline-block"
                strokeWidth={2}
              />
              <blockquote className="text-2xl md:text-3xl font-semibold text-primary dark:text-white leading-tight px-2 md:px-8 pt-8">
                {missionStatement.quote}
              </blockquote>
              <Icon
                name="Quote"
                className="w-6 h-6 text-sky dark:text-indigo absolute -right-2 bottom-6 transform translate-y-1 opacity-90 hidden md:inline-block"
                strokeWidth={2}
              />
            </div>

            <cite className="block text-sm text-slate-600 dark:text-slate-300 mt-2">
              — {missionStatement.person}, {missionStatement.title}
            </cite>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            // Description cards for each value
            companyValues.map(({ iconName, title, description }) => (
              <DescriptionCard
                key={title}
                iconName={iconName}
                title={title}
                description={description}
              />
            ))
          }
        </div>
      </section>

      {/* Combined Community and Leadership Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card background="off">
          <CardHeader>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🤝 Community Involvement
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
              Beyond client work, we invest in tech education and empower
              communities to rise together:
            </p>

            <ul className="space-y-2 mb-4 text-base leading-relaxed">
              {volunteerActivities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-sky dark:text-indigo">•</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div>
          <Card background="off">
            <CardHeader className="flex flex-col items-center gap-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                👨‍💻 Management
              </h3>
              <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                <Image
                  src="/authors/eliot.webp"
                  alt="Eliot Sanford"
                  fill
                  sizes="(max-width: 768px) 100vw, 
                  (max-width: 1200px) 50vw,
                  33vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-1 text-center sm:text-left">
                  Eliot Sanford
                </h4>
                <p className="text-indigo dark:text-sky font-medium mb-2 text-center sm:text-left">
                  Lead Engineer
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                With over 6 years steering the React ecosystem, I've helped
                guide both startups and enterprise teams focusing on
                performance, accessibility, and scalable solutions. Follow me on
                Twitter at{' '}
                <Link
                  href="https://twitter.com/techieEliot"
                  variant="inlineLink"
                >
                  @techieEliot
                </Link>
                .
              </p>
              {/* Social Links */}
              <CardActions className="flex flex-wrap gap-3 justify-center sm:justify-start mb-4">
                <Link
                  href="https://www.techieeliot.com"
                  className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-sky-100 dark:bg-indigo/10 text-indigo dark:text-sky hover:bg-sky/20 dark:hover:bg-indigo/20 transition-colors"
                  aria-label="Go to Eliot's Website"
                >
                  <Icon name="Globe" className="w-4 h-4" />
                  <span>Website</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/techieeliot"
                  className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-sky-100 dark:bg-indigo/10 text-indigo dark:text-sky hover:bg-sky/20 dark:hover:bg-indigo/20 transition-colors"
                  aria-label="Go to Eliot's LinkedIn profile"
                >
                  <Icon name="Linkedin" className="w-4 h-4" />
                  <span>LinkedIn</span>
                </Link>
                <Link
                  href="https://github.com/techieeliot"
                  className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-sky-100 dark:bg-indigo/10 text-indigo dark:text-sky hover:bg-sky/20 dark:hover:bg-indigo/20 transition-colors"
                  aria-label="Go to Eliot's GitHub profile techie eliot"
                >
                  <Icon name="Github" className="w-4 h-4" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href="mailto:techieEliot@gmail.com"
                  className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-sky-100 dark:bg-indigo/10 text-indigo dark:text-sky hover:bg-sky/20 dark:hover:bg-indigo/20 transition-colors"
                  aria-label="Get in touch with Eliot at techieEliot@gmail.com"
                >
                  <Icon name="Mail" className="w-4 h-4" />
                  <span>Email</span>
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        </div>

        {/* Blueberry Story Section */}
        <section className="col-span-1 md:col-span-2 mt-8">
          <BlueberryStory />
        </section>
      </section>
    </article>
  );
};

export const CompanyFacts = () => {
  return (
    <Card background="mode" className="pb-6">
      <CardHeader>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Company Facts</h3>
      </CardHeader>
      <CardContent>
        <ul className="space-y-5">
          {facts.map(({ label, value, icon }) => (
            <li key={label} className="flex items-start gap-3">
              <Icon
                name={icon || 'Info'} // Fallback to "Info" icon if none specified
                className="w-5 h-5 text-sky dark:text-indigo mt-1 flex-shrink-0"
              />
              <div className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                <strong className="text-primary dark:text-white">
                  {label}:
                </strong>
                <br />
                {value}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export const ConnectWithUs = () => {
  return (
    <Card background="mode" className="border-l-8 border-l-sky">
      <CardHeader>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Connect With Us</h3>
      </CardHeader>
      <CardContent className="space-y-5">
        {socialLinks.map(({ href, label, icon }) => (
          <div key={href} tabIndex={-1}>
            <Link
              href={href}
              className="flex justify-start gap-8 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={`Go to ${label}`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  name={icon}
                  className="w-5 h-5  text-sky dark:text-indigo"
                />
                <span className="text-left">{label}</span>
              </div>
              <div>
                <Icon name="ExternalLinkIcon" className="w-4 h-4" />
              </div>
            </Link>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export function BlueberryStory() {
  return (
    <Card className="bg-gradient-to-r from-sky/5 to-indigo/5 dark:from-sky/10 dark:to-indigo/10 pb-6">
      <CardHeader className="flex flex-col items-center gap-6 pt-6">
        <LogoEmblem size="xl" />
        <CardTitle>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            🌱 The Logo 🫐
          </h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-base leading-relaxed">
          Our logo tells a story of our roots and our mission.
        </p>
        <p>
          The ring surrounding the atom represents a blueberry, a nod to our
          Mississippi heritage and our commitment to growth. Seeing any plant to
          fruit is a labor of love, and we believe that the same care and
          attention should be given to the technology we create. Just as a
          blueberry grows from a seed to a fruit, we nurture our projects from
          concept to completion, ensuring that they are not only functional but
          also remarkable and delightful.
        </p>
        <p>
          Inside the blueberry, there is a React atom, symbolizing our focus on
          React.js web development. The atom represents our core belief in
          building applications that are not only reactive and fast but also
          accessible and user-friendly. The React atom is in the center of the
          blueberry, also known as the calyx, reprsents our core belief in
          React.js web development.
        </p>
        <p>
          We believe in supporting grassroots efforts, and our logo reflects
          that. The blueberry is a symbol of our commitment to nurturing both
          technology and relationships. While we're city folks at heart, our
          family's agrarian roots inspire our grounded approach.
        </p>
        <p className="text-base leading-relaxed italic">
          And fun fact: Eliot's blue compact sedan was affectionately named the
          "Blueberry", too!
        </p>
      </CardContent>
    </Card>
  );
}
