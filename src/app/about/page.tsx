import { AboutMainContent, CompanyFacts, ConnectWithUs } from './components'

export default function AboutRoute() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <AboutMainContent />
        </div>

        <div className="lg:col-span-4">
          <div className="space-y-8">
            <CompanyFacts />
            <ConnectWithUs />
          </div>
        </div>
      </div>
    </div>
  )
}
