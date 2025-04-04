import { notFound } from 'next/navigation'
import { caseStudies } from '@/data/case-studies'
import {
  CaseStudyDareToShare,
  CaseStudyFourthParty,
  CaseStudyGorillaFund,
  CaseStudyRoomInTheInn,
  CaseStudyWeedWarriors,
} from './components'
import { Metadata } from 'next'
import { CaseStudyNav } from './CaseStudyNav'

const CaseStudyComponents = {
  ['fourth-party']: CaseStudyFourthParty,
  ['weed-warriors']: CaseStudyWeedWarriors,
  ['gorilla-fund']: CaseStudyGorillaFund,
  ['dare-to-share']: CaseStudyDareToShare,
  ['room-in-the-inn-memphis']: CaseStudyRoomInTheInn,
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }))
}

// Generate dynamic metadata based on the case study ID
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const id = resolvedParams.id

  // Find the case study by ID
  const caseStudy = caseStudies.find((study) => study.id === id)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.',
    }
  }

  // Craft a down-to-earth, rooted description that embodies our approach—like a Mississippi blueberry.
  let defaultDescription = `At SanforDEV Consulting, we cultivate strong relationships and bring together exceptional talent to craft solutions as refreshing and grounded as a Mississippi blueberry. We help clients grow—from startups to established brands—by nurturing every detail from design to back-end development. `

  // Append a quirky fun fact depending on the case study
  switch (id) {
    case 'fourth-party':
      defaultDescription += `Fun fact: our mentor once said their partnership was as perfectly paired as a husband and wife startup—with a side of startup incubator magic in Atlanta!`
      break
    case 'weed-warriors':
      defaultDescription += `Fun fact: our friend quipped that after launching his website, he finally had something as legit as his green thumb!`
      break
    case 'gorilla-fund':
      defaultDescription += `Fun fact: during our sprint, we turned blog glitches into giggles while polishing the CMS for a smoother read.`
      break
    case 'dare-to-share':
      defaultDescription += `Fun fact: while enhancing dynamic animations, we joked that our code moved faster than a youth evangelism flash mob!`
      break
    case 'room-in-the-inn-memphis':
      defaultDescription += `Fun fact: collaborating on this project was as smooth as a Memphis jazz night and twice as spirited!`
      break
    default:
      break
  }

  return {
    title: `${caseStudy.title} | Case Study`,
    description: caseStudy.description || defaultDescription,
    alternates: {
      canonical: `/portfolio/${id}`,
    },
    openGraph: {
      title: `${caseStudy.title} | SanforDEV Consulting Case Study`,
      description: caseStudy.description || defaultDescription,
      url: `https://devsouth.us/portfolio/${id}`,
      images: [
        {
          url: caseStudy.image || '/images/portfolio-social.webp',
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} Case Study`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} | SanforDEV Consulting Case Study`,
      description: caseStudy.description || defaultDescription,
      images: [caseStudy.image || '/images/portfolio-social.webp'],
    },
  }
}

export const revalidate = 3600 // Revalidate every hour

export default async function CaseStudyRoute({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params
  const id = resolvedParams.id

  const CaseStudyComponent =
    CaseStudyComponents[id as keyof typeof CaseStudyComponents]

  if (!CaseStudyComponent) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <CaseStudyNav currentId={id} />
        <CaseStudyComponent />
        <CaseStudyNav currentId={id} />
      </div>
    </div>
  )
}
