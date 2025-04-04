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
            <strong>Fourth Party</strong> is a mediation platform for a husband
            and wife startup in Atlanta, GA—referred by my mentor. Involved with
            a Google startup incubator for black-owned businesses, they were
            pre-revenue and eager. We helped them land their first clients and
            seamlessly transitioned them to one of our trusted developer
            partners after our MVP and Phase II upgrades. Sometimes, when
            bandwidth is tight, partnering can be the sweetest move.
          </p>
          <p className={cn(textStyles.body, 'mt-2')}>
            Fun fact: They say our advice was as refreshing as a chilled
            blueberry lemonade 🍋.
          </p>
        </div>

        {/* Solution Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>Solution</h3>
          <FeatureGrid features={fourthPartyFeatures} />
        </section>

        {/* Impact Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>Results</h3>
          <StatsGrid stats={fourthPartyStats} />
        </section>

        {/* Client Testimonial */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4')}>Client Testimonial</h3>
          <blockquote
            className={cn(
              'border-l-4 border-sky/50',
              'pl-4 sm:pl-6',
              'py-2 sm:py-4',
              'italic',
              textStyles.body
            )}
          >
            "SanforDEV Consulting helped us secure our first clients and
            streamline our processes. Their down-to-earth approach makes you
            feel like you're working with family."
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
            Explore their platform at{' '}
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
            <strong>Weed Warriors</strong> is a lawn care service that needed a
            digital presence to prove its legitimacy. A personal friend reached
            out for guidance when he didn't have a website and required a
            smoother way to accept payments. We stepped in—especially when a
            form hiccup threatened functionality.
          </p>
          <p className={cn(textStyles.body, 'mt-2')}>
            Fun fact: He joked that having a website made his business as 'real'
            as a lawn on a sunny day 🌞.
          </p>
        </div>

        {/* Challenge Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>Challenge</h3>
          <p className={textStyles.body}>
            Transitioning from no online presence to a full-featured platform
            that handled scheduling, payments, and customer engagement.
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
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>Results</h3>
          <StatsGrid stats={weedWarriorsStats} />
        </section>

        {/* Technologies Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Technologies Used
          </h3>
          <p className={textStyles.body}>
            Built with vanilla JavaScript, featuring Content Management System
            and Stripe integrations, plus automated notifications.
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

        {/* Client Testimonial */}
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
            "SanforDEV Consulting turned our vision into a practical reality.
            The new website boosted our credibility and streamlined our
            operations."
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
            Learn more about their services at{' '}
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
            SanforDEV Consulting partnered with Soulheart to enhance the Gorilla
            Fund's blog. We polished the CMS, fixed cosmetic glitches, and
            improved searchability—making their content as easy to find as a
            ripe blueberry in a field.
          </p>
          <p className={cn(textStyles.body, 'mt-2')}>
            Fun fact: We even joked that our fixes were as smooth as a gorilla's
            getaway!
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
              <span>Implemented CMS best practices</span>
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
              <span>Enhanced content searchability</span>
            </li>
          </ul>
        </section>

        {/* Visit Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>
            Visit Gorilla Fund
          </h3>
          <p className={textStyles.body}>
            Explore the mission at{' '}
            <Link href="https://gorillafund.org" variant="inlineLink">
              gorillafund.org
            </Link>{' '}
            <span className={textStyles['body-small']}>
              (with technical consulting by SanforDEV)
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
            <strong>Dare to Share</strong> is a faith-based initiative focused
            on youth evangelism. When Soulheart encountered a critical developer
            transition, we stepped in to deliver emergency support—enhancing
            animations and dynamic page movements using the best CMS tools
            available. We made sure the JavaScript-only areas were as friendly
            as possible for non-technical staff.
          </p>
          <p className={cn(textStyles.body, 'mt-2')}>
            Fun fact: We quipped that our solution moved faster than a Sunday
            morning prayer chain 🙏.
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
            Discover more at{' '}
            <Link href="https://www.dare2share.org" variant="inlineLink">
              dare2share.org
            </Link>{' '}
            <span className={textStyles['body-small']}>
              (with emergency support by SanforDEV)
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
            Room in the Inn Memphis is a nonprofit dedicated to providing
            shelter and support. In partnership with Danny Thompson and a
            dynamic enterprise team, we reimagined their website to better serve
            the community. Our approach is as down-to-earth as our signature
            blueberry logo—rooted in local values and relationships.
          </p>
          <p className={cn(textStyles.body, 'mt-2')}>
            Fun fact: We joked that our redesign was so refreshing, even the
            ghosts of old inn rooms cracked a smile 👻.
          </p>
        </div>

        {/* Weekend Sprint Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>Weekend Sprint</h3>
          <FeatureGrid features={roomInTheInnFeatures} />
        </section>

        {/* Project Impact Section */}
        <section>
          <h3 className={cn(textStyles.h3, 'mb-4 sm:mb-6')}>Project Results</h3>
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
              <span>CMS migration and content reorganization</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>Interactive JavaScript feature enhancements</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>Responsive design implementation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className={componentStyles.icon.primary} />
              <span>Optimized content structure</span>
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
