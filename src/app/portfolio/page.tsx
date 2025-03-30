import {
  CaseStudyDareToShare,
  CaseStudyFourthParty,
  CaseStudyGorillaFund,
  CaseStudyRoomInTheInn,
  CaseStudyWeedWarriors,
} from './components'
import { TableOfContents } from './TableOfContents.client'

export default function PortfolioRoute() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 max-w-4xl space-y-8">
          <CaseStudyFourthParty />
          <CaseStudyWeedWarriors />
          <CaseStudyGorillaFund />
          <CaseStudyDareToShare />
          <CaseStudyRoomInTheInn />
        </div>
        <div className="w-64 lg:w-72 flex-shrink-0">
          <TableOfContents className="top-20" />{' '}
          {/* Add top spacing to avoid header overlap */}
        </div>
      </div>
    </div>
  )
}
