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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-9 space-y-8">
          <CaseStudyFourthParty />
          <CaseStudyWeedWarriors />
          <CaseStudyGorillaFund />
          <CaseStudyDareToShare />
          <CaseStudyRoomInTheInn />
        </div>

        {/* Table of Contents Column */}
        <div className="lg:col-span-3">
          <TableOfContents className="sticky top-20 bg-white p-6 rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  )
}
