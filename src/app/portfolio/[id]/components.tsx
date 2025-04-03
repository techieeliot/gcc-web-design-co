import {
  Users,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Youtube,
  Scale,
  Code2,
  PenTool,
  GitBranch,
  Code,
  LifeBuoy,
  Heart,
  Database,
} from 'lucide-react'
import { componentStyles } from '@/lib/component-styles'
import { textStyles } from '@/lib/text-styles'
import { cn } from '@/lib/utils'
import { FeatureGrid, StatsGrid } from '@/app/portfolio/[id]/CaseStudySections'
import { CaseStudyLayout } from '@/app/portfolio/[id]/CaseStudyLayout'
import {
  dareToShareFeatures,
  dareToShareStats,
  fourthPartyFeatures,
  fourthPartyStats,
  gorillaFundFeatures,
  gorillaFundStats,
  roomInTheInnFeatures,
  roomInTheInnStats,
  weedWarriorsFeatures,
  weedWarriorsStats,
} from '@/data/case-studies'
import { Link } from '@/components/ui/link'

export const CaseStudyFourthParty = () => {
  const icons = [
    <Scale
      key="scale"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
    <Users
      key="users"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
    <MessageSquare
      key="message"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
  ]

  return (
    <CaseStudyLayout
      title="Case Study: Fourth Party"
      image="/images/pic03.webp"
      imageAlt="Modern mediation platform"
      icons={icons}
    >
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Introduction */}
        <div>
          <p className={textStyles.body}>
            <strong>Fourth Party</strong> is a web-based platform designed to
            streamline the mediation process. SanforDEV Consulting collaborated
            with FourthParty to build a user-friendly, responsive web
            application to enhance mediation practices, focusing on automation
            and efficiency.
          </p>
        </div>

        {/* Solution Section */}
        <section>
          <h3
            className={cn(
              textStyles.h3,
              'mb-4 sm:mb-6' // Enhanced heading spacing
            )}
          >
            Solution
          </h3>
          <FeatureGrid features={fourthPartyFeatures} />
        </section>

        {/* Impact Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>Impact</h3>
          <StatsGrid stats={fourthPartyStats} />
        </section>

        {/* Client Testimonial */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4')}>Client Testimonial</h3>
          <blockquote
            className={cn(
              'border-l-4 border-sky/50',
              'pl-4 sm:pl-6', // Enhanced quote padding
              'py-2 sm:py-4', // Added vertical padding
              'italic',
              textStyles.body
            )}
          >
            "SanforDEV Consulting helped us create a platform that truly serves
            our mission of simplifying mediation. Their team was responsive,
            knowledgeable, and efficient. The app is now a core part of our
            practice, and we've seen an increase in both client satisfaction and
            internal efficiency."
            <footer
              className={cn(
                textStyles['body-small'],
                'mt-2 font-normal not-italic'
              )}
            >
              - CEO, Fourth Party
            </footer>
          </blockquote>
        </section>
        {/* Visit Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Visit Fourth Party
          </h3>
          <p className={textStyles.body}>
            Explore Fourth Party's platform at{' '}
            <Link href="https://fourthparty.app" variant="inlineLink">
              fourthparty.app
            </Link>
          </p>
        </section>
      </div>
    </CaseStudyLayout>
  )
}

export const CaseStudyWeedWarriors = () => {
  const icons = [
    <Calendar
      key="calendar"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
    <Users
      key="users"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
    <Youtube
      key="youtube"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
  ]

  return (
    <CaseStudyLayout
      id="weed-warriors"
      title="Case Study: Weed Warriors"
      image="/images/pic04.webp"
      imageAlt="Lawn care service platform"
      icons={icons}
    >
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Introduction */}
        <div>
          <p className={textStyles.body}>
            <strong>Weed Warriors</strong> is a leading lawn care service
            provider looking to modernize their business operations. SanforDEV
            Consulting developed a comprehensive digital solution to streamline
            their scheduling, payment processing, and customer communication
            systems.
          </p>
        </div>

        {/* Challenge Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>Challenge</h3>
          <p className={textStyles.body}>
            Weed Warriors needed to transition from manual scheduling and
            paper-based systems to a modern digital platform. They required a
            solution that could handle automated scheduling, online payments,
            and maintain strong customer relationships through integrated
            communication tools.
          </p>
        </section>

        {/* Features Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Key Features Delivered
          </h3>
          <FeatureGrid features={weedWarriorsFeatures} />
        </section>

        {/* Impact Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>Impact</h3>
          <StatsGrid stats={weedWarriorsStats} />
        </section>

        {/* Technologies Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Technologies Used
          </h3>
          <p className={textStyles.body}>
            Built with Next.js and React for optimal performance, the platform
            leverages:
          </p>
          <ul className={cn('mt-4 space-y-2', textStyles.body)}>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>Stripe integration for secure payments</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>YouTube API for content management</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>Automated email notifications</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>Mobile-responsive design</span>
            </li>
          </ul>
        </section>

        {/* Testimonial Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Client Testimonial
          </h3>
          <blockquote
            className={cn(
              'border-l-4 border-sky/50',
              'pl-4 sm:pl-6',
              'py-2 sm:py-4',
              'italic',
              textStyles.body
            )}
          >
            "SanforDEV Consulting transformed our business operations with their
            digital solution. The automated scheduling and payment systems have
            saved us countless hours, allowing us to focus on what we do best -
            keeping our customers' lawns beautiful."
            <footer
              className={cn(
                textStyles['body-small'],
                'mt-2 font-normal not-italic'
              )}
            >
              - Jay Grisham, Owner, Weed Warriors
            </footer>
          </blockquote>
        </section>

        {/* Visit Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Visit Weed Warriors
          </h3>
          <p className={textStyles.body}>
            Learn more about Weed Warriors' services at{' '}
            <Link href="https://weedwarriorsjackson.com/" variant="inlineLink">
              weedwarriorsjackson.com
            </Link>
          </p>
        </section>
      </div>
    </CaseStudyLayout>
  )
}

export const CaseStudyGorillaFund = () => {
  const icons = [
    <Code2
      key="code"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
    <PenTool
      key="design"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
    <Sparkles
      key="features"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
  ]

  return (
    <CaseStudyLayout
      id="gorilla-fund"
      title="Technical Consulting: Dian Fossey Gorilla Fund"
      image="/images/pic01.webp"
      imageAlt="Gorilla conservation website"
      icons={icons}
    >
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Introduction */}
        <div>
          <p className={textStyles.body}>
            SanforDEV Consulting provided technical expertise to Soulheart
            during the development of the Dian Fossey Gorilla Fund website,
            focusing on content management optimization, responsive styling, and
            interactive feature implementation.
          </p>
        </div>

        {/* Features Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Key Features Delivered
          </h3>
          <FeatureGrid features={gorillaFundFeatures} />
        </section>

        {/* Impact Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Collaborative Impact
          </h3>
          <StatsGrid stats={gorillaFundStats} />
        </section>

        {/* Technical Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Technical Contributions
          </h3>
          <ul className={cn('mt-4 space-y-2', textStyles.body)}>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>Implemented CMS best practices and workflows</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>Optimized responsive design patterns</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>Developed interactive UI components</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>Created comprehensive technical documentation</span>
            </li>
          </ul>
        </section>

        {/* Visit Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Visit Gorilla Fund
          </h3>
          <p className={textStyles.body}>
            Explore the Dian Fossey Gorilla Fund's mission at{' '}
            <Link href="https://gorillafund.org" variant="inlineLink">
              gorillafund.org
            </Link>{' '}
            <span className={textStyles['body-small']}>
              (Website developed by Soulheart with technical consulting by
              SanforDEV)
            </span>
          </p>
        </section>
      </div>
    </CaseStudyLayout>
  )
}

export const CaseStudyDareToShare = () => {
  const icons = [
    <GitBranch
      key="git"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
    <LifeBuoy
      key="support"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
    <Code
      key="code"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
  ]

  return (
    <CaseStudyLayout
      id="dare-to-share"
      title="Emergency Technical Support: Dare to Share"
      image="/images/pic05.webp"
      imageAlt="Emergency technical consulting"
      icons={icons}
    >
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Introduction */}
        <div>
          <p className={textStyles.body}>
            When Soulheart faced an unexpected developer transition, SanforDEV
            Consulting stepped in to provide emergency technical support,
            implementing Git best practices and resolving critical front-end
            issues for the Dare to Share platform.
          </p>
        </div>

        {/* Emergency Solutions Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Emergency Solutions
          </h3>
          <FeatureGrid features={dareToShareFeatures} />
        </section>

        {/* Response Metrics Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Response Metrics
          </h3>
          <StatsGrid stats={dareToShareStats} />
        </section>

        {/* Visit Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Visit Dare to Share
          </h3>
          <p className={textStyles.body}>
            Explore Dare to Share's mission at{' '}
            <Link href="https://www.dare2share.org" variant="inlineLink">
              dare2share.org
            </Link>{' '}
            <span className={textStyles['body-small']}>
              (Website by Soulheart with emergency technical support by
              SanforDEV)
            </span>
          </p>
        </section>
      </div>
    </CaseStudyLayout>
  )
}

export const CaseStudyRoomInTheInn = () => {
  const icons = [
    <Heart
      key="heart"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
    <Users
      key="users"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
    <Database
      key="database"
      className={componentStyles.icon.large}
      strokeWidth={1.5}
    />,
  ]

  return (
    <CaseStudyLayout
      id="room-in-the-inn-memphis"
      title="Nonprofit Impact: Room in the Inn Memphis"
      image="/images/pic06.webp"
      imageAlt="Room in the Inn Memphis website"
      icons={icons}
    >
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Introduction */}
        <div>
          <p className={textStyles.body}>
            As part of GiveCamp Memphis, SanforDEV contributed to a complete
            website redesign for Room in the Inn Memphis, a nonprofit
            organization providing shelter and support for individuals
            experiencing homelessness.
          </p>
        </div>

        {/* Weekend Sprint Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>Weekend Sprint</h3>
          <FeatureGrid features={roomInTheInnFeatures} />
        </section>

        {/* Project Impact Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>Project Impact</h3>
          <StatsGrid stats={roomInTheInnStats} />
        </section>

        {/* Key Contributions Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Key Contributions
          </h3>
          <ul className={cn('mt-4 space-y-2', textStyles.body)}>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>Content management system migration</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>Interactive JavaScript feature development</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>Responsive design implementation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>Content organization and structure</span>
            </li>
          </ul>
        </section>

        {/* Support Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Support Room in the Inn Memphis
          </h3>
          <p className={textStyles.body}>
            Visit{' '}
            <Link href="https://ritimemphis.org" variant="inlineLink">
              ritimemphis.org
            </Link>{' '}
            to learn more about their mission and how you can help provide
            shelter for those experiencing homelessness.
          </p>
        </section>
      </div>
    </CaseStudyLayout>
  )
}
