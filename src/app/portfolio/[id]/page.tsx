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

export function generateMetadata({
  params,
}: {
  params: { id: string }
}): Metadata {
  const caseStudy = caseStudies.find((study) => study.id === params.id)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Sanford Dev Consulting',
      description: 'The requested case study could not be found.',
    }
  }

  return {
    title: `${caseStudy.title} | Sanford Dev Consulting`,
    description: caseStudy.description,
    openGraph: {
      title: `${caseStudy.title} | Sanford Dev Consulting`,
      description: caseStudy.description,
      images: [
        {
          url: caseStudy.image,
          width: 1200,
          height: 630,
          alt: caseStudy.imageAlt,
        },
      ],
    },
  }
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const CaseStudyComponent =
    CaseStudyComponents[params.id as keyof typeof CaseStudyComponents]

  if (!CaseStudyComponent) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <CaseStudyNav currentId={params.id} />
        <CaseStudyComponent />
      </div>
    </div>
  )
}
