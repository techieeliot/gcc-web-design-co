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
  // Await params before using
  const resolvedParams = await params
  const id = resolvedParams.id

  // Find the case study by ID
  const caseStudy = caseStudies.find((study) => study.id === id)

  // Fallback metadata if case study not found
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.',
    }
  }

  return {
    title: `${caseStudy.title} | Case Study`,
    description:
      caseStudy.description ||
      `Learn how we helped ${caseStudy.title} with React ecosystem development, performance optimization, and modern UI implementation.`,
    alternates: {
      canonical: `/portfolio/${id}`,
    },
    openGraph: {
      title: `${caseStudy.title} | SanforDEV Consulting Case Study`,
      description:
        caseStudy.description ||
        `Learn how we helped ${caseStudy.title} with React ecosystem development.`,
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
      description:
        caseStudy.description ||
        `Learn how we helped ${caseStudy.title} with React ecosystem development.`,
      images: [caseStudy.image || '/images/portfolio-social.webp'],
    },
  }
}

export default async function CaseStudyRoute({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // Await params before using
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
